/**
 * Seed script for MetaSnapshot data
 * Run with: npx ts-node --compiler-options '{"module":"CommonJS"}' scripts/seed-meta-data.ts
 * Or: npx tsx scripts/seed-meta-data.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GI_SUBMISSIONS = [
  { name: "Rear Naked Choke", percentage: 18 },
  { name: "Armbar", percentage: 16 },
  { name: "Triangle Choke", percentage: 14 },
  { name: "Guillotine", percentage: 11 },
  { name: "Bow & Arrow Choke", percentage: 10 },
  { name: "Kimura", percentage: 8 },
  { name: "Ezekiel Choke", percentage: 6 },
  { name: "Loop Choke", percentage: 5 },
  { name: "Omoplata", percentage: 4 },
  { name: "Clock Choke", percentage: 4 },
  { name: "Other", percentage: 4 },
];

const NOGI_SUBMISSIONS = [
  { name: "Heel Hook (Inside)", percentage: 28 },
  { name: "Heel Hook (Outside)", percentage: 12 },
  { name: "Rear Naked Choke", percentage: 14 },
  { name: "Guillotine", percentage: 11 },
  { name: "Kneebar", percentage: 7 },
  { name: "Armbar", percentage: 6 },
  { name: "Triangle", percentage: 5 },
  { name: "Toe Hold", percentage: 5 },
  { name: "Calf Slicer", percentage: 4 },
  { name: "Kimura", percentage: 4 },
  { name: "Other", percentage: 4 },
];

const HEEL_HOOK_TREND = [
  { year: 2015, percentage: 8 },
  { year: 2016, percentage: 11 },
  { year: 2017, percentage: 16 },
  { year: 2018, percentage: 22 },
  { year: 2019, percentage: 28 },
  { year: 2020, percentage: 32 },
  { year: 2021, percentage: 34 },
  { year: 2022, percentage: 37 },
  { year: 2023, percentage: 39 },
  { year: 2024, percentage: 40 },
];

async function main() {
  console.log("Seeding MetaSnapshot data...");

  // Clear existing meta snapshots
  await prisma.metaSnapshot.deleteMany({});

  // Seed Gi 2024
  for (const sub of GI_SUBMISSIONS) {
    await prisma.metaSnapshot.create({
      data: {
        category: "gi",
        tournament: "IBJJF World Championship",
        year: 2024,
        submissionType: sub.name,
        percentage: sub.percentage,
        matchCount: 2847,
        source: "IBJJF World Championship (compiled)",
      },
    });
  }
  console.log(`Seeded ${GI_SUBMISSIONS.length} Gi submission records`);

  // Seed No-Gi 2024
  for (const sub of NOGI_SUBMISSIONS) {
    await prisma.metaSnapshot.create({
      data: {
        category: "nogi",
        tournament: "ADCC, EBI, Polaris",
        year: 2024,
        submissionType: sub.name,
        percentage: sub.percentage,
        matchCount: 1923,
        source: "ADCC, EBI, Polaris (compiled)",
      },
    });
  }
  console.log(`Seeded ${NOGI_SUBMISSIONS.length} No-Gi submission records`);

  // Seed heel hook historical trend
  for (const entry of HEEL_HOOK_TREND) {
    await prisma.metaSnapshot.create({
      data: {
        category: "nogi",
        tournament: "ADCC",
        year: entry.year,
        submissionType: "Heel Hook (All)",
        percentage: entry.percentage,
        source: "Historical ADCC/No-Gi compiled data",
      },
    });
  }
  console.log(`Seeded ${HEEL_HOOK_TREND.length} heel hook trend records`);

  console.log("✅ MetaSnapshot seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
