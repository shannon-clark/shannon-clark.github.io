import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { featuredSets, sortedOwnedSets, sortedWishlistSets } from "../lib/legoUtils";
import { ownedSets, wishlistSets } from "../data/legoData";
import styles from "../styles/LegoTracker.module.css";
import { LegoSetCard } from "../components/LegoSetCard";
import { WishlistSetCard } from "../components/WishlistSetCard";

const totalPieces = ownedSets.reduce((total, set) => total + set.pieceCount, 0);

const sectionReveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("Overview");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.28;
      let current = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) {
          current = section;
        } else {
          break;
        }
      }

      setActiveSection(current.dataset.sectionLabel ?? "Overview");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className={styles.page} id="top">
      <Head>
        <title>Brick Journal | LEGO Collection Tracker</title>
        <meta
          name="description"
          content="One-page LEGO collection tracker with built sets, wishlist priorities, stats, and featured build video."
        />
        <meta
          name="theme-color"
          content={activeSection !== "Overview" ? "#f6f9ff" : "#eef5ff"}
        />
      </Head>

      {activeSection !== "Overview" ? (
        <div className={styles.sectionTracker}>
          <span className={styles.sectionTrackerLabel}>Now Viewing</span>
          <strong className={styles.sectionTrackerValue}>{activeSection}</strong>
        </div>
      ) : null}

      <div className={styles.container}>
        <motion.section
          id="overview"
          className={`${styles.hero} ${styles.scrollSection}`}
          data-scroll-section="overview"
          data-section-label="Overview"
          variants={sectionReveal}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className={styles.heroTop}>
            <Image
              src="/photo.svg"
              alt="Shannon's cartoon avatar"
              width={80}
              height={80}
              className={styles.heroAvatar}
            />
            <div>
              <p className={styles.heroKicker}>Personal LEGO Tracker</p>
              <h1 className={styles.heroTitle}>Hi, I&apos;m Shannon. Welcome to Brick Journal.</h1>
            </div>
          </div>
          <div className={styles.heroActions}>
            <a href="#collection" className={styles.heroAction}>View Collection</a>
            <a href="#wishlist" className={styles.heroAction}>Open Wishlist</a>
            <a href="#video" className={styles.heroAction}>Watch Build Video</a>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metricTile}>
              <p className={styles.metricLabel}>Owned Sets</p>
              <p className={styles.metricValue}>{ownedSets.length}</p>
            </div>
            <div className={styles.metricTile}>
              <p className={styles.metricLabel}>Wishlist Sets</p>
              <p className={styles.metricValue}>{wishlistSets.length}</p>
            </div>
            <div className={styles.metricTile}>
              <p className={styles.metricLabel}>Total Pieces</p>
              <p className={styles.metricValue}>{totalPieces.toLocaleString()}</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="video"
          className={`${styles.section} ${styles.scrollSection}`}
          data-scroll-section="video"
          data-section-label="Video"
          variants={sectionReveal}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <article className={styles.videoFeature}>
            <p className={styles.videoKicker}>Featured Build Video</p>
            <h2 className={styles.videoTitle}>Mini Orchid Build Showcase</h2>
            <div className={styles.videoFrameWrap}>
              <iframe
                className={styles.videoFrame}
                src="https://www.youtube.com/embed/pwLwg_AdlgU"
                title="LEGO Mini Orchid build video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </article>
        </motion.section>

        <motion.section
          id="featured"
          className={`${styles.section} ${styles.scrollSection}`}
          data-scroll-section="featured"
          data-section-label="Featured"
          variants={sectionReveal}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Featured Builds Right Now</h2>
          <motion.div
            className={styles.cardGrid}
            variants={cardStagger}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredSets.map((set) => (
              <motion.div key={set.setNumber} variants={cardReveal}>
                <LegoSetCard set={set} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="collection"
          className={`${styles.section} ${styles.scrollSection}`}
          data-scroll-section="collection"
          data-section-label="Collection"
          variants={sectionReveal}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className={styles.sectionHeading}>Collection</h2>
          <p className={styles.sectionIntro}>
            Everything I currently own, including completed builds and sets waiting on deck.
          </p>
          <motion.div
            className={styles.cardGrid}
            variants={cardStagger}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {sortedOwnedSets.map((set) => (
              <motion.div key={set.setNumber} variants={cardReveal}>
                <LegoSetCard set={set} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="wishlist"
          className={`${styles.section} ${styles.scrollSection}`}
          data-scroll-section="wishlist"
          data-section-label="Wishlist"
          variants={sectionReveal}
          initial={false}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Wishlist</h2>
          <motion.div
            className={styles.cardGrid}
            variants={cardStagger}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {sortedWishlistSets.map((set) => (
              <motion.div key={set.setNumber} variants={cardReveal}>
                <WishlistSetCard set={set} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
