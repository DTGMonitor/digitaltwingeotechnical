"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ApplicationItem = [string, string, string, string, string[]];

export function ApplicationsCarousel({ applications }: { applications: ApplicationItem[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const move = useCallback(
    (direction: 1 | -1) => {
      if (!applications.length) return;
      setActiveIndex((current) => (current + direction + applications.length) % applications.length);
    },
    [applications.length],
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView || !applications.length) return;
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const id = window.setInterval(() => move(1), isMobile ? 5000 : 4000);
    return () => window.clearInterval(id);
  }, [activeIndex, applications.length, inView, move, paused]);

  if (!applications.length) return null;

  return (
    <div
      className="application-carousel mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClickCapture={(event) => {
        if (!suppressClickRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClickRef.current = false;
      }}
      onPointerDown={(event) => {
        dragStartRef.current = event.clientX;
      }}
      onPointerCancel={() => {
        dragStartRef.current = null;
      }}
      onPointerUp={(event) => {
        if (dragStartRef.current === null) return;
        const delta = event.clientX - dragStartRef.current;
        dragStartRef.current = null;
        if (Math.abs(delta) < 52) return;
        suppressClickRef.current = true;
        move(delta < 0 ? 1 : -1);
      }}
      ref={carouselRef}
    >
      <div className="application-stage" aria-label="DTG application areas">
        {applications.map(([title, body, image, href], index) => {
          const position = (index - activeIndex + applications.length) % applications.length;
          const isActive = position === 0;
          const isVisible = position === 0 || position === 1 || position === applications.length - 1;

          return (
            <Link
              href={href}
              className={`operation-preview-card ${isActive ? "is-active" : "is-side"}`}
              data-position={position}
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
              key={title}
            >
              <Image src={image} fill alt={`${title} geotechnical application`} className="object-cover" draggable={false} />
              <div>
                <span className="application-card-label">Application</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <ArrowUpRight className="application-card-arrow" size={20} />
              </div>
            </Link>
          );
        })}

        <div className="application-edge-arrows" aria-label="Applications carousel navigation">
          <button type="button" className="application-nav-button application-nav-prev" onClick={() => move(-1)} aria-label="Previous application">
            <ArrowLeft size={18} strokeWidth={1.7} />
          </button>
          <button type="button" className="application-nav-button application-nav-next" onClick={() => move(1)} aria-label="Next application">
            <ArrowRight size={18} strokeWidth={1.7} />
          </button>
        </div>
      </div>

      <div className="application-controls" aria-label="Applications carousel controls">
        <div className="application-progress" aria-hidden="true">
          <span className="application-progress-count">
            {String(activeIndex + 1).padStart(2, "0")} / {String(applications.length).padStart(2, "0")}
          </span>
          <span className="application-progress-dots">
            {applications.map(([title], dotIndex) => (
              <span className={dotIndex === activeIndex ? "is-active" : ""} key={title} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
