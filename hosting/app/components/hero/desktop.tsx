import styles from './hero.module.css'

export default function HeroDesktop() {
  return (
    <div id='desktop' className={styles.hero + ' full hide-on-mobile hide-on-tablet'}>
    <h3>HERO</h3>
    
    </div>
  )
}