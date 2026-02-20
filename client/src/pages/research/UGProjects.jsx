import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaFlask, FaExternalLinkAlt, FaChevronRight, FaSearch } from 'react-icons/fa';

const departments = [
  {
    name: 'Computer Science and Engineering',
    shortName: 'CSE',
    route: '/departments/cse',
    accent: 'blue',
    batches: [
      {
        year: '2024–25',
        projects: [
          'GenAI-Powered Application Tracking System: Enhancing Recruitment with Skill Fitment Analysis',
          'Eloqify - Intelligent Interaction Companion',
          'WeCare: Blockchain-Based Solution for Modern Healthcare Challenges',
          'Job Nexus: An AI-Driven Career Placement Portal for Optimized Campus Recruitment',
          'Integrated Air Travel Management and Navigation System',
          'AI Driven Fitness Platform Using Deep CNN',
          'Automated Guide for Accurate and Faster Packaging of E-Commerce Orders',
          'Brain Stroke Detection Using Machine Learning Approach',
          'Smart Timetable Generator for College',
          'Automated Price Comparison and Cheapest Option Finder for Online Grocery Purchase',
          'ProjectPulse: College Project Showcase Platform',
          'Korgut: Connective Platform between Students, Recruiter, and College',
          'AI-Based Web-Application for Personalized Financial Management',
          'Integrated QR Code Based Medical Inventory and Healthcare Management',
          'Agroguide: Crop Recommendation System Using Machine Learning',
          'Smart CCTV Surveillance System Using Python',
          'Development of a NextGen Meeting Portal',
          'Song Recommendation System Based on Emotion',
          'Machine Learning Approach for Dream 11 Cricket Team Selection',
        ],
      },
      {
        year: '2023–24',
        projects: [
          'To Design Effective Mechanism for Seed Analysis and Plantation',
          'Karna Rakshak: Hearing Analysis with Digital Audiometry',
          'Food Link - Bridging NGOs and Hotels',
          'To Design an Analysis Mechanism for Quality of Soil and Its Impact on Seed',
          'Digital Document Verification Using Blockchain Technology',
          'Detection of Insects and Pests in Agriculture Field',
          'Smart Timetable Generator for College',
          'TextInsightPro: Comprehensive Automated Text Analysis Platform',
          'Web App for Text Generation Summarization',
          'Face Recognition Attendance System',
          'System for Plant Disease Detection and Diagnosis',
          'Breast Cancer Detection Using Image Processing',
          'Voice Analysis for Disease Screening',
          'Creating Crowdfunding Marketplace Using Blockchain',
          'Plant Disease Detection Using Mask RCNN',
          'Creating a Safe Environment for Women: A Location-Based Review Platform',
          'Securing Parking Spaces: Safeguarding of Vehicles',
          'Advanced Plant Disease Detection Using VGG Net with CNN',
          'Design and Development of Seed Dryer Module of Seed Independence',
          'CLI Command Generation Using Generative AI',
          'Effective End-of-Life (EOL) Management of Devices in Organization',
          'Integration of ChatGPT to Verify and Update EOL of Devices',
        ],
      },
      {
        year: '2022–23',
        projects: [
          'Heart and Alzheimer Disease Detection Using Deep Learning',
          'Online Examination Proctoring System Using Artificial Intelligence',
          'Deploying ML Model on Cloud for Super Mart Sales Data Analytics and Forecasting',
          'Advanced Forecasting of Demandable Products Prices Using Machine Learning',
          'Voting System Using Blockchain (dApp)',
          'Plant Leaf Diseases Detection with Deep Learning',
          'Image to Image Search Engine Powered by Elastic Search and TensorFlow',
          'Carpooling System (CapX)',
          'An Effective Brain Tumor Detection System Using Deep Learning',
          'Diabetes Prediction Using Machine Learning',
          'Product Authentication System Using Blockchain',
          'Help Out - Mental Health Journaling and Supporting Application Based on AI',
          'Stock Price Prediction Model Using Technical Analysis',
          'Replication of Voice Using Deep Learning',
          'Hand Gesture Recognition System Using CNN',
          'Smart Toll System Using Machine Learning',
          'Currency Detector Android App for Visually Impaired',
        ],
      },
    ],
  },
  {
    name: 'Electrical Engineering',
    shortName: 'EE',
    route: '/departments/electrical',
    accent: 'amber',
    batches: [
      {
        year: '2024–25',
        projects: [
          'Miniature Working Model of 33/11kV Substation',
          'Design and Development of E-Cargo Bicycle',
          'Power Generation Using Animal Waste',
          'Design of State of Charge Estimation Method for Battery Management System of Electric Vehicle',
          'Smart E-Vehicle Charging System Using RFID',
          'Detection and Classification of Transmission Line Fault Using Stockwell Transform and ANN',
          'Development of Solar Based Charging Station for E-Bicycle',
          'Design and Development of UAV Based Pesticide Sprayer in Agriculture Application',
          'Making a Smart Helmet for Smart City',
          'Development of Anti-Riot Electric Shield for Defense Agency',
          'Design and Control of Micro Grid Fed by Renewable Energy Generating Sources',
          'An Indoor Solar Based Cooking Stove with (Chulha) Storage',
          'Ultrasonic Stick for Blind People',
        ],
      },
      {
        year: '2023–24',
        projects: [
          'Energy Audit Case Study of Tobacco Factory (Collaboration with Fasttrack Packers Pvt. Ltd.)',
          'The Green Breath for Survival of Mankind in 21st Century Using Sustainable Air Purifier',
          'Development of Smart Home Automation System',
          'Fruit Plucking Arm',
          'Electrical Heavy Vehicle Transportation Highway (By Catenary System)',
          'Discrimination of Magnetizing Inrush Current and Internal Fault in Transformer',
          'Development of IoT Based Smart Energy Meter',
          'Detection and Classification of Power Quality Disturbance Using Signal Processing and Soft Computing',
          'Automatic Weighing and Packaging Machine',
          'Renewable Energy Based Modeling and Control of Three Phase Hybrid Microgrid System',
          'Design of Arduino Based Seed Dryer System Using Solar Energy',
          'Development of Algorithm for Crop Monitoring Robot',
          'IoT Based Seed Dryer',
        ],
      },
      {
        year: '2022–23',
        projects: [
          'Simulation Evaluation of Lightning and Non-Lightning Faults Identification of Transmission Line',
          'Solar Sea Water Desalination Machine with RO UV Purifier',
          'Design and Fabrication of Control Panel for Multi Stack Parking System',
          'Design of Bi-directional DC-DC Driver for Electric Vehicle',
          'Modeling and Fabrication of Solar Powered Smart Air Cooler',
          'The Future of Agriculture: Innovation in Agriculture Technology',
          'Smart Helmet for Visually Impaired People Using Arduino',
          'Automatic Power Factor Correction with Measurements over LORA Wireless Communication',
          'IoT Based Smart Saline Bottle Monitoring System',
          'Wireless Charger for Light Electric Vehicle',
          'Smart Solar Panel Monitoring Using IoT Based Wireless Data Transmission',
          'Indoor Navigation System for Visually Impaired',
          'Transmission Line Faults Event Recognition by Using Optimal Machine Learning Approach',
        ],
      },
    ],
  },
  {
    name: 'Electronics & Telecommunication Engineering',
    shortName: 'E&TC',
    route: '/departments/entc',
    accent: 'emerald',
    batches: [
      {
        year: '2024–25',
        projects: [
          'Power Efficient Ventilator',
          'Land Mine Detector Rover',
          'Smart Liquid Level Monitoring',
          'Skin Disease Detection',
          'Diagnostic System for Breast Cancer Classification',
          'Saline Monitoring System',
          'Solar Tree',
          'Design of Electronic Module for Fitness, Health and Safety in Smart Shoes',
          'Cloud Enabled Biometric Door Access System with Mobile Control',
          'Smart Infant Incubator',
          'IoT Based Blood Bank System',
          'Gesture Recognition Based Security Alert System Using Raspberry Pi 5',
          'Wi-Fi Controlled Robot',
          'Application Based Home Automation System',
          'Firefighting Robot Solution Using ESP 32 Module',
          'Wireless EV Charging Vehicle Station with QR Code for Live Charging Status',
          'Detection of Hand-Drawn Circuit',
          'Design & Analysis of Microstrip Patch Antenna for C-Band and X-Band',
          'Design & Analysis of Microstrip Patch Antenna for 5G Application',
          'Atrial Fibrillation Detection Using Neuro-Symbolic AI',
          'Child Vaccination and Reminder',
          'Simulation of 32-Bit Floating Point Vedic Multiplier Using Urdhva Triyakbhyam Sutra',
          'Drone Based Dam Inspection and Analysis for Enhancing Infrastructure Monitoring & Resilience',
          'Face Detection and Recognition Student Attendance System',
          'Medical Report Management and Distribution System Using Blockchain Technology',
          'Water Level Detection and Monitoring for Domestic Use',
          'An Ergolift Pro: Ergonomic and Adjustable Laptop Lift with Health Monitoring System',
          'Autonomous Navigation Rover Using SLAM Algorithm',
          'To Design a System for Rotten Onion Detection and Sorting',
          'Crop Yield Disease Detection Using Deep Learning',
          'Portable Smart Electronic Measuring Device',
          'Automatic Medicine Dispenser',
          'Indoor Navigation System for Visionary Impaired Person',
          'Classification of EMG Based Hand Gestures Using Time & Frequency Domain Features',
          'Contactless Heartbeat Monitoring Using rPPG',
          'Automated Malaria Disease Detection Using Deep Learning',
          'Cotton Plant Disease Predictor Using AI & ML',
        ],
      },
      {
        year: '2023–24',
        projects: [
          'ECG Feature Analysis for Automatic Detection of Cardiac Diseases',
          'E-Notice Board',
          'Design and Implementation of Heart Sound Signal Analysis and Disease Detection System',
          'Design of Control Unit for Fertilizer Decomposition',
          'Development of Decomposition Unit for Agriculture Waste',
          'Design and Development of Waste Segregation Using Sensor',
          'Cleaning Robot',
          'Design and Implementation of Smart Spectacle for Blind People',
          'Design and Implementation of Virtual Primary Clinic',
          'Virtual Primary Clinic',
          'Car Accident Detection and Alert System',
          'IoT Virtual Doctor Robot',
          'Diagnosis of Pneumonia by CNN Classifier',
          'AI-Guided Diagnosis (Medibot)',
          'Enabling Telemedicine Through IoT',
          'IoT Based Flammable Gas and Fire Accident Avoider System with Home Safety',
          'Smart Ventilator',
          'Smart Food Adviser',
          'Reducing Death Crises of Animal on Railway Track',
          'Crop Disease Detection and Diagnosis',
          'Hand Talk Assisting System for Deaf and Dumb People',
          'Bridging Agriculture Communities: A Digital Platform for Machinery Access and Collaboration',
          'Elevating Canteen Management with a Modern Web Solution',
          'Design of Decomposition Unit for Fertilizer Independence',
          'Water Trash Collector',
          'E-Voting System Using Blockchain Technology',
          'Control Unit Design for Fertilizer Decomposition',
          'Hydroponics Farming Automation',
          'Industrial Robotic Arm System',
          'Assistive Navigation Stick',
          'Classification of EMG Signals Using Convolutional Neural Networks',
          'Brain Tumour Detection Using Image Processing',
          'Implementation of Seed Grading System',
          'Design and Implementation of an Integrated Automation System for Organic Fertilizer',
          'Student Information System Android Application',
          'Design and Development of Seed Germination System Using IoT',
          'Research on Soyabean Seed Grading',
          'Design and Development of Seed/Granule Spreader Mechanism for UAV',
          'Web Based Application for Agriculture',
        ],
      },
      {
        year: '2022–23',
        projects: [
          'Design Implementation of Smart Water Level Indicator and Valve Controller',
          'Myocardial Infarction Prediction System',
          'Design and Development of Smart Warehouse Robot Prototype',
          'Smart Farming Application Using Machine Learning Algorithm',
          'Digital Control Scheme for Switch Converter Using Arduino',
          'Classroom Management System Related to NEP-20',
          'Design and Analysis of Multiband Microstrip Patch Antenna',
          'Design and Implementation of Prepaid Smart Electric Meter Using IoT',
          'Smart LPG Gas Level Monitoring and Leakage Detection System Using IoT',
          'Design and Development of Water Ionizer',
          'Cardiovascular Monitoring and Real Time Reporting',
          'AI Based Career Guidance — A Web Application Along with Chatbot',
          'Facial Recognition Smart Glasses for Visually Challenged People',
          'Android Controlled Arduino Robot Car',
          'Smart Shopping Cart',
          'Smart Multilevel Car Parking System',
          'Doodh Dairy App',
          'To Explore the Effect of OM Mantra Meditation on Brain Using Classifiers',
          'Design and Analysis of Microstrip Antenna for LTE Band Application',
          'Design and Analysis of Microstrip Patch Antenna for 5G Application',
          'Smart Traffic Light Controller',
          'Detection of Brain Tumor Using Deep Learning',
          'Manhole Detection and Monitoring System',
          'Smart Safety Jacket for Coal Miners',
          'RF Energy Harvester',
          'Beamforming Network for 5G Application',
          'RFID Based Smart Shopping Trolley Using IoT',
          'Detection of Lumpy Disease by Using Machine Learning',
          'Vehicle Safety System for Blind Spot and Hilly Area',
          'MEMS Based Piezoelectric Nanogenerator',
          'Animal Species Detection Using Raspberry Pi and Deep Learning',
          'Miniaturized Single Feed Multi-Band Microstrip Patch Antenna',
          'Implementation of Secure E-Voting System',
          'Smart Laptop Stand',
          'Your Personal Nutritionist Using FatSecret API',
          'Monitoring and Controlling of Hydroponics System Using IoT Technology',
          'Alcohol Detection Alert and Car Engine Blocking System',
          'Blood Bank Management System',
        ],
      },
    ],
  },
  {
    name: 'Information Technology',
    shortName: 'IT',
    route: '/departments/it',
    accent: 'teal',
    batches: [
      {
        year: '2024–25',
        projects: [
          'Janata Services: Bridging Users with Nearby Services and Businesses',
          'ParkNow: Sharing Community Parking',
          'AI/ML Based Detection of Chronic Kidney Disease Using Ensemble Approach',
          'Evaluation of the Subjective Answer Using Machine Learning',
          'AI Powered Assistive Technology for Visually Impaired People Using Smart Glasses',
          'Employee Attendance Management System by Face Recognition and Geo-location',
          'FurniWeb: Elevating Customer Engagement with AI-Powered Assistance',
          'A Methodology for Sustainable Management of Food Waste Using AI',
          'SSGMCE Alumni Connect',
          'An Automated Waiting Time Prediction System Using IoT with ML',
          'Glamify: AI and ML-Based Personalized Fashion Recommendation System',
          'Binsight: An Intelligent Waste Monitoring System Using Image Processing',
          'Early Detection of Alzheimer\'s Disease Using CNN and NLP',
          'Enhancing Real Estate Price Prediction: A Fuzzy Partition-Driven Genetic Algorithm Approach',
          'Sentiment Evaluation of E-Commerce Customer Feedback for Product Recommendation',
          'Interactive Air Draw Application with OpenCV',
          'Smart E-Waste Management System',
          'Indian Sign Language Recognition Using CNN and MediaPipe',
          'VeriDoc: An AI-Driven Document Verification System Using Blockchain',
        ],
      },
      {
        year: '2023–24',
        projects: [
          'Autism Learning Hub',
          'Course Recommendation System',
          'Integration of ChatGPT to Verify and Update the End-of-Life Database',
          'Agro-Informatics: Empowering Agriculture Through Plant Disease Detection',
          'Personalized Product Recommendations Using Purchase History',
          'Online Print Delivery System',
          'Echoes to Image',
          'Student Educational Platform',
          'A Novel Approach for Food Recommendation as per Geographical Location',
          'Image Processing Based Fruit Identification and Nutrition Assessment System',
          'Voice Based Registration and Authentication System for Visually Impaired People',
          'Smart Food Recommendation System Based on Health Condition',
          'Nutrition Requirement Diagnostic System Based on Health Condition',
          'A Novel Approach for Food Recommendation on the Basis of Daily Life Activities',
          'Nutrition Requirement Based on Daily Activities',
          'Integration into 3D Printing for Image Processing Using AI/ML',
          'Body Part Implant Dashboard for Real Time Monitoring and Reporting',
          'Reviving History: Exploring Forts and Monuments Through Augmented Reality',
          'Cloud Based Printing and Home Delivery',
          'VidMagic: AI Based Text to Video Conversion',
          'Effective End-of-Life (EOL) Management of Devices (Snowflake Integration)',
        ],
      },
      {
        year: '2022–23',
        projects: [
          'Transport Management System',
          'Smart Expense Tracker Application Using Naive Bayes',
          'VirtualCare: The Future of Virtual Healthcare',
          'Real Time Assistive System for Deaf and Dumb Community',
          'Design and Development of Warehouse Management System',
          'Creation GuruKool Student\'s Booklet',
          'Cryptocurrency Price Prediction Using FB Prophet Model',
          'Bike Showroom Management System',
          'Restaurant Management System',
          'Epilepsy Patient Fall Detection System and Its Analysis Using Data Science',
          'Real-Time Crop Prediction and Fertilizer Recommendation System Using ML and IoT',
          'Fitness To Do',
          'Sport-Strides (Sports Learning and Event System)',
          'Human Detection in Surveillance Video',
          'Student Timeline for Student Information System',
          'QR Based Online Food Ordering System',
          'Design and Development of Website for Shegaon Siddhapeeth',
          'Bulletin Web Application',
          'Android News Application',
        ],
      },
    ],
  },
  {
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    route: '/departments/mechanical',
    accent: 'rose',
    batches: [
      {
        year: '2024–25',
        projects: [
          'Design and Development of RC Rover for Agriculture Uses',
          'Built-In Elevated Parking for Cars',
          'CFD Analysis of Water Distribution System of Cooling Towers',
          'Application of AI Tools for Estimation of Appropriate Machining Parameters',
          'Implementation of Lean Manufacturing in Press Shop for Productivity Improvement',
          'Design and Fabrication of Pillow Plate Heat Exchanger Experimental Setup',
          'Design and Development of Seed Loading Mechanism for Tractor Operated Seed Sowing Machine',
          'Productivity Improvement Through Optimization in LV Coils of Transformer Using Lean Tools',
          'Experimental Investigation of EV Battery Cooling Using PCM',
          'Design and Development of Smart Rain Gun Irrigation System',
          'Heart Rate Estimation Using Remote Photoplethysmography with MATLAB Image Processing',
          'IoT Based Smart Hospital System',
          'Wi-Fi Control Fire Fighting Robot',
          'CFD Analysis of Pillow Plate Heat Exchanger',
          'Waste Transformer Oil Blends and Its Effect on Diesel Engine Performance',
          'Experimental Investigation of Photovoltaic Panel Using Evaporative Cooling',
        ],
      },
      {
        year: '2023–24',
        projects: [
          'Design and Development of Dimple Tube Honeycomb Cooler',
          'Design and Development of Seed/Granule Spreader Mechanism for UAV',
          'CFD Analysis of Electric Two-Wheeler Battery for Enhancing Thermal Performance',
          'Design and Development of Modified Seed Sowing Machine',
          'Waste Minimization in Brake Piston Manufacturing by Applying Lean Manufacturing Principles',
          'Design and Development of Customizable 3D Printed Hand Cast',
          'Design and Fabrication of Modified Seed Sowing Machine',
          'Design and Fabrication of Solar Panel Cleaning Mechanism',
          'CFD Analysis and Validation of Axial Compressor Rotor Blade',
          'Design and Development of Seed Sorting Mechanism for Soyabean Seeds',
          'CFD Analysis of Earthen Tubes Honeycomb Cooler',
          'LPG Based Sanitary Waste Incinerator',
          'Design and Development of Electronic Circuit for Solar Array Cleaning Mechanism',
          'Design and Development of Protrusion Tubes Honeycomb Cooler',
          'Design and Development of Waste Separation by Low Temperature Mechanism',
          'Design and Development of Toroidal Propeller for Drones',
          'Dynamic Seat Allocation System Using AI',
          'Finite Element Analysis of a Nail Wire Die',
        ],
      },
      {
        year: '2022–23',
        projects: [
          'Design and Fabrication of Medical Refrigerator Using Peltier for Rural Areas',
          'Design and Development of Step Lift',
          'Automatic Sorting of Railway Platform Dustbin Waste for Efficient Recyclability',
          'Thermal Management for Electric Two Wheelers',
          'Design and Development of Variable Flow Sprayer for Agricultural Application',
          'Design and Development of Smart Luggage Carrier Trolley',
          'Design and Fabrication of Solar Panel Cleaning Mechanism',
          'Design and Development of Smart LPG Stand',
          'Design and Fabrication of Robotic Storage and Retrieval System for Footwear',
          'Design and Development of Multipurpose Agricultural Equipment',
          'Design and Fabrication of Low Cost Ventilator with Blood Sensing and Temperature Monitoring',
          'Design and Fabrication of Portable Solar Power System',
          'On Demand Service App for Management of Household Generated Waste',
          'Design and Development of Solar Tracking Device Without Power Consumption',
          'Design and Development of Face Shield for Healthcare Application',
        ],
      },
    ],
  },
];

const accentMap = {
  blue: { light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', header: 'bg-blue-50 border-blue-100' },
  amber: { light: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700', header: 'bg-amber-50 border-amber-100' },
  emerald: { light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', header: 'bg-emerald-50 border-emerald-100' },
  teal: { light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700', header: 'bg-teal-50 border-teal-100' },
  rose: { light: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', badge: 'bg-rose-100 text-rose-700', header: 'bg-rose-50 border-rose-100' },
};

const totalProjects = departments.reduce((sum, d) => sum + d.batches.reduce((s, b) => s + b.projects.length, 0), 0);

const UGProjects = () => {
  const [activeDept, setActiveDept] = useState(0);
  const [activeYear, setActiveYear] = useState(0);
  const [search, setSearch] = useState('');

  const dept = departments[activeDept];
  const colors = accentMap[dept.accent];
  const batch = dept.batches[activeYear];

  const filtered = search.trim()
    ? batch.projects.filter(p => p.toLowerCase().includes(search.toLowerCase()))
    : batch.projects;

  return (
    <GenericPage title="UG Projects" sidebar={<ResearchSidebar />}>
      {/* Intro */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        A showcase of innovative final-year projects by undergraduate students across all departments.
        These projects reflect the application of engineering principles and emerging technologies to solve real-world problems.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-blue">{departments.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">Departments</p>
        </div>
        <div className="bg-ssgmce-saffron/5 border border-ssgmce-saffron/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-saffron">3</p>
          <p className="text-xs text-gray-500 mt-0.5">Academic Years</p>
        </div>
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-blue">{totalProjects}</p>
          <p className="text-xs text-gray-500 mt-0.5">Total Projects</p>
        </div>
        <div className="bg-ssgmce-saffron/5 border border-ssgmce-saffron/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-saffron">{dept.batches[activeYear].projects.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">Current View</p>
        </div>
      </div>

      {/* Department Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {departments.map((d, i) => {
          const c = accentMap[d.accent];
          return (
            <button
              key={i}
              onClick={() => { setActiveDept(i); setActiveYear(0); setSearch(''); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
                activeDept === i
                  ? `${c.light} ${c.text} ${c.border}`
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {d.shortName}
            </button>
          );
        })}
      </div>

      {/* Department Header Card */}
      <div className={`rounded-xl border ${colors.border} ${colors.light} p-4 mb-5 flex items-center justify-between flex-wrap gap-3`}>
        <div>
          <h2 className={`text-lg font-semibold ${colors.text}`}>{dept.name}</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            {dept.batches.reduce((s, b) => s + b.projects.length, 0)} projects across {dept.batches.length} years
          </p>
        </div>
        <Link
          to={dept.route}
          className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text} hover:underline`}
        >
          View Department <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>

      {/* Year Selector + Search */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex gap-1.5">
          {dept.batches.map((b, i) => (
            <button
              key={i}
              onClick={() => { setActiveYear(i); setSearch(''); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition border ${
                activeYear === i
                  ? `${colors.badge} ${colors.border}`
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {b.year}
            </button>
          ))}
        </div>
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-300 bg-white"
          />
        </div>
      </div>

      {/* Projects Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className={`${colors.header} border-b`}>
              <th className="px-4 py-2.5 text-left w-12 font-semibold text-xs uppercase tracking-wide text-gray-500">Sr.</th>
              <th className="px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wide text-gray-500">Project Title</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'} hover:bg-blue-50/30 transition`}>
                  <td className="px-4 py-2.5 text-gray-400 font-medium">{i + 1}</td>
                  <td className="px-4 py-2.5 text-gray-700 leading-snug flex items-start gap-2">
                    <FaFlask className={`mt-1 flex-shrink-0 text-xs ${colors.text} opacity-50`} />
                    <span>{project}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="px-4 py-8 text-center text-gray-400">No projects match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{filtered.length} project{filtered.length !== 1 ? 's' : ''} shown</span>
        <Link
          to={dept.route}
          className={`inline-flex items-center gap-1 ${colors.text} hover:underline font-medium`}
        >
          Go to {dept.shortName} Department <FaChevronRight className="text-xs" />
        </Link>
      </div>
    </GenericPage>
  );
};

export default UGProjects;
