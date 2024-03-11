/* eslint-disable @next/next/no-img-element */
import styles from "./menu.module.css";
import MenuButton from "./menuButton";

export default function Menu() {
  return (
    <div className={styles.navGradient + ' full'}>
      <nav
        className={styles.menuBar + " hide-on-desktop hide-on-tablet"}
        style={{ width: "21.875rem" }}
      >
        <img
          src="/DMLA-menu.svg"
          loading="lazy"
          alt="menu"
          style={{
            width: "2.5rem",
            height: "auto",
          }}
        />
        <img
          className={styles.brandImage}
          src="/Studio DMLA brand.svg"
          loading="lazy"
          alt="menu"
          style={{
            width: "6.25rem",
            height: "auto",
          }}
        />
        <img
          className={styles.searchIcon}
          src="/Button - SEARCH mobile.svg"
          loading="lazy"
          alt="menu"
          style={{
            width: "2.5rem",
            height: "auto",
          }}
        />
      </nav>
      <nav className={styles.menuBar + " hide-on-mobile"}>
        <img
          className={styles.brandImage}
          src="/Studio DMLA brand.svg"
          loading="lazy"
          alt="menu"
          style={{
            width: "6.25rem",
            height: "auto",
          }}
        />

        <MenuButton text={"Home"} role={"go home button"} href="/" />
        <MenuButton
          text={"About Us"}
          role={"go to we do section"}
          href="aboutus"
        />
        <MenuButton text={"We Do"} role={"go to we do section"} href="wedo" />
        <MenuButton
          text={"Spotlight"}
          role={"go to spotlight section"}
          href="spotlight"
        />
        <MenuButton
          text={"Our Impact"}
          role={"go to our impact section"}
          href="ourimpact"
        />
        <MenuButton
          text={"Contact"}
          role={"go to contact us section"}
          href="contactus"
        />
        <MenuButton
          startIcon={"search"}
          endIcon={""}
          text={"Search"}
          role={"search our site"}
          href="search"
        />
      </nav>
    </div>
  );
}
