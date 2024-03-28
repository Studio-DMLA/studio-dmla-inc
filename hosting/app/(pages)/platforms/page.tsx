import IntervalBar from "../../components/snippets/intervalBar";
import Platform from "../../components/snippets/platform";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";

export default function Platforms() {
  return (
    <section
      className={styles.platformsContainer + " full subgrid"}
    >
      <SectionHeader
      id="platforms"
        title="Platforms We Use"
        subtitle="At Studio DMLA, we keep up with the latest trends in technology to serve our associates and clients well. Here are some of the platforms we use:"
      />

      <div
        className={
          styles.platformList + " content typ-gap"
        }
      >
        <Platform image="/1password-logo.svg" alt="1password for password management" reason="security" link="https://1password.com" />
        <Platform image="/clockify-logo.svg" alt="clockify for time tracking" reason="time tracker" link="https://clockify.me" />
        <Platform
          image="/google-workspace-logo.svg"
          alt="Google workspace"
          reason="collaborative"
          link="https://workspace.google.com/lp/business/"
        />
        <Platform image="/hubspot-logo.svg" alt="Leads management tool, hubspot" reason="CRM" link="https://www.hubspot.com"/>
      </div>
      <IntervalBar />
    </section>
  );
}
