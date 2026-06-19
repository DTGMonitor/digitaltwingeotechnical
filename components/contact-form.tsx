"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const RECIPIENT = "info@dtgeotech.com";

export function ContactForm(){
  const [name,setName]=useState("");
  const [organisation,setOrganisation]=useState("");
  const [email,setEmail]=useState("");
  const [context,setContext]=useState("");

  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    // Native `required` validation has passed by the time we reach here.
    const subject=`Monitoring briefing — ${organisation}`;
    const body=[
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      "",
      "Briefing context:",
      context,
    ].join("\n");
    window.location.href=`mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="glass grid gap-6 p-6 md:p-9" onSubmit={handleSubmit}>
    <Field label="Name" placeholder="Your name" value={name} onChange={setName}/>
    <Field label="Organisation" placeholder="Organisation" value={organisation} onChange={setOrganisation}/>
    <Field label="Email" type="email" placeholder="name@organisation.com" value={email} onChange={setEmail}/>
    <label><span className="eyebrow">Briefing context</span><textarea rows={4} required value={context} onChange={(e)=>setContext(e.target.value)} placeholder="Tell us about your operational landscape." className="mt-3 w-full border-b hairline bg-transparent py-3 text-sm text-white outline-none placeholder:text-[#9CB6C2]"/></label>
    <button type="submit" className="button mt-3 w-fit">Initiate conversation <ArrowUpRight size={14}/></button>
  </form>;
}

function Field({label,placeholder,value,onChange,type="text"}:{label:string,placeholder:string,value:string,onChange:(value:string)=>void,type?:string}){return <label><span className="eyebrow">{label}</span><input type={type} required value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="mt-3 w-full border-b hairline bg-transparent py-3 text-sm text-white outline-none placeholder:text-[#9CB6C2]"/></label>}
