"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.BASE_URL;

  try {
    const apiRes = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const apiData = await apiRes.json();
    console.log('login data', apiData);
    console.log('login response', apiRes);

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: apiData.message || "Something went wrong." },
        { status: apiRes.status }
      );
    }

    // Create response with success message
    const response = NextResponse.json(
      { message: "Sign-in successful.", data: apiData },
      { status: 200 }
    );

    // Save token in httpOnly cookie
    response.cookies.set('auth_token', apiData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Failed to sign in. Please try again later." + error },
      { status: 500 }
    );
  }
}
