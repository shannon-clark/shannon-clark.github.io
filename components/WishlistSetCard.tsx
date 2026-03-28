import styles from "../styles/LegoTracker.module.css";
import { WishlistSet } from "../types/lego";

interface WishlistSetCardProps {
  set: WishlistSet;
}

const priorityClassMap: Record<WishlistSet["priority"], string> = {
  High: styles.badgeHigh,
  Medium: styles.badgeMedium,
  Low: styles.badgeLow,
};

export const WishlistSetCard = ({ set }: WishlistSetCardProps) => {
  const storeUrl =
    set.legoStoreUrl ?? `https://www.lego.com/en-ca/search?q=${set.setNumber}`;
  const previewImageUrl =
    set.imageUrl ?? `https://images.brickset.com/sets/images/${set.setNumber}-1.jpg`;

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{set.name}</h3>
      </div>
      <p className={styles.cardMeta}>
        #{set.setNumber} • {set.theme} • {set.pieceCount.toLocaleString()} pieces • {set.year}
      </p>
      <div className={styles.badges}>
        <span className={`${styles.badge} ${priorityClassMap[set.priority]}`}>
          {set.priority} Priority
        </span>
      </div>
      <a
        className={styles.storePreview}
        href={storeUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.storeImage}
          src={previewImageUrl}
          alt={`${set.name} LEGO set preview`}
          loading="lazy"
        />
        <p className={styles.storeLabel}>Official LEGO Store</p>
        <p className={styles.storePath}>Set #{set.setNumber}</p>
        <span className={styles.storeButton}>Open Product Page</span>
      </a>
      {set.notes ? <p className={styles.notes}>{set.notes}</p> : null}
    </article>
  );
};
