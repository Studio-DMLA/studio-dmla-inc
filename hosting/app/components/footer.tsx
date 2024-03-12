import styles from './footer.module.css'
import dynamic from 'next/dynamic'
 
const ContactUs = dynamic(() =>
  import('../(pages)/contactus/page').then((mod) => mod)
)
export default function Menu() {
  return (
    <footer className={styles.footer + ' full'}>

      <ContactUs />
    </footer>)
  }