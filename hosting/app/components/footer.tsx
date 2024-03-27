import ContactUs from '../(pages)/contactus/page'
import styles from './footer.module.css'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer + ' content'}>
      <ContactUs />
    </footer>
    <GoogleTagManager gtmId="G-ZSGR746CFS" />
    </>)
  }