import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const PDF_URL =
  'https://www.ssgmce.ac.in/uploads/AQAR/7.1.1_gender-equity.pdf';

const safetyMeasures = [
  {
    title: '24/7 Security Personnel',
    desc: 'Female security guards monitor the hostel premises round the clock. Security checkpoints are strategically positioned at entry and exit points across the campus, ensuring 24/7 vigilance.',
  },
  {
    title: 'CCTV Surveillance',
    desc: 'Security cameras are installed at strategic locations including entrances, classrooms, laboratories, and common areas. Camera footage is diligently monitored and securely stored.',
  },
  {
    title: 'Female Warden Staff',
    desc: 'Only female wardens and supervisors are appointed in girls\' hostels. Supervisors maintain a continuous 24/7 presence, and hostel wardens reside within the hostel premises. No males are allowed without proper authorization.',
  },
  {
    title: 'Hostel Leave Form Facility',
    desc: 'It is mandatory for all students to fill out hostel leave forms, duly signed by wardens and supervisors. Wardens contact parents before granting permission, and strict entry times are enforced.',
  },
  {
    title: 'Biometric Devices',
    desc: 'Biometric devices at each gate collect fingerprint and facial recognition data. When students leave campus, a text message is automatically sent to their parents\' registered mobile numbers.',
  },
];

const amenities = [
  {
    title: 'Mess Facility for Girls',
    desc: 'A dedicated hostel mess is exclusively offered for girls within the hostel premises.',
  },
  {
    title: 'Medical Facility on Campus',
    desc: 'The institute maintains a dispensary staffed by well-trained doctors. An ambulance and van are available 24/7, and fire extinguishers are placed across the campus.',
  },
  {
    title: 'Discipline Committee',
    desc: 'Ensures the safety and security of students while monitoring activities within the institution. The college maintains a zero-tolerance policy against eve-teasing and ragging.',
  },
  {
    title: 'Counselling & Mentorship',
    desc: 'A mentor-mentee program pairs each student with a mentor for guidance on academic and non-academic matters. College-appointed counsellors motivate and guide students.',
  },
  {
    title: 'Awareness Programs',
    desc: 'The Women Development Cell organizes events including International Women\'s Day celebrations, webinars, and workshops on gender sensitivity for women\'s empowerment.',
  },
  {
    title: 'IEEE Women in Engineering (WIE)',
    desc: 'The WIE Affinity Group operates at the institute level, organizing activities that promote and inspire women engineers and encourage young girls to pursue engineering careers.',
  },
  {
    title: 'Health Facilities',
    desc: 'Separate timings for girls to use the central gym. Sanitary napkin dispensing machines and incinerators are available on campus.',
  },
  {
    title: 'Yoga & Meditation Hall',
    desc: 'A dedicated Yoga and Meditation Hall within the hostel promotes holistic health and mindfulness, offering a peaceful sanctuary for physical and mental well-being.',
  },
];

const GenderEquity = () => (
  <GenericPage
    title="Measures for the Promotion of Gender Equity"
    sidebar={<IQACSidebar />}
  >
    {/* ─── Overview ─── */}
    <section className="mb-8">
      <p className="text-sm text-gray-600 leading-relaxed">
        Gender equity refers to the equal rights, opportunities, and treatment
        of all genders, regardless of their identity or expression. At Shri Sant
        Gajanan Maharaj College of Engineering, gender sensitivity is
        demonstrated through various initiatives and actions, fostering a safe,
        secure, and healthy atmosphere on campus. Students are sensitized through
        special lectures and functions.
      </p>
    </section>

    {/* ─── Safety & Security ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-2 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
        Safety &amp; Security
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Separate hostels for girls and boys with excellent amenities and robust
        security arrangements ensure an inclusive environment where all students
        feel welcomed and valued.
      </p>

      <div className="space-y-3">
        {safetyMeasures.map((m, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-saffron/30 transition-colors"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ssgmce-blue/5 text-ssgmce-blue text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800">{m.title}</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ─── Additional Amenities & Initiatives ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
        Amenities &amp; Initiatives
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {amenities.map((a, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-gray-100"
          >
            <p className="text-sm font-semibold text-gray-800">{a.title}</p>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ─── Download ─── */}
    <section>
      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-ssgmce-blue hover:text-ssgmce-saffron font-medium transition-colors"
      >
        Download Full Report (PDF) ↗
      </a>
    </section>
  </GenericPage>
);

export default GenderEquity;
