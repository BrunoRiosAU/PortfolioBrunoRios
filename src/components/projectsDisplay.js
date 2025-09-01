"use client"
import { getProyects } from "../app/projects/getProjects";
import { useEffect, useState } from "react";
import styles from "../app/projects/page.module.css"


export default function ProjectsDisplay(grid) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const data = await getProyects();
            setProjects(data);
        }
        loadProjects();
    }, []);

    if (grid) {
        return (
            <>
                {projects.map((project, i) =>
                    <div key={i} className={styles.projectBox}>
                        <h1 className="primaryText">{project}</h1>
                    </div>

                )}
            </>
        );
    }

    return (
        <>
            <p className="primaryText">List</p>
            {projects.map((project, i) =>
                <h1 className="primaryText" key={i}>{project}</h1>
            )}
        </>
    );
}