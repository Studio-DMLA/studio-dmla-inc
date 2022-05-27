import Link from "next/link";
import { useState } from "react";
import { getTheme } from "./logic/theme";

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const theme = getTheme();
  return (
    <div className={`sidebar ${hovered ? "active" : ""}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover} >
      <Link href="/">
        <div>
          {hovered ? <img src={`assets/icons/logo-dmla-${theme}.svg`} alt="" /> : <img src="assets/icons/android-chrome-192x192.png" alt="" />}
        </div>
      </Link>
      <Link href="/why" >
        <div>
          <img className="icon" src="/assets/icons/book.svg" alt="" />
          {hovered ? <span>Why</span> : null}
        </div>
      </Link>
      <Link href="/portfolio" >
        <div>
          <img className="icon" src="/assets/icons/stack.svg" alt="" />
          {hovered ? <span>Portfolio</span> : null}
        </div>
      </Link>
      <Link href="/services" >
        <div>
          <img className="icon" src="/assets/icons/leaves.svg" alt="" />
          {hovered ? <span>Services</span> : null}
        </div>
      </Link>
      <Link href="/meeting" >
        <div>
          <img className="icon" src="/assets/icons/coffee.svg" alt="" />
          {hovered ? <span>Meeting</span> : null}
        </div>
      </Link>
      <div className="endItems">
        <Link href="/contactus" >
          <div>
            <img className="icon" src="/assets/icons/mail.svg" alt="" />
            {hovered ? <span>Contact-us</span> : null}
          </div>
        </Link>
        <a className={`${hovered ? "active" : ""}`} href="https://www.linkedin.com/company/studio-dmla" >
        <svg className="icon" viewBox="0 0 53 54" role="img"><g><path d="M28.959,51.418c0,0.924 -0.75,1.674 -1.674,1.674l-7.813,0c-0.924,0 -1.674,-0.75 -1.674,-1.674l0,-32.248c0,-0.924 0.75,-1.674 1.674,-1.674l7.813,0c0.924,0 1.674,0.75 1.674,1.674l0,2.851c0,0 1.928,-5.333 11.162,-5.128c10.415,0.231 12.311,9.627 12.625,14.041l0.004,0.016c0.026,0.125 0.04,0.25 0.041,0.377l0,0.422c0.032,0.889 0,1.434 0,1.434l0,18.144c-0.002,0.2 -0.034,0.398 -0.1,0.587c-0.174,0.492 -0.568,0.891 -1.059,1.071c-0.187,0.069 -0.384,0.103 -0.583,0.107l-8.259,0c-0.199,-0.001 -0.397,-0.033 -0.586,-0.1c-0.499,-0.176 -0.902,-0.579 -1.078,-1.078c-0.067,-0.189 -0.099,-0.387 -0.1,-0.587l0,-18.144c0,0 -0.704,-6.488 -5.128,-6.486c-6.542,0.002 -6.939,7.391 -6.939,7.391l0,17.33Z" fill="currentColor"></path><ellipse cx="7.24" cy="7.391" rx="7.24" ry="7.391" fill="currentColor"></ellipse><path d="M12.971,19.216c0,-0.949 -0.77,-1.72 -1.719,-1.72l-8.024,0c-0.949,0 -1.72,0.771 -1.72,1.72l0,32.157c0,0.949 0.771,1.719 1.72,1.719l8.024,0c0.949,0 1.719,-0.77 1.719,-1.719l0,-32.157Z" fill="currentColor"></path></g></svg>
        </a>
        <div className="end">&gt;</div>
      </div>
    </div>
  )
}