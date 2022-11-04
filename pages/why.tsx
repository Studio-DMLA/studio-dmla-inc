import Link from "next/link";
import HomeStyles from '../styles/Home.module.scss';

export default function WhyPage() {
  return (
    <div className='page_content'>   
      <h1>About studio DMLA</h1>
      <p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results, and a shared vision. </p>
      <p>We do not do business as usual. Our digital boutique has real connections with our clients, provides perspective, and solutions for problems they did not know they have. </p>
      <p>We partner with the best in each field globally to deliver cutting-edge digital solutions to your organization while being responsible for the strategy, project management, and final product. </p>
      <div className="flex">
        <div className="MP">
          <div className="img"><img src="./assets/MP.webp" alt="Maria Paula" /></div>
          <div className="description"><h3>Maria Paula Murad, Founder & Head of Marketing and Sales</h3>
            <p>Maria Paula Murad has a background in Journalism and more than fifteen years of experience working with strategic communications. Having worked in the international education industry for the past 7 years, Maria Paula built expertise in digital marketing through different roles at GV English Centres and ILSC Education Group. Before that, MP worked with corporate communications back in Brazil. At CDI, she worked with Alcoa to implement public relations initiatives. At Casas Bahia, MP created the content for internal communications, email marketing, and campaigns. At Alto Astral, Maria Paula was part of the team that started the company’s digital marketing department. Portuguese is her native language, and she is proficient in English and Spanish. <a href="https://www.linkedin.com/in/mariapaulamurad/" >Click here</a> to connect with Maria Paula on LinkedIn or <Link href="/meeting">here</Link> to schedule a meeting. </p></div>
        </div>
        <div className="mission">
          <h3>Mission statement</h3>
          <p>“Design state of art digital marketing solutions through global partnerships and remote work.”</p>
          <h3>Values</h3>
          <ul>
            <li>Working smart leads to better results</li>
            <li>Trust is the basis of any working relationship</li>
            <li>Be mindful of yourself, others, and the impact of your actions in the world</li>
            <li>Remote work brings global talent together and empowers economic development</li>
            <li>If you want to communicate, language isn’t a barrier </li>
            <li>Life-Work balance is sustainable</li>
            <li>We believe in effective altruism and using our resources to help others.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}