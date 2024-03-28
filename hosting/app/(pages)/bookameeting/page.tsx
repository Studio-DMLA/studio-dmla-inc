"use client";
import Script from "next/script";
import styles from "./page.module.css";

export default function BookaMeeting() {
  return (
    <div className={styles.meeting}>
      <Script
        type="text/javascript"
        strategy="lazyOnload"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      />
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/mariapaula3?embed=true"
      ></div>
      <div id="bookaconsultation" className={styles.bookaconsultation}></div>
    </div>
  );
}
