"use client";
import styles from "./page.module.css";

import { useEffect, useState } from 'react';

const messages = [
    'Front End',
    'Back End',
    'Full Stack'
];



export default function HomePage() {
    const [index, setIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
            setAnimationKey((prev) => prev + 1);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.ocupation}>
                <h1 className={`${styles.inline} primary-text`}>Bruno Rios</h1>
                <h1 key={animationKey} className={`${styles.inline} ${styles.showOcupation} primary-text`}>{messages[index]}</h1>
            </div>

        </main>
    );
}