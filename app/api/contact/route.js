import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json();

		const { name, phone, email, city, country, address, subject, message } =
			body;

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: "jithendra43@gmail.com",
			subject: subject || "New Contact Form Message",
			html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		});

		return NextResponse.json({
			success: true,
			message: "Email sent successfully",
		});
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{
				success: false,
				message: "Failed to send email",
			},
			{ status: 500 },
		);
	}
}
