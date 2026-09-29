import { useEffect, useRef, useState } from 'react';
import cfg from '../config/schoolConfig';
import { academics, facilities, events, testimonials, why, activityGroups, celebrations } from '../data/content';
import { Img, Reveal, Section, Counter } from './ui';
import Gallery from './Gallery';
import ContactForm from './Forms';

export function Hero() {
  const { slides, interval } = cfg.hero; const [i, setI] = useState(0); const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold || slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), interval); return () => clearInterval(t);
  }, [hold, slides.length, interval]);
  const go = (n) => setI((n + slides.length) % slides.length); const s = slides[i];
  return (
    <section id="home" className="hero2" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <div className="slides">{slides.map((sl, n) => <Img key={sl.image} src={sl.image} alt={sl.kicker} loading={n === 0 ? 'eager' : 'lazy'} className={n === i ? 'on' : ''} style={{ objectPosition: sl.pos }} />)}<div className="shade" /></div>
      <div className="container hero2-in"><div className="hero2-copy" key={i}>
        <span className="pill">Admissions Open {cfg.admissions.session} · {cfg.board}</span><h1>{s.headline}</h1><p>{s.intro}</p>
        <div className="btns"><a href="#about" className="btn btn-gold">Explore School</a><a href="#contact" className="btn btn-light">Enquire Now</a></div>
      </div></div>
      {slides.length > 1 && <div className="hctl"><button onClick={() => go(i - 1)} aria-label="Previous slide">‹</button>
        {slides.map((_, n) => <i key={n} className={n === i ? 'on' : ''} onClick={() => go(n)} role="button" aria-label={`Slide ${n + 1}`} />)}<button onClick={() => go(i + 1)} aria-label="Next slide">›</button></div>}
    </section>
  );
}
export const About = () => {
  const ab = cfg.about; const tel = `tel:${cfg.phone.replace(/\s/g, '')}`;
  const cards = [['🎯', 'Vision', ab.vision], ['🚀', 'Mission', ab.mission], ['💎', 'Values', ab.values.join(' · ')], ['🏆', 'Excellence', ab.excellence]];
  return (<Section id="about">
    <div className="split">
      <Reveal variant="left" className="collage"><Img src="activities/storytelling.jpg" alt="Student at storytelling" className="c1" /><Img src="activities/dance.jpg" alt="Students learning classical dance" className="c2" />
        <div className="badge2"><b>{cfg.established}</b><small>Established</small></div></Reveal>
      <div className="stext"><Reveal><span className="eyebrow">About {cfg.brand.name}</span><h2>Learning with Values, Growing with Confidence</h2><p>{ab.intro}</p></Reveal>
        <div className="mv">{cards.map(([i, t, d], n) => <Reveal key={t} delay={n * 70} variant="zoom" className="card mini"><span>{i}</span><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
        <Reveal className="btns about-btns"><a href="#admissions" className="btn btn-primary sm">Admissions {cfg.admissions.session}</a><a href={tel} className="btn btn-outline sm">📞 {cfg.phone}</a></Reveal></div>
    </div>
  </Section>);
};
const statIcons = ['🏫', '🎓', '👩‍🏫', '🏆'];
export const Stats = () => (
  <section className="stats2"><div className="container sgrid">{cfg.stats.map((s, n) => <Reveal key={s.label} delay={n * 80} variant="zoom" className="stat"><i>{statIcons[n % 4]}</i><b><Counter value={s.value} suffix={s.suffix} /></b><span>{s.label}</span></Reveal>)}</div></section>
);
export const Why = () => (
  <Section tone="tint" eyebrow="Why Us" title={`Why Choose ${cfg.brand.name}?`} text="A happy, safe and caring school for children and parents.">
    <div className="grid g4">{why.map(([i, t, d], n) => <Reveal key={t} delay={n * 60} variant="zoom" className="card why"><div className="ico">{i}</div><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
  </Section>
);
export const Academics = () => (
  <Section id="academics" eyebrow="Academics" title={cfg.levels} text={`${cfg.board} curriculum with a strong foundation at every stage.`}>
    <div className="grid g4">{academics.map((a, n) => (
      <Reveal key={a.id} delay={n * 80} className="card icard"><Img src={a.img} alt={a.title} style={{ objectPosition: a.pos }} /><div className="pad">
        <span className="tag">{a.classes}</span><h3>{a.title}</h3><p>{a.desc}</p><a href="#contact" className="btn btn-outline sm">Learn More</a></div></Reveal>))}</div>
  </Section>
);
export const Admissions = () => {
  const a = cfg.admissions; const tel = `tel:${cfg.phone.replace(/\s/g, '')}`;
  return (
    <section id="admissions" className="dark"><div className="container split">
      <Reveal variant="left" className="card pad wcard"><span className="eyebrow">Admissions {a.session}</span><h3>Age Criteria</h3>
        <table><tbody>{a.ageCriteria.map(([c, r]) => <tr key={c}><td>{c}</td><td>{r}</td></tr>)}</tbody></table>
        <p className="fine">{a.eligibility[0]}</p></Reveal>
      <Reveal variant="right" className="stext"><span className="eyebrow">Admissions Open</span><h2>Admissions {a.session} Now Open</h2>
        <p>Nursery to Class 10. Keep these documents ready. The school office can share the full list.</p>
        <ul className="tick tick2">{a.documents.slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="btns admit-row"><a href="#contact" className="btn btn-gold">Enquire Now</a><a href={tel} className="btn btn-light">📞 {cfg.phone}</a></div></Reveal>
    </div></section>
  );
};
export const Activities = () => (
  <Section id="activities" tone="tint" eyebrow="Learning & Activities" title="Activities that Build Confidence" text="Academic, creative, sports and development activities for every child.">
    {activityGroups.map((g) => (
      <div key={g.title} className="agroup"><Reveal variant="left" className="ghead"><h3 style={{ '--c': g.color }}>{g.title}</h3></Reveal>
        <div className="grid g5">{g.items.map((a, n) => <Reveal key={a.title} delay={n * 90} variant={n % 2 ? 'up' : 'zoom'} className="card icard sm shine"><Img src={a.img} alt={a.title} style={a.pos ? { objectPosition: a.pos } : undefined} /><div className="pad"><h4>{a.title}</h4></div></Reveal>)}</div></div>))}
    <Reveal><h3 className="mt2 center">Cultural & School Celebrations</h3></Reveal>
    <div className="chips static">{celebrations.map(([t, d], n) => <Reveal key={t} delay={(n % 6) * 60} variant="zoom" className="celeb"><b>{t}</b><small>{d}</small></Reveal>)}</div>
  </Section>
);
export const Facilities = () => (
  <Section id="facilities" eyebrow="Facilities" title="A Safe and Modern Campus"><div className="grid g5">{facilities.map((f, n) => (
    <Reveal key={f.title} delay={(n % 5) * 60} className="card icard sm"><Img src={f.img} alt={f.title} style={{ objectPosition: f.pos }} /><div className="pad"><h3>{f.title}</h3><p>{f.desc}</p></div></Reveal>))}</div></Section>
);
export const GallerySection = () => <Section id="gallery" tone="tint" eyebrow="Gallery" title="Our Photo Gallery" text="Moments of learning, play and celebration."><Gallery /></Section>;
export const Events = () => (
  <Section id="events" eyebrow="Events" title="Annual & Upcoming School Events"><div className="grid g3">{events.map((e, n) => (
    <Reveal key={e.title} delay={(n % 3) * 70} className="card icard ev"><Img src={e.img} alt={e.title} style={{ objectPosition: e.pos }} /><div className="pad"><span className="tag">{e.status}</span><h3>{e.title}</h3>
      <small className="date">📅 {e.date}</small><p>{e.desc}</p><a href="#contact" className="btn btn-outline sm">Read More</a></div></Reveal>))}</div></Section>
);
export function Testimonials() {
  const list = [...testimonials, ...testimonials]; // duplicated for a seamless CSS loop
  return (
    <Section id="testimonials" tone="tint" eyebrow="Testimonials" title="What Parents Say About Us">
      <Reveal className="tmarq"><div className="ttrack">
        {list.map((t, n) => <div key={n} className="card tcard" aria-hidden={n >= testimonials.length}><div className="stars" aria-label="5 out of 5">★★★★★</div><p>{t.text}</p>
          <div className="who"><span className="av">{t.name[0]}</span><div><b>{t.name}</b><small>{t.role}</small></div></div></div>)}
      </div></Reveal>
    </Section>
  );
}
export const Contact = () => {
  const tel = `tel:${cfg.phone.replace(/\s/g, '')}`; const a = cfg.admissions;
  const info = [['📞', 'Call Us', cfg.phone, tel], ['✉️', 'Email Us', cfg.email, `mailto:${cfg.email}`], ['📍', 'Address', cfg.address], ['🕘', 'Timings', cfg.hours]];
  return (
    <section id="contact" className="section contact2"><div className="container">
      <div className="c2grid">
        <div className="c2l">
          <Reveal><span className="kick">Admissions Open {a.session}</span><h2>Begin Your Child’s Journey</h2>
            <p>Admissions are open for the {a.session} academic year. Submit the enquiry form and our admissions team will contact you shortly.</p></Reveal>
          <ol className="jsteps">{a.journey.map(([t, d], n) => (
            <Reveal as="li" key={t} delay={n * 110} variant="left"><b className="n">{String(n + 1).padStart(2, '0')}</b><div><strong>{t}</strong><span>{d}</span></div></Reveal>))}</ol>
          <div className="cinfo2">{info.map(([i, l, v, href], n) => (
            <Reveal key={l} delay={n * 80} variant="zoom" className="card crow"><span className="ico">{i}</span><div><small>{l}</small>{href ? <a className="blk" href={href}>{v}</a> : <b className="blk">{v}</b>}</div></Reveal>))}</div>
        </div>
        <Reveal variant="right" className="c2r"><ContactForm /></Reveal>
      </div>
      <Reveal className="map"><iframe title="School location" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(cfg.address)}&output=embed`} /></Reveal>
    </div></section>
  );
};
