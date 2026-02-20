import React, { useState, useMemo } from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaBookOpen, FaSearch, FaExternalLinkAlt, FaFilePdf, FaUniversity, FaBook, FaGraduationCap, FaChartBar, FaGlobe, FaAward } from 'react-icons/fa';

/* ─── Department-wise Publication Data ─── */
const departmentData = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    short: 'CSE',
    accent: 'blue',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2018-19.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Dr. Jaikumar M. Patil', title: 'IoT-Based Waste Management System for Smart Cities', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Jaikumar M. Patil', title: 'IoT-Based Crop Management System Using Machine Learning', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. V. S. Mahalle', title: 'Plant Disease Detection and Classification Using VGG19 CNN Architecture', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. Kalyani Sable', title: 'Multilingual Fake News Detection Using mBERT Transformer', journal: 'IEEE Conference', indexing: 'IEEE / Scopus', type: 'Conference' },
      { year: '2024-25', authors: 'Prof. Shrijeet Pagrut', title: 'Data Analytics Configuration for an Unmanned Aerial Vehicle (UAV)', journal: 'IEEE Conference', indexing: 'IEEE', type: 'Conference' },
      { year: '2024-25', authors: 'Prof. C. M. Mankar', title: 'SKYRA: AI-Powered Fitness Training Application', journal: 'International Journal', indexing: 'Peer Reviewed', type: 'Journal' },
      { year: '2024-25', authors: 'Mr. Pranav Lod, Mr. V. S. Mahalle, Mr. N. M. Kandoi, Dr. S. B. Patil', title: 'Efficient Content Based Image Retrieval System Based on Early and Late Fusion Technique', journal: 'Vol 18, Issue 5, ISSN: 1001-2400', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Rupali Zamare', title: 'Machine Learning Approaches for Predictive Analytics in Healthcare', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Jaikumar M. Patil', title: 'Fake News Detection Using Deep Learning Approach', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Jaikumar M. Patil', title: 'Privacy Preserving Data Mining Techniques for Healthcare Systems', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Prof. V. S. Mahalle', title: 'Query Optimization for Information Retrieval Using Neural Networks', journal: 'International Journal', indexing: 'SCIE / Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Santosh B. Patil', title: 'A Powerful Method for Interactive Content-Based Image Retrieval by Variable Compressed Convolutional Info Neural Networks', journal: 'The Visual Computer (Springer), DOI: 10.1007/s00371-023-03104-5', indexing: 'SCI', type: 'Journal' },
      { year: '2023-24', authors: 'Mr. Vikram Ingole', title: 'Bridging Agricultural Communities: A Digital Platform for Machinery', journal: 'IJCRT, Vol 12, Issue 4, ISSN: 2320-2882', indexing: 'UGC CARE', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Kamlesh Kahar, Dr. Ram Dhekekar', title: 'Optimization of MEMS-Based Energy Scavengers and Output Prediction with Machine Learning', journal: 'Sensors and Actuators A, Vol 358, DOI: 10.1016/j.sna.2023.114429', indexing: 'SCI', type: 'Journal' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    short: 'EE',
    accent: 'amber',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/ELECT_Publication_AY_2024_25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/ELECT_Publication%20detail_23-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202018-19.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Ganesh Bonde, Dr. S. R. Paraskar', title: 'Voltage Sag Detection and Classification Using Signal Processing', journal: 'International Journal', indexing: 'Scopus (Q3)', type: 'Journal' },
      { year: '2024-25', authors: 'M. A. Bagde, Dr. A. U. Jawadekar', title: 'Design and Analysis of Series Hybrid Electric Vehicle Powertrain', journal: 'International Journal', indexing: 'Scopus (Q4)', type: 'Journal' },
      { year: '2024-25', authors: 'Mukesh Chavan', title: 'Induction Motor Fault Detection and Diagnosis Using Vibration Analysis', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. R. Paraskar et al.', title: 'Advanced Power System Protection Using Machine Learning (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2024-25', authors: 'Dr. A. U. Jawadekar et al.', title: 'Smart Grid Technologies and Renewable Energy Integration (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2024-25', authors: 'Dr. K. A. Dongare et al.', title: 'IoT-Based Power Quality Monitoring System (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2024-25', authors: 'Dr. S. S. Jadhao', title: 'Artificial Intelligence in Power Distribution Network Optimization (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2024-25', authors: 'S. K. Shahade', title: 'Electric Vehicle Charging Infrastructure Planning (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2023-24', authors: 'Khodke, Kankale, Dr. Paraskar', title: 'Power Quality Analysis Using Hilbert-Huang Transform', journal: 'National Journal', indexing: 'UGC CARE', type: 'Journal' },
      { year: '2023-24', authors: 'Mukesh Chavan, Dr. A. U. Jawadekar', title: 'SOBI-ANN Based Fault Diagnosis of Induction Motor', journal: 'IEEE Conference', indexing: 'IEEE / Scopus', type: 'Conference' },
      { year: '2023-24', authors: 'Bharambe', title: 'Transformer Fault Diagnostic System Using Dissolved Gas Analysis', journal: 'Springer', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. S. R. Paraskar et al.', title: 'Renewable Energy Systems: Power Electronics and Control (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
    ],
  },
  {
    id: 'entc',
    name: 'Electronics & Telecommunication Engg.',
    short: 'E&TC',
    accent: 'emerald',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_Patent_publication%20data_24_25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2023-24%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2022-23%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2021-22%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2020-21%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2019-20%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2018-19%20Patent%20and%20Publication%20Data.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Dr. D. D. Nawgaje', title: 'Diabetic Retinopathy Detection Using Advanced Image Processing Techniques', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Tibdewal', title: 'Congestion Management in Deregulated Power Systems Using Optimization', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. B. Patil, Dr. D. P. Tulaskar', title: 'Design and Analysis of Microstrip Patch Antenna for 5G Communication', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'V. Ingole', title: 'Soybean Yield Prediction Using Convolutional Neural Networks', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Ms. Ashwini A. Deshmukh et al.', title: 'Research on Soyabean Seed Grading', journal: 'AJANTA, ISSN: 2277-5730', indexing: 'Referred', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. S. G. Nemane, Dr. D. P. Tulaskar et al.', title: 'Design and Development of Seed Germination Using IoT', journal: 'Vol 15, Issue 2, ISSN: 0976-6480', indexing: 'Google Scholar / SCOPE', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Kamlesh Kahar et al.', title: 'Industrial Robotic Arm System', journal: 'SSGM Journal, Vol 2, Issue 1', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2023-24', authors: 'Tibdewal', title: 'MRI Artifact Removal Using Advanced Signal Processing', journal: 'International Journal', indexing: 'SCI / Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Neerja Dharmale', title: 'TiO₂ Based Perovskite Solar Cell Performance Enhancement', journal: 'International Journal', indexing: 'SCI / Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Neerja Dharmale', title: 'Optimization of Perovskite Solar Cell Efficiency Using Novel Materials', journal: 'International Journal', indexing: 'SCI / Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. D. D. Nawgaje', title: 'Statistical Analysis of Retinal Image Processing Techniques from Empirical Perspective', journal: 'Indian Journal of Technical Education, Sep 2023, Vol 46, pp 196-204', indexing: 'UGC CARE', type: 'Journal' },
      { year: '2023-24', authors: 'Badar', title: 'Polar Decoding Algorithms for 5G NR Communication', journal: 'International Journal', indexing: 'Peer Reviewed', type: 'Journal' },
    ],
  },
  {
    id: 'it',
    name: 'Information Technology',
    short: 'IT',
    accent: 'teal',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/IT_24-25Publications.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/23-24-0-19-11_Patent-Publications-Format-For-Website.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/22-23-2-25-4_Patent-Publications-Format-For-Website.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/21-22-24-6_Patent-Publications-Format-For-Website.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/20-21-2-7-3_Patent-Publications-Format-For-Website.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/19-20-14-5_Patent-Publications-Format-For-Website.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Dr. A. S. Manekar', title: 'Artificial Intelligence and Machine Learning: Concepts and Applications', journal: 'Book Publication', indexing: 'ISBN', type: 'Book' },
      { year: '2024-25', authors: 'Prof. S. V. Kale', title: 'AI in Healthcare: Diagnosis, Treatment and Ethical Considerations', journal: 'Book Publication', indexing: 'ISBN', type: 'Book' },
      { year: '2024-25', authors: 'Prof. A. C. Bute', title: 'Network Essentials: Concepts, Protocols and Security', journal: 'Book Publication', indexing: 'ISBN', type: 'Book' },
      { year: '2024-25', authors: 'Dr. A. S. Manekar', title: 'IoT-Based Smart Parking System Using Machine Learning', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. A. S. Manekar', title: 'Blockchain-Based Secure Healthcare Data Management', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. S. V. Kale', title: 'Liver Disease Prediction Using Ensemble Machine Learning Techniques', journal: 'Springer', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. P. G. Padiya', title: 'Eddystone-Based Proximity Detection and Context-Aware Services', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. A. S. Manekar et al.', title: 'Deep Learning Techniques for Natural Language Processing (Book Chapter)', journal: 'Springer', indexing: 'Scopus', type: 'Book Chapter' },
      { year: '2023-24', authors: 'Dr. A. S. Manekar', title: 'Course Recommendation System Using Collaborative Filtering and Machine Learning', journal: 'International Journal', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Prof. S. V. Kale et al.', title: 'Healthcare Data Analytics Using Deep Neural Networks', journal: 'International Journal', indexing: 'Peer Reviewed', type: 'Journal' },
      { year: '2023-24', authors: 'Prof. S. N. Khandare et al.', title: 'Smart Waste Management System Using IoT and Cloud Computing', journal: 'IJRPR', indexing: 'Peer Reviewed', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. P. G. Padiya et al.', title: 'Bluetooth Low Energy Based Indoor Navigation System', journal: 'IJARSCT', indexing: 'Peer Reviewed', type: 'Journal' },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    short: 'MECH',
    accent: 'rose',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_Publication%20detail_20-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202018-19.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Ganesh Wahile', title: 'Theoretical and Experimental Investigation of Pilot-Scale Solar Air-Heated Humidification Dehumidification Desalination System', journal: 'Solar Energy, DOI: 10.1016/j.solener.2024.113122', indexing: 'SCI (Q1)', type: 'Journal' },
      { year: '2024-25', authors: 'Ganesh Wahile', title: 'Experimental Investigation on Photovoltaic Panel Integrated with Fins and Cotton Wicks', journal: 'Energy Sources Part A, Vol 47, pp 11286-11304', indexing: 'SCI (Q2)', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. P. Joshi', title: 'A Hybrid Approach to Optimize Engine Performance Using Graphene Quantum Dots-Enhanced Biodiesel-Diesel Blends', journal: 'Applied Thermal Engineering (Elsevier), ISSN: 1359-4311', indexing: 'SCI', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. P. Trikal, Prof. K. R. Dudhe', title: 'Sustainable Cooling with Clay Tubes in Honeycomb Structures', journal: 'Journal of Propulsion Technology, Vol 45, No 3', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. N. H. Khandare, Dr. S. P. Joshi', title: 'Design and Fabrication of AI Adaptive Solar Panel Cleaning Mechanism', journal: 'Goya Journal, ISSN: 0017-2715', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Piyush A. Dalke', title: 'Multi Response Optimization of Process Parameters in Titanium Alloy MQL Drilling', journal: 'Engineering Research Express, ISSN: 2631-8695', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Piyush A. Dalke', title: 'A Review: Nanofluids in Machining for Performance and Sustainability', journal: 'Journal of Physics, ISSN: 1742-6596', indexing: 'Scopus', type: 'Conference' },
      { year: '2024-25', authors: 'Dr. S. P. Joshi', title: 'Design and Development of Solar Light Tube for Multilayer Farming', journal: 'JISEM, ISSN: 2468-5376', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. P. Joshi, Prof. S. Q. Syed, Dr. J. G. Khan', title: 'Investigation on Enhancing Heat Transfer Properties Using Grooved Tube', journal: 'Journal of Propulsion Technology, Vol 45, Issue 3', indexing: 'Scopus', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. K. V. Chandan, N. G. More', title: 'Solar Tracking Feasibility Study for Developments in Solar Tracking Systems', journal: 'Advances in Clean Energy Technologies (ICET 2023), Springer, ISBN: 978-981-97-6548-5', indexing: 'Scopus', type: 'Conference' },
      { year: '2023-24', authors: 'Prof. N. B. Borkar, Prof. C. V. Patil', title: 'Design and Development of Modified Seed Sowing Machine', journal: 'GOYA Journal, Vol 17, Issue 3, ISSN: 0017-2715', indexing: 'Scopus / UGC CARE', type: 'Journal' },
      { year: '2023-24', authors: 'Prof. G. S. Wahile, Dr. S. P. Trikal', title: 'Performance Analysis of Photovoltaic Panel Using Machine Learning Method', journal: 'IJEECS, Vol 34, No 1, ISSN: 2502-4752', indexing: 'Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Prof. S. Q. Syed', title: 'CFD Analysis and Validation of Axial Compressor Rotor Blade', journal: 'IJARSCT, Vol 4, Issue 7, ISSN: 2581-9429', indexing: 'Peer Reviewed', type: 'Journal' },
    ],
  },
  {
    id: 'mba',
    name: 'MBA (Business Administration & Research)',
    short: 'MBA',
    accent: 'violet',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/Publication%20and%20patents%20data%2024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/MBA_Publication%20and%20patents%20data%2023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/Patent-Copyrights_MBA.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2019-20.pdf' },
    ],
    publications: [
      { year: '2024-25', authors: 'Dr. Bilal T. Husain', title: 'Demographic Profile of Ophthalmic Injuries Following Road Traffic Accidents at a Tertiary Care Hospital', journal: 'JCOR, ISSN: 2320-3897, DOI: 10.4103/jcor.jcor_16_24', indexing: 'Scopus / DOAJ', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Bilal T. Husain', title: 'Retrospective Analysis of Patients Undergoing Keratoplasty in a Tertiary Care Center', journal: 'JCOR, ISSN: 2320-3897, DOI: 10.4103/jcor.jcor_25_24', indexing: 'Scopus / DOAJ', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. Bilal T. Husain', title: 'Consumer Buying Behaviour: Selection of Fashion Apparels', journal: 'ACR Journal, ISSN: 0098-9258', indexing: 'ABDC', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. W. Z. Suliya', title: 'A Study on Recruitment Strategies by HR and Their Effectiveness in Amravati Region', journal: 'VIIRJ, ISSN: 2319-4979', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. V. V. Patil', title: 'Impact of Academic Workload on the Mental Health of H.S.C. Students', journal: 'JICS, ISSN: 1548-7741', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2024-25', authors: 'Prof. V. V. Patil', title: 'Impact of Mentorship on Internship Satisfaction Among Management Students', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. M. Mishra', title: 'Influence of Digital Marketing on Small Scale Businesses – A Study of Yavatmal District', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. S. M. Mishra', title: 'Women Empowerment Through Self Help Groups in Ghatpuri Village', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2024-25', authors: 'Dr. P. M. Kuchar', title: 'Influence of Online Ratings and Reviews on Consumer Behavior', journal: 'VIIRJ, ISSN: 2319-4979', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. Bilal T. Husain', title: 'Rhizopus Keratitis – Clinical Study', journal: 'National Journal', indexing: 'EBSCO / Scopus', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. H. M. Jha "Bidyarthi" et al.', title: 'Females\' Buying Behavior for Cell Phones – An Analytical Study', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. L. B. Deshmukh et al.', title: 'Work Life Balance in Information Technology – A Study in Yavatmal Region', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
      { year: '2023-24', authors: 'Dr. P. M. Kuchar et al.', title: 'Consumer Buying Behavior for Laptop in Khamgaon Region', journal: 'IJMRSET, ISSN: 2582-7219', indexing: 'Google Scholar', type: 'Journal' },
    ],
  },
];

/* ─── Accent color map ─── */
const accentMap = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    pill: 'bg-blue-100 text-blue-700',    badge: 'bg-blue-600',    light: 'bg-blue-100' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   pill: 'bg-amber-100 text-amber-700',   badge: 'bg-amber-600',   light: 'bg-amber-100' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-700', badge: 'bg-emerald-600', light: 'bg-emerald-100' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    pill: 'bg-teal-100 text-teal-700',    badge: 'bg-teal-600',    light: 'bg-teal-100' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    pill: 'bg-rose-100 text-rose-700',    badge: 'bg-rose-600',    light: 'bg-rose-100' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  pill: 'bg-violet-100 text-violet-700',  badge: 'bg-violet-600',  light: 'bg-violet-100' },
};

/* ─── Indexing badge helpers ─── */
const indexingBadge = (indexing) => {
  if (!indexing) return null;
  let cls = 'bg-slate-50 text-slate-600 border-slate-200';
  const lower = indexing.toLowerCase();
  if (lower.includes('sci') && !lower.includes('scopus')) cls = 'bg-purple-50 text-purple-700 border-purple-200';
  else if (lower.includes('sci') && lower.includes('scopus')) cls = 'bg-indigo-50 text-indigo-700 border-indigo-200';
  else if (lower.includes('scopus')) cls = 'bg-blue-50 text-blue-700 border-blue-200';
  else if (lower.includes('ieee')) cls = 'bg-cyan-50 text-cyan-700 border-cyan-200';
  else if (lower.includes('ugc')) cls = 'bg-green-50 text-green-700 border-green-200';
  else if (lower.includes('abdc')) cls = 'bg-amber-50 text-amber-700 border-amber-200';
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
      {indexing}
    </span>
  );
};

const typeBadge = (type) => {
  const map = {
    'Journal': 'bg-sky-50 text-sky-700 border-sky-200',
    'Conference': 'bg-orange-50 text-orange-700 border-orange-200',
    'Book': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Book Chapter': 'bg-teal-50 text-teal-700 border-teal-200',
  };
  const cls = map[type] || 'bg-slate-50 text-slate-600 border-slate-200';
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
      {type}
    </span>
  );
};

/* ─── Computed totals ─── */
const totalPublications = departmentData.reduce((s, d) => s + d.publications.length, 0);
const scopusSciCount = departmentData.reduce((s, d) => s + d.publications.filter(p => {
  const l = (p.indexing || '').toLowerCase();
  return l.includes('scopus') || l.includes('sci') || l.includes('ieee');
}).length, 0);
const bookCount = departmentData.reduce((s, d) => s + d.publications.filter(p => p.type === 'Book' || p.type === 'Book Chapter').length, 0);

/* ─── Component ─── */
const Publications = () => {
  const [activeDept, setActiveDept] = useState('cse');
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');

  const dept = departmentData.find(d => d.id === activeDept);
  const colors = dept ? accentMap[dept.accent] : accentMap.blue;

  /* filtered publications */
  const filteredPubs = useMemo(() => {
    if (!dept) return [];
    return dept.publications.filter(p => {
      const matchesSearch = !searchTerm ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.journal || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.indexing || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = yearFilter === 'all' || p.year === yearFilter;
      return matchesSearch && matchesYear;
    });
  }, [dept, searchTerm, yearFilter]);

  /* unique years for filter */
  const availableYears = useMemo(() => {
    if (!dept) return [];
    return [...new Set(dept.publications.map(p => p.year))].sort().reverse();
  }, [dept]);

  return (
    <GenericPage title="Publications" sidebar={<ResearchSidebar />}>
      {/* ─── Stats Bar ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: FaBookOpen, label: 'Total Publications', value: totalPublications, color: 'text-ssgmce-blue bg-ssgmce-blue/5' },
          { icon: FaAward, label: 'Scopus / SCI / IEEE', value: scopusSciCount, color: 'text-ssgmce-saffron bg-ssgmce-saffron/5' },
          { icon: FaUniversity, label: 'Departments', value: departmentData.length, color: 'text-ssgmce-blue bg-ssgmce-blue/5' },
          { icon: FaBook, label: 'Books & Chapters', value: bookCount, color: 'text-ssgmce-saffron bg-ssgmce-saffron/5' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}>
              <s.icon className="text-lg" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Department Tabs ─── */}
      <div className="flex flex-wrap gap-2 mb-6">
        {departmentData.map(d => {
          const c = accentMap[d.accent];
          const active = d.id === activeDept;
          return (
            <button
              key={d.id}
              onClick={() => { setActiveDept(d.id); setSearchTerm(''); setYearFilter('all'); }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                active
                  ? `${c.badge} text-white shadow-sm`
                  : `${c.bg} ${c.text} border ${c.border} hover:shadow-sm`
              }`}
            >
              {d.short}
            </button>
          );
        })}
      </div>

      {/* ─── Department Header ─── */}
      {dept && (
        <div className={`rounded-xl border ${colors.border} ${colors.bg} p-5 mb-6`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className={`text-lg font-bold ${colors.text}`}>{dept.name}</h2>
              <p className="text-sm text-slate-500 mt-0.5">
                {dept.publications.length} highlighted publications &middot;{' '}
                {dept.publications.filter(p => { const l = (p.indexing || '').toLowerCase(); return l.includes('scopus') || l.includes('sci'); }).length} indexed (Scopus/SCI)
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <FaGlobe className={`${colors.text}`} />
              <span className="text-slate-500">Academic Years: {dept.years[dept.years.length - 1]?.year} – {dept.years[0]?.year}</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── Search & Filter ─── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            placeholder="Search by title, author, journal, or indexing..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ssgmce-saffron/30 focus:border-ssgmce-saffron bg-white"
          />
        </div>
        <select
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}
          className="px-3 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ssgmce-saffron/30"
        >
          <option value="all">All Years</option>
          {availableYears.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* ─── Publications Table ─── */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
        <div className={`px-5 py-3 border-b ${colors.border} ${colors.bg} flex items-center justify-between`}>
          <h3 className={`font-semibold ${colors.text} flex items-center gap-2`}>
            <FaBookOpen className="text-sm" /> Research Publications
          </h3>
          <span className="text-xs text-slate-500">{filteredPubs.length} result{filteredPubs.length !== 1 ? 's' : ''}</span>
        </div>

        {filteredPubs.length === 0 ? (
          <div className="p-8 text-center text-slate-400">
            <FaSearch className="text-3xl mx-auto mb-2 opacity-50" />
            <p className="text-sm">No publications match your search criteria.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredPubs.map((pub, idx) => (
              <div key={idx} className="px-5 py-4 hover:bg-slate-50/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  {/* SR number */}
                  <div className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-lg ${colors.light} ${colors.text} text-xs font-bold shrink-0 mt-0.5`}>
                    {idx + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 leading-snug">{pub.title}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      <FaGraduationCap className="inline mr-1 text-slate-400" />
                      {pub.authors}
                    </p>
                    {pub.journal && (
                      <p className="text-xs text-slate-400 mt-0.5 italic">{pub.journal}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {typeBadge(pub.type)}
                      {indexingBadge(pub.indexing)}
                      <span className="text-xs text-slate-400">{pub.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── Yearly Report Cards ─── */}
      {dept && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className={`px-5 py-3 border-b ${colors.border} ${colors.bg}`}>
            <h3 className={`font-semibold ${colors.text} flex items-center gap-2`}>
              <FaFilePdf className="text-sm" /> Yearly Publication Reports
            </h3>
          </div>
          <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {dept.years.map(y => (
              <a
                key={y.year}
                href={y.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} hover:shadow-md transition-all group`}
              >
                <FaFilePdf className={`${colors.text} text-lg group-hover:scale-110 transition-transform`} />
                <div>
                  <p className={`text-sm font-semibold ${colors.text}`}>{y.year}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    View PDF <FaExternalLinkAlt className="text-[10px]" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ─── Footer Note ─── */}
      <p className="text-xs text-slate-400 mt-6 text-center">
        This page showcases highlighted publications. For the complete list, please refer to the yearly PDF reports above.
      </p>
    </GenericPage>
  );
};

export default Publications;
