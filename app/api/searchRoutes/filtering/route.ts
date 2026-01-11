'use server';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const baseUrl = process.env.BASE_URL;

    const { searchParams } = new URL(req.url);

    const location = searchParams.get('location');
    const equipment = searchParams.get('equipment');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const fromDate = searchParams.get('fromDate');
    const toDate = searchParams.get('toDate');

    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (equipment) params.append('equipment', equipment);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (fromDate) params.append('fromDate', fromDate);
    if (toDate) params.append('toDate', toDate);

    try {
        const apiRes = await fetch(`${baseUrl}/api/equipment/search?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            console.log('search error', apiData);
            console.log('search error', apiRes);
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            );
        }

        return NextResponse.json(
            { message: "Equipments fetched successfully.", data: apiData },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to fetch equipments', error);
        return NextResponse.json(
            { message: "Failed to fetch equipments. Please try again later." + error },
            { status: 500 }
        );
    }
}