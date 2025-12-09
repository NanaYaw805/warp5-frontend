'use server';

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const store = await cookies();
  const tokenCookie = store.get('auth_token');
  const token = tokenCookie?.value;

  const baseUrl = process.env.BASE_URL;

  if (!tokenCookie?.value) {
    return NextResponse.json({ user: null, error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const apiRes = await fetch(`${baseUrl}/equipment`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: apiData.message || "Something went wrong." },
        { status: apiRes.status }
      );
    }

    return NextResponse.json({ equipments: apiData }, { status: 200 });

  } catch (error) {
    console.log("Equipment fetch error:", error);
    return NextResponse.json(
      { message: "Failed to fetch equipments. Please try again later." + error },
      { status: 500 }
    );
  }
}