import CalloutTitle from "../../components/snippets/callout-title";
import ExpertiseCard from "../../components/cards/expertise-card";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";
import BookaMeeting from "../bookameeting/page";

const p = {
  sectionId: "wedo",
  sectionHeader: {
    darker: true,
    title: "What we do",
    subtitle: "",
  },
  callOutTitle: {
    title: "Handmade Digital Marketing",
    title_color: "primary",
    subtitle:
      "Our digital marketing services are tailored to your needs. This means it’s not just our work that’s customized; the way we do it is also designed to fit your goals and processes.",
    image_url: "mac pc handmade charts.svg",
    image_alt: "Charts on a screen mac or on a computer",
  },
  title: "Our Areas of Expertise",
  title_color: " font-color_primary",
  image: {
    src: "/looking-glass-check.svg",
    alt: "looking glass with a checkmark",
  },
  expertiseCards: [
    {
      id: 'web-dev-design',
      image: "mobile-desktop-ready.svg",
      imageAlt: "Mobile and desktop ready websites icon",
      image_subtitle: "Web Development, Design & Maintenance",
      subjects: [
        {
          title: "Web Development",
          descriptions: [
            "We specialize in coding from scratch, implementing web components, Angular development, and WordPress template customization.",
            "Our services include:",
            "> Website development and revamp.",
            "> Website migration package.",
            "> Ongoing web updates.",
          ],
        },
        {
          title: "Web Design",
          descriptions: [
            "Our web design offerings include design thinking, lean UX/UI, interface design, and prototypes.",
          ],
        },
        {
          title: "Web Maintenance",
          descriptions: [
            "Maintenance of a WordPress website, including:",
            "> Updating the WP system, plugins, and theme.",
            "> Testing and Quality Assurance of the above updates in a staging environment before moving to production.",
            "> Monthly report on maintenance activities, including updates performed, regression tests, and relevant recommendations.",
          ],
        },
      ],
    },
    {
      id: 'technical-seo',
      image: "compass-coge.svg",
      imageAlt: "Navigate the digital word with SEO",
      image_subtitle: "Technical SEO (Search Engine Optimization)",
      subjects: [
        {
          title: "Technical SEO",
          marginNormal: true,
          descriptions: [
            "If you are seeking a local SEO company, we have a full suite of services including:",
            "> Website and SEO audit, complete report along with errors and warning documents.",
            "> Post-audit technical optimization to improve the performance and page speed of the website, especially on mobile devices.",
            "> Monthly SEO ranking reports, with insights on how to improve your website performance to position higher and increase market share against competitors.",
          ],
        },
      ],
    },
    {
      id: 'digital-graphic-design',
      image: "digital-pen-tablet.svg",
      imageAlt: "Mobile and desktop ready websites icon",
      image_subtitle: "Digital & Graphic Design",
      subjects: [
        {
          title: "Offline Marketing",
          descriptions: [
            "Our skills include visual identity, brand manuals, logo design, corporate materials, online and print brochure design, and more.",
          ],
        },
        {
          title: "Paid Media",
          descriptions: [
            "In addition to organic results, you may want to consider a well-calibrated strategy with Online Ads for your customer journey. If you are interested in learning more about Paid Media strategies, we would be happy to guide you.",
          ],
        },
        {
          title: "Copywriting",
          descriptions: [
            "We consider copywriting a key part of the process of designing marketing materials. Creative and polished copy highlights your product or service, which adds value to your brand.",
          ],
        },
      ],
    },
    {
      id: '3d-rendering',
      image: "3d-laptop-configurar.svg",
      imageAlt: "Mobile and desktop ready websites icon",
      image_subtitle: "3D Rendering",
      subjects: [
        {
          title: "3D Rendering",
          descriptions: [
            "Studio DMLA is now offering 3D rendering services. We specialize in scenography, and furniture creations for points of sale, store windows, and spaces. Get in touch with us to learn more about our 3D rendering offerings.",
          ],
        },
      ],
    },
  ],
};

export default function Wedo() {
  return (
    <section
      className={styles.wedo + " full subgrid font-color_primary"}
    >
      <SectionHeader
      id={p.sectionId} {...p.sectionHeader} />
      <div className="content typ-gap display-flex flex-justify-center flex-row font-color_white">
        <CalloutTitle {...p.callOutTitle} />
        <div className="display-flex flex-align-center gap">
          <img
            src={p.image.src}
            alt={p.image.alt}
            loading="lazy"
            width={60}
            height={60}
            style={{
              width: "auto",
              height: "3.75rem",
            }}
          />
          <h3 className={styles.titleAreas + p.title_color}>{p.title}</h3>
        </div>
        {p.expertiseCards.map((e, key) => (
          <ExpertiseCard key={key} {...e} />
        ))}

        <div className={styles.letsGetStarted}>
          <div className={styles.titleGetStarted}>
            <img
              src={"/hands-shaking.svg"}
              loading="lazy"
              alt="looking glass with a checkmark"
              width={47}
              height={32}
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <h3 className={styles.titleAreas + " font-color_primary"}>
              Let's get started
            </h3>
          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number1.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              width={14}
              height={32}
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              Set up an initial call to discuss your digital marketing needs and
              goals.
            </p>
          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number2.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              width={26}
              height={32}
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              Choose the model of work: direct placement, the assigned team at
              DMLA, or per scope.
            </p>
          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number3.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              width={27}
              height={32}
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              We’ll create a strategy and source the best professionals globally
              to work on your project.
            </p>
          </div>
        </div>
        <BookaMeeting />
      </div>
    </section>
  );
}
