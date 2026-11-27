
import { prisma } from "@/lib/prisma";

/**
 * Checks whether the application can reach the database.
 */
export async function checkDatabase(): Promise<void> {
  await prisma.$queryRaw`SELECT 1`;
}
