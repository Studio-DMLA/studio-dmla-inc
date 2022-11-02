export default function PortfolioPage() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Check out the latest projects we have been working on:</p>
      <div className="portfolio-items">
        <div className="portfolio-card" >
          <h3><span>2021 Global Village Hawaii Fee Sheet:</span></h3>
          <a href="https://lnkd.in/gqXYtsK" target="_blank">
            <div className="img"><img src="/assets/portfolio/hawaii fee sheet.jpg" /></div>
          </a>
        </div>
        <div className="portfolio-card" >
          <h3><span>2021 Global Village Hawaii Brochure:</span></h3>
          <a href="https://lnkd.in/gsZKx9F" target="_blank">
            <div className="img"><img src="/assets/portfolio/hawaii.jpg" /></div>
          </a>
        </div>
        <div className="portfolio-card" >
          <h3><span>Global Village Victoria Website:</span></h3>
          <a href="https://gvenglish.com/canada" target="_blank">
            <div className="img"><img src="/assets/portfolio/gvvic.jpg" /></div>
          </a>
        </div>
        <div className="portfolio-card" >
          <h3><span>Tribe Management:</span></h3>
          <a href="https://tribemgmt.com" target="_blank">
            <div className="img"><img src="/assets/portfolio/tribe.jpg" /></div>
          </a>
        </div>
      </div>
    </div>
  )
}