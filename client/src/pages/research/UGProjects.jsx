import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaProjectDiagram,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTag,
  FaSearch
} from 'react-icons/fa';

const UGProjects = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'UG Projects | Research - SSGMCE';
  }, []);

  const projects = [
    {
      title: 'AI-Based Crop Disease Detection System',
      students: ['Rohit Patil', 'Sneha Deshmukh', 'Amit Singh'],
      guide: 'Dr. S. B. Patil',
      dept: 'CSE',
      category: 'Artificial Intelligence',
      year: '2023-24',
      abstract: 'A mobile application utilizing Deep Learning (CNN) to detect and classify crop diseases in real-time from leaf images, providing remedial suggestions to farmers.'
    },
    {
      title: 'Smart Grid Energy Management System',
      students: ['Priya Sharma', 'Rahul Verma'],
      guide: 'Dr. S. R. Paraskar',
      dept: 'Electrical',
      category: 'Power Systems',
      year: '2023-24',
      abstract: 'IoT-based system for monitoring and optimizing energy consumption in smart grids, featuring demand response management and real-time analytics.'
    },
    {
      title: 'Autonomous Fire Fighting Robot',
      students: ['Aniket Joshi', 'Pooja Kulkarni'],
      guide: 'Dr. S. P. Trikal',
      dept: 'Mechanical',
      category: 'Robotics',
      year: '2022-23',
      abstract: 'Design and fabrication of an autonomous robot capable of detecting fire using flame sensors and extinguishing it using a water jet mechanism.'
    },
    {
      title: '5G Antenna Design for IoT Applications',
      students: ['Neha Gupta', 'Vikram Mane'],
      guide: 'Dr. D. D. Nawgaje',
      dept: 'EnTC',
      category: 'Communication',
      year: '2023-24',
      abstract: 'Design and simulation of improved microstrip patch antennas for sub-6GHz 5G networks, focusing on high gain and wide bandwidth.'
    },
    {
      title: 'Blockchain-based E-Voting System',
      students: ['Karan Mehta', 'Simran Kaur'],
      guide: 'Prof. A. S. Alvi',
      dept: 'IT',
      category: 'Blockchain',
      year: '2023-24',
      abstract: 'A decentralized and transparent voting system ensuring security and anonymity of voters using Ethereum blockchain technology.'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.dept === filter);

  const departments = ['All', 'CSE', 'IT', 'Electrical', 'EnTC', 'Mechanical'];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Undergraduate (UG) Projects"
        subtitle="Showcasing Student Innovation & Engineering Solutions"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'UG Projects' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Intro */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Final Year Projects</h2>
                <p className="text-gray-700 leading-relaxed">
                  The capstone project is the culmination of the engineering curriculum, where students apply their knowledge to solve real-world problems. This repository lists some of the commendable projects developed by our students.
                </p>
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <FaProjectDiagram className="text-3xl text-blue-600" />
              </div>
            </section>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === dept
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <section className="grid gap-6">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded uppercase tracking-wider">
                          {project.dept}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.abstract}
                      </p>

                      <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                          <FaUserGraduate /> {project.students.join(', ')}
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full">
                          <FaChalkboardTeacher /> Guide: {project.guide}
                        </div>
                        <div className="flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full">
                          <FaTag /> {project.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGProjects;
