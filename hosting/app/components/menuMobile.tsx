"use client";
import styles from "./menu.module.css";
import stylesButton from "./menuButton.module.css";
import { menuItems } from "../api/home/menu";
import { useState } from "react";

export default function MenuMobile() {
  const [toggle, setToggle] = useState(false); 
  return (
    <>
      <div className={styles.navGradient + " full hide-on-desktop hide-on-tablet"}>
        <nav
          className={styles.menuBar}
          style={{ width: "21.875rem" }}
        >
          <img
           onClick={() => setToggle(!toggle)}
            className={styles.mobileMenu}
            src="/DMLA-menu.svg"
            loading="lazy"
            alt="menu"
            style={{
              width: "2.5rem",
              height: "auto"
            }}
          />

          <img
            className={styles.brandImage}
            src="/Studio DMLA brand.svg"
            loading="lazy"
            alt="menu"
            style={{
              width: "4.25rem",
              height: "auto",
            }}
          />
        </nav>
      </div>
      <div
        id="mobileMenu"
        className={styles.mobileNav + " hide-on-desktop hide-on-tablet"}
        style={{ display: toggle ? "grid" : "none" }}
      >
        <div className={styles.close} 
           onClick={() => setToggle(!toggle)}>X </div>
        {menuItems.map((item, key) => (
          <MenuButtonMobile key={key} {...item} toggle={toggle} setToggle={setToggle} />
        ))}
      </div>
    </>
  );
}

export function MenuButtonMobile(props: {
  startIcon?: string;
  endIcon?: string;
  text: string;
  role: string;
  href: string;
  toggle: boolean;
  setToggle: any
}) {
  const attriPreIcon = {
    src: "/" + props.startIcon + ".svg",
  };
  const attriA = {
    href: "#" + props.href,
  };
  return (
    <a
      href={"#" + props.href}
      className={stylesButton.navButton}
      onClick={() => props.setToggle(!props.toggle)}
    >
      {props.startIcon ? (
        <span className={stylesButton.navPreIcon}>
          <img className="icon" loading="lazy" alt="menu" {...attriPreIcon} />
        </span>
      ) : null}
      <span className={stylesButton.text}>{props.text}</span>
      <span className={stylesButton.line45}></span>
    </a>
  );
}
