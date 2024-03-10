import CalloutTitle from "../../components/snippets/callout-title";
import ClientQuotes from "../../components/snippets/clientQuotes";
import IntervalBar from "../../components/snippets/intervalBar";
import SectionHeader from "../../components/snippets/section-header";
import SpotlightCard from "../../components/cards/spotlight-card";
import styles from "./page.module.css";

export default function Spotlight() {
  return (
    <section
      id="spotlight"
      className={styles.spotlightContainer + " full subgrid"}
    >
      <SectionHeader title="PROJECT SPOTLIGHT" subtitle="" titleColor="secondary-color"/>
      <div className="content display-flex flex-justify-center flex-row font-color_gray-medium">
        <CalloutTitle
          title={"Check out some of our recent projects:"}
          title_color="primary"
          subtitle={
            "We are proud to have worked with clients ranging from real estate to international education to tourism and beyond."
          }
          image_url="laptop-star.svg"
          image_alt="laptop with a star icon"
        />
        <SpotlightCard
          title="Placement of developers"
          logoAlt="Logo of bunking"
          logoImage="BunkingLogog.svg"
          image="Macbook Portfolio Screens.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Web Development, Maintenance & Technical SEO"
          logoAlt="Logo of bunking"
          logoImage="LogoGlobalVillage.png"
          image="Macbook Portfolio Screens Global Village.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={true}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Placement of developers"
          logoAlt="Logo of bunking"
          logoImage="IELTS-logo.png"
          image="Macbook Portfolio Screens - ielts.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Web Development, Maintenance & Technical SEO"
          logoAlt="Logo of bunking"
          logoImage="gateway logo.png"
          image="Macbook Portfolio Screens - gateway.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={true}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Web Development, Maintenance & Technical SEO"
          logoAlt="Logo of bunking"
          logoImage="logoSLD.png"
          image="Macbook Portfolio Screens - SLD.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          link=""
        />
        
        <img
          className=""
          src={"/3 circles outline.svg"}
          loading="lazy"
          alt="3 circles to add as a divider"
          style={{
            width: "auto",
            height: "2rem",
          }}
        />
        <ClientQuotes title={"Hear from our clients"} quotes={[{
          quote: "Huge congratulations to Maria Paula Murad and the whole DMLA team! I am so happy to see that the team keeps on growing and flourishing! Working with MP in the past has always been such a great, pleasant, and fun experience, and I am sure she has built that same work culture with Studio DMLA.",
          name: "Redge Quedit",
          sub_text: "Test Centre Manager at Global Village Test Centre",
          image_alt: "Redge Quedit from Global Village Test Centre",
          image_url: "redge quedit from global village.png",
        }]} />
      </div>
    </section>
  );
}
