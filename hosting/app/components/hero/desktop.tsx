import BookaMeetingButton from "../snippets/bookameeting";
import styles from "./hero.module.css";

export default function HeroDesktop() {
  return (
    <div
      id="desktop"
      className={`${styles.hero} ${styles.desktophero} ` + " full hide-on-mobile hide-on-tablet"}
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
      <div >
        <h1>Handmade digital marketing services, tailored to your needs</h1>
        <div className={styles.quote}>
          
      <img
        src={"/hero_quote.svg"}
        loading="lazy"
        alt={"Decorative quote mark"}
        width={72}
        height={72}
        style={{
          width: "72px",
          height: "auto"
        }}
      />
          <blockquote  style={{fontSize: '0.9em'}}>We build a culture that empowers remote collaboration and a shared vision. We partner with the best in each field from Latin America and locally to deliver cutting-edge digital solutions to North American organizations while being responsible for the strategy, project management, and final product.</blockquote>
          
      <img
      className="rotate180"
        src={"/hero_quote.svg"}
        loading="lazy"
        alt={"Decorative quote mark"}
        width={72}
        height={72}
        style={{
          width: "72px",
          height: "auto"
        }}
      />
          </div>
        <h2 style={{fontSize: 'medium'}}>Studio DMLA is the go-to Canadian agency for digital marketing services and talent from Latin America.</h2>
      </div>
      
      <BookaMeetingButton />
    </div>
  );
}
