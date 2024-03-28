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
import SectionSplitter from "./components/snippets/section-splitter";

export default function Home() {
  return (
    <main className="content">
      <div className={styles.main + " feature"}>
        <span id="home" className={styles.sectionId}></span>
        <HeroDesktop />
        <HeroMobile />
        <HeroTablet />
      </div>
      <SectionSplitter offset={-1} split={20} startColor="gray-light" endColor="primary" />
      <CuttingEdge />
      <SectionSplitter split={30} startColor="primary" endColor="gray-light" />
      <AboutUs />
      <SectionSplitter offset={1} split={40} startColor="mute" endColor="primary" />
      <Wedo />
      <SectionSplitter offset={2} split={50} startColor="gray-light" endColor="mute" />
      <Spotlight />
      <SectionSplitter offset={3} split={60} startColor="mute" endColor="gray-light" />
      <OurImpact />
      <SectionSplitter offset={4} split={70} startColor="gray-light" endColor="mute" />
      <Platforms />
      <SectionSplitter offset={5} split={80} startColor="primary" endColor="gray-light" />
    </main>
  );
}
