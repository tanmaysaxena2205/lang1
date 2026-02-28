import { NextResponse } from "next/server";
import { upgradeUserRole } from "@/lib/actions/user.actions";

export async function POST(req) {
  try {
    const body = await req.json();

    if (body.type === "order.created") {
      // We extract the userId we passed from the frontend metadata
      const userId = body.data?.metadata?.userId;

      if (userId) {
        console.log(`Payment success! Upgrading user: ${userId}`);
        await upgradeUserRole(userId);
        return NextResponse.json({ processed: true }, { status: 200 });
      }
    }
    return NextResponse.json({ message: "Event ignored" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }
}