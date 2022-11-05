import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className='page_content'>
      <h1>Services</h1>
      <ul>
        <li>
          <h3>Web Design</h3>
          <p>Design thinking, lean UX/UI, interface design, prototypes, and gamification.</p>
        </li>
        <li>
          <h3>Web Development</h3>
          <p>Including coding from scratch, implementing web components, Angular developments, and Word Press templates customization. </p>
        </li>
        <li>
          <h3>eCommerce</h3>
          <p>Setup WooCommerce, configuration, SSL Enabling, and server requirements.</p>
        </li>
        <li>
          <h3>CRM set up</h3>
          <p>Database organization; Sales and Marketing workflows; onboarding and training.</p>
        </li>
        <li>
          <h3>SEO & SEM</h3>
          <p>SEO audit, technical SEO, keyword research, online marketing strategy, and implementation.</p>
        </li>
        <li>
          <h3>Offline marketing</h3>
          <p>Visual identity – Brand manual, logo design, and corporate materials. Flyer, folder, and brochure design to be displayed online and/or printed.</p>
        </li>
      </ul>
      <h3>Lets get started:</h3>
      <p >
        1.	Set up an <Link href="/meeting">initial call</Link> to discuss your digital marketing needs and goals;
      </p>
      <p>
        2.	We`&quot;`ll create a strategy and source the best professionals globally to work on your project;
      </p>
      <p>
        3.	You`&quot;`ll have one point of contact, from the planning until the final product is delivered.
      </p>
    </div>
  )
}