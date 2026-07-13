import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Home "Independent Monitoring Support" index. Extracted (Phase E Commit 3) from the
// retired 1429-line services-section.tsx, which held this live export alongside dead code.
const homeServices = [
  {
    number: "01",
    title: "Remote Monitoring",
    description:
      "Independent oversight of real-time geotechnical monitoring to support faster response, clearer escalation and more confident operational decisions.",
    href: "/services/remote-monitoring",
    tags: ["Alarm review", "Live monitoring", "Escalation support"],
  },
  {
    number: "02",
    title: "Reporting & Back-Analysis",
    description:
      "Clear reporting, event review and historical analysis to support traceable insight and stronger learning from monitoring events.",
    href: "/services/reporting-back-analysis",
    tags: ["Event review", "Technical reporting", "Decision records"],
  },
  {
    number: "03",
    title: "Technology Integration",
    description:
      "Connecting monitoring technologies, platforms and data streams into one clearer operational understanding.",
    href: "/services/technology-integration",
    tags: ["Multi-sensor inputs", "Platform alignment", "Data flow"],
  },
  {
    number: "04",
    title: "Data Analytics",
    description:
      "Transforming monitoring data into structured insight through analysis, correlation and clearer trend interpretation.",
    href: "/services/data-analytics-automation",
    tags: ["Trend review", "Correlation", "Movement insight"],
  },
  {
    number: "05",
    title: "Technical Advisory",
    description:
      "Independent technical guidance to support monitoring strategy, interpretation, escalation and decision-ready outcomes.",
    href: "/services/technical-advisory",
    tags: ["Strategy", "Governance", "Decision support"],
  },
];

export function HomeServicesOverview() {
  return (
    <section id="services" className="home-services-overview" aria-labelledby="home-services-title">
      <div className="site-container home-services-editorial">
        <div className="home-services-header">
          <p className="section-label">SERVICES</p>
          <h2 id="home-services-title">Independent Monitoring Support.</h2>
          <p>
            DTG supports monitoring teams through independent review, reporting, technology integration, analytics and
            advisory support.
          </p>
        </div>

        <ol className="home-services-index" aria-label="DTG services">
          {homeServices.map(({ number, title, description, href, tags }) => (
            <li key={title}>
              <Link href={href} className="home-service-index-row">
                <span className="home-service-index-number">{number}</span>
                <h3>{title}</h3>
                <div className="home-service-index-copy">
                  <p>{description}</p>
                  <div className="home-service-index-tags" aria-label={`${title} support areas`}>
                    {tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
