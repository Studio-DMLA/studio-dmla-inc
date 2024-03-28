import ScrollingP from "../snippets/scrolling/scrolling-p";
import styles from "./associate-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  location?: string;
  title: string;
  subTitle: string;
  description: string;
  blurp: string;
  color?: string;
}

export default function AssociateCard(props: Props) {
  return (
    <div className={styles.selected}>
      <div className={styles.about}>
        <h3>{props.title}</h3>
        <h4>{props.subTitle}</h4>
        <ScrollingP p={props.description} />
      </div>
      <div className={styles.image}>
        <img
          src={"/" + props.image}
          loading="lazy"
          alt={props.imageAlt}
          width={240}
          height={240}
          style={{
            width: "auto",
            height: "15rem",
          }}
        />
        <div className={styles.location}>
          <img
            src={"/flag-brazil.svg"}
            alt={"location Brazil flag icon image"}
            loading="lazy"
            width={80}
            height={80}
            style={{
              width: "auto",
              height: "5rem",
            }}
          />
        </div>
      </div>
      <div className={styles.blurp}>
        <img
          src={"/blurp.svg"}
          loading="lazy"
          alt={"blurp background image"}
          width={240}
          height={240}
          style={{
            width: "auto",
            height: "15rem",
          }}
        />
        <ScrollingP p={props.blurp} />
      </div>
    </div>
  );
}
