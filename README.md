# School Website (React + Vite) — single landing page

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/ (Netlify: public/_redirects handles routing)

## Re-skin for another school
- **`src/config/brand.js`** – school name, tagline and logo (kept separate). Put the logo in `public/brand/` and change `logo`.
- **`src/config/schoolConfig.js`** – board (CBSE / State Board), address, phone, email, principal, stats, admissions info, theme colours, social links (empty = hidden), `enquiryEndpoint`.
- **`src/data/content.js`** – academics, facilities, activities, celebrations, events, testimonials, achievements, gallery.
- **Images** – `public/images/<hero|about|academics|activities|facilities|events|gallery>/`. Replace a placeholder by saving your photo with the same file name. `python3 scripts/make-placeholders.py` regenerates missing placeholders.

## Animations
Reveal variants (up|left|right|zoom) are set per element via `<Reveal variant=...>`; timings live in the `v2` block at the end of `src/styles/global.css`. Reduced-motion is respected.

## Enquiry forms
Forms validate in the browser. Set `enquiryEndpoint` (schoolConfig.js) to a JSON POST URL to activate; until then they show a "not connected" notice instead of a fake success. See `src/services/enquiry.js`.

## Demo content to replace with real data
Stats, testimonials, achievements, journey/history, age criteria, dates, phone/email, principal name/message.

## Landing page structure
One page (`src/App.jsx`): Hero → About → Stats → Academics → Admissions (session set in `schoolConfig.admissions.session`) → Why Us → Activities & Celebrations → Facilities → Gallery → Events → Testimonials → Contact. Header links smooth-scroll to sections; phones also get an app-style bottom tab bar. A branded preloader (from `brand.js`) shows on load. No prices, blog or application form. `public/manifest.webmanifest` makes it installable on phones — edit its name/colours per school.
