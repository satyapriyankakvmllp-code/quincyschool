import { createRoot } from 'react-dom/client';
import cfg from './config/schoolConfig';
import App from './App';
import './styles/global.css';
const r = document.documentElement.style;
Object.entries(cfg.theme).forEach(([k, v]) => r.setProperty(`--${k}`, v));
document.title = `${cfg.brand.name} – ${cfg.brand.tagline}`;
createRoot(document.getElementById('root')).render(<App />);
