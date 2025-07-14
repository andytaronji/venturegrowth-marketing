import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Prepare email data
    const subjectLine = subject 
      ? `New Contact Form Submission: ${subject}`
      : 'New Contact Form Submission from Digital Mosaic Studios Website';

    // Format the message body with HTML
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #2c3e50;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This message was sent from the Digital Mosaic Studios contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend with proper configuration
    const { data, error } = await resend.emails.send({
      from: 'Digital Mosaic Studios <onboarding@resend.dev>',
      to: ['infodigitalmosaicstudios@gmail.com'],
      subject: subjectLine,
      html: htmlContent,
      reply_to: email,
      headers: {
        'X-Entity-Ref-ID': new Date().getTime().toString(),
      },
    });

    if (error) {
      console.error('Resend API Error:', error);
      
      // Provide more specific error messages
      if (error.message?.includes('API key')) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please try again later.' },
          { status: 500 }
        );
      }
      
      if (error.message?.includes('domain')) {
        return NextResponse.json(
          { error: 'Email domain configuration issue. Please contact support.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        id: data?.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
