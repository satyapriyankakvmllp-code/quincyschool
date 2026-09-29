import brand from './brand';
/** Central school configuration. Everything here is editable; nothing is hard-coded in components. */
const schoolConfig = {
  brand,
  board: 'CBSE', // 'CBSE' | 'State Board'
  established: '2000', // demo value - replace with real year
  levels: 'Nursery to Class 10',
  location: 'Ushodaya, Visakhapatnam',
  address: 'Ushodaya, Visakhapatnam, Andhra Pradesh, India',
  phone: '+91 00000 00000',
  email: 'info@example.com',
  hours: 'Mon – Sat: 8:30 AM – 4:30 PM (Office)',
  social: { facebook: '', instagram: '', youtube: '', x: '' }, // empty = hidden
  principal: {
    name: 'Principal Name', title: 'Principal', photo: 'about/principal.jpg',
    message: 'Every child is unique and full of potential. Our aim is to nurture curiosity, character and confidence so that our students grow into responsible, compassionate citizens. We work hand in hand with parents to make school a happy and inspiring place to learn.',
  },
  hero: { // background-image slideshow; add/remove slides freely. pos = focus point so faces stay in frame.
    slides: [
      { image: 'hero/slide-reading.jpg', kicker: 'Love for Reading', headline: 'Learning with Values, Growing with Confidence', intro: 'Nursery to Class 10 — academics, values and creativity growing together.', pos: '50% 35%' },
      { image: 'hero/slide-science.jpg', kicker: 'Curious Young Scientists', headline: 'Hands-on Learning that Sparks Curiosity', intro: 'Experiments, projects and teamwork that make learning hands-on.', pos: '50% 30%' },
    ],
    interval: 6500, // ms
  },
  about: {
    intro: 'A caring school in Visakhapatnam that builds strong academics, discipline and values for every child.',
    vision: 'Confident, curious and compassionate learners.',
    mission: 'A safe, joyful school with quality teaching and parent partnership.',
    values: ['Unity', 'Integrity', 'Respect', 'Discipline'],
    excellence: 'Strong academics with regular guidance.',
    journey: [ // demo timeline - replace with the school's real history
      { year: 'Foundation', text: 'The school begins its journey with a focus on quality education.' },
      { year: 'Growth', text: 'New classes, labs and activity spaces are added over the years.' },
      { year: 'Today', text: 'A full Nursery to Class 10 school with a strong parent community.' },
    ],
  },
  admissions: {
    session: '2027–28', // shown in hero, header and admissions section
    ageCriteria: [ // demo - confirm as per board / school policy
      ['Nursery', '2.5 – 3.5 years'], ['LKG', '3.5 – 4.5 years'], ['UKG', '4.5 – 5.5 years'], ['Class 1', '5.5 – 6.5 years'],
    ],
    eligibility: ['Admission is subject to seat availability.', 'Age criteria apply for entry classes.', 'Higher classes may involve a short interaction or assessment.'],
    documents: ['Birth certificate', 'Aadhaar card of student (if available)', 'Previous school Transfer Certificate (Class 1 onwards)', 'Previous report card', 'Passport-size photographs', 'Parent ID / address proof'],
    steps: ['Submit an enquiry online or visit the school office', 'Collect and fill the application form', 'Interaction with the school / assessment (where applicable)', 'Document verification', 'Fee payment and admission confirmation'],
    journey: [ // shown in the Contact section
      ['Submit Enquiry', 'Fill out the enquiry form with your details.'], ['Campus Visit', 'Tour our campus and meet our faculty.'],
      ['Interaction', 'An informal interaction with the child and parents.'], ['Confirmation', 'Receive admission offer and complete enrollment.'],
    ],
    dates: [ // demo - replace with real dates
      { label: 'Enquiries open', value: 'Throughout the year' }, { label: 'Application window', value: 'To be announced' }, { label: 'New session begins', value: 'To be announced' },
    ],
  },
  // DEMO values — shown as-is until real school data is available
  stats: [
    { value: 20, suffix: '+', label: 'Years of Experience' }, { value: 1000, suffix: '+', label: 'Students' },
    { value: 50, suffix: '+', label: 'Teachers' }, { value: 20, suffix: '+', label: 'Activities' },
  ],
  // Set to a URL (form-handling API) to activate the enquiry forms. See src/services/enquiry.js
  enquiryEndpoint: '',
  theme: { primary: '#0c2d5e', accent: '#f5a01a', sky: '#f2f7fb', green: '#12805c', purple: '#6b4fc2', orange: '#f5a01a' },
};
export default schoolConfig;
