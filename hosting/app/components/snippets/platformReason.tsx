import styles from './platformReason.module.css'

interface Props {
  text: string;
}

export default function PlatformReason(props: Props) {
  return (
    <div className={styles.platformReason}>
      <span>{props.text}</span>
    </div>
  )
}