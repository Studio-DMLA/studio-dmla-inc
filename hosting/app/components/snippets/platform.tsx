import styles from "./platform.module.css";
import PlatformReason from "./platformReason";

interface Props {
  image: string;
  alt: string;
  reason: string;
}

export default function Platform(props: Props) {
  return (
    <div className={styles.platform}>
      <img
        className={styles.platformLogo}
        src={props.image}
        loading="lazy"
        alt={props.alt}
      />
      <PlatformReason text={props.reason} />
    </div>
  );
}
