import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('Discord webhook URL not configured');
      return NextResponse.json(
        { success: false, error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    // Format message for Discord
    const message = {
      embeds: [
        {
          title: '✅ Booking Confirmed',
          color: 0x8b5cf6, // purple
          fields: [
            { name: 'Name', value: bookingData.firstName || 'N/A', inline: true },
            { name: 'Email', value: bookingData.email || 'N/A', inline: true },
            { name: 'Phone', value: bookingData.phone || 'N/A', inline: true },
            { name: 'Zip Code', value: bookingData.zipCode || 'N/A', inline: true },
            {
              name: 'Home Details',
              value: `${bookingData.homeDetails?.squareFootage || 'N/A'} sqft | ${bookingData.homeDetails?.bedrooms || '0'} bed | ${bookingData.homeDetails?.fullBathrooms || '0'} bath | ${bookingData.homeDetails?.halfBathrooms || '0'} half bath | Pets: ${bookingData.homeDetails?.pets || 'none'}`,
              inline: false,
            },
            {
              name: 'Service & Frequency',
              value: `${bookingData.cleaningType} - ${bookingData.frequency}`,
              inline: true,
            },
            { name: 'Price', value: `$${bookingData.price?.toFixed(2) || '0.00'}`, inline: true },
            {
              name: 'Scheduled Date/Time',
              value: bookingData.preferredDate && bookingData.preferredTime
                ? `${bookingData.preferredDate} at ${bookingData.preferredTime}`
                : 'Not scheduled yet',
              inline: false,
            },
            ...(bookingData.addOns && bookingData.addOns.length > 0 ? [{
              name: 'Add-ons',
              value: bookingData.addOns.map((addon: string) => {
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

    // Send to Discord
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.statusText}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received. We will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
