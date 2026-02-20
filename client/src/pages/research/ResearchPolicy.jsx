import React from 'react';
import { FaFilePdf, FaExternalLinkAlt, FaClipboardList, FaProjectDiagram, FaSearch, FaCogs, FaChartLine, FaAward } from 'react-icons/fa';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';

const policyDocuments = [
  {
    title: "Research & Development Policy",
    description: "Comprehensive R&D policy document of SSGMCE covering objectives, scope, guidelines, and framework for research activities.",
    url: "https://www.ssgmce.ac.in/uploads/pdf/R&D_POLICY_SSGMCE.pdf",
  },
  {
    title: "Research & Development Policy - Annexure",
    description: "Supporting annexures including project definition formats, evaluation criteria, phase-wise guidelines, and assessment forms.",
    url: "https://www.ssgmce.ac.in/uploads/pdf/R&D%20Policy%20-%20Annex.pdf",
  },
];

const annexureHighlights = [
  {
    icon: FaProjectDiagram,
    title: "Annexure I – Interdisciplinary Project Definition",
    description: "Format for Interdisciplinary Projects Special Focus Group (IPRG) including project modules, work packages, deliverables, and task breakdown.",
  },
  {
    icon: FaClipboardList,
    title: "Annexure II – Project Phases & Evaluation",
    description: "Detailed phase-wise project guidelines — Phase I (Project guide details, identification, proposed titles), Phase II (Patent search, literature review), Phase III (Work plan, budget, timeline), and evaluation rubrics.",
  },
  {
    icon: FaSearch,
    title: "Prior Art & Patent Search",
    description: "Guidelines for conducting patent searches via IPINDIA.GOV.IN and USPTO.GOV.IN, along with literature review methodology for finalizing projects.",
  },
  {
    icon: FaCogs,
    title: "Project Identification Process",
    description: "Systematic process covering emerging trends (IoT, Industry 4.0), commercial products, agriculture, medical sciences, and societal solutions with references to research institutes, incubation centers, and funding agencies.",
  },
  {
    icon: FaChartLine,
    title: "Resource & Infrastructure Planning",
    description: "Guidelines for resource capacity analysis, make/buy decisions, infrastructure identification, concept trials, industry-academia collaboration with IITs, NITs, and consultancy firms.",
  },
  {
    icon: FaAward,
    title: "Assessment & Deliverables",
    description: "Comprehensive evaluation framework including project milestones, deliverable tracking, faculty-student collaboration models, and project award/reward criteria.",
  },
];

const ResearchPolicy = () => {
  return (
    <GenericPage title="Research Policy Document" sidebar={<ResearchSidebar />}>
      <p className="text-gray-700 mb-6">
        Guidelines and ethical standards for conducting research at SSGMCE. The Research & Development Policy outlines the college's commitment to fostering innovation, facilitating grants, and supporting faculty and students in their research endeavors.
      </p>

      {/* Policy Documents Section */}
      <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">Policy Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {policyDocuments.map((doc, idx) => (
          <a
            key={idx}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-ssgmce-blue transition-all duration-200"
          >
            <div className="flex-shrink-0 mt-1">
              <FaFilePdf className="text-red-600 text-3xl group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-ssgmce-blue group-hover:text-ssgmce-saffron transition-colors flex items-center gap-2">
                {doc.title}
                <FaExternalLinkAlt className="text-xs text-gray-400" />
              </h4>
              <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
              <span className="inline-block mt-2 text-sm text-ssgmce-saffron font-medium">
                View Document →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Annexure Highlights */}
      <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">Annexure Highlights</h3>
      <p className="text-gray-600 mb-4 text-sm">
        The R&D Policy Annexure contains detailed formats and guidelines organized across multiple phases:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {annexureHighlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="text-ssgmce-blue text-lg" />
                <h4 className="font-semibold text-ssgmce-blue text-sm">{item.title}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </GenericPage>
  );
};

export default ResearchPolicy;
