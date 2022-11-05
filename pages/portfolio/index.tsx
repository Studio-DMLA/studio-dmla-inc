import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Check out the latest projects we have been working on:</p>
      <div className="portfolio-items">
        <div className="portfolio-card" >
          <h3><span>2021 Global Village Hawaii Fee Sheet:</span></h3>
          <Link href="https://lnkd.in/gqXYtsK">
            <div className="img"><Image src="/assets/portfolio/hawaii fee sheet.jpg" /></div>
          </Link>
        </div>
        <div className="portfolio-card" >
          <h3><span>2021 Global Village Hawaii Brochure:</span></h3>
          <Link href="https://lnkd.in/gsZKx9F">
            <div className="img"><Image src="/assets/portfolio/hawaii.jpg" /></div>
          </Link>
        </div>
        <div className="portfolio-card" >
          <h3><span>Global Village Victoria Website:</span></h3>
          <Link href="https://gvenglish.com/canada">
            <div className="img"><Image src="/assets/portfolio/gvvic.jpg" /></div>
          </Link>
        </div>
        <div className="portfolio-card" >
          <h3><span>Tribe Management:</span></h3>
          <Link href="https://tribemgmt.com">
            <div className="img"><Image src="/assets/portfolio/tribe.jpg" /></div>
          </Link>
        </div>
      </div>
    </div>
  )
}