import styles from "./clientQuotes.module.css";

export interface Quote {
  quote: string;
  image_url: string;
  image_alt: string;
  name: string;
  sub_text: string;
}

export default function ClientQoute(props: Quote) {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.circles}
          src="/6 circles outline.svg"
          loading="lazy"
          alt="6 circles outlined decorative"
          width={50}
          height={80}
          style={{
            width: "auto",
            height: "5rem",
          }}
        />
        <img
          className={styles.quoteImage}
          src={"/" + props.image_url}
          loading="lazy"
          alt={props.image_alt}
          width={222}
          height={224}
          style={{
            width: "auto",
            height: "14rem",
          }}
        />
      </div>
      <div className={styles.quoteColumn}>
        <div className={styles.quoteText}>
          <img
            className={styles.quoteMark1}
            src={"/quote mark.svg"}
            loading="lazy"
            alt="Quote Mark"
            width={28}
            height={28}
            style={{
              width: "auto",
              height: "1.75rem",
            }}
          />
          <blockquote>{props.quote}</blockquote>

          <img
            className={styles.quoteMark2}
            src={"/quote mark.svg"}
            loading="lazy"
            alt="Quote Mark"
            width={28}
            height={28}
            style={{
              width: "auto",
              height: "1.75rem",
            }}
          />
        </div>
        <h4 className={styles.quoteName}>{props.name}</h4>
        <p className={styles.quoteSubtext}>{props.sub_text}</p>
      </div>
    </div>
  );
}
