import { color_var } from "../../utils/color-var-resolver";
import styles from "./callout-title.module.css";

interface Props {
  title: string;
  subtitle?: string | string[];
  title_color?: string;
  subtitle_color?: string;
  image_alt?: string;
  image_url?: string;
  side_image_url?: string;
  side_image_alt?: string;
}

export default function CalloutTitle(props: Props) {
  return (
    <div className={styles.calloutTitle}>
      <img
        src={"/" + props.image_url}
        loading="lazy"
        alt={props.image_alt}
        style={{
          width: "auto",
          height: "5.5rem",
        }}
      />
      <h3
        className={styles.title}
        style={{ color: color_var(props.title_color) }}
      >
        {props.title}
      </h3>
      <div className={styles.grid}>
        <div
        className={props.side_image_url ? styles.onecol : styles.twocol }
          style={{ color: color_var(props.subtitle_color) }}
        >
          {typeof props.subtitle === "string" ? (
            <p>{props.subtitle}</p>
          ) : (
            props.subtitle?.map((sub, i) => (
              <p key={i}>
                {sub}
              </p>
            ))
          )}
        </div>
        {props.side_image_url ? (<img
          src={"/" + props.side_image_url}
          loading="lazy"
          alt={props.side_image_alt}
          style={{
            width: "auto",
            height: "16rem",
          }}
        />) : null}
      </div>
    </div>
  );
}
