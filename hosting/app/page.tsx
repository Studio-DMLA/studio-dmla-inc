import AboutUs from "./(pages)/aboutus/page";
import HeroDesktop from "./components/hero/desktop";
import HeroMobile from "./components/hero/mobile";
import HeroTablet from "./components/hero/tablet";
import CuttingEdge from "./(pages)/cuttingedge/page";
import OurImpact from "./(pages)/ourimpact/page";
import styles from "./page.module.css";
import Platforms from "./(pages)/platforms/page";
import Spotlight from "./(pages)/spotlight/page";
import Wedo from "./(pages)/wedo/page";

export default function Home() {
  return (
    <main className="content">
      <div id="home" className={styles.main + " feature"}>
        <HeroDesktop />
        <HeroMobile />
        <HeroTablet />
      </div>
      <CuttingEdge />
      <AboutUs />
      <Wedo />
      <Spotlight />
      <OurImpact />
      <Platforms />
    </main>
  );
}
