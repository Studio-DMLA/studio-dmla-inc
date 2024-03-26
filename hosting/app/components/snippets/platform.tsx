import styles from "./platform.module.css";

interface Props {
  image: string;
  alt: string;
  reason: string;
  link: string;
}

export default function Platform(props: Props) {
  return (
    <a className={styles.platform} href={props.link} target="_blank">
      <img
        className={styles.platformLogo}
        src={props.image}
        loading="lazy"
        alt={props.alt}
      />
      
      <span className={styles.platformReason}>{props.reason}</span>

    </a>
  );
}
