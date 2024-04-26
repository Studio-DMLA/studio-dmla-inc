import styles from "./platform.module.css";

interface Props {
  image: string;
  alt: string;
  reason: string;
  link: string;
}

export default function Platform(props: Props) {
  return (
    <a className={styles.platform + ' muted'} href={props.link} target="_blank">
      <img
        className={styles.platformLogo}
        src={props.image}
        loading="lazy"
        alt={props.alt}
        width={189}
        height={38}
      />
      
      <span className={styles.platformReason}>{props.reason}</span>

    </a>
  );
}
