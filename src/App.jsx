import { useEffect } from 'react';
import cfg from './config/schoolConfig';
import { Preloader, Header, Footer, TabBar } from './components/Shell';
import * as S from './components/Sections';

export default function App() {
  useEffect(() => { document.title = `${cfg.brand.name} – Admissions ${cfg.admissions.session}`; }, []);
  return (<>
    <Preloader /><Header />
    <main><S.Hero /><S.About /><S.Stats /><S.Academics /><S.Why /><S.Activities /><S.Facilities /><S.GallerySection /><S.Events /><S.Testimonials /><S.Admissions /><S.Contact /></main>
    <Footer /><TabBar />
  </>);
}
