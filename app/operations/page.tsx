import { CTA, PageHero, Reveal, SectionLabel } from "@/components/ui";

const operations=[
 ["Greatland Gold","Telfer Mine, Western Australia","Integrated geotechnical monitoring and intelligence support.","GroundProbe SSR / Catalyst Earth InSAR / Trimble Prisms"],
 ["Harmony Gold","Hidden Valley Mine, Papua New Guinea","Remote geotechnical monitoring and operational support.","GroundProbe SSR"],
 ["Golden Energy Mines","PT Borneo Indobara, Indonesia","Radar monitoring support and operational monitoring services.","CHCNAV PS-2000 Radar"],
 ["Rain Group","PT Insani Baraperkasa, Indonesia","Radar monitoring support and operational monitoring services.","CHCNAV PS-2000 Radar"],
];

export default function Operations(){return <main><PageHero kicker="Selected Operations" index="02" title="Selected operational experience." body="Mining environments across Australia, Papua New Guinea and Indonesia."/><section className="petroleum-section border-b hairline py-20 md:py-24"><div className="shell"><SectionLabel>Selected Operations</SectionLabel><div className="border-t hairline">{operations.map(([name,place,scope,tech],i)=><Reveal className="grid gap-4 border-b hairline py-7 transition hover:bg-[#C89B5A0c] md:grid-cols-[52px_1fr_1.1fr_1fr]" key={name}><span className="font-mono text-[10px] text-[#C89B5A]">0{i+1}</span><div><h2 className="text-3xl tracking-[-.065em]">{name}</h2><p className="eyebrow mt-3">{place}</p></div><p className="body-copy">{scope}</p><p className="text-xs leading-6 text-[#D5E0E4]">{tech}</p></Reveal>)}</div><p className="body-copy mt-8 max-w-3xl">Company names identify project context and do not imply formal endorsement.</p></div></section><CTA/></main>}
