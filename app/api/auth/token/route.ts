'use server'

import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const store = await cookies();
  const tokenCookie = store.get('auth_token');

  if (!tokenCookie?.value) {
    return NextResponse.json({ user: null, error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ token: tokenCookie.value }, { status: 200 });
}