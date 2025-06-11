import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const campaignId = searchParams.get('campaignId');

    const response = await fetch(
        `${process.env.API_URL}/${clientId}/dashboard/attribution/${campaignId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                // Add any required API keys or auth headers here
            },
        }
    );

    const data = await response.json();
    return NextResponse.json(data);
} 