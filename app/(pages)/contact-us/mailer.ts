"use server"

import nodeMailer from "nodemailer"

const LOGO_PNG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/irepair4u/irepair4u_white_transparent_100x860-MziisrxyupSCjI14pvxiB1ZMSxA7tp.png"

const ICON_PNG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/irepair4u/irepair4u_icon_white_transparent_300x300-3swPOPZ9sx2SpazRQHBoHNC6HARoVp.png"

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
		cc: process.env.THIRD_PARTY_EMAIL,
		subject: "A customer has sent you a request!",
		html: `
	        <p>Customer email: ${data.email}</p>
	        <p>Customer name: ${data.name?.first} ${data.name?.last}</p>
	        ${data.phone ? `<p>Customer would like a callback at <a href="tel:${data.phone}"> ${data.phone}</p>` : ""}
	        <p>Customer request: ${data.request}</p>
	    `,
	})

	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: data.email,
		subject: "Thank you! We have received your request.",
		text: "This is an automated response.",
		html: `
                <div style="background-color: rgb(225, 30, 70);color: white !important;padding: 1.5rem;">
				<img src=${LOGO_PNG_URL} style="width: 300px; height: auto;" />
				<h2 style="color: white">Thank you for reaching out to us!</h2>
				<h4 style="color: white">
					We have received your request and will get back to you as soon as
					possible.
				</h4>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p style="color: white">Regarding:</p>
				<div style="background-color: rgba(255, 255, 255, 0.1);border: 1px;border-style: solid;border-color: rgb(0, 0, 0);padding: 0.7rem; max-width: 550px">
					<p style="color: white">${data.request}</p>
				</div>
				<p style="color: white">
					Feel free to reply to this email if you have any additional questions or
					concerns or would like to change your original request.
				</p>
				<h3 style="margin-top: 2rem; color: white">-<i> iRepair4U</i></h3>
				<p>
					<a style="color: white !important; text-decoration: underline" href="http://www.irepair4unj.com">
						www.irepair4unj.com
					</a>
				</p>
				<p>
					<a style="color: white !important; text-decoration: underline" href="tel:7323303038">
						(732)-330-3038
					</a>
				</p>
				<p>
					<a style="color: white !important; text-decoration: underline" href="mailto:irepairr4u@gmail.com">
						irepairr4u@gmail.com
					</a>
				</p>
			</div>
                `,
	})
}
