import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

/* ─── Data ─── */
const initiatives = [
  'Every residential building, central library and sports complex named after Saints of the nation.',
  'Prayer halls in boys and girls hostels with photos of Shri Ramakrishna, Maa Sarada Devi, Swami Vivekananda and Shri Gajanan Maharaj for daily morning and evening prayers.',
  'Community / College prayer hall in the Samarth Ramdas Krida Mandir for daily evening prayers by resident staff, family members and guests.',
  'Working hours commence with Shahnai music for 15 minutes, followed by National Anthem, Global Prayer and 10-minute Vipassana (Aan-Apan) meditation — all through a campus-wide audio system.',
  'Celebration of Shri Gajanan Maharaj Pragat Din and Samadhi Din with prayer, pooja, bhajan, aarti and Mahaprasad for the entire college community.',
  'Celebration of religious days — Swami Vivekananda Jayanti, Shri Ramakrishna Jayanti, Maa Sarada Devi Jayanti, Ramnavami — with voluntary participation.',
  '"Sparsh" book counter at campus library entrance with low-priced spiritual literature from Ramakrishna Math & Mission, Gita Press and others.',
  'Spiritual discourses by monks, religious and social workers at regular intervals.',
  'Photos of Shri Gajanan Maharaj in all classrooms, cabins and offices; weekly Aarti every Thursday.',
  'Yoga and meditation hall with trained Yoga teachers separately for boys and girls.',
  'Spiritual and religious literature section in the central library with 3,286 volumes.',
];

const impactItems = [
  'Timely reporting by students, faculty and staff before National Anthem and prayer.',
  'Campus remains free from noise, clamor and any disturbances despite 3,500+ residents.',
  'No crowding, uncalled-for gatherings, gossiping, or shouting behavior.',
  'Anger and rage find no place amongst campus inmates.',
  'Reduced distraction and increased concentration — more merit students in university exams, prizes in national/international competitions, successful Ph.D. completions.',
  'Sense of collectivism and team spirit visible in every act and task.',
  'Purely vegetarian food throughout the campus including for visitors.',
  'Cases of indiscipline, quarrels, fights and similar incidents are rare or non-existent.',
  'Students distribute snacks and sherbets to thousands of devotees during religious processions through self-contributions — an act of selfless service.',
  'Students celebrate birthdays with deprived and physically challenged children of the society.',
  'Faculty and staff distribute Mahaprasad during Utsavas through self-contributions.',
  'Visiting dignitaries, accreditation teams and campus recruiters have appreciated the spiritual culture in their remarks and feedback.',
  'Recruiters convey strong emotional and spiritual quotients of SSGMCE recruits.',
  'Students organize Granth Dindi (walking barefoot carrying religious books) in the campus.',
  'Campus is free from smoking, gutkha, pan and alcohol.',
  'No use of unfair means in examinations or malpractices by faculty and staff.',
  'Inmates frequently donate to Shri Gajanan Maharaj Sansthan for philanthropic activities.',
];

/* ─── Component ─── */
const Distinctiveness = () => {
  return (
    <GenericPage title="Institutional Distinctiveness" sidebar={<IQACSidebar />}>

      {/* ─── Theme ─── */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Education in Environment of Spiritual Foundation
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-gray-100">
          Shri Sant Gajanan Maharaj College of Engineering, Shegaon has inherited a spiritual ambience from
          its parent organisation <strong className="text-gray-800">Shri Gajanan Maharaj Sansthan</strong> with the motto{' '}
          <em>"Sarve Bhavantu Sukhinah"</em> (Let All Be Happy). Over four decades the college has consolidated this
          inheritance into a subtle spiritual environment for holistic development of students, faculty, staff,
          administrators and visitors — education in an environment of spiritual foundation through the symbiosis
          of science and spirituality.
        </p>
      </div>

      {/* ─── Initiatives ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Initiatives for a Spiritually Founded Environment
        </h3>
        <ol className="space-y-2 pl-3">
          {initiatives.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Impact ─── */}
      <section className="mb-6">
        <h3 className="text-base font-bold text-ssgmce-blue mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Impact &amp; Visibility in Campus Culture
        </h3>
        <div className="grid sm:grid-cols-2 gap-2.5 pl-3">
          {impactItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg border border-gray-100 text-sm text-gray-600 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-ssgmce-saffron mt-2 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PDF Link ─── */}
      <div className="pt-4 border-t border-gray-100">
        <a
          href="https://www.ssgmce.ac.in/uploads/IQAC_Institutional.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ssgmce-saffron hover:text-ssgmce-blue transition-colors font-medium"
        >
          View Full Document (PDF) &rarr;
        </a>
      </div>

    </GenericPage>
  );
};

export default Distinctiveness;
