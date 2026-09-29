import { useEffect, useState } from 'react';
import { gallery, galleryCategories } from '../data/content';
import { Img, Reveal } from './ui';
import { img } from '../config/images';

export default function Gallery({ limit }) {
  const [cat, setCat] = useState('All'); const [open, setOpen] = useState(null);
  const items = (cat === 'All' ? gallery : gallery.filter((g) => g.category === cat)).slice(0, limit || 999);
  useEffect(() => {
    if (open === null) return;
    const k = (e) => { if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % items.length); if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + items.length) % items.length); };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open, items.length]);
  return (<>
    {!limit && <div className="chips">{['All', ...galleryCategories].map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => { setCat(c); setOpen(null); }}>{c}</button>)}</div>}
    <div className="masonry">{items.map((g, i) => <Reveal key={g.src}><button className="gitem" onClick={() => setOpen(i)} aria-label={`Open ${g.alt}`}><Img src={g.src} alt={g.alt} /><span>{g.category}</span></button></Reveal>)}</div>
    {open !== null && items[open] && (
      <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
        <button className="lb-x" aria-label="Close">×</button>
        <button className="lb-n l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}>‹</button>
        <figure onClick={(e) => e.stopPropagation()}><img src={img(items[open].src)} alt={items[open].alt} /><figcaption>{items[open].category}</figcaption></figure>
        <button className="lb-n r" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}>›</button>
      </div>)}
  </>);
}
