import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  if (request.method === 'POST') {
    try {
      const { name, email, subject, message } = await request.json();

      // Create a transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // or another email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Define the email options
      const mailOptions = {
        from: email, // sender address
        to: process.env.EMAIL_TO, // list of receivers (owner's email)
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
