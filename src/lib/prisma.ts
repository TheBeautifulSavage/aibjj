import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  // Supabase free tier: IPv6 only, no IPv4. Must connect directly to IPv6 address.
  const pool = new Pool({
    host: "2600:1f16:1cd0:3340:2393:a66b:86c3:ff54",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "2121@MASONalex",
    ssl: { rejectUnauthorized: false },
    max: 1,
    connectionTimeoutMillis: 10000,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
