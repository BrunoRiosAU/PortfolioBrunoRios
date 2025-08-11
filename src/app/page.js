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
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (

        <main className={styles.main}>

            <div id="home">
                <div className={`${styles.ocupation} ${styles.textShadow}`}>
                    <h1 className={`${styles.inline} primary-text`}>Bruno Rios</h1>
                    <h1 key={animationKey} className={`${styles.inline} ${styles.showOcupation} primary-text`}>{ocupations[index]}</h1>
                </div>

                <div className={`${styles.mainMenuButtons}`}>
                    <button className="primary-text">My projects</button>
                    <button className="primary-text">About me </button>
                </div>
            </div>

            <div id="projects">
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>Selected work</h2>
                <div className={styles.projectsFrame}>

                    <div className={styles.principalProject}>
                        <a className={styles.projectLink} href="http://localhost:3000/projects/final">
                            <h1 className={`${styles.projectTitle} primary-text`}>dale</h1>
                            <div className={styles.projectImage}>
                                <img src="images/taiga.jpg" />
                            </div>
                            <p className={`${styles.projectClick} secondary-text`}>Touch to see more</p>
                            <p className={`${styles.projectResume} primary-text`}>Resume</p>
                        </a>
                    </div>

                    <div className={styles.secondaryProjectBox}>
                        <div className={styles.secondaryProject}>
                            <a className={styles.projectLink} href="http://localhost:3000/projects/final">
                                <h1 className={`${styles.projectTitle} primary-text`}>dale don</h1>
                                <div className={styles.projectImage}>
                                    <img src="images/taiga.jpg" />
                                </div>
                                <p className={`${styles.projectClick} secondary-text`}>Touch to see more</p>
                                <p className={`${styles.projectResume} primary-text`}>mesi</p>
                            </a>
                        </div>


                        <div className={styles.secondaryProject}>
                            <a className={styles.projectLink} href="http://localhost:3000/projects/final">
                                <h1 className={`${styles.projectTitle} primary-text`}>dale</h1>
                                <div className={styles.projectImage}>
                                    <img src="images/taiga.jpg" />
                                </div>
                                <p className={`${styles.projectClick} secondary-text`}>Touch to see more</p>
                                <p className={`${styles.projectResume} primary-text`}>Resume</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div id="knowledge">
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>My knowledge</h2>


            </div>

            <div id="about">
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>About me</h2>


            </div>

            <div id="contact">
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>Contact me</h2>


            </div>
        </main>
        
    );
}