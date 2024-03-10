import styles from "./expertise-card.module.css";

interface Props {
  image: string;
  imageAlt: string;
  image_subtitle: string;
  subjects: SubjectsArrayItem[];
}

interface SubjectsArrayItem {
  title: string;
  descriptions: string[];
  marginNormal?: boolean;
}

export default function ExpertiseCard(props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img
            className={styles.strokeImage}
            src={"/stroke-vector.svg"}
            loading="lazy"
            alt="decorative vector of a stroked vector"
            style={{
              width: "auto",
              height: ".2rem",
            }}
          />
          <img
            className={styles.plusImage}
            src={"/plus-art.svg"}
            loading="lazy"
            alt="decorative vector of a plus vector"
            style={{
              width: "auto",
              height: "1.1rem",
            }}
          />
          <img
            src={"/" + props.image}
            loading="lazy"
            alt={props.imageAlt}
            style={{
              width: "10rem",
              height: "auto",
            }}
          />
        </div>
        <h5 className="font-color_primary">{props.image_subtitle}</h5>
      </div>
      <div className={styles.text}>
        {props.subjects.map((subject, key) => (
          <TitleDescription {...subject} key={key} />
        ))}
      </div>
    </div>
  );
}

function TitleDescription(props: SubjectsArrayItem) {
  return (
    <div className={styles.subject}>
      <img
        className={styles.subjectImage}
        src={"/plus-art.svg"}
        loading="lazy"
        alt="decorative vector of a plus vector"
        style={{
          width: "auto",
          height: "1.1rem",
        }}
      />
      <h4 className={styles.subjectTitle + " font-color_primary"}>{props.title}</h4>
      {props.descriptions.map((description, key) => {
        const topMargin = description.trim().charAt(0) === ">" && !props.marginNormal ? "" : styles.topMargin;
        const bottomMargin = !description.trim().endsWith(':') && !props.marginNormal ? "" : styles.bottomMargin;
        return (<p className={topMargin + ' ' + bottomMargin} key={key}>{description}</p>)})}
    </div>
  );
}
