import { Building2, Mail, MapPin } from "lucide-react";
import { PageHero, Reveal, SectionLabel } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

const contactPoints=[
 ["Connect","info@dtgeotech.com","Start a monitoring conversation",Mail],
 ["Office","Brisbane, Queensland, Australia","DTG Headquarters",Building2],
 ["Operations","Yogyakarta, Indonesia","Remote Monitoring Centre",MapPin],
];

export default function Contact(){return <main><PageHero kicker="Contact / Briefing" index="04" title="Start a monitoring conversation." body="Talk to DTG about your monitoring landscape, governance requirements and operational decision-support needs."/><section className="border-b hairline py-16 md:py-20"><div className="shell"><SectionLabel>Contact DTG</SectionLabel><div className="grid gap-px bg-[#073F4A24] md:grid-cols-3">{contactPoints.map(([label,value,description,Icon],i)=><Reveal className="bg-[#0E1823] p-6 md:p-7" delay={i*.06} key={label as string}><Icon size={17} className="text-[#9CB6C2]"/><p className="eyebrow mt-10">{label as string}</p><h2 className="mt-4 text-xl leading-7 tracking-[-.035em] text-[#F3F5F4]">{value as string}</h2><p className="body-copy mt-3">{description as string}</p></Reveal>)}</div></div></section><section className="shell py-20 md:py-28"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><SectionLabel>Initiate a briefing</SectionLabel><p className="subhead max-w-md">Share your monitoring landscape, operational priorities and decision-support requirements.</p></div><Reveal><ContactForm/></Reveal></div></section></main>}
