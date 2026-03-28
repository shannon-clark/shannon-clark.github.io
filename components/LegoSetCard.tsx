import styles from "../styles/LegoTracker.module.css";
import { LegoSet } from "../types/lego";

interface LegoSetCardProps {
  set: LegoSet;
}

const statusClassMap: Record<LegoSet["buildStatus"], string> = {
  Built: styles.badgeBuilt,
  "In Progress": styles.badgeProgress,
  "Not Built": styles.badgeNotBuilt,
};

export const LegoSetCard = ({ set }: LegoSetCardProps) => {
  const storeUrl =
    set.legoStoreUrl ?? `https://www.lego.com/en-ca/search?q=${set.setNumber}`;
  const previewImageUrl =
    set.imageUrl ?? `https://images.brickset.com/sets/images/${set.setNumber}-1.jpg`;

  return (
    <a className={styles.card} href={storeUrl} target="_blank" rel="noreferrer">
      <img
        className={styles.cardImage}
        src={previewImageUrl}
        alt={`${set.name} LEGO set preview`}
        loading="lazy"
      />
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{set.name}</h3>
          <p className={styles.cardMeta}>
            #{set.setNumber} · {set.theme} · {set.pieceCount.toLocaleString()} pcs · {set.year}
          </p>
        </div>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${statusClassMap[set.buildStatus]}`}>
            {set.buildStatus}
          </span>
        </div>
        {set.notes ? <p className={styles.notes}>{set.notes}</p> : null}
      </div>
    </a>
  );
};
