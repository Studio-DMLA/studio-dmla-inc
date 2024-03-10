export default function IntervalBar() {
  return (
    <div className="content display-flex flex-justify-center">
      <img
        className="divider"
        src="/interval-bar.svg"
        loading="lazy"
        alt="decorative image for dividing a segement"
        style={{
          width: "auto",
          height: "1.1rem",
        }}
      />
    </div>
  );
}
