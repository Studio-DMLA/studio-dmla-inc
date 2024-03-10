import IntervalBar from "../../components/snippets/intervalBar";
import Platform from "../../components/snippets/platform";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";

export default function Platforms() {
  return (
    <section id="platforms" className={styles.platformsContainer + " full subgrid"}>
      <SectionHeader title="Platforms We Use" subtitle="At Studio DMLA, we keep up with the latest trends in technology to serve our associates and clients well. Here are some of the platforms we use:" />

      <div className="content display-flex gap flex-justify-center">
      
        <Platform image="/1password-logo.svg" alt="" reason="security" />
        <Platform image="/clockify-logo.svg" alt="" reason="time tracker" />
        <Platform
          image="/google-workspace-logo.svg"
          alt=""
          reason="collaborative"
        />
        <Platform image="/hubspot-logo.svg" alt="" reason="CRM" />
      </div>
      <IntervalBar />
    </section>
  );
}
