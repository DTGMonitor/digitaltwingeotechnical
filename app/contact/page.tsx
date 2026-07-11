import { Building2, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { InternalHero } from "@/components/internal-hero";

const contactPoints = [
 {
  label: "Email",
  value: "info@dtgeotech.com",
  description: "Start a monitoring conversation.",
  Icon: Mail,
 },
 {
  label: "Brisbane, Queensland",
  value: "DTG Headquarters",
  description: "",
  Icon: Building2,
 },
 {
  label: "Perth, Western Australia",
  value: "DTG Corporate",
  description: "",
  Icon: Building2,
 },
 {
  label: "Yogyakarta, Indonesia",
  value: "Remote Monitoring Centre",
  description: "",
  Icon: MapPin,
 },
];

export default function Contact(){
 return <main className="contact-page">
  <InternalHero
   breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact" }]}
   title="Contact"
   subtitle="Start a monitoring conversation."
   intro="Talk to DTG about your monitoring landscape, operational priorities and decision-support needs."
   titleId="contact-title"
  />

  <section className="contact-band" aria-labelledby="contact-details-title">
   <div className="site-container">
    <div className="contact-section-heading">
     <p className="section-label">CONTACT DETAILS</p>
     <h2 id="contact-details-title">Where to reach DTG.</h2>
    </div>
    <div className="contact-card-grid">
     {contactPoints.map(({ label, value, description, Icon })=>
      <article className="contact-card" key={`${label}-${value}`}>
       <Icon aria-hidden="true" size={20}/>
       <span>{label}</span>
       <h3>{value}</h3>
       {description ? <p>{description}</p> : null}
      </article>
     )}
    </div>
   </div>
  </section>

  <section className="contact-band contact-form-band" aria-labelledby="contact-form-title">
   <div className="site-container contact-form-layout">
    <div className="contact-section-heading">
     <p className="section-label">CONTACT</p>
     <h2 id="contact-form-title">Share your monitoring context.</h2>
     <p>Tell us about your site, monitoring priorities, current systems or decision-support requirements.</p>
    </div>
    <ContactForm/>
   </div>
  </section>

  <section className="contact-closing">
   <div className="site-container">
    <p>Independent monitoring review, reporting and technical support for complex ground and infrastructure environments.</p>
   </div>
  </section>
 </main>
}
