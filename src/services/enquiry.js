import schoolConfig from '../config/schoolConfig';
/** Connect a backend by setting `enquiryEndpoint` in schoolConfig.js (expects JSON POST). */
export async function submitEnquiry(type, data) {
  const url = schoolConfig.enquiryEndpoint;
  if (!url) return { ok: false, notConnected: true };
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, ...data, school: schoolConfig.brand.name }) });
    return { ok: res.ok };
  } catch { return { ok: false }; }
}
