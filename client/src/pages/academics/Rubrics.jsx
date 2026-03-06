import React from 'react';
import { FaClipboardList, FaFlask, FaProjectDiagram, FaBullhorn, FaDownload, FaCheckCircle, FaExclamationCircle, FaTimesCircle, FaCalendarAlt, FaUserTie } from 'react-icons/fa';
import GenericPage from '../../components/GenericPage';
import AcademicsSidebar from '../../components/AcademicsSidebar';

const PDF_URL = 'https://www.ssgmce.ac.in/uploads/Rubrics%20for%20Theory%20Laboratory%20Project%20&%20Seminar%202024-25-for%20Website.pdf';

/* ── colour helpers for High / Medium / Low ── */
const highCell = 'bg-green-50 text-green-800';
const medCell = 'bg-yellow-50 text-yellow-800';
const lowCell = 'bg-red-50 text-red-800';

const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-ssgmce-blue/10 rounded-lg">
      <Icon className="text-ssgmce-blue text-xl" />
    </div>
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
  </div>
);

const Rubrics = () => {
  return (
    <GenericPage title="Rubrics for Theory, Laboratory, Project & Seminar" sidebar={<AcademicsSidebar />}>
      {/* Intro */}
      <div className="bg-gradient-to-r from-ssgmce-blue/5 to-ssgmce-orange/5 rounded-xl p-6 mb-8 border border-ssgmce-blue/10">
        <p className="text-gray-700 leading-relaxed">
          The following rubrics define the evaluation criteria for <strong>Theory</strong>, <strong>Laboratory</strong>, <strong>Project</strong>, and <strong>Seminar</strong> internal assessments for <strong>Session 2024-25</strong>, effective from <strong>01 July 2024</strong>. These rubrics ensure transparent, consistent, and fair evaluation across all departments.
        </p>
      </div>

      {/* ────────────────────────── 1. THEORY ────────────────────────── */}
      <div className="mb-10">
        <SectionHeading icon={FaClipboardList} title="Theory Internal Evaluation" />
        <p className="text-gray-600 mb-4">Total weightage: <strong>20 Marks</strong></p>

        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-ssgmce-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left">Item</th>
                <th className="px-4 py-3 text-center">Duration</th>
                <th className="px-4 py-3 text-center">Evaluation Scale</th>
                <th className="px-4 py-3 text-center">Weightage (out of 20)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">Class Test I & Class Test II</td>
                <td className="px-4 py-3 text-center">1 Hr each</td>
                <td className="px-4 py-3 text-center">30 marks (2 Units each)</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3 font-medium">Teacher Evaluation Component (TEC)</td>
                <td className="px-4 py-3 text-center">Throughout semester</td>
                <td className="px-4 py-3 text-center">30 marks (any one TEC per student/subject)</td>
                <td className="px-4 py-3 text-center font-semibold">05</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Attendance sub-table */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Attendance Marks (05)</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Attendance %</th>
                <th className="px-4 py-2 text-center">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['95 – 100%', '05'],
                ['90 – 94.99%', '04'],
                ['85 – 89.99%', '03'],
                ['80 – 84.99%', '02'],
                ['75 – 79.99%', '01'],
                ['Below 75%', '00'],
              ].map(([range, marks], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{range}</td>
                  <td className="px-4 py-2 text-center font-semibold">{marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ────────────────────────── 2. LAB ────────────────────────── */}
      <div className="mb-10">
        <SectionHeading icon={FaFlask} title="Continuous Evaluation in Lab Sessions" />
        <p className="text-gray-600 mb-4">Each lab session evaluated on <strong>10 marks</strong> across three parameters.</p>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-ssgmce-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left">Parameter</th>
                <th className="px-4 py-3 text-center">Max</th>
                <th className={`px-4 py-3 text-center`}>High</th>
                <th className={`px-4 py-3 text-center`}>Medium</th>
                <th className={`px-4 py-3 text-center`}>Low</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium">R1 – Conduction of Experiment</td>
                <td className="px-4 py-3 text-center font-semibold">5</td>
                <td className={`px-4 py-3 text-center text-xs ${highCell}`}>Experiment conducted / Program executed with calculations &amp; result <br/><span className="font-bold">4–5</span></td>
                <td className={`px-4 py-3 text-center text-xs ${medCell}`}>Conducted but necessary calculation not done <br/><span className="font-bold">2–3</span></td>
                <td className={`px-4 py-3 text-center text-xs ${lowCell}`}>Not conducted / Not executed <br/><span className="font-bold">0</span></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">R2 – Record Writing</td>
                <td className="px-4 py-3 text-center font-semibold">3</td>
                <td className={`px-4 py-3 text-center text-xs ${highCell}`}>Neat, clean &amp; complete practical details <br/><span className="font-bold">2–3</span></td>
                <td className={`px-4 py-3 text-center text-xs ${medCell}`}>Submitted but incomplete <br/><span className="font-bold">1</span></td>
                <td className={`px-4 py-3 text-center text-xs ${lowCell}`}>Not submitted <br/><span className="font-bold">0</span></td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium">R3 – Post-experimental Viva</td>
                <td className="px-4 py-3 text-center font-semibold">2</td>
                <td className={`px-4 py-3 text-center text-xs ${highCell}`}>Answered most questions <br/><span className="font-bold">2</span></td>
                <td className={`px-4 py-3 text-center text-xs ${medCell}`}>Answered few questions <br/><span className="font-bold">1</span></td>
                <td className={`px-4 py-3 text-center text-xs ${lowCell}`}>Did not answer any <br/><span className="font-bold">0</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ────────────────────────── 3. PROJECT ────────────────────────── */}
      <div className="mb-10">
        <SectionHeading icon={FaProjectDiagram} title="Project Internal Evaluation (Max 75 Marks)" />

        {/* Overview table */}
        <p className="text-gray-600 mb-4">Project evaluation comprises five rubric rounds (R1–R5). Final weightage is derived from all rounds.</p>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8">
          <table className="w-full text-sm">
            <thead className="bg-ssgmce-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left">Rubric</th>
                <th className="px-4 py-3 text-left">Phase</th>
                <th className="px-4 py-3 text-center">Max Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['R1', 'PPM 1 (Phase I)', 50],
                ['R2', 'PPM 2 (Phase II)', 50],
                ['R3', 'PPM 3 (Phase III)', 50],
                ['R4', 'PPM 4 – Final', 75],
                ['R5', 'Evaluation by Guide', 75],
              ].map(([r, phase, marks], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold">{r}</td>
                  <td className="px-4 py-3">{phase}</td>
                  <td className="px-4 py-3 text-center font-bold">{marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── R1 ── */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">R1 – Phase I (PPM 1) — Max 50</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Parameter</th>
                <th className="px-3 py-2 text-center">Marks</th>
                <th className="px-3 py-2 text-center">High (10-15)</th>
                <th className="px-3 py-2 text-center">Medium (5-9)</th>
                <th className="px-3 py-2 text-center">Low (0-4)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-3 py-2 font-medium">Literature Survey</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>Wider range of relevant literature from multiple sources; relevantly summarized</td>
                <td className={`px-3 py-2 ${medCell}`}>Limited literature reviewed; summarized to formulate problem</td>
                <td className={`px-3 py-2 ${lowCell}`}>Brief, insufficient; not relevant to the problem</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Topic Selection</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>Innovative, useful to society, industry-based problem solving</td>
                <td className={`px-3 py-2 ${medCell}`}>Less innovative, useful to society</td>
                <td className={`px-3 py-2 ${lowCell}`}>Useful to limited group, not innovative</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Objectives of Proposed Work</td>
                <td className="px-3 py-2 text-center font-semibold">20</td>
                <td className={`px-3 py-2 ${highCell}`}>All objectives well explained (14-20)</td>
                <td className={`px-3 py-2 ${medCell}`}>Average explanation (7-13)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Not well defined (0-6)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── R2 ── */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">R2 – Phase II (PPM 2) — Max 50</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Parameter</th>
                <th className="px-3 py-2 text-center">Marks</th>
                <th className="px-3 py-2 text-center">High (10-15)</th>
                <th className="px-3 py-2 text-center">Medium (5-9)</th>
                <th className="px-3 py-2 text-center">Low (0-4)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-3 py-2 font-medium">Planning of Work</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>50% or more work completed</td>
                <td className={`px-3 py-2 ${medCell}`}>30% work completed</td>
                <td className={`px-3 py-2 ${lowCell}`}>10% work completed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Problem Statement &amp; Methodology</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>Clearly specified; relevant, defined methodology</td>
                <td className={`px-3 py-2 ${medCell}`}>Clearly specified; average methodology explanation</td>
                <td className={`px-3 py-2 ${lowCell}`}>Vague; methodology not defined</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Presentation</td>
                <td className="px-3 py-2 text-center font-semibold">20</td>
                <td className={`px-3 py-2 ${highCell}`}>Good technical details &amp; communication (14-20)</td>
                <td className={`px-3 py-2 ${medCell}`}>Average technical details (7-13)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Poor technical details &amp; communication (0-6)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── R3 ── */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">R3 – Phase III (PPM 3) — Max 50</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Parameter</th>
                <th className="px-3 py-2 text-center">Marks</th>
                <th className="px-3 py-2 text-center">High</th>
                <th className="px-3 py-2 text-center">Medium</th>
                <th className="px-3 py-2 text-center">Low</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-3 py-2 font-medium">% of Work Completed</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>≥75% completed (10-15)</td>
                <td className={`px-3 py-2 ${medCell}`}>50% completed (5-9)</td>
                <td className={`px-3 py-2 ${lowCell}`}>30% completed (0-4)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Demonstration &amp; Presentation</td>
                <td className="px-3 py-2 text-center font-semibold">35</td>
                <td className={`px-3 py-2 ${highCell}`}>Objectives well defined; steps clearly specified (25-35)</td>
                <td className={`px-3 py-2 ${medCell}`}>Objectives defined; steps not clearly specified (10-24)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Steps not defined (0-9)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── R4 ── */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">R4 – Phase IV (PPM Final) — Max 75</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Parameter</th>
                <th className="px-3 py-2 text-center">Marks</th>
                <th className="px-3 py-2 text-center">High</th>
                <th className="px-3 py-2 text-center">Medium</th>
                <th className="px-3 py-2 text-center">Low</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-3 py-2 font-medium">Incorporated Suggestions</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>All suggestions from PPM1-PPM3 incorporated</td>
                <td className={`px-3 py-2 ${medCell}`}>Moderate suggestions incorporated</td>
                <td className={`px-3 py-2 ${lowCell}`}>Suggestions not implemented</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Demonstration &amp; Presentation</td>
                <td className="px-3 py-2 text-center font-semibold">30</td>
                <td className={`px-3 py-2 ${highCell}`}>Able to justify and articulate all parameters (20-30)</td>
                <td className={`px-3 py-2 ${medCell}`}>Justified but scope for improvement (9-19)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Not able to justify most parameters (0-8)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Results &amp; Conclusions</td>
                <td className="px-3 py-2 text-center font-semibold">30</td>
                <td className={`px-3 py-2 ${highCell}`}>Results &amp; discussion presented properly with clear analysis</td>
                <td className={`px-3 py-2 ${medCell}`}>Results presented; interpretations from analysis</td>
                <td className={`px-3 py-2 ${lowCell}`}>Results &amp; conclusions not adequate</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── R5 ── */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">R5 – Evaluation by Project Guide — Max 75</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Parameter</th>
                <th className="px-3 py-2 text-center">Marks</th>
                <th className="px-3 py-2 text-center">High</th>
                <th className="px-3 py-2 text-center">Medium</th>
                <th className="px-3 py-2 text-center">Low</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="px-3 py-2 font-medium">Publication / Project Expo</td>
                <td className="px-3 py-2 text-center font-semibold">20</td>
                <td className={`px-3 py-2 ${highCell}`}>Highly reputed Journal / IEEE Intl. Conf. / National-level expo (10-20)</td>
                <td className={`px-3 py-2 ${medCell}`}>Reputed Journal / Intl. Conf. / State-level expo (6-9)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Journal / National Conf. / Institute-level expo (0-5)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Attendance &amp; Consistency</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>Regularly reports to guide; consistent work (15-20)</td>
                <td className={`px-3 py-2 ${medCell}`}>Reports to guide; lacks consistency (7-14)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Irregular attendance; no consistency (0-6)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Team Work &amp; Group Dynamics</td>
                <td className="px-3 py-2 text-center font-semibold">15</td>
                <td className={`px-3 py-2 ${highCell}`}>Good coordination; synergy among members (15-25)</td>
                <td className={`px-3 py-2 ${medCell}`}>Fair teamwork; majority function adequately (8-14)</td>
                <td className={`px-3 py-2 ${lowCell}`}>Lack of coordination (0-7)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">Project Report</td>
                <td className="px-3 py-2 text-center font-semibold">25</td>
                <td className={`px-3 py-2 ${highCell}`}>Format strictly followed; logical organization; all sections complete</td>
                <td className={`px-3 py-2 ${medCell}`}>Format mostly followed; minor gaps</td>
                <td className={`px-3 py-2 ${lowCell}`}>Format not followed; sections incomplete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ────────────────────────── 4. SEMINAR ────────────────────────── */}
      <div className="mb-10">
        <SectionHeading icon={FaBullhorn} title="Seminar Evaluation (Max 50 Marks)" />

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-ssgmce-blue text-white">
              <tr>
                <th className="px-4 py-3 text-left">Performance Criteria</th>
                <th className="px-4 py-3 text-center">Marks</th>
                <th className="px-4 py-3 text-center">High (7-10)</th>
                <th className="px-4 py-3 text-center">Medium (4-6)</th>
                <th className="px-4 py-3 text-center">Low (0-3)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium">Organization</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
                <td className={`px-4 py-3 ${highCell}`}>Objective clearly stated; logical, easy to follow</td>
                <td className={`px-4 py-3 ${medCell}`}>Objective clear but information not relevant</td>
                <td className={`px-4 py-3 ${lowCell}`}>Objective not clear; information not relevant</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">Demonstration &amp; Knowledge</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
                <td className={`px-4 py-3 ${highCell}`}>Complete understanding; full knowledge with explanations</td>
                <td className={`px-4 py-3 ${medCell}`}>Some understanding; few points explained clearly</td>
                <td className={`px-4 py-3 ${lowCell}`}>Poor understanding; no clear explanation</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium">Presentation &amp; Communication</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
                <td className={`px-4 py-3 ${highCell}`}>Good technical details; good communication; engaged with audience</td>
                <td className={`px-4 py-3 ${medCell}`}>Good details; average communication; eye contact not proper</td>
                <td className={`px-4 py-3 ${lowCell}`}>Poor technical details; reads slides; no eye contact</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium">Impact of Visual Aids</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
                <td className={`px-4 py-3 ${highCell}`}>PPTs clear, readable, error-free</td>
                <td className={`px-4 py-3 ${medCell}`}>PPTs clear, readable but include few errors</td>
                <td className={`px-4 py-3 ${lowCell}`}>PPTs not clear; contain errors</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium">Question / Answer</td>
                <td className="px-4 py-3 text-center font-semibold">10</td>
                <td className={`px-4 py-3 ${highCell}`}>Defends all questions with clear, insightful answers</td>
                <td className={`px-4 py-3 ${medCell}`}>Answers few questions</td>
                <td className={`px-4 py-3 ${lowCell}`}>Does not provide any answers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Signatories ── */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Approved By</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ['Dr. A. U. Jawadekar', 'IQAC Coordinator'],
            ['Prof D. L. Bhombe', 'Dean (Academics)'],
            ['Dr. S. B. Somani', 'Principal'],
          ].map(([name, role], i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <FaUserTie className="text-ssgmce-blue text-lg shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Download CTA ── */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue rounded-xl p-8 text-center text-white">
        <h3 className="text-xl font-bold mb-2">Download Full Rubrics Document</h3>
        <p className="text-blue-100 mb-5 text-sm">Complete rubrics for Theory, Laboratory, Project &amp; Seminar — Session 2024-25 (5 pages, PDF)</p>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ssgmce-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <FaDownload />
          Download Full PDF
        </a>
      </div>
    </GenericPage>
  );
};

export default Rubrics;
