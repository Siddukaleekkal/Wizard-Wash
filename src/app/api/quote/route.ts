import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service, address, date, details } = body;

        // Note: You will need to add these environment variables to your .env.local file
        // for this to actually send emails.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // e.g., wizardwashrva@gmail.com
                pass: process.env.EMAIL_PASS, // App Password for the Gmail account
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: ['wizardwashrva@gmail.com', 'siddukaleekkal@gmail.com'],
            subject: `New Estimate Request - ${name} (${service})`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #9138df; border-bottom: 2px solid #9138df; padding-bottom: 10px;">New Quote Request</h2>
                    <p><strong>Customer Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service Requested:</strong> ${service}</p>
                    <p><strong>Service Address:</strong> ${address}</p>
                    <p><strong>Preferred Date of Service:</strong> ${date}</p>
                    <p><strong>Project Details:</strong></p>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 5px; color: #475569;">
                        ${details.replace(/\n/g, '<br>')}
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
