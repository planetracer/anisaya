import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Log the booking (in a real app, send email or save to database)
    console.log('New booking request:', bookingData);

    // For now, we'll just return success
    // In production, you'd:
    // 1. Send email via SendGrid, Resend, or Brevo
    // 2. Save to database
    // 3. Send confirmation email to customer

    // Example of what to do with bookingData:
    // - Send to your email
    // - Save to database
    // - Create a Zapier webhook
    // - Send Slack notification

    // Placeholder for future email integration:
    // const emailResponse = await sendEmail({
    //   to: BUSINESS_INFO.email,
    //   subject: `New Booking Request from ${bookingData.firstName}`,
    //   text: `
    //     Name: ${bookingData.firstName}
    //     Email: ${bookingData.email}
    //     Phone: ${bookingData.phone}
    //     Zip Code: ${bookingData.zipCode}
    //     Cleaning Type: ${bookingData.cleaningType}
    //     Preferred Date: ${bookingData.preferredDate}
    //     Preferred Time: ${bookingData.preferredTime}
    //     Total: $${bookingData.price}
    //   `
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received. We will contact you shortly.',
        bookingData,
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
