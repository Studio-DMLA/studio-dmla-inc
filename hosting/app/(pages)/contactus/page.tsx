"use client";
import Script from "next/script";
declare const window: any;

export default function ContactUs() {
  const hubspot = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "6868694",
        formId: "c27e0357-f5de-455d-80bb-1c8387b145f0",
        target: "#hubspotForm",
      });
    }
  };
  return (
    <div className="content typ-gap block">
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        onLoad={hubspot}
        strategy="lazyOnload"
      />
      <div id="contactus">
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
}
