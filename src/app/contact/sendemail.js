"use server";

import EmailTemplate from "../../components/emailTemplate";
import { Resend } from "resend";



export default async function SendEmail(name, surname, email, reason, text) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'brunorios292@gmail.com',
        subject: reason,
        react: EmailTemplate({ name: name, surname: surname, email: email, text: text })
    });

    if (error) {
        console.log(error)
        return false
    }
    console.log(data)
    return true

}