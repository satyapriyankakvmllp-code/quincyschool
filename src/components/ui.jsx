import { useEffect, useRef, useState } from 'react';
import { img } from '../config/images';

export function Reveal({ children, delay = 0, className = '', variant = 'up', as: Tag = 'div' }) {
  const ref = useRef(null); const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!('IntersectionObserver' in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: '0px 0px 20% 0px' });
    io.observe(el); const t = setTimeout(() => setOn(true), 1500); // never leave content hidden
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return <Tag ref={ref} className={`reveal ${variant} ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
export const Img = ({ src, alt = '', className = '', style, loading = 'lazy' }) => <img className={className} style={style} src={img(src)} alt={alt} loading={loading} decoding="async" />;
export function Heading({ eyebrow, title, text, center = true }) {
  return <Reveal className={`heading ${center ? 'center' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
}
export const Section = ({ id, tone, children, eyebrow, title, text }) => (
  <section id={id} className={`section ${tone || ''}`}><div className="container">{title && <Heading eyebrow={eyebrow} title={title} text={text} />}{children}</div></section>
);
export function PageBanner({ title, text }) {
  return <div className="banner"><div className="container"><h1>{title}</h1>{text && <p>{text}</p>}</div></div>;
}
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null); const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; let raf;
    const run = () => { const s = performance.now(); const step = (t) => { const p = Math.min((t - s) / 1400, 1); setN(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); };
    if (!('IntersectionObserver' in window)) { setN(value); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }); io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>;
}
