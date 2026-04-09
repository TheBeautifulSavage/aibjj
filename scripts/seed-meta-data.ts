// Run after npx prisma db push to seed meta data
// Usage: npx tsx scripts/seed-meta-data.ts
// Note: PrismaClient is generated at src/generated/prisma
import { PrismaClient } from "../src/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding meta data - run after npx prisma db push");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
