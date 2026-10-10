import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleCheck, CornerDownRight, MoveUpRight, Palette, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/client/site-header";
import { Reveal } from "@/components/client/reveal";
import { WordReveal } from "@/components/client/word-reveal";
import { ProductPreview } from "@/components/client/product-preview";
import { Starburst } from "@/components/starburst";
import { portfolioUrl } from "@/lib/content";
import { getCopy, type Locale } from "@/lib/i18n";

function ContactLink({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return <a className={`contact-link ${light ? "contact-link-light" : ""}`} href={portfolioUrl}><span>{children}</span><span className="contact-arrow"><ArrowUpRight size={19} /></span></a>;
}

function Flow({ labels }: { labels: readonly string[] }) {
  return <div className="flow" aria-label={labels.join(" → ")}>
    {labels.map((label, index) => <div className="flow-unit" key={label}><div className="flow-node"><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></div>{index < labels.length - 1 && <ArrowRight className="flow-arrow" size={18} aria-hidden="true" />}</div>)}
  </div>;
}

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return <div id="top" lang={locale} className="site-root">
    <SiteHeader locale={locale} />
    <main>
      <section className="hero section-pad" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title"><WordReveal text={copy.hero.title} /><br /><span className="h1-accent"><WordReveal text={copy.hero.titleAccent} /></span></h1>
            <p className="hero-lead">{copy.hero.lead}</p>
            <div className="hero-actions"><ContactLink>{copy.hero.cta}</ContactLink><a className="text-link" href="#jak-to-dziala">{copy.hero.learn} <ArrowDown size={17} /></a></div>
          </div>
          <div className="hero-visual"><ProductPreview locale={locale} /></div>
        </div>
      </section>

      <section className="intro-band" aria-label={copy.band.label}><div className="container intro-band-inner"><span className="intro-band-icon"><Sparkles size={21} /></span><p>{copy.band.first} <strong>{copy.band.strong}</strong></p><ArrowUpRight size={22} /></div></section>

      <section id="jak-to-dziala" className="steps-section section-pad" aria-labelledby="steps-title">
        <div className="container steps-layout">
          <Reveal className="steps-intro"><p className="section-kicker"><span>01</span> {copy.steps.kicker}</p><h2 id="steps-title">{copy.steps.headingOne}<br />{copy.steps.headingTwo}<span className="heading-dot">.</span></h2><p className="steps-description">{copy.steps.description}</p><div className="steps-footnote"><CornerDownRight size={19} /><span>{copy.steps.footnote}</span></div></Reveal>
          <div className="steps-grid">
            {copy.steps.items.map((step, index) => <Reveal delay={index * 0.08} className="step-card" key={step.number}><div className="step-card-top"><span>{step.number}</span><span className="step-symbol" aria-hidden="true">{index === 0 ? <Starburst size={28} /> : index === 1 ? <ArrowUpRight size={25} /> : index === 2 ? <PenLine size={24} /> : <Check size={25} />}</span></div><div className="step-card-bottom"><h3>{step.title}</h3><p>{step.detail}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="mozliwosci" className="features-section section-pad" aria-labelledby="features-title"><div className="container features-layout"><Reveal className="features-intro"><p className="section-kicker"><span>02</span> {copy.features.kicker}</p><h2 id="features-title">{copy.features.headingOne}<br />{copy.features.headingTwo} <em>{copy.features.headingAccent}</em><br />{copy.features.headingThree}</h2><p>{copy.features.description}</p><a href="#modele" className="features-text-link">{copy.features.link} <MoveUpRight size={17} /></a></Reveal><div className="feature-list">{copy.features.items.map((feature, index) => <Reveal delay={index * 0.07} key={feature.number} className="feature-row"><span className="feature-number">{feature.number}</span><div><h3>{feature.title}</h3><p>{feature.detail}</p></div><span className="feature-icon">{index === 0 ? <ArrowRight size={21} /> : index === 1 ? <CircleCheck size={21} /> : index === 2 ? <Sparkles size={21} /> : <Check size={21} />}</span></Reveal>)}</div></div></section>

      <section id="dla-kogo" className="audience-section section-pad" aria-labelledby="audience-title"><div className="container"><Reveal className="audience-heading"><p className="section-kicker"><span>03</span> {copy.audience.kicker}</p><h2 id="audience-title">{copy.audience.headingOne}<br /><span>{copy.audience.headingAccent}</span></h2><p>{copy.audience.description}</p></Reveal><div className="audience-grid">{copy.audience.items.map((item, index) => <Reveal delay={index * 0.08} className={`audience-card audience-${item.className}`} key={item.title}><div className="audience-art" aria-hidden="true"><span className="audience-art-ring" /><span className="audience-art-symbol">{index === 1 ? <ArrowUpRight size={134} strokeWidth={1.6} /> : <Starburst size={146} />}</span></div><div className="audience-card-content"><h3>{item.title}</h3><p>{item.detail}</p><ArrowUpRight size={22} /></div></Reveal>)}</div></div></section>

      <section id="modele" className="models-section section-pad" aria-labelledby="models-title"><div className="container"><Reveal className="section-head models-head"><div><p className="section-kicker"><span>04</span> {copy.models.kicker}</p><h2 id="models-title">{copy.models.headingOne}<br />{copy.models.headingTwo}<span className="heading-dot">.</span></h2></div></Reveal><div className="model-grid"><Reveal className="model-card model-single"><div className="model-card-top"><span className="model-label">{copy.models.single.label}</span><span className="model-icon"><Palette size={22} /></span></div><h3>{copy.models.single.titleOne}<br />{copy.models.single.titleTwo}</h3><p>{copy.models.single.description}</p><Flow labels={copy.models.single.flow} /><div className="model-note"><ShieldCheck size={17} /><span>{copy.models.single.note}</span></div></Reveal><Reveal delay={0.1} className="model-card model-multi"><div className="model-card-top"><span className="model-label">{copy.models.multi.label}</span><span className="model-icon"><Sparkles size={22} /></span></div><h3>{copy.models.multi.titleOne}<br />{copy.models.multi.titleTwo}</h3><p>{copy.models.multi.description}</p><Flow labels={copy.models.multi.flow} /><div className="model-note"><Sparkles size={17} /><span>{copy.models.multi.note}</span></div></Reveal></div></div></section>

      <section className="custom-section section-pad" aria-labelledby="custom-title"><div className="container custom-panel"><div className="custom-decoration" aria-hidden="true"><div className="custom-circle circle-one" /><div className="custom-circle circle-two" /><div className="custom-circle circle-three" /><span className="custom-spark"><Starburst size={96} /></span></div><Reveal className="custom-copy"><p className="section-kicker"><span>05</span> {copy.custom.kicker}</p><h2 id="custom-title">{copy.custom.headingOne}<br /><em>{copy.custom.headingAccent}</em></h2><p>{copy.custom.description}</p><div className="custom-tags">{copy.custom.tags.map((tag) => <span key={tag}><Check size={15} /> {tag}</span>)}</div></Reveal><div className="custom-mini-card" aria-hidden="true"><div className="mini-card-head"><span className="mini-logo">rB.</span><span>{copy.custom.cardTitle}</span><MoreDots /></div><div className="mini-card-body"><div className="mini-line short" /><div className="mini-line" /><div className="mini-swatches"><i /><i /><i /></div><div className="mini-card-slot"><span>{copy.custom.cardService}</span><strong>{copy.custom.cardAction}</strong></div></div></div></div></section>

      <section className="final-cta section-pad" aria-labelledby="cta-title"><div className="container final-cta-inner"><div><p className="section-kicker"><span>06</span> {copy.cta.kicker}</p><h2 id="cta-title">{copy.cta.headingOne}<br />{copy.cta.headingTwo} <em>{copy.cta.headingAccent}</em></h2><p>{copy.cta.description}</p></div><ContactLink light>{copy.cta.button}</ContactLink></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>reBooked<span className="brand-dot">.</span></span></a><span>{copy.footer.tagline}</span><a href="#top">{copy.footer.back}</a></div></footer>
  </div>;
}

function MoreDots() { return <span className="mini-dots">•••</span>; }
