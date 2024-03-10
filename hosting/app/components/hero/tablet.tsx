import styles from './hero.module.css'

export default function HeroTablet() {
  return (
    <div id='tablet' className={styles.hero + ' full  hide-on-mobile hide-on-desktop'}>
      <h3>HERO</h3>
    </div>
  )
}