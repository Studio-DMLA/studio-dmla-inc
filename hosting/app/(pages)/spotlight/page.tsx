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
          title="Placement of Developers"
          logoAlt="Logo of bunking"
          logoImage="BunkingLogog.svg"
          image="Macbook Portfolio Screens.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "In the past two years, we have placed software developers professionals with this client: https://bunking.com/, who helped to develop the platform, including a Content Management System, from scratch. The technical requirements included experience and proficiency with React, Node, and MongoDB. The outcome was speeding up the code production to support the client’s investment plan."
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
            "The main goal was to enhance the customer experience on the website, besides modernizing our client’s online presence during the pandemic period. The challenge was the large amount of information as well as the design of the new website from scratch, in addition to the implementation of the development tasks of a technical SEO audit to improve the performance on search engines. After the development, we started with website maintenance activities: updating the WordPress system, plugins, and theme in addition to new developments; and providing a monthly report on maintenance activities."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Web Development & Maintenance"
          logoAlt="Logo of bunking"
          logoImage="IELTS-logo.png"
          image="Macbook Portfolio Screens - ielts.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "The most important outcome was the design of the first website (gvenglish), which created a benchmark for the subdomain website (ielts.gvenglish). After the development, we started with website maintenance activities: updating the WordPress system, plugins, and theme in addition to new developments; and providing a monthly report on maintenance activities."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Web Migration, Development & Maintenance"
          logoAlt="Logo of bunking"
          logoImage="gateway logo.png"
          image="Macbook Portfolio Screens - gateway.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={true}
          description={
            "Since the gatewaypm.com website has e-commerce, and new transactions can happen anytime, we needed a way to ensure the same database would be serving the old webserver (Rentsync) and the new one (FlyWheel). The coding happened in the development environment: updating plugins, coding, and testing. When a version was ready to test, we deployed it to the staging environment where everyone could try it. We had feedback and adjustment cycles in this phase until everything was ready for production. After the migration was completed, we started with gatewaypm.com maintenance activities: updating the WP system, plugins, and theme; and a monthly report on maintenance activities."
          }
          link=""
        />
        <IntervalBar />
        <SpotlightCard
          title="Newsletter template"
          logoAlt="Logo of bunking"
          logoImage="logoSLD.png"
          image="Macbook Portfolio Screens - SLD.png"
          imageAlt="Macbook Portfolio Screens with the bunking project on screen"
          imageRight={false}
          description={
            "A newsletter template that gives autonomy to the client to develop the content in an organized way, maintaining the company's visual identity without using professional design tools."
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
          sub_text: "Manager, Administration at Global Village Test Centre",
          image_alt: "Redge Quedit from Global Village Test Centre",
          image_url: "redge quedit from global village.png",
        }]} />
      </div>
    </section>
  );
}
