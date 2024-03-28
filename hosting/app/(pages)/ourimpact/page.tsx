import ActivityCard from "../../components/cards/activity-card";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";

export default function OurImpact() {
  return (
    <section className={styles.ourimpact + " full subgrid"}>
      <SectionHeader id="ourimpact" darker={true} title="OUR IMPACT" subtitle="" />
      
      <div className={styles.globeHeadline + ' popout subgrid'}>
        <img
          className={styles.globe}
          src="/hands-globe.svg"
          loading="lazy"
          width={160}
          height={160}
          alt=""
          style={{
            width: "10rem",
            height: "auto",
          }}
        />
        <h3>Sustainability starts from within</h3>
      </div>
      <div className={styles.mainContent + ' content typ-gap subgrid'}>
        <p>
          At Studio DMLA, we love to show our appreciation and promote the
          development of our associates. Our main contribution is the economic
          development in Brazil by providing access to North American markets
          and resources.
        </p>
        <p>Here are some of our recent activities.</p>
        <ActivityCard
          image="img-post-joy-of-english-andreaheald-10weeksenglishprogram.webp"
          imageAlt="Joy-of-English Andrea Heald"
          title="The Joy of English: English for tech professionals"
          subtitle="Workshop led by Andrea Heald-Miller, M.Ed."
          description="Our associates joined Andrea’s online lessons once a week over 10 weeks,  in addition to one-to-one sessions. Homework was assigned after each lesson and Andrea encouraged the team to take advantage of this extra material and time. Lessons comprised of both activities and lectures."
          scroller="> Expanding vocabulary and building confidence in meetings and interviews
> Developing clear and natural pronunciation
> Delivering effective presentations
> Writing professional emails.
DMLA plans to offer this professional development opportunity every year to our associates."
          link=""
        />
        <ActivityCard
          image="img-post-vf-contabil-viviane-accountingwebinar.webp"
          imageAlt="Contabil Viviane Accounting - Webinar"
          title="Accounting webinar"
          subtitle="Webinar led by accounting specialist Vivi Figueiredo"
          description="One of our values is to support partners to follow best practices with integrity. We had a unique opportunity to learn more about Brazilian fiscal procedures with Vivi. Studio DMLA offered this complimentary consultation to clarify all our Brazilian associates’ questions."
          scroller=""
          link=""
          imageRight={true}
        />
        <ActivityCard
          image="flowers-support-associates-dreams.webp"
          imageAlt="flowers Support Associates Dreams"
          title="Supporting our associates’ dreams"
          description="At Studio DMLA, we embrace a model of business which conciliates work with a fulfilling life. One of our goals is to offer a sustainable collaboration that support our associates to pursue their dreams. We also love being a part of our Associates special moments, by sending gifts in their birthdays and other important dates."
          scroller=""
          link=""
          imageRight={false}
        />
        <ActivityCard
          image="post-backpackbuddies.webp"
          imageAlt="BackPack Buddies cause"
          title="Backpack Buddies"
          subtitle="At Studio DMLA, we believe in giving back"
          description="Backpack Buddies is a grassroots organization with a vision rooted in family, community, and empathy. In 2012, the mother-daughter duo Joanne and Emily-Anne discovered the need of children from inner-city schools for food on weekends. Since then, they have been helping to fill the weekend hunger gap by providing meals and snacks directly to those who need them.
            Studio DMLA contributes monthly to Backpack Buddies in addition to supporting their special initiatives, such as the Holiday Food Drive. 
            Join us in supporting this important cause"
          scroller=""
          link=""
          imageRight={true}
        />
      </div>
    </section>
  );
}
