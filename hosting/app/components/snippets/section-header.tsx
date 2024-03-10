import styles from "./section-header.module.css";

interface Props {
  title: string;
  subtitle: string;
  darker?: boolean;
  titleColor?: string; // one of the var colors
}

export default function SectionHeader(props: Props) {
  const alt = 'decorative image for starting a segement';
  return (
    <div className={styles.sectionHeaderContent + " feature"} >
      {props.darker ?
       <img
       className={styles.ruitencolor + styles.ruiten}
       src="/ruiten-darker.svg"
       loading="lazy"
       alt={alt}
       style={{
         width: "10rem",
         height: "auto",
       }}
     /> : <img
        className={styles.ruiten}
        src="/ruiten.svg"
        loading="lazy"
        alt={alt}
        style={{
          width: "10rem",
          height: "auto",
        }}
      />}
      <h3 className={styles.title} style={{color: props.titleColor ? `var(--${props.titleColor})` : 'inherit'}}>{props.title} </h3>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
}
