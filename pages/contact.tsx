import Head from "next/head";
import styles from "../styles/LegoTracker.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Brick Journal | About Me</title>
        <meta
          name="description"
          content="Personal profile and highlights behind this LEGO collection tracker."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.heroKicker}>About Me</p>
            <h1 className={styles.heroTitle}>Builder, Collector, LEGO Fan</h1>
            <p className={styles.heroSubtitle}>
              I love detail-rich builds, clear organization, and helping others find sets that
              match their interests and experience level.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.twoCol}>
              <article className={styles.aboutPanel}>
                <h3>Favorite Theme</h3>
                <p>
                  Star Wars and Icons. I enjoy the balance of display quality and satisfying
                  build techniques.
                </p>
              </article>
              <article className={styles.aboutPanel}>
                <h3>Most Proud Build</h3>
                <p>
                  The Mighty Bowser. The motion features and overall shape were a lot of fun
                  to put together and explain to friends.
                </p>
              </article>
              <article className={styles.aboutPanel}>
                <h3>Dream Next Set</h3>
                <p>
                  Rivendell is at the top of my wishlist for its storytelling and scale.
                </p>
              </article>
              <article className={styles.aboutPanel}>
                <h3>What I Enjoy Most</h3>
                <p>
                  Discovering clever techniques, sharing build tips with friends, and keeping
                  my collection organized so I can enjoy every set even more.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
