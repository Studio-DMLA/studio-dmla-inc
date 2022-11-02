import { useEffect } from "react";
declare const hbspt: any;

export default function ContactUsPage() {
  useEffect(() => {
    
    hbspt.forms.create({
      portalId: '6868694',
      formId: 'c27e0357-f5de-455d-80bb-1c8387b145f0',
      target: '#hubspotForm'
      });
      window.scrollTo(0, 0);
  }, []);
  return (
    <div>      
      <p>Contact us</p>   
            <div id="hubspotForm"></div>
    </div>
  )
}