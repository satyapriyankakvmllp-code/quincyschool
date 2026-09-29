import { useState } from 'react';
import { submitEnquiry } from '../services/enquiry';
const classes = ['Nursery', 'LKG', 'UKG', ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)];
const D = { // feather-style stroke icons
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6',
  cap: 'M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5',
  msg: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z',
};
const Ic = ({ n, cls }) => <svg className={cls} viewBox="0 0 24 24" aria-hidden="true"><path d={D[n]} /></svg>;
const Field = ({ label, icon, k, ta, children }) => (
  <label style={{ '--k': k }}>{label} <i>*</i><span className={`fld ${ta ? 'ta' : ''}`}><Ic n={icon} />{children}</span></label>
);
export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const onSubmit = async (e) => {
    e.preventDefault(); const form = e.target; const data = Object.fromEntries(new FormData(form)); setStatus('sending');
    const r = await submitEnquiry('contact', data);
    if (r.ok) { form.reset(); setStatus('ok'); } else setStatus(r.notConnected ? 'nobackend' : 'error');
  };
  return (
    <form className="enq" onSubmit={onSubmit}>
      <h3>Enquiry Form</h3><p className="sub">Fill in your details and we’ll get back to you shortly.</p>
      <Field label="Parent / Student Name" icon="user" k={0}><input name="name" type="text" placeholder="Enter your full name" required /></Field>
      <div className="row">
        <Field label="Phone Number" icon="phone" k={1}><input name="phone" type="tel" placeholder="+91 98765 43210" required pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" /></Field>
        <Field label="Email" icon="mail" k={2}><input name="email" type="email" placeholder="you@example.com" required /></Field>
      </div>
      <Field label="Class / Grade" icon="cap" k={3}><select name="class" defaultValue="" required><option value="" disabled>Select a grade</option>{classes.map((c) => <option key={c}>{c}</option>)}</select></Field>
      <Field label="Message" icon="msg" k={4} ta><textarea name="message" rows="4" placeholder="Tell us about your child and any questions you have..." required /></Field>
      <button className="submit" disabled={status === 'sending'} style={{ '--k': 5 }}>{status === 'sending' ? 'Sending…' : <>Submit Enquiry <Ic n="send" /></>}</button>
      {status === 'ok' && <p className="note ok">Thank you! We will contact you soon.</p>}
      {status === 'nobackend' && <p className="note">This form is not connected to a backend yet (set <code>enquiryEndpoint</code> in schoolConfig.js). Please call or visit the school office.</p>}
      {status === 'error' && <p className="note err">Something went wrong. Please try again or call the school office.</p>}
    </form>
  );
}
