import Link from 'next/link'
import HomeStyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className='page_content'>
      <p>Home</p>
      <div>
        <div >
          <img src="./assets/logos/logo-dmla-light.svg" alt="Logo studio dmla" className={HomeStyles.logoHome} />
        </div>
        <h1 className="tagline">Digital marketing, handmade and tailored to your needs</h1>
      </div>
      <div className={HomeStyles.centergrid}>
        <div className={HomeStyles.actionpoints}>
          <Link href="/services">
            <div className='action-card'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="seedling"
                className="svg-inline--fa fa-seedling fa-w-16 lower" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z">
                </path>
              </svg>
              <h2>Services</h2>
            </div>
          </Link>
        </div>
        <div className={HomeStyles.actionpoints}>
          <Link href="/meeting" >
            <div className='action-card'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mug-hot"
                className="svg-inline--fa fa-mug-hot fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
                </path>
              </svg>
              <h2>Book a meeting</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
