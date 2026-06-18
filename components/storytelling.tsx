"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StoryMotion(){
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(reduce) return;

  const ctx=gsap.context(()=>{
   gsap.to(".hero-image",{
    scale:1.08,
    ease:"none",
    scrollTrigger:{trigger:".story-hero",start:"top top",end:"bottom top",scrub:true}
   });

   gsap.to(".hero-sensor-field",{
    yPercent:-7,
    xPercent:2,
    ease:"none",
    scrollTrigger:{trigger:".story-hero",start:"top top",end:"bottom top",scrub:true}
   });

   gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el)=>{
    gsap.fromTo(el,{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 84%",once:true}});
   });

   gsap.utils.toArray<HTMLElement>(".why-item").forEach((el,i)=>{
    gsap.fromTo(el,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.55,ease:"power2.out",delay:i*.12,scrollTrigger:{trigger:".why-list",start:"top 82%",once:true}});
   });

   gsap.fromTo(".why-bridge",{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.75,ease:"power2.out",scrollTrigger:{trigger:".why-list",start:"top 70%",once:true}});

   gsap.fromTo(".positioning-anchor",{autoAlpha:0,y:26},{autoAlpha:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:".positioning-anchor",start:"top 84%",once:true}});

   const methodologyFlow=document.querySelector<HTMLElement>(".methodology-flow");
   if(methodologyFlow){
    gsap.utils.toArray<HTMLElement>(".methodology-step").forEach((el,i)=>{
     gsap.fromTo(el,{autoAlpha:0,y:26},{autoAlpha:1,y:0,duration:.65,ease:"power2.out",delay:i*.12,scrollTrigger:{trigger:methodologyFlow,start:"top 78%",once:true}});
    });
    gsap.fromTo(".methodology-line",{scaleX:0},{scaleX:1,duration:1.25,ease:"power2.inOut",scrollTrigger:{trigger:methodologyFlow,start:"top 72%",once:true}});
   }

   const dataDiagram=document.querySelector<HTMLElement>(".data-decision-diagram");
   if(dataDiagram){
    const inputPaths=dataDiagram.querySelectorAll<SVGPathElement>(".input-line");
    const outputPaths=dataDiagram.querySelectorAll<SVGPathElement>(".output-line");
    const drawPath=(path:SVGPathElement)=>{
     const length=path.getTotalLength();
     gsap.set(path,{strokeDasharray:length,strokeDashoffset:length});
     return length;
    };
    inputPaths.forEach(drawPath);
    outputPaths.forEach(drawPath);
    gsap.fromTo(".data-inputs p",{autoAlpha:0,x:-18},{autoAlpha:1,x:0,duration:.55,ease:"power2.out",stagger:.08,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true}});
    gsap.to(inputPaths,{strokeDashoffset:0,duration:1.35,ease:"power2.inOut",stagger:.06,delay:.24,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true},onComplete:()=>gsap.set(inputPaths,{clearProps:"strokeDasharray,strokeDashoffset"})});
    gsap.fromTo(".data-core",{autoAlpha:0,scale:.97},{autoAlpha:1,scale:1,duration:.75,ease:"power2.out",delay:.78,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true}});
    gsap.fromTo(".data-steps span",{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.45,ease:"power2.out",stagger:.14,delay:1.02,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true}});
    gsap.to(outputPaths,{strokeDashoffset:0,duration:1.15,ease:"power2.inOut",stagger:.08,delay:1.24,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true},onComplete:()=>gsap.set(outputPaths,{clearProps:"strokeDasharray,strokeDashoffset"})});
    gsap.fromTo(".data-outputs p",{autoAlpha:0,x:18},{autoAlpha:1,x:0,duration:.55,ease:"power2.out",stagger:.09,delay:1.45,scrollTrigger:{trigger:dataDiagram,start:"top 74%",once:true}});
   }

   const problemSection=document.querySelector<HTMLElement>(".problem-section");
   if(problemSection){
    gsap.utils.toArray<HTMLElement>(".sensor-node").forEach((el,i)=>{
     gsap.to(el,{x:(i%2===0?1:-1)*42,y:i%3===0?22:-18,ease:"none",scrollTrigger:{trigger:problemSection,start:"top bottom",end:"bottom center",scrub:true}});
    });
   }

   gsap.utils.toArray<HTMLImageElement>(".operation-image img").forEach((img)=>{
    const row=img.closest(".operation-row");
    if(!row) return;
    gsap.fromTo(img,{yPercent:-3,scale:1.04},{yPercent:3,scale:1.06,ease:"none",scrollTrigger:{trigger:row,start:"top bottom",end:"bottom top",scrub:true}});
   });

   const convergenceLine=document.querySelector<SVGPathElement>(".convergence-line");
   const differenceSection=document.querySelector<HTMLElement>(".difference-section");
   if(convergenceLine&&differenceSection){
    gsap.to(convergenceLine,{
     strokeDashoffset:0,
     ease:"none",
     scrollTrigger:{trigger:differenceSection,start:"top 72%",end:"bottom 48%",scrub:true}
    });
   }

   gsap.utils.toArray<HTMLElement>(".word-reveal").forEach((el,i)=>{
    gsap.fromTo(el,{autoAlpha:.18,y:34},{autoAlpha:1,y:0,duration:.75,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 78%"},delay:i*.04});
   });

   gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el)=>{
    const target=Number(el.dataset.count||0);
    const suffix=el.dataset.suffix||"";
    if(!suffix&&target===0&&el.textContent?.trim()!=="0") return;
    const obj={value:0};
    gsap.to(obj,{value:target,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 82%",once:true},onUpdate:()=>{
     const rounded=Math.round(obj.value);
     el.textContent=target>=1000?rounded.toLocaleString()+suffix:rounded+suffix;
    }});
   });
  });

  return ()=>{
   ctx.revert();
  };
 },[]);

 return null;
}
