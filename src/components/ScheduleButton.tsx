"use client";

import Script from "next/script";
import { useRef, useState } from "react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0OG8xvkEUFtpwZSDrBzA4Rf57stjihFeDHdpsMH1_VeGRScSjIWngzTxk3WC8iBlVJuavNO9y3?gv=true";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export function ScheduleButton({ className }: { className?: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const init = () => {
    if (window.calendar?.schedulingButton && targetRef.current) {
      window.calendar.schedulingButton.load({
        url: SCHEDULE_URL,
        color: "#33b679",
        label: "Book an appointment",
        target: targetRef.current,
      });
    } else {
      setFailed(true);
    }
  };

  return (
    <div className={className}>
      {/* React 19 / App Router hoists this <link> into <head> automatically */}
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={init}
        onError={() => setFailed(true)}
      />
      <div ref={targetRef} />
      {failed && (
        <a
          href={SCHEDULE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#33b679] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Book an appointment
        </a>
      )}
    </div>
  );
}
