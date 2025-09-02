"use client"
import { getProjects } from "../app/projects/getProjects";
import { useEffect, useState } from "react";
import styles from "../app/projects/page.module.css"


export default function ProjectsDisplay(grid) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            setProjects(data);
        }
        loadProjects();
    }, []);

    if (grid) {
        return (
            <div className={styles.projectGrid}>
                {Object.entries(projects).map(([key, value]) => (
                    <div key={key} className={styles.projectBoxDisplay}>
                        <a className={styles.projectRedirect} href={`/projects/${value.id}`}>
                            <h1 className={`${styles.projectBoxTitle} primaryText`}>{value.title}</h1>
                            <div className={styles.projectBoxImage}>
                                <img src={value.img} />
                            </div>
                            <p className={`${styles.projectBoxDesc} primaryText`}>{value.desc}</p>
                        </a>

                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.projectList}>
            {Object.entries(projects).map(([key, value]) => (
                <div key={key} className={styles.projectListDisplay}>
                    <a className={styles.projectRedirect} href={`/projects/${value.id}`}>
                        <h1 className={`${styles.projectListTitle} primaryText`}>{value.title}</h1>
                        <p className={`${styles.projectListDesc} primaryText`}>{value.desc}</p>
                        <div className={styles.projectListImage}>
                            <img src={value.img} />
                        </div>
                    </a>

                </div>
            ))}
        </div>
    );
}