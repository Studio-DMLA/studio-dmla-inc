import styles from "./section-header.module.css";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  darker?: boolean;
  titleColor?: string; // one of the var colors
}

export default function SectionHeader(props: Props) {
  const alt = 'decorative image for starting a segement';
  const image = props.darker ? "/ruiten-darker.svg" : "/ruiten.svg";
  const imageClasses = props.darker ? styles.ruitencolor + ' ' + styles.ruiten : styles.ruiten;
  return (
    <>  
    <span id={props.id} className={styles.sectionId}></span>
    <div className={styles.sectionHeaderContent + " feature"} >
       <img
       className={imageClasses}
       src={image}
       loading="lazy"
       alt={alt}
       width={160}
       height={160}
       style={{
         width: "10rem",
         height: "auto",
       }}
     />
      <h3 className={styles.title} style={{color: props.titleColor ? `var(--${props.titleColor})` : 'inherit'}}>{props.title} </h3>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
    </>
  );
}
