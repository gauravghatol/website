import { useState, useEffect } from "react";
import PageHeader from "/src/components/PageHeader";
import {
  FaUniversity,
  FaShieldAlt,
  FaGavel,
  FaUsers,
  FaHandsHelping,
  FaLightbulb,
  FaChevronDown,
  FaChevronUp,
  FaUserTie,
  FaBook,
  FaTrophy,
  FaHome,
  FaMusic,
  FaRunning,
  FaBalanceScale,
  FaFlask,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Committees = () => {
  const [expandedSGBAU, setExpandedSGBAU] = useState(null);
  const [expandedOther, setExpandedOther] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Committees | SSGMCE";
  }, []);

  const sgbauCommittees = [
    {
      name: "Local Enquiry Committee (LEC)",
      desc: "Conducts local inquiries for university matters and student grievances",
      details:
        "The LEC serves as the primary body for investigating and resolving issues pertaining to university matters at the college level. It ensures fair and transparent processes in handling student grievances and academic concerns.",
      icon: FaGavel,
      members: "5-7 Faculty Members",
    },
    {
      name: "Affiliation Committee",
      desc: "Ensures compliance with university affiliation norms and regulations",
      details:
        "Monitors and ensures that the college maintains all requirements for continued affiliation with SGBAU. Reviews academic programs, infrastructure, and faculty qualifications regularly.",
      icon: FaUniversity,
      members: "Committee of Senior Faculty",
    },
    {
      name: "Exam Flying Squad",
      desc: "Monitors examination conduct and prevents malpractices",
      details:
        "Conducts surprise inspections during examinations to ensure fair conduct. Takes immediate action against any form of malpractice and maintains examination integrity.",
      icon: FaShieldAlt,
      members: "Rotating Faculty Squad",
    },
    {
      name: "College Development Committee (CDC)",
      desc: "Plans and oversees institutional development initiatives",
      details:
        "Responsible for strategic planning and implementation of development projects. Oversees infrastructure improvements, academic enhancements, and resource allocation.",
      icon: FaLightbulb,
      members: "Principal, Faculty Heads, Staff",
    },
    {
      name: "Grievance Redressal Committee",
      desc: "Addresses student and staff grievances promptly and effectively",
      details:
        "Provides a platform for students and staff to raise concerns. Ensures timely resolution of grievances while maintaining confidentiality and fairness in the process.",
      icon: FaUsers,
      members: "Faculty + Student Representatives",
    },
    {
      name: "Internal Quality Assurance Cell (IQAC)",
      desc: "Monitors and enhances quality of academic programs",
      details:
        "IQAC is the primary quality sustenance and enhancement agency. It organizes workshops, monitors academic processes, and prepares quality reports for NAAC accreditation.",
      icon: FaTrophy,
      members: "Coordinators + Faculty Members",
    },
  ];

  const aicteCommittees = [
    {
      name: "Anti-Ragging Committee",
      icon: FaShieldAlt,
      color: "red",
      desc: "Ensures a ragging-free campus environment and takes strict action against violators",
    },
    {
      name: "Internal Complaint Committee (ICC)",
      icon: FaGavel,
      color: "blue",
      desc: "Addresses complaints related to sexual harassment and ensures a safe campus",
    },
    {
      name: "SC/ST Committee",
      icon: FaUsers,
      color: "orange",
      desc: "Promotes welfare and addresses grievances of SC/ST students and staff",
    },
    {
      name: "Student Counselor Committee",
      icon: FaHandsHelping,
      color: "green",
      desc: "Provides academic and personal counseling support to students",
    },
    {
      name: "Innovation Cell",
      icon: FaLightbulb,
      color: "purple",
      desc: "Fosters innovation, creativity, and entrepreneurial mindset among students",
    },
    {
      name: "Industry-Institute Cell",
      icon: FaUniversity,
      color: "blue",
      desc: "Bridges gap between industry and academia through collaborations",
    },
    {
      name: "Women Development Cell",
      icon: FaUsers,
      color: "pink",
      desc: "Empowers women and ensures gender equality on campus",
    },
    {
      name: "Entrepreneurship Development Cell",
      icon: FaLightbulb,
      color: "orange",
      desc: "Nurtures entrepreneurial skills and startup culture among students",
    },
  ];

  const otherCommittees = [
    { name: "Library Advisory Committee", icon: FaBook },
    { name: "Sports Committee", icon: FaRunning },
    { name: "Cultural Committee", icon: FaMusic },
    { name: "Discipline Committee", icon: FaBalanceScale },
    { name: "Hostel Committee", icon: FaHome },
    { name: "Alumni Association", icon: FaUserTie },
    { name: "Parent-Teacher Association", icon: FaUsers },
    { name: "Research & Development Committee", icon: FaFlask },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardHover = {
    scale: 1.02,
    transition: { duration: 0.2 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Committees"
        subtitle="Institutional Committees & Cells for Excellence"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
      />

      {/* Introduction */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              SSGMCE has constituted various committees as per the directives of{" "}
              <strong className="text-ssgmce-blue">
                Sant Gadge Baba Amravati University (SGBAU)
              </strong>{" "}
              and
              <strong className="text-ssgmce-blue">
                {" "}
                All India Council for Technical Education (AICTE)
              </strong>{" "}
              to ensure smooth functioning and holistic development of the
              institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SGBAU Committees */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <FaUniversity className="text-5xl text-ssgmce-blue mr-4" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-ssgmce-blue">
                    SGBAU Committees
                  </h2>
                  <div className="w-24 h-1 bg-ssgmce-orange mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-center text-gray-600 mb-2">
                Committees formed as per the directives of Sant Gadge Baba
                Amravati University
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {sgbauCommittees.map((committee, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="bg-gradient-to-br from-blue-50/80 to-white backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-ssgmce-blue overflow-hidden"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() =>
                      setExpandedSGBAU(expandedSGBAU === idx ? null : idx)
                    }
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className="w-12 h-12 bg-ssgmce-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <committee.icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 mb-2">
                            {committee.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-2">
                            {committee.desc}
                          </p>
                          <div className="flex items-center text-xs text-ssgmce-blue font-semibold">
                            <FaUsers className="mr-1" />
                            {committee.members}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedSGBAU === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2 text-ssgmce-blue"
                      >
                        <FaChevronDown className="text-xl" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedSGBAU === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-700 leading-relaxed bg-white/50 p-4 rounded-lg">
                              {committee.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AICTE Committees */}
      <section className="py-16 bg-gradient-to-br from-white via-orange-50/20 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <FaShieldAlt className="text-5xl text-ssgmce-orange mr-4" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-ssgmce-blue">
                    AICTE Committees
                  </h2>
                  <div className="w-24 h-1 bg-ssgmce-orange mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-center text-gray-600 mb-2">
                Mandatory committees as per All India Council for Technical
                Education norms
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {aicteCommittees.map((committee, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-ssgmce-orange group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-ssgmce-orange/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <committee.icon className="text-4xl text-ssgmce-orange mx-auto mb-4" />
                  </motion.div>

                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-3 relative z-10">
                    {committee.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed relative z-10">
                    {committee.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Committees */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Other <span className="text-ssgmce-blue">Committees</span>
              </h2>
              <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-600 mt-4">
                Additional committees for smooth functioning of various
                activities
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {otherCommittees.map((committee, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="bg-gradient-to-r from-blue-50/60 to-white backdrop-blur-sm p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-ssgmce-blue group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-ssgmce-blue/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-ssgmce-blue transition-colors duration-300">
                      <committee.icon className="text-ssgmce-blue text-lg group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {committee.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Committee Objectives */}
      <section className="py-16 bg-gradient-to-r from-ssgmce-blue via-blue-700 to-ssgmce-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="dots"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="2" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Committee Objectives
              </h2>
              <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-lg opacity-90">
                Our committees work towards these core goals
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                "Ensure fair and transparent functioning of the institution",
                "Address student and staff grievances effectively",
                "Promote diversity, equity, and inclusion on campus",
                "Foster innovation, research, and entrepreneurship",
                "Maintain discipline and a conducive learning environment",
                "Strengthen industry-academia collaboration",
              ].map((objective, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex items-start bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-ssgmce-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="leading-relaxed">{objective}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committees;
