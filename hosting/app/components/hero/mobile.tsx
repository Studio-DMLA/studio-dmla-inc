import styles from './hero.module.css'

export default function HeroMobile() {
  return (
    <div id='mobile' className={styles.hero + ' full hide-on-desktop hide-on-tablet'}>
    <h3>HERO</h3>
    
    </div>
  )
}