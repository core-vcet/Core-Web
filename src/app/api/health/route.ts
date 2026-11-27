
import { NextResponse } from "next/server";
import { checkDatabase } from "@/services/health.service";

export async function GET() {
  try {
    await checkDatabase();

    return NextResponse.json(
      {
        ok: true,
        data: {
          status: "healthy",
          database: "up",
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "DB_UNAVAILABLE",
          message: "Database not reachable",
        },
      },
      { status: 503 }
    );
  }
}
