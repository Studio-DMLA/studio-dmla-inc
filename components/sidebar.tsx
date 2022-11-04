import Link from "next/link";
import { useState } from "react";
import { getTheme } from "./logic/theme";

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered)
    if (typeof window !== "undefined") {
      const route = document.getElementsByClassName('route');
      !hovered ? route[0].classList.add('sidebar_open') : 
      route[0].classList.remove('sidebar_open');
    }
  };

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
      <Link href="/products" >
        <div>
          <img className="icon" src="/assets/icons/storefront.svg" alt="" />
          {hovered ? <span>Products</span> : null}
        </div>
      </Link>
      <Link href="/team" >
        <div>
          <img className="icon" src="/assets/icons/group.svg" alt="" />
          {hovered ? <span>Team / Associates</span> : null}
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
        <a className={`${hovered ? "active " : ""}linkedin`} href="https://www.linkedin.com/company/studio-dmla" >        
          <img className="icon" src="/assets/icons/linkedin.svg" alt="" />
        </a>
        <a className={`${hovered ? "active " : ""}instagram`} href="https://www.instagram.com/studiodmla/" >
          <img className="icon" src="/assets/icons/instagram.svg" alt="" />
        </a>
        <div className={`${hovered ? "active " : ""}end`}>
          <img className="icon" src="/assets/icons/expand_circle.svg" alt="" /></div>
      </div>
    </div>
  )
}