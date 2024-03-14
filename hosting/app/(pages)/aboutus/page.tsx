import FounderCard from "../../components/cards/founder-card";
import CalloutTitle from "../../components/snippets/callout-title";
import IntervalBar from "../../components/snippets/intervalBar";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";
import Associates from "../../components/associates";
import { aboutUsData, foundersData } from "../../api/home/data";

export default function AboutUs() {
  const page = aboutUsData
  const founders = foundersData;
  return (
    <section id={page.id} className={styles.aboutus + " full"}>
      <div className={styles.angle}></div>
      <SectionHeader {...page.sectionHeader} />
      <div className="content display-flex flex-justify-center flex-row font-color_mute">
        <CalloutTitle
          {...page.calloutTitle}
        />
        <IntervalBar />
        <div className={styles.subgrid}>
          <div className={styles.mission}>
            <img
              src={"/Our Mission.svg"}
              loading="lazy"
              alt={"Our Mission"}
              style={{
                width: "auto",
                height: "4.5rem",
              }}
            />
            <h4>
              Our <br /> MISSION
            </h4>
            <p>
              Design state-of-the-art digital marketing solutions for North
              American clients through remote collaboration
              in Latin America and locally
            </p>
          </div>
          <div className={styles.values}>
            <img
              src={"/Our Values.svg"}
              loading="lazy"
              alt={"Our values"}
              style={{
                width: "auto",
                height: "4.5rem",
              }}
            />
            <h4>
              Our <br /> VALUES
            </h4>
            <p>
              Working smart leads to better results. Trust is the basis of any
              (working) relationship. Be mindful of yourself, others, and the
              impact of your actions in the world. Remote work brings global
              talent together and empowers economic development. If you want to
              communicate, language isn’t a barrier. Life-work balance is
              sustainable. We believe in altruism and using our resources to
              help others.
            </p>
          </div>
        </div>
        <IntervalBar />
        <div className={styles.ourteam + ' font-color_white'}>
          <img
            src={"/ourteam.svg"}
            loading="lazy"
            alt={"Our team icon with 4 heads overlapped"}
            style={{
              width: "3.5rem",
              height: "auto",
            }}
          />
          <h3>Our Team</h3>
        </div>
        {founders.map((founder, key) => (<FounderCard key={key} {...founder} />))}
        <IntervalBar />
        <div className={styles.ourassociates}>
          <img
            src={"/ourassociates.svg"}
            loading="lazy"
            alt={"Our associates icon with 3 heads overlapped"}
            style={{
              width: "3.5rem",
              height: "auto",
            }}
          />
          <h3 className="font-color_white">Meet our Associates</h3>
          <p>
            At <b>Studio DMLA</b>, the well-being and development of our
            associates come first. Through these incredible collaborations
            locally and in Latin America, we can deliver first-class and timely
            services to our clients.
          </p>
        </div>
        <Associates />
      </div>
    </section>
  );
}
