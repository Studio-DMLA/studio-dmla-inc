import BookaMeetingButton from "../snippets/bookameeting";
import { heroContent } from "./hero";
import styles from "./hero.module.css";

export default function HeroMobile() {
  return (
    <div
      id="mobile"
      className={
        `${styles.hero} ${styles.mobilehero} ` + " full hide-on-desktop hide-on-tablet"}
    >
      <img
        src={"/Mobile Hero.webp"}
        loading="lazy"
        alt={"Mobile Hero image"}
        width={384}
        height={660}
        style={{
          width: "24rem",
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div>
        <h1  style={{ fontSize: "21px" }}>{heroContent.title}</h1>
        <h2 style={{ fontSize: "12px" }}>{heroContent.tagLine}</h2>
        <div className={styles.quote}>
          <img
            src={"/hero_quote.svg"}
            loading="lazy"
            alt={"Decorative quote mark"}
            width={31}
            height={31}
            style={{
              width: "31px",
              height: "auto",
            }}
          />
          <blockquote style={{ fontSize: "10px" }}>
            {heroContent.quote}
          </blockquote>

          <img
            className="rotate180"
            src={"/hero_quote.svg"}
            loading="lazy"
            alt={"Decorative quote mark"}
            width={31}
            height={31}
            style={{
              width: "31px",
              height: "auto",
            }}
          />
        </div>
      </div>

      <BookaMeetingButton />
    </div>
  );
}
