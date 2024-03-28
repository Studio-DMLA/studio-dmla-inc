import ScrollingP from "../snippets/scrolling/scrolling-p";
import styles from "./founder-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  link?: string;
  meetingLink?: string;
  imageRight?: boolean;
  color?: string;
}

export default function FounderCard(props: Props) {
  const card = props.imageRight
    ? `${styles.card} ${styles.activityCardRight}`
    : `${styles.card}`;
  return (
    <div className={card}>
      <div className={styles.image}>
        <img
          className={
            props.imageRight ? styles.canadaRight : styles.canadaleft
          }
          src={"/canada_circles.svg"}
          loading="lazy"
          alt={"canada location icon image"}
          width={80}
          height={80}
          style={{
            width: "5rem",
            height: "auto",
          }}
        />
        <img
          className={
            props.imageRight ? styles.mainImageRight : styles.mainImageLeft
          }
          src={"/" + props.image}
          loading="lazy"
          alt={props.imageAlt}
          width={280}
          height={219}
          style={{
            width: "17.5rem",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title} >{props.title}</h3>
        <h4 className={styles.subtitle} >{props.subTitle}</h4>
        <ScrollingP p={props.description} maxHeight={'8.5rem'} />
      </div>
    </div>
  );
}
