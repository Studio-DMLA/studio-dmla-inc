import styles from "./menuButton.module.css";

export default function MenuButton(props: {
  startIcon?: string;
  endIcon?: string;
  text: string;
  role: string;
  href: string;
}) {
  const attriPreIcon = {
    src: "/" + props.startIcon + ".svg",
  };
  const attriA = {
    href: "#" + props.href,
  };
  return (<a href={'#' + props.href} className={styles.navButton}>
      {props.startIcon ? 
        <span className={styles.navPreIcon}>
          <img className="icon" loading="lazy" alt="menu" {...attriPreIcon} />
        </span>
       : null}
      <span className={styles.text}>{props.text}</span>
      <span className={styles.line45}></span>
    </a>
  );
}