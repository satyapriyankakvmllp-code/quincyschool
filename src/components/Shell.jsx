import { useEffect, useState } from 'react';
import cfg from '../config/schoolConfig';

export const nav = [['home', 'Home'], ['about', 'About'], ['academics', 'Academics'], ['activities', 'Activities'], ['facilities', 'Facilities'], ['gallery', 'Gallery'], ['testimonials', 'Reviews'], ['admissions', 'Admissions']];
const socials = [['facebook', 'f'], ['instagram', 'in'], ['youtube', '▶'], ['x', 'X']];

export function Preloader() {
  const [phase, setPhase] = useState('show');
  useEffect(() => {
    document.body.style.overflow = 'hidden'; let done = false; const t0 = performance.now();
    const finish = () => { if (done) return; done = true; setTimeout(() => { setPhase('leave'); document.body.style.overflow = ''; setTimeout(() => setPhase('gone'), 700); }, Math.max(0, 1500 - (performance.now() - t0))); };
    if (document.readyState === 'complete') finish(); else window.addEventListener('load', finish);
    const fb = setTimeout(finish, 3500); return () => { window.removeEventListener('load', finish); clearTimeout(fb); };
  }, []);
  if (phase === 'gone') return null;
  return (
    <div className={`preloader ${phase === 'leave' ? 'leave' : ''}`} role="status" aria-label="Loading">
      <div className="pl-in"><div className="pl-logo"><img src={cfg.brand.logo} alt="" /></div>
        <h1>{cfg.brand.name}</h1><p>{cfg.brand.tagline}</p><div className="pl-bar"><i /></div></div>
    </div>
  );
}
export const Brand = ({ light }) => (
  <a href="#home" className={`brand ${light ? 'light' : ''}`}><img src={cfg.brand.logo} alt={`${cfg.brand.name} logo`} /><span><b>{cfg.brand.name}</b><small>{cfg.brand.tagline}</small></span></a>
);
export function Header() {
  const [open, setOpen] = useState(false); const [stuck, setStuck] = useState(false); const [active, setActive] = useState('home');
  useEffect(() => { const f = () => setStuck(window.scrollY > 8); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  useEffect(() => { document.body.classList.toggle('menu-open', open); }, [open]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); }); return () => io.disconnect();
  }, []);
  return (<>
    <div className="topbar"><div className="container">
      {socials.some(([k]) => cfg.social[k]) && <div className="follow"><b>Follow us</b>{socials.filter(([k]) => cfg.social[k]).map(([k, l]) => <a key={k} href={cfg.social[k]} target="_blank" rel="noreferrer" aria-label={k}>{l}</a>)}</div>}
      <span>📍 {cfg.location}</span><span>✉️ {cfg.email}</span><span>📞 {cfg.phone}</span></div></div>
    <header className={`header ${stuck ? 'stuck' : ''}`}><div className="container bar">
      <Brand />
      <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
        {nav.map(([id, label], i) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} style={{ '--i': i }} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>Enquire&nbsp;Now</a>
      </nav>
      <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><i /><i /><i /></button>
    </div></header></>);
}
export function TabBar() { // app-style bottom navigation on phones
  const tabs = [['home', '🏠', 'Home'], ['academics', '📚', 'Classes'], ['admissions', '📝', 'Admissions'], ['gallery', '🖼️', 'Gallery'], ['contact', '📞', 'Contact']];
  return <nav className="tabbar" aria-label="Quick">{tabs.map(([id, i, l]) => <a key={id} href={`#${id}`}><span>{i}</span>{l}</a>)}</nav>;
}
export function Footer() {
  return (
    <footer className="footer"><div className="container fgrid">
      <div><Brand light /><p>{cfg.about.intro}</p></div>
      <div><h4>Quick Links</h4>{[['about', 'About'], ['academics', 'Academics'], ['admissions', 'Admissions'], ['contact', 'Contact']].map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</div>
      <div><h4>Our School</h4>{[['activities', 'Activities'], ['facilities', 'Facilities'], ['gallery', 'Gallery'], ['events', 'Events']].map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</div>
      <div><h4>Contact</h4><p>{cfg.address}</p><p>{cfg.phone}</p><p>{cfg.email}</p><p>{cfg.hours}</p></div>
    </div><div className="copy">© {new Date().getFullYear()} {cfg.brand.name}. All rights reserved.</div></footer>
  );
}
