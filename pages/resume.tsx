import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Resume() {
    return (
    <>
        <Head>
            <title>Shannon Clark | Resume</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Resume
            </h1>
        </main>
    </>
       
    );
  }