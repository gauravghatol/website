import React from 'react';
import { FaUserTie, FaBrain, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TrainingCards = () => {
  const programs = [
    {
      title: "Aptitude Training",
      icon: <FaBrain className="text-4xl text-ssgmce-orange" />,
      description: "Rigorous training sessions on Quantitative Aptitude, Logical Reasoning, and Verbal Ability to clear screening tests."
    },
    {
      title: "Technical Preparation",
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      description: "Hands-on coding workshops, hackathons, and domain-specific technical training sessions."
    },
    {
      title: "Soft Skills & GDP",
      icon: <FaUserTie className="text-4xl text-green-500" />,
      description: "Group Discussions, Personal Interviews, and communication skills enhancement workshops."
    },
    {
      title: "Industry Readiness",
      icon: <FaHandshake className="text-4xl text-purple-500" />,
      description: "Seminars by industry experts, corporate etiquette training, and mock interview drives."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
        <h2 className="mb-4 text-center text-[clamp(1.55rem,3.6vw,2rem)] font-bold text-ssgmce-blue">Training Programs</h2>
        <div className="w-24 h-1 bg-ssgmce-orange mx-auto mb-12"></div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border-t-4 border-ssgmce-blue bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-6"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gray-50 p-3.5 sm:p-4">
                  {program.icon}
                </div>
              </div>
              <h3 className="mb-3 text-center text-[clamp(1rem,2vw,1.25rem)] font-bold text-gray-800">{program.title}</h3>
              <p className="text-center text-[clamp(0.82rem,1.4vw,0.9rem)] leading-relaxed text-gray-600">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCards;
