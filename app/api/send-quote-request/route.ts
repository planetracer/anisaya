import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const message = {
      embeds: [
        {
          title: '💬 Quote Request Started',
          color: 0xec4899,
          fields: [
            { name: 'Name', value: quoteData.firstName || 'N/A', inline: true },
            { name: 'Email', value: quoteData.email || 'N/A', inline: true },
            { name: 'Phone', value: quoteData.phone || 'N/A', inline: true },
            { name: 'Zip Code', value: quoteData.zipCode || 'N/A', inline: true },
            {
              name: 'Home Details',
              value: `${quoteData.squareFootage || 'N/A'} sqft | ${quoteData.bedrooms || '0'} bed | ${quoteData.fullBathrooms || '0'} bath | ${quoteData.halfBathrooms || '0'} half bath | Pets: ${quoteData.pets || 'none'}`,
              inline: false,
            },
            {
              name: 'Service & Frequency',
              value: `${quoteData.cleaningType} - ${quoteData.frequency}`,
              inline: true,
            },
            { name: 'Quote Price', value: `$${quoteData.price?.toFixed(2) || '0.00'}`, inline: true },
            ...(quoteData.addOns && quoteData.addOns.length > 0 ? [{
              name: 'Add-ons',
              value: quoteData.addOns.join(', '),
              inline: false,
            }] : []),
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
