import styles from "./page.module.css";

export default function HomePage() {

    return (
        <main className={styles.main}>
            <div className={styles.ocupation}>
                <h1 className={`${styles.inline} primary-text`}>Bruno Rios</h1>
                <h1 className={`${styles.inline + " " + styles.test} primary-text`}>asasa</h1>
            </div>

        </main>
    );
}