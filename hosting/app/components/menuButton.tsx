import Link from "next/link";

export default function MenuButton(props: {
  startIcon?: string;
  endIcon?: string;
  text: string;
  role: string;
  href: string;
}) {
  const attriPreIcon = {
    src: "/" + props.startIcon + ".svg",
  };
  const attriA = {
    href: "#" + props.href,
  };
  return (
    <Link href={props.href} className="navButton">
      {props.startIcon ? (
        <span className="nav-pre-icon">
          <img className="icon" loading="lazy" alt="menu" {...attriPreIcon} />
        </span>
      ) : null}
      <span className="text">{props.text}</span>
      <span className="line45"></span>
    </Link>
  );
}