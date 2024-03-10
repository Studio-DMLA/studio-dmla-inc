import styles from "./spotlight-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  logoImage: string;
  logoAlt: string;
  title: string;
  description: string;
  link?: string;
  imageRight?: boolean;
  color?: string;
}

export default function SpotlightCard(props: Props) {
  const card = props.imageRight
  ? `${styles.card} ${styles.activityCardRight}`
  : `${styles.card}`;
  return (
    <div className={card}>
      <div className={styles.image}>
        <img
          className={
            props.imageRight ? styles.mainImageRight : styles.mainImageLeft
          }
          src={"/" + props.image}
          loading="lazy"
          alt={props.imageAlt}
          style={{
            width: "17.5rem",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.text}>
        <div className={props.imageRight ? styles.logoRight : styles.logoLeft}>
          <img
            className={styles.cornerPoint}
            src={'/' + props.logoImage}
            loading="lazy"
            alt={props.logoAlt}
            style={{
              width: "auto",
              height: "2.65rem",
            }}
          />
          <a
            className={props.imageRight ? styles.linkleft : styles.linkRight}
            href="http://"
          >
            Go to Website
          </a>
        </div>
        <h3 className={styles.title} >{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
