"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CalendarDays, Check, CheckCircle2, ChevronDown, Clock3, MessageCircle, MoreHorizontal, UserRound, X } from "lucide-react";
import { Starburst } from "@/components/starburst";
import { getCopy, type Locale } from "@/lib/i18n";

type View = "client" | "business";
type Status = "pending" | "accepted" | "rejected";

const dates = ["21", "22", "23", "24", "25"];
const times = ["09:00", "10:30", "12:00", "15:30"];

export function ProductPreview({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).preview;
  const [view, setView] = useState<View>("client");
  const [day, setDay] = useState(1);
  const [time, setTime] = useState("10:30");
  const [service, setService] = useState(0);
  const [status, setStatus] = useState<Status>("pending");
  const reducedMotion = useReducedMotion();

  return (
    <div className="preview-shell" aria-label={copy.label}>
      <div className="preview-topline">
        <div className="preview-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>{copy.top}</span>
        <MoreHorizontal size={18} />
      </div>
      <div className="preview-tabs" role="tablist" aria-label={copy.tabs}>
        <button type="button" role="tab" aria-selected={view === "client"} onClick={() => setView("client")} className={view === "client" ? "active" : ""}>{copy.clientTab}</button>
        <button type="button" role="tab" aria-selected={view === "business"} onClick={() => setView("business")} className={view === "business" ? "active" : ""}>{copy.businessTab}</button>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {view === "client" ? (
          <motion.div key="client" role="tabpanel" initial={reducedMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: 0.22 }} className="preview-content">
            <div className="preview-heading-row">
              <div><span className="preview-eyebrow">{copy.clientEyebrow}</span><h3>{copy.clientHeading}</h3></div>
              <span className="preview-avatar"><UserRound size={17} /></span>
            </div>
            <div className="service-select">
              <span>{copy.pickService}</span>
              <div className="service-options" aria-label={copy.serviceLabel}>
                {copy.services.map((item, index) => <button type="button" key={item} className={service === index ? "selected" : ""} onClick={() => setService(index)}>{item}</button>)}
              </div>
            </div>
            <div className="calendar-panel">
              <div className="calendar-head"><span><CalendarDays size={17} /> {copy.week}</span><ChevronDown size={16} /></div>
              <div className="days-grid">
                {copy.days.map((name, index) => <button type="button" key={dates[index]} onClick={() => setDay(index)} className={day === index ? "selected" : ""} aria-pressed={day === index}><span>{name}</span><strong>{dates[index]}</strong></button>)}
              </div>
              <div className="time-label"><Clock3 size={14} /> {copy.available}</div>
              <div className="times-grid">
                {times.map((item) => <button type="button" key={item} onClick={() => setTime(item)} className={time === item ? "selected" : ""} aria-pressed={time === item}>{item}</button>)}
              </div>
            </div>
            <div className="preview-bottom"><span>{copy.chosen} {copy.services[service].toLowerCase()} · {copy.days[day]} {dates[day]}, {time}</span><span className="preview-faux-action">{copy.next} <ArrowRight size={15} /></span></div>
          </motion.div>
        ) : (
          <motion.div key="business" role="tabpanel" initial={reducedMotion ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -12 }} transition={{ duration: 0.22 }} className="preview-content business-content">
            <div className="preview-heading-row"><div><span className="preview-eyebrow">{copy.businessEyebrow}</span><h3>{copy.businessHeading}</h3></div><span className="preview-avatar"><CalendarDays size={17} /></span></div>
            <div className="business-summary"><div><span>{copy.sampleDay}</span><strong>{copy.goodDay}</strong></div><span className="summary-spark" aria-hidden="true"><Starburst size={32} /></span></div>
            <p className="inbox-title">{copy.newRequest} <span>01</span></p>
            <div className="request-card">
              <div className="request-card-top"><span className="request-avatar">JW</span><div><strong>{copy.guest}</strong><small>{copy.guestService}</small></div><MoreHorizontal size={17} /></div>
              <div className="request-meta"><span><CalendarDays size={15} /> {copy.days[1]}, 22</span><span><Clock3 size={15} /> 10:30</span></div>
              <div className="request-note"><MessageCircle size={15} /><span>{copy.guestNote}</span></div>
              {status === "pending" ? <div className="request-actions"><button type="button" onClick={() => setStatus("rejected")} className="reject-action"><X size={15} /> {copy.reject}</button><button type="button" onClick={() => setStatus("accepted")} className="accept-action"><Check size={15} /> {copy.accept}</button></div> : <div className={`request-status ${status}`}><CheckCircle2 size={17} /> {status === "accepted" ? copy.accepted : copy.rejected}<button type="button" onClick={() => setStatus("pending")}>{copy.undo}</button></div>}
            </div>
            <p className="preview-caption">{copy.disclaimer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
