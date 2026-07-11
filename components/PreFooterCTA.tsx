import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PreFooterCTA() {
  return (
    <section className="pre-footer-cta" aria-labelledby="pre-footer-cta-heading">
      <Image
        src="/images/home/dtg-closing-cta-real-monitoring-centre.png"
        alt=""
        fill
        sizes="100vw"
        className="pre-footer-cta__image"
      />
      <div className="footer-container pre-footer-cta__inner">
        <div>
          <h2 id="pre-footer-cta-heading">Partner with DTG to turn monitoring data into trusted decisions.</h2>
          <div className="pre-footer-cta__actions">
            <Link href="/contact" className="footer-primary-link">
              CONTACT DTG <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            <Link href="/services" className="footer-text-link">
              EXPLORE SERVICES <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
