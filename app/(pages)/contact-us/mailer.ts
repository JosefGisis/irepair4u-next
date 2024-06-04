"use server"

import nodeMailer from "nodemailer"

export interface SurveyData {
	email: string
	name?: {
		first?: string
		last?: string
	}
	phone?: string
	request: string
}

const transporter = nodeMailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GOOGLE_APP_PASSWORD,
	},
})

export default async function mailer(data: SurveyData) {
	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		subject: "A customer has sent you a request!",
		html: `
            <p>Customer email: ${data.email}</p>
            <p>Customer name: ${data.name?.first} ${data.name?.last}</p>
            ${data.phone ? `<p>Customer would like a callback at <a href="tel:${data.phone}"> ${data.phone}</p>` : ""}
            <p>Customer request: ${data.request}</p>
            <p>Please respond promptly!</p>
        `,
	})

	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: data.email,
		subject: "Thank you! We have received your request.",
		text: "This is an automated response.",
		html: `
                <h1>Thank you for reaching out to us!</h1>
                <p>We have received your request and will get back to you as soon as possible.</p>
                <p></p>
                <hr />
                <p>Your request:</p>
                <p>${data.request}</p>
                <hr />
                <p>Feel free to reply to this email if you have any additional questions or concerns or would like to change your original request.</p>
                <p />
                <p>Best regards,</p>
                <p>-<i> Mattis Gisis</i></p>
                `,
	})
}
