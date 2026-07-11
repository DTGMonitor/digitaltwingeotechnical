const monitoringNarrative = [
  {
    number: "01",
    title: "Data exists",
    copy: "Radar, GNSS, prisms, InSAR, LiDAR and VWP are often already in place.",
  },
  {
    number: "02",
    title: "Interpretation gap",
    copy: "Signals remain fragmented across systems, teams and reporting workflows.",
  },
  {
    number: "03",
    title: "Independent review",
    copy: "DTG validates, correlates, contextualises and governs monitoring information.",
  },
  {
    number: "04",
    title: "Trusted action",
    copy: "Teams gain clearer operational awareness and more defensible decisions.",
  },
];

export function MonitoringChallenge() {
  return (
    <section id="about" className="monitoring-challenge" aria-labelledby="monitoring-challenge-title">
      <div className="site-container challenge-container">
        <div className="challenge-header">
          <p className="section-label">THE MONITORING CHALLENGE</p>
          <h2 id="monitoring-challenge-title">More Data. Less Clarity.</h2>
          <p>
            Monitoring systems are already in place. The challenge is turning fragmented data, alarms and reports into
            a clear picture teams can trust.
          </p>
        </div>

        <ol className="challenge-narrative" aria-label="Monitoring challenge narrative">
          {monitoringNarrative.map((item) => (
            <li className="challenge-narrative-item" key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
