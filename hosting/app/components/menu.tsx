import { menuItems } from "../api/home/menu";
import styles from "./menu.module.css";
import MenuButton from "./menuButton";
import MenuMobile from "./menuMobile";

export default function Menu() {

  return (
    <>
      <div className={styles.navGradient + " full hide-on-mobile"}>
        <nav className={styles.menuBar}>
          <a href="/">
          <img
            className={styles.brandImage}
            src="/Studio DMLA brand.svg"
            loading="lazy"
            alt="menu"
            style={{
              width: "4.25rem",
              height: "auto",
            }}
          /></a>
          {menuItems.map((item, key) => (
            <MenuButton key={key} {...item} />
          ))}
        </nav>
      </div>
      <MenuMobile />
    </>
  );
}
