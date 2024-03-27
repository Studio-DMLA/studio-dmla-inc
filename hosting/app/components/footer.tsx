import ContactUs from '../(pages)/contactus/page'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer + ' content'}>
      <ContactUs />
    </footer>)
  }