const https = require('https');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyAY-zxxap6z1ZKV7MZLFfvudYPz1ONagsg'; // Set GOOGLE_PLACES_API_KEY env var
const SUPABASE_URL = 'https://vylxyumwdrogzzioxbaj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bHh5dW13ZHJvZ3p6aW94YmFqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcxOTcyOCwiZXhwIjoyMDkwMjk1NzI4fQ.l4xzoqTpMx2VYvuv_l4hHuBOau-K7-keNmBnz74KuZA';

const SEARCH_QUERIES = [
  'bjj academy Los Angeles', 'bjj academy New York', 'bjj academy Miami',
  'bjj academy Houston', 'bjj academy Chicago', 'bjj academy Phoenix',
  'bjj academy Dallas', 'bjj academy Seattle', 'bjj academy Denver',
  'bjj academy Austin', 'bjj academy San Diego', 'bjj academy San Francisco',
  'bjj academy Boston', 'bjj academy Atlanta', 'bjj academy Las Vegas',
  'bjj academy Portland', 'bjj academy Nashville', 'bjj academy Orlando',
  'bjj academy Minneapolis', 'bjj academy Philadelphia',
  'jiu jitsu academy Los Angeles', 'jiu jitsu academy New York',
  'jiu jitsu academy Miami', 'jiu jitsu academy Houston',
  'jiu jitsu academy Chicago', 'jiu jitsu academy San Diego',
  'bjj academy London', 'bjj academy Sydney', 'bjj academy Melbourne',
  'bjj academy Toronto', 'bjj academy Vancouver', 'bjj academy Dubai',
  'bjj academy Singapore', 'bjj academy Tokyo', 'bjj academy Bangkok',
  'bjj academy Paris', 'bjj academy Berlin', 'bjj academy Amsterdam',
  'bjj academy Madrid', 'bjj academy Barcelona', 'bjj academy Rome',
  'bjj academy Sao Paulo', 'bjj academy Rio de Janeiro', 'bjj academy Buenos Aires',
  'bjj academy Mexico City', 'bjj academy Bogota', 'bjj academy Lima',
  'bjj academy Seoul', 'bjj academy Hong Kong', 'bjj academy Mumbai',
  'bjj academy Lagos', 'bjj academy Cape Town', 'bjj academy Nairobi',
  'brazilian jiu jitsu academy', 'jiu jitsu gym', 'bjj gym',
  'gracie jiu jitsu academy', 'bjj dojo', 'jiu jitsu school',
];

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function upsertAcademy(academy) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/Academy`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify([academy]),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`  Supabase error ${res.status}: ${text.substring(0, 200)}`);
  }
  return res.ok;
}

async function processResults(results) {
  let saved = 0;
  for (const place of results) {
    const nameLower = (place.name || '').toLowerCase();
    const isBJJ = nameLower.includes('bjj') || nameLower.includes('jiu') ||
                  nameLower.includes('jitsu') || nameLower.includes('gracie') ||
                  nameLower.includes('grappling') || nameLower.includes('submission');
    if (!isBJJ) continue;

    const address = place.formatted_address || '';
    const parts = address.split(',');
    const country = parts[parts.length - 1]?.trim() || '';
    const state = parts[parts.length - 2]?.trim() || '';
    const city = parts[parts.length - 3]?.trim() || parts[0]?.trim() || '';
    const slug = slugify(`${place.name}-${city}-${country}`.substring(0, 80));

    const academy = {
      name: place.name,
      address,
      city,
      state,
      country,
      rating: place.rating || null,
      review_count: place.user_ratings_total || 0,
      lat: place.geometry?.location?.lat || null,
      lng: place.geometry?.location?.lng || null,
      place_id: place.place_id,
      google_maps_url: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
      slug,
    };

    const ok = await upsertAcademy(academy);
    if (ok) saved++;
  }
  return saved;
}

async function scrapeQuery(query) {
  const encoded = encodeURIComponent(query);
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encoded}&key=${API_KEY}&type=gym`;

  const data = await fetchJson(url);
  if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
    console.log(`  API error for "${query}": ${data.status} ${data.error_message || ''}`);
    return 0;
  }

  let saved = await processResults(data.results || []);

  if (data.next_page_token) {
    await new Promise(r => setTimeout(r, 2500));
    const nextData = await fetchJson(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${data.next_page_token}&key=${API_KEY}`
    );
    saved += await processResults(nextData.results || []);

    if (nextData.next_page_token) {
      await new Promise(r => setTimeout(r, 2500));
      const nextData2 = await fetchJson(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${nextData.next_page_token}&key=${API_KEY}`
      );
      saved += await processResults(nextData2.results || []);
    }
  }

  return saved;
}

async function main() {
  console.log(`Starting BJJ academy scrape (${SEARCH_QUERIES.length} queries)...`);
  let total = 0;

  for (const query of SEARCH_QUERIES) {
    process.stdout.write(`Scraping: "${query}"... `);
    try {
      const count = await scrapeQuery(query);
      total += count;
      console.log(`${count} saved (total: ${total})`);
    } catch(e) {
      console.log(`ERROR: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\nDone! Total academies scraped: ${total}`);
}

main().catch(console.error);
