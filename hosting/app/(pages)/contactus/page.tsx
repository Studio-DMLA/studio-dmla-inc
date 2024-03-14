"use client";
import Script from "next/script";
import { useEffect } from 'react';
declare const window: any;

export default function ContactUs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
       if(window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "6868694",
            formId: "c27e0357-f5de-455d-80bb-1c8387b145f0",
            target: '#hubspotForm'
          });
       }
    });
  }, []);
  return (
    <div className="content block">
      <div
        id="contactus"
      >
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
}
