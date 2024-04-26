import BookaMeetingButton from '../snippets/bookameeting'
import { heroContent } from './hero'
import styles from './hero.module.css'

export default function HeroTablet() {
  return (
    <div id='tablet' className={`${styles.hero} ${styles.tablethero} ` + ' full  hide-on-mobile hide-on-desktop'}>
      <img
        src={"/Tablet Hero.webp"}
        loading="lazy"
        alt={"Tablet Hero"}
        width={884}
        height={617}
        style={{
          width: "38.5rem",
          height: "auto",
          maxWidth: "100%",
        }}
      />
      <div>
        <h1 style={{ fontSize: "19.5px" }}>{heroContent.title}</h1>
        <div className={styles.quote}>
          <img
            src={"/hero_quote.svg"}
            loading="lazy"
            alt={"Decorative quote mark"}
            width={28}
            height={28}
            style={{
              width: "28px",
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
            width={28}
            height={28}
            style={{
              width: "28px",
              height: "auto",
            }}
          />
        </div>
        <h2 style={{ fontSize: "13.5px" }}>{heroContent.tagLine}</h2>
      </div>

      <BookaMeetingButton />
    </div>
  )
}