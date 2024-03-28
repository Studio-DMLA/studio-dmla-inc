import { associatesData } from "../api/home/data";
import styles from "./associates.module.css";
import AssociateCard from "./cards/associate-card";

const associates = associatesData;
const associate = associates[4];

export default function Associates() {
  return (
    <div className={styles.associates}>
      <AssociateCard {...associate} />
      <div style={{display: 'none'}} className={styles.carrosal}>
        {associates.map((associate, key) => (
          <div key={key} className={styles.select}>
            <img
              src={"/" + associate.image}
              loading="lazy"
              alt={associate.imageAlt}
              width={104}
              height={104}
              style={{
                width: "6.5rem",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
