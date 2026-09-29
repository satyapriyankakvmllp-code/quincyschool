/** Structured content. Image values are paths under /public/images/. Replace with real school data later. */
export const academics = [
  { id: 'early', title: 'Early Years', classes: 'Nursery · LKG · UKG', age: 'Ages 3–6', img: 'academics/early-years.jpg', pos: '50% 35%', desc: 'Play-based learning that builds language, numbers and confidence.' },
  { id: 'primary', title: 'Primary School', classes: 'Classes 1–5', age: 'Ages 6–11', img: 'academics/primary.jpg', pos: '50% 30%', desc: 'Strong basics in languages, maths and EVS through activities.' },
  { id: 'middle', title: 'Middle School', classes: 'Classes 6–8', age: 'Ages 11–14', img: 'academics/middle.jpg', pos: '50% 30%', desc: 'Deeper concepts with projects, experiments and communication.' },
  { id: 'high', title: 'High School', classes: 'Classes 9–10', age: 'Ages 14–16', img: 'academics/high-school.jpg', pos: '50% 35%', desc: 'Board-exam focus with mentoring, discipline and guidance.' },
];
// [title, image slug, object-position, short description] - only facilities that have a real photo are listed
export const facilities = [
  ['Activity Rooms', 'activity-room', '50% 50%', 'Bright rooms for hands-on learning.'], ['Art Room', 'art-room', '35% 30%', 'Painting and craft sessions.'],
  ['Computer Lab', 'computer-lab', '50% 50%', 'Computers for digital learning.'], ['Library', 'library', '50% 55%', 'Books and a quiet reading space.'],
  ['Music Room', 'music-room', '50% 45%', 'Instruments and singing practice.'], ['Indoor Games', 'indoor-games', '50% 45%', 'Chess and other indoor games.'],
  ['Playground', 'playground', '50% 50%', 'Open ground for games and sports.'], ['Transportation', 'transport', '50% 50%', 'Safe school bus service.'],
  ['Clean Drinking Water', 'drinking-water', '50% 40%', 'Safe drinking water for all.'], ['Medical & First Aid', 'first-aid', '50% 50%', 'First-aid support on campus.'],
].map(([title, f, pos, desc]) => ({ title, img: `facilities/${f}.jpg`, pos, desc }));
const act = (g) => (arr) => arr.map(([title, f, pos]) => ({ title, img: `activities/${f}.jpg`, group: g, pos })); // pos = object-position focus so faces stay in frame
export const activityGroups = [
  { title: 'Academic Activities', color: 'var(--green)', items: act()([['Reading', 'reading', '50% 35%'], ['Science Experiments', 'science', '50% 30%'], ['Mathematics Activities', 'maths', '50% 45%'], ['Project-Based Learning', 'projects', '50% 35%'], ['Storytelling', 'storytelling', '50% 25%']]) },
  { title: 'Creative Activities', color: 'var(--purple)', items: act()([['Art & Craft', 'art-craft', '60% 65%'], ['Drawing', 'drawing', '60% 65%'], ['Music', 'music', '50% 30%'], ['Dance', 'dance', '50% 30%'], ['Drama', 'drama', '50% 40%']]) },
  { title: 'Sports & Discipline Activities', color: 'var(--primary)', items: act()([['Sports Day Events', 'sports-day-events', '50% 40%'], ['Drill & March Past', 'drill-march-past', '50% 55%'], ['Yoga & Fitness', 'yoga', '50% 35%'], ['Athletics', 'athletics', '50% 40%'], ['Group Games', 'group-games', '50% 50%']]) },
  { title: 'Development Activities', color: 'var(--orange)', items: act()([['Communication', 'communication', '50% 30%'], ['Social Development', 'social', '50% 30%'], ['Teamwork', 'teamwork', '50% 35%'], ['Leadership', 'leadership', '60% 35%'], ['Public Speaking', 'public-speaking', '50% 45%']]) },
];
export const celebrations = [ // generic annual activities; NOT claims of past events
  ['Independence Day', 'August 15'], ['Republic Day', 'January 26'], ["Children's Day", 'November 14'], ["Teachers' Day", 'September 5'], ['Annual Day', 'Annually'], ['Sports Day', 'Annually'],
  ['Science Day', 'Annually'], ['Environment Day', 'June 5'], ['Diwali', 'Festival'], ['Dussehra', 'Festival'], ['Sankranti', 'Festival'], ['Ugadi', 'Festival'], ['Christmas', 'December 25'],
  ['Cultural Day', 'Annually'], ['Traditional Dress Day', 'Annually'], ['School Exhibitions', 'Annually'], ['Talent Competitions', 'Annually'],
];
export const events = [ // status 'Annual Event' / 'Upcoming' - mark real events "Completed" only when verified
  { title: 'Annual Day', date: 'Date to be announced', img: 'events/annual-day.jpg', pos: '50% 35%', status: 'Annual Event', desc: 'Music, dance, drama and awards by our students.' },
  { title: 'Sports Day', date: 'Date to be announced', img: 'events/sports-day.jpg', pos: '50% 40%', status: 'Annual Event', desc: 'Track events, team games and a march past.' },
  { title: 'Science Exhibition', date: 'Date to be announced', img: 'events/science-exhibition.jpg', pos: '50% 45%', status: 'Annual Event', desc: 'Students present models and experiments.' },
  { title: 'Cultural Festival', date: 'Date to be announced', img: 'events/cultural-festival.jpg', pos: '50% 30%', status: 'Annual Event', desc: 'Classical dance, music and traditional dress.' },
  { title: 'Parent-Teacher Meeting', date: 'Date to be announced', img: 'events/ptm.jpg', pos: '50% 40%', status: 'Upcoming', desc: 'Discuss your child\'s progress with teachers.' },
  { title: 'Independence Day', date: 'August 15', img: 'events/independence-day.jpg', pos: '50% 40%', status: 'Annual Event', desc: 'Flag hoisting, patriotic songs and performances.' },
];
export const testimonials = [ // DEMO reviews - replace with genuine, permission-granted parent feedback
  { name: 'Padmavathi Kondapalli', role: 'Parent of Class 4 Student · Visakhapatnam', text: 'Teachers know every child by name and keep us updated regularly. My daughter has become confident and looks forward to school every morning.' },
  { name: 'Satyanarayana Murthy', role: 'Parent of Class 8 Student · Visakhapatnam', text: 'Good discipline and equal focus on studies and sports. My son now speaks up in class and takes part in every school function with enthusiasm.' },
  { name: 'Sowjanya Gudivada', role: 'Parent of UKG Student · Ushodaya', text: 'The school is close to home and the staff is very caring. My little one loves the rhymes, stories and festival celebrations like Sankranti and Dasara.' },
  { name: 'Venkata Ramana', role: 'Parent of Class 10 Student · Visakhapatnam', text: 'Teachers gave extra attention during board exam preparation and guided my daughter well. We are happy with her progress and values.' },
  { name: 'Anitha Rani', role: 'Parent of Class 2 Student · Visakhapatnam', text: 'Homework is balanced and the teachers are approachable. My son enjoys art, music and Yoga classes along with his studies.' },
  { name: 'Suresh Babu Pydi', role: 'Parent of Class 6 Student · Visakhapatnam', text: 'Parent-teacher meetings are useful and the management listens to suggestions. Our child feels safe and happy at school.' },
];
export const achievements = [ // demo cards — replace with real, verified achievements
  { title: 'Academic Achievements', desc: 'Add board results, toppers and subject awards here.', icon: '🎓' },
  { title: 'Sports Achievements', desc: 'Add district / state level sports results here.', icon: '🏅' },
  { title: 'Cultural Achievements', desc: 'Add dance, music and drama recognitions here.', icon: '🎭' },
  { title: 'Science Projects', desc: 'Add science fair and innovation projects here.', icon: '🔬' },
  { title: 'Competitions', desc: 'Add quiz, olympiad and inter-school wins here.', icon: '🏆' },
  { title: 'Student Awards', desc: 'Add annual student awards and honours here.', icon: '⭐' },
];
export const why = [
  ['👩‍🏫', 'Experienced Teachers', 'Caring, qualified educators who guide every child.'], ['🧒', 'Child-Centred Learning', 'Teaching that adapts to how each child learns.'],
  ['🛡️', 'Safe Campus', 'A secure, supervised and child-friendly environment.'], ['🌱', 'Holistic Development', 'Academics, arts, sports and life skills together.'],
  ['💡', 'Modern Learning Methods', 'Smart classes, labs and activity-based teaching.'], ['⚽', 'Sports & Activities', 'Regular play, fitness and team spirit.'],
  ['🤝', 'Parent Partnership', 'Open communication and regular meetings.'], ['🪔', 'Focus on Values', 'Respect, unity and service woven into school life.'],
];
// Rename 'Drill & Activities' to 'NCC' only if the school actually has an NCC unit.
export const galleryCategories = ['Campus', 'Classrooms', 'Sports', 'Drill & Activities', 'Cultural Events', 'Celebrations', 'Art', 'Music', 'Students', 'Teachers'];
// Real photos where we have them; the rest are labelled placeholders in /public/images/gallery/
const G = (category, src) => ({ category, src, alt: `${category} at school` });
export const gallery = [
  G('Campus', 'gallery/campus-1.jpg'), G('Classrooms', 'activities/storytelling.jpg'), G('Classrooms', 'academics/middle.jpg'),
  G('Sports', 'activities/sports-day-events.jpg'), G('Sports', 'activities/group-games.jpg'), G('Drill & Activities', 'activities/drill-march-past.jpg'),
  G('Drill & Activities', 'activities/yoga.jpg'), G('Cultural Events', 'activities/dance.jpg'), G('Cultural Events', 'events/cultural-festival.jpg'), G('Cultural Events', 'activities/drama.jpg'),
  G('Celebrations', 'gallery/celebrations-1.jpg'), G('Art', 'activities/art-craft.jpg'), G('Music', 'activities/music.jpg'),
  G('Students', 'activities/teamwork.jpg'), G('Students', 'activities/science.jpg'), G('Teachers', 'gallery/teachers-1.jpg'), G('Cultural Events', 'events/annual-day.jpg'), G('Teachers', 'events/ptm.jpg'), G('Events', 'gallery/events-1.jpg'),
];
