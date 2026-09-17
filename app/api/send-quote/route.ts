import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    const message = {
      embeds: [
        {
          title: '💰 Quote Request',
          color: 0xec4899, // pink
          fields: [
            { name: 'Name', value: quoteData.firstName || 'N/A', inline: true },
            { name: 'Email', value: quoteData.email || 'N/A', inline: true },
            { name: 'Phone', value: quoteData.phone || 'N/A', inline: true },
            { name: 'Zip Code', value: quoteData.zipCode || 'N/A', inline: true },
            {
              name: 'Home Details',
              value: `${quoteData.homeDetails?.squareFootage || 'N/A'} sqft | ${quoteData.homeDetails?.bedrooms || '0'} bed | ${quoteData.homeDetails?.fullBathrooms || '0'} bath | ${quoteData.homeDetails?.halfBathrooms || '0'} half bath | Pets: ${quoteData.homeDetails?.pets || 'none'}`,
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
              value: quoteData.addOns.map((addon: string) => {
                const labels: Record<string, string> = {
                  'windows': 'Inside windows (+$30)',
                  'carpet': 'Carpet cleaning (+$50)',
                  'oven': 'Oven cleaning (+$25)',
                  'fridge': 'Fridge cleaning (+$20)',
                };
                return labels[addon] || addon;
              }).join(', '),
              inline: false,
            }] : []),
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.statusText}`);
    }

    return NextResponse.json(
      { success: true, message: 'Quote request received. We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process quote request' },
      { status: 500 }
    );
  }
}
