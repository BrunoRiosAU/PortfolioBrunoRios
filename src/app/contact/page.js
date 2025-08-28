"use client";

import styles from "./page.module.css";
import SendEmail from "./sendemail";
import { useState } from "react";

import { Mail } from "lucide-react";

export default function ContactPage() {
    const [sent, setSent] = useState(false)

    function send(formData) {
        const name = formData.get("name");
        const surname = formData.get("surname");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const text = formData.get("text");

        if (SendEmail(name, surname, email, subject, text)) {
            setSent(true);
            setTimeout(() => setSent(false), 5000);
        }
    }

    return (
        <>

            <h1 className={`${styles.contactTitle} primaryText`}>Contact me</h1>

            <div className={styles.formContainer}>
                <form action={send} className={styles.contactForm}>

                    <div className={styles.formFullName}>
                        <input className={`${styles.formName} primaryText`} type="text" name="name" placeholder="Your name" required autoComplete="new-password" />
                        <input className={`${styles.formSurname} primaryText`} type="text" name="surname" placeholder="Your surname" required autoComplete="new-password" />
                    </div>
                    <input className={`${styles.formEmail} primaryText`} type="email" name="email" placeholder="Your email" required autoComplete="new-password" />
                    <input className={`${styles.formReason} primaryText`} type="text" name="subject" placeholder="Your reason for contacting me" required autoComplete="off" />
                    <textarea className={`${styles.formText} primaryText`} name="text" placeholder="Your message" required />
                    <button className={`${styles.formSubmit} primaryText`} type="submit">Send email</button>
                </form>
            </div>

            <div className={`${sent ? styles.sentAnimation : ""} ${styles.animation}`}>
                <p className={`${styles.sentAnimationText} primaryText`}>Message sent!</p>
                <Mail className={styles.animationIcon} color="white" size={20} />
            </div>

        </>
    );
}