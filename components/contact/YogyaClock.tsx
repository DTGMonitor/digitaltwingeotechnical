"use client";

/**
 * Live Yogyakarta (WIB) time for the Remote Monitoring Centre section.
 *
 * HYDRATION: renders "--:--" on the server and on first client paint, then fills in after mount.
 * Formatting a real time during render would produce a server/client mismatch — the server is in
 * a different timezone and a different second.
 *
 * This states the CURRENT TIME in Yogyakarta. It is not a staffing claim: it says nothing about
 * who is working, only what time it is there. The staffing wording lives in the copy beside it
 * and is sign-off gated ("staffed for out-of-hours monitoring" — never "24/7").
 */

import { useEffect, useState } from "react";

export function YogyaClock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    function tick() {
      try {
        setTime(
          new Intl.DateTimeFormat("en-AU", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Asia/Jakarta",
          }).format(new Date()),
        );
      } catch {
        setTime("—");
      }
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cx-env__clock">
      <span className="cx-livedot" aria-hidden="true" />
      <span>
        In Yogyakarta right now it&rsquo;s{" "}
        <strong className="tnum" suppressHydrationWarning>
          {time}
        </strong>{" "}
        WIB
      </span>
    </div>
  );
}
