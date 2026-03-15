import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ xp: 0, role: 'free' }, { status: 401 });

    const dbUser = await getUserById(userId);

    if (!dbUser) {
      return NextResponse.json({ xp: 0, role: 'free' }, { status: 404 });
    }

    // ADD THIS LOG: This will show up in your TERMINAL (not browser console)
    

    return NextResponse.json({ 
      xp: dbUser.xp || 0,
      role: dbUser.role || 'free' // This is where the 'premium' string is passed to the Navbar
    });
  } catch (error) {
    
    return NextResponse.json({ xp: 0, role: 'free' }, { status: 500 });
  }
}