/**
 * prisma.ts - Compatibility shim
 * 
 * The original Prisma + direct Postgres connection doesn't work on Vercel
 * because Supabase free tier only exposes IPv6 for direct connections,
 * and Vercel serverless only has IPv4 outbound.
 * 
 * Solution: Use Supabase REST API (PostgREST) via @supabase/supabase-js,
 * which works over HTTPS/IPv4.
 */
export { db as prisma } from "./db";
export { db as default } from "./db";
