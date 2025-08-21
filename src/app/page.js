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

            <section id="home" className={styles.homePage}>
                <div className={`${styles.ocupation} ${styles.textShadow}`}>
                    <h1 className={`${styles.inline} primary-text`}>Bruno Rios</h1>
                    <h1 key={animationKey} className={`${styles.inline} ${styles.showOcupation} primary-text`}>{ocupations[index]}</h1>
                </div>

                <div className={`${styles.mainMenuButtons}`}>
                    <button className="primary-text">My projects</button>
                    <button className="primary-text">About me </button>
                </div>
                <a className={styles.homeArrowBox} href="#projects">
                    <div className={styles.homeArrow} />
                    <div className={styles.homeArrow} />
                </a>

            </section>

            <section id="projects" className={styles.homeSection}>
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>Principal projects</h2>
                <p className={`${styles.sectionText} primary-text`}>These are the principal projects I have worked on.</p>
                <div className={styles.projectsFrame}>

                    <div className={styles.principalProject}>
                        <a className={styles.projectLink} href="/projects/final">
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
                            <a className={styles.projectLink} href="/projects/final">
                                <h1 className={`${styles.projectTitle} primary-text`}>dale don</h1>
                                <div className={styles.projectImage}>
                                    <img src="images/taiga.jpg" />
                                </div>
                                <p className={`${styles.projectClick} secondary-text`}>Touch to see more</p>
                                <p className={`${styles.projectResume} primary-text`}>mesi</p>
                            </a>
                        </div>


                        <div className={styles.secondaryProject}>
                            <a className={styles.projectLink} href="/projects/final">
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

            </section>

            <section id="knowledge" className={styles.homeSection}>
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>My knowledge</h2>
                <p className={`${styles.sectionText} primary-text`}>I have a good knowledge of the following languages and frameworks.</p>
                <div className={styles.knowledgeRow}>
                    <div className={styles.knowledgeBox}>
                        <img src="images/atri.png" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                    <div className={styles.knowledgeBox}>
                        <img src="images/taiga.jpg" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                </div>
                <div className={styles.knowledgeRow}>
                    <div className={styles.knowledgeBox}>
                        <img src="images/taiga.jpg" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                </div>

                <p className={`${styles.sectionText} primary-text`}>I have a decent knowledge of the following languages and frameworks.</p>
                <div className={styles.knowledgeRow}>
                    <div className={styles.knowledgeBox}>
                        <img src="images/atri.png" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                    <div className={styles.knowledgeBox}>
                        <img src="images/taiga.jpg" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                </div>
                <div className={styles.knowledgeRow}>
                    <div className={styles.knowledgeBox}>
                        <img src="images/taiga.jpg" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                </div>

                <p className={`${styles.sectionText} primary-text`}>I have a good knowledge of the following development tools.</p>
                <div className={styles.knowledgeRow}>
                    <div className={styles.knowledgeBox}>
                        <img src="images/atri.png" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                    <div className={styles.knowledgeBox}>
                        <img src="images/taiga.jpg" />
                        <p className={`${styles.knowledgeBoxText} secondary-text`}>gaasaaa funado papy</p>
                    </div>
                </div>


            </section>



            <section id="about" className={styles.homeSection}>
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>About me</h2>
                <p className={`${styles.sectionText} primary-text`}>Nose papu :'v</p>

            </section>

            <section id="contact" className={styles.homeSection}>
                <h2 className={`${styles.textShadow} ${styles.sectionTitle} primary-text`}>Contact me</h2>
                <div className={styles.contactBox}>
                    <button className={`${styles.contactButton} primary-text`}>Contact Me</button>  
                    <p className={`${styles.contactText} primary-text`}>Did you like my projects?</p>
                    <p className={`${styles.contactText} primary-text`}>Did you like my portfolio?</p>
                    <p className={`${styles.contactText} primary-text`}>Do you want me to work with you?</p>
                </div>
            </section>
        </main>
    );
}