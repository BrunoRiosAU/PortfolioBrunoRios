"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { List, Grid2X2 } from "lucide-react";
import ProjectsDisplay from "../../components/projectsDisplay"

export default function Projects() {
  const [grid, setGrid] = useState(true);

  function toggleProjectGrid() {
    setGrid(!grid);
  }

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
          {ProjectsDisplay(grid)}
        </div>
      </div>
    </>
  );
}