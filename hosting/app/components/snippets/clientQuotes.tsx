import ClientQoute, { Quote } from "./clientQuote";
import styles from "./clientQuotes.module.css";

interface Props {
  title: string;
  quotes: Quote[];
}

export default function ClientQuotes(props: Props) {
  return (
    <div className={styles.quotesContainer}>
      <div className={styles.titleArea}>
        <img
          className={styles.icon}
          src={"/client quote icon.svg"}
          loading="lazy"
          alt="icon of 2 chat bubbles"
          style={{
            width: "auto",
            height: "5.5rem",
          }}
        />
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div className={styles.sliderContainer}>
        <img
          className=""
          src={"/double arrow carrousel.svg"}
          loading="lazy"
          alt="icon of forward arrow carrousel"
          style={{
            width: "auto",
            height: "1.5rem",
          }}
        />
        {props.quotes.map((quote, key) => (
          <ClientQoute key={key} {...quote} />
        ))}
        <img
          className="rotate180"
          src={"/double arrow carrousel.svg"}
          loading="lazy"
          alt="icon of backward  arrow carrousel"
          style={{
            width: "auto",
            height: "1.5rem",
          }}
        />
      </div>
    </div>
  );
}
