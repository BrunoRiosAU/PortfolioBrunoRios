"use client";

import styles from "./page.module.css";
import { useEffect, useState } from 'react';

const ocupations = [
    'Front End',
    'Back End',
    'Full Stack'
];

export default function HomePage() {

    const [index, setIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ocupations.length);
            setAnimationKey((prev) => prev + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.ocupation}>
                <h1 className={`${styles.inline} primary-text`}>Bruno Rios</h1>
                <h1 key={animationKey} className={`${styles.inline} ${styles.showOcupation} primary-text`}>{ocupations[index]}</h1>
            </div>

            <div className={`${styles.mainMenuButtons}`}>
                <button className="primary-text">About me</button>
                <button className="primary-text">My projects</button>
            </div>

        </main>
    );
}