"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { List, Grid2X2 } from "lucide-react";
import { getProyects } from "./getProjects";

export default function Projects() {
  const [grid, setGrid] = useState(true);
  const [projects, setProjects] = useState([]);

  function toggleProjectGrid() {
    setGrid(!grid);
  }

  useEffect(() => {
    async function loadProjects() {
      const data = await getProyects();
      setProjects(data);
    }
    loadProjects();
  }, []);

  return (
    <>
      <h1 className={`${styles.projectsTitle} primaryText`}>My projects</h1>
      <div className={styles.projectsBox}>
        <div className={styles.projectFilters}>
          <button className={`${styles.seeListButton} ${!grid ? styles.selectedButton : ""}`} onClick={toggleProjectGrid} disabled={!grid ? true : false}>
            <List className={styles.seeListIcon} color="white" size={30} />
          </button>
          <button className={`${styles.seeListButton} ${grid ? styles.selectedButton : ""}`} onClick={toggleProjectGrid} disabled={grid ? true : false}>
            <Grid2X2 className={styles.seeListIcon} color="white" size={30} />
          </button>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, i) => <h1 key={i}>{project}</h1>)}
        </div>
      </div>
    </>
  );
}