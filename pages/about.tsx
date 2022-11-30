import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
    <>
        <Head>
            <title>Shannon Clark | About</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                About
            </h1>
        </main>
    </>
       
    );
  }