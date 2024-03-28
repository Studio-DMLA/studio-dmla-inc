import styles from "./activity-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  scroller?: string;
  link?: string;
  imageRight?: boolean;
  color?: string;
}

export default function ActivityCard(props: Props) {
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
          width={280}
          height={280}
          style={{
            width: "17.5rem",
            height: "auto",
          }}
        />
        <img
          className={styles.circles}
          src="/4 circles outline.svg"
          loading="lazy"
          alt="decorative svg"
          width={60}
          height={60}
          style={{
            width: "auto",
            height: "3.75rem",
          }}
        />
        <img
          className={styles.cornerPoint}
          src="/corner-point.svg"
          loading="lazy"
          alt="decorative svg"
          width={20}
          height={20}
          style={{
            width: "auto",
            height: "1.25rem",
          }}
        />
        {props.link && props.link !== "" ? (
          <a
            className={props.imageRight ? styles.linkleft : styles.linkRight}
            href={props.link}
            target="_blank"
          >
            Go to Website
          </a>
        ) : null}
      </div>
      <div className={`${styles.text}  typ-gap`}>
        <h3>{props.title}</h3>
        {props.subtitle ? <h5>{props.subtitle}</h5> : null}
        <p>{props.description}</p>
      </div>
    </div>
  );
}
