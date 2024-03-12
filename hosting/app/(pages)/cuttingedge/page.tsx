import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";

const specialize = [
  {
    image_url: "web-mobile_cutting-edge.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Web Development", "Design & Maintenance"],
    link: "",
  },
  {
    image_url: "technical seo.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Technical SEO (Search", "Engine Optimization)"],
    link: "",
  },
  {
    image_url: "drawing tablet.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["Digital &", "Graphic Design"],
    link: "",
  },
  {
    image_url: "3d on laptop.svg",
    image_alt: "Specialize in web development and mobile browsers",
    text: ["3D Rendering"],
    link: "",
  },
];

const waystowork = [
  {
    title: "Direct placement:",
    text: "We place professionals, such as software developers, from Latin America directly into your company in North America. They will work remotely and become part of your team while enjoying the added support of the Studio DMLA team such as weekly meetings, one-to-one preparation for dev demos, English workshops and language support, and more.",
    image_url: "number1.svg",
    image_alt: "icon for direct placement",
  },
  {
    title: "Assigned team:",
    text: "We assign a team to a client for a number of hours per month. This team, with DMLA’s oversight, has the skill set needed to complement your in-house team.",
    image_url: "number2.svg",
    image_alt: "icon for direct placement",
  },
  {
    title: "Per scope:",
    text: "We implement a project by scope with a team and the number of hours allocated to the project.",
    image_url: "number3.svg",
    image_alt: "icon for direct placement",
  },
];

export default function CuttingEdge() {
  return (
    <section
      id="cuttingedge"
      className={styles.cuttingedge + " full subgrid font-color_primary"}
    >
      <SectionHeader
        darker={true}
        title="The Canadian digital marketing studio for talent from Latin America"
        subtitle="We specialize in:"
      />
      <div className="content display-flex flex-justify-center flex-row font-color_secondary">
        <div className={styles.specialize}>
          {specialize.map((spec, key) => (
            <div key={key} className={styles.spec}>
              <img
                src={spec.image_url}
                alt={spec.image_alt}
                loading="lazy"
                style={{
                  width: "auto",
                  height: "10rem",
                }}
              />
              <div className={styles.bullet}>
                <img
                  src={"/plus-art.svg"}
                  alt="bullet icon text"
                  loading="lazy"
                  style={{
                    width: "auto",
                    height: "1rem",
                  }}
                />
                <div>
                  {spec.text.map((p, key) => (
                    <p key={key}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.waystowork}>
          <div className={styles.titleArea}>
            <img
              className={styles.icon}
              src={"/roadmap guide.svg"}
              loading="lazy"
              alt="icon of 2 chat bubbles"
              style={{
                width: "auto",
                height: "3rem",
              }}
            />
            <h3 className={styles.title + " font-color_primary"}>
              Ways to work with us
            </h3>
            <p>At Studio DMLA, we have three models of work:</p>
          </div>
          <div className={styles.ways}>
            {waystowork.map((way, key) => (
              <div key={key} className={styles.way}>
                <img
                  src={way.image_url}
                  loading="lazy"
                  alt={way.image_alt}
                  style={{
                    width: "auto",
                    height: "5rem",
                  }}
                />
                <h3 className={styles.waytitle + " font-color_primary"}>
                  {way.title}
                </h3>
                <p>{way.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
