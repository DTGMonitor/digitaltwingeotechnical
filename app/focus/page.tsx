import { DTGFocusMark } from "@/components/brand";
import { FocusPillars, FocusVision, Workflow } from "@/components/geotechnical";
import { CTA, PageHero, Reveal, SectionLabel } from "@/components/ui";

export default function Focus() {
  return (
    <main>
      <PageHero
        kicker={
          <>
            <DTGFocusMark /> / Future Platform Vision
          </>
        }
        index="01"
        title="Focused Actionable Insight."
        body={
          <>
            <DTGFocusMark /> integrates monitoring data, engineering workflows, governance and intelligent analytics into
            a single decision-support platform.
          </>
        }
      />

      <section className="focus-section border-b hairline">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-5">
          <p className="eyebrow">Framework status</p>
          <span className="border border-[#073F4A66] bg-[#0E1823] px-3 py-2 text-[9px] uppercase tracking-[.16em] text-[#D79A2B]">
            Future Platform Vision - Currently Under Development
          </span>
        </div>
      </section>

      <section className="focus-section py-16 md:py-20">
        <div className="shell">
          <SectionLabel>
            <DTGFocusMark />
          </SectionLabel>
          <Reveal>
            <h2 className="headline max-w-4xl">
              <DTGFocusMark />
              <br />
              Focused Actionable Insight.
            </h2>
            <p className="subhead mt-5 max-w-2xl">
              <DTGFocusMark /> is being developed to integrate monitoring technologies, govern workflows and support
              informed, defensible decisions across multiple monitoring technologies.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <FocusVision />
          </Reveal>
          <div className="mt-8">
            <FocusPillars />
          </div>
        </div>
      </section>

      <section className="light-section border-y hairline py-20 md:py-24">
        <div className="shell">
          <SectionLabel>Technology-Agnostic by Design</SectionLabel>
          <Reveal>
            <h2 className="headline max-w-4xl">One Platform. Multiple Technologies. A Single Operational View.</h2>
            <p className="subhead mt-5 max-w-2xl">
              Radar, GNSS, prisms, surface LiDAR, SLAM LiDAR, InSAR, seismic systems, environmental monitoring and
              operational data can be brought into one operating environment for correlation and review. DTG is
              independent of monitoring vendors, software vendors and equipment manufacturers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="petroleum-section border-y hairline py-20 md:py-24">
        <div className="shell">
          <SectionLabel>Designed workflow</SectionLabel>
          <Reveal>
            <h2 className="headline max-w-4xl">Integrate. Govern. Decide.</h2>
          </Reveal>
          <div className="mt-10">
            <Workflow />
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
