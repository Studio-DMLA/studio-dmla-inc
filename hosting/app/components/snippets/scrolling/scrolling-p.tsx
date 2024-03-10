import styles from "./scrolling-p.module.css";

interface Props {
  leftRight?: boolean; // default: false will display the leftside
  p: string;
  maxHeight?: string;
}

export default function ScrollingP(props: Props) {
  return (
    <>

    <p className={props.leftRight ? styles.before : styles.after} style={{maxHeight: props.maxHeight ?? 'none', overflowY: props.maxHeight ? 'scroll' : 'auto', overflowX: 'hidden'}}>{props.p}</p>
    </>
  );
}