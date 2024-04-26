import BookaMeetingButton from "../snippets/bookameeting";
import { heroContent } from "./hero";
import styles from "./hero.module.css";

export default function HeroDesktop() {
  return (
    <div
      id="desktop"
      className={
        `${styles.hero} ${styles.desktophero} ` +
        " full hide-on-mobile hide-on-tablet"
      }
    >
      <img
        src={"/Desktop Hero.webp"}
        loading="lazy"
        alt={"Desktop Hero"}
        width={1320}
        height={814}
        style={{
          width: "82.5rem",
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div>
        <h1>{heroContent.title}</h1>
        <div className={styles.quote}>
          <img
            src={"/hero_quote.svg"}
            loading="lazy"
            alt={"Decorative quote mark"}
            width={72}
            height={72}
            style={{
              width: "72px",
              height: "auto",
            }}
          />
          <blockquote style={{ fontSize: "0.9em" }}>
            {heroContent.quote}
          </blockquote>

          <img
            className="rotate180"
            src={"/hero_quote.svg"}
            loading="lazy"
            alt={"Decorative quote mark"}
            width={72}
            height={72}
            style={{
              width: "72px",
              height: "auto",
            }}
          />
        </div>
        <h2 style={{ fontSize: "medium" }}>{heroContent.tagLine}</h2>
      </div>

      <BookaMeetingButton />
    </div>
  );
}
