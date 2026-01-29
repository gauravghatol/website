import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaHome } from 'react-icons/fa';
import logo from '../assets/images/common/logo.png';
import uppernavbar from '../assets/images/common/uppernavbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'SSGMCE At Glance', path: '/about' },
        { name: 'Vision-Mission, Core Values & Goals', path: '/about/vision' },
        { name: 'Our Inspiration', path: '/about/inspiration' },
        { name: 'Principal Speaks', path: '/about/principal' },
        { name: 'Organizational Structure', path: '/about/structure' },
        { name: 'Governing Body', path: '/about/governing' },
        // { name: 'Board of Director\'s', path: '/about/governing' }, // Merged
        { name: 'Various Committees By SGBAU & AICTE', path: '/about/committees' },
        { name: 'Contact us', path: '/contact' },
      ]
    },
    {
      name: 'Academics',
      dropdown: [
        { 
          name: 'Departments', 
          path: '/departments',
          hasSubDropdown: true,
          subDropdown: [
            { name: 'Applied Sciences and Humanities', path: '/departments/applied-sciences' },
            { name: 'Computer Science and Engineering', path: '/departments/cse' },
            { name: 'Electrical Engineering (Electronics & Power)', path: '/departments/electrical' },
            { name: 'Electronics and Telecommunication Engg.', path: '/departments/entc' },
            { name: 'Information Technology', path: '/departments/it' },
            { name: 'Mechanical Engineering', path: '/departments/mechanical' },
            { name: 'Master of Business Administration(MBA)', path: '/departments/mba' },
          ]
        },
        { name: 'Academics Planner & Calendar', path: '/academics/planner' },
        { name: 'Teaching Learning Process', path: '/academics/teaching' },
        { name: 'Central Time Table Autumn 2025-26', path: '/academics/timetable' },
        { name: 'Rules & Regulation', path: '/academics/rules' },
        { name: 'Schemes and Syllabus', path: '/academics/syllabus' },
        { name: 'Incentive Marks Scheme', path: '/academics/incentive' },
        { name: 'Sessional Marks Evaluations scheme', path: '/academics/marks' },
        { name: 'Rubrics', path: '/academics/rubrics' },
        { name: 'Innovative Practices in teaching & learning', path: '/academics/innovative' },
        { name: 'Notice for students', path: '/academics/notices' },
        { name: 'Annual Reports', path: '/academics/reports' },
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        { name: 'Institute Brochure', path: '/admissions/brochure' },
        { name: 'Under-Graduate Program (UG)', path: '/admissions/ug' },
        { name: 'Post-Graduate Program (PG)', path: '/admissions/pg' },
        { name: 'Direct Second Year Engineering (DSE)', path: '/admissions/dse' },
        { name: 'MBA Program', path: '/admissions/mba' },
        { name: 'Ph. D. Program', path: '/admissions/phd' },
        { name: 'Fee Structure', path: '/admissions/fees' },
      ]
    },
    {
      name: 'Research & Innovation',
      path: '/research',
      dropdown: [
        { name: 'Research and Development Cell (RDC)', path: '/research/rdc' },
        { name: 'Research Policy Document', path: '/research/policy' },
        { name: 'Center of Excellence', path: '/research/coe' },
        { name: 'Publications', path: '/research/publications' },
        { name: 'IPR (Patents + Copyrights)', path: '/research/ipr' },
        { name: 'UG Projects', path: '/research/ug-projects' },
        { name: 'Research Centre for Ph.D. Work', path: '/research/phd' },
        { name: 'Collaboration', path: '/research/collaboration' },
        { name: 'IIC', path: '/research/iic' },
        { name: 'NISP', path: '/research/nisp' },
        { name: 'Sabbatical Training', path: '/research/sabbatical' },
      ]
    },
    {
      name: 'Facilities',
      path: '/gallery',
      dropdown: [
        { name: 'Administrative Office', path: '/facilities/admin' },
        { name: 'Central Library', path: '/facilities/library' },
        { name: 'Hostels', path: '/facilities/hostels' },
        { name: 'Sports', path: '/facilities/sports' },
        { name: 'Other Facilities', path: '/facilities/other' },
        { name: 'Central Computing Facility', path: '/facilities/computing' },
      ]
    },
    {
      name: 'Placements',
      path: '/placements',
      dropdown: [
        { name: 'Placement Brochure', path: '/placements/brochure' },
        { name: 'About Training & Placement Cell', path: '/placements/about' },
        { name: 'Objectives Rules & Procedures', path: '/placements/objectives' },
        { name: 'T&P Goals', path: '/placements/goals' },
        { name: 'Training & Placement Cell Coordinators', path: '/placements/coordinators' },
        { name: 'Training & Placement Activities', path: '/placements/activities' },
        { name: 'Placement Statistics', path: '/placements/statistics' },
        { name: 'Major Recruiters', path: '/placements/recruiters' },
        { name: 'Career Guidance Cell', path: '/placements/career' },
        { name: 'Internship', path: '/placements/internship' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      name: 'IQAC',
      path: '/iqac',
      dropdown: [
        { name: 'Vision Mission, Quality Policies', path: '/iqac/vision' },
        { name: 'Composition & Function', path: '/iqac/composition' },
        { name: 'Minutes of Meeting', path: '/iqac/minutes' },
        { name: 'Best Practices', path: '/iqac/practices' },
        { name: 'Institutional Distinctiveness', path: '/iqac/distinctiveness' },
        { name: 'AQAR Reports', path: '/iqac/aqar' },
        { name: 'NAAC-SSR 3rd Cycle', path: '/iqac/naac' },
        { name: 'Stakeholders Feedback Report', path: '/iqac/feedback' },
        { name: 'Stakeholders Feedback Analysis and Action Taken Report', path: '/iqac/analysis' },
        { name: 'Student Satisfaction Survey Report', path: '/iqac/survey' },
        { name: 'Annual Gender Sensitization Action Plan', path: '/iqac/gender' },
        { name: 'Measures Initiated for the Promotion of Gender Equity', path: '/iqac/equity' },
        { name: 'e-Content', path: '/iqac/econtent' },
        { name: 'e-Content Facility', path: '/iqac/econtent-facility' },
      ]
    },
    { name: 'NIRF Ranking', path: '/nirf' },
    {
      name: 'Documents',
      path: '/documents',
      dropdown: [
        { name: 'Policies and Procedure', path: '/documents/policies' },
        { name: 'Mandatory Disclosure', path: '/documents/disclosure' },
        { name: 'NAAC', path: '/documents/naac' },
        { name: 'NBA', path: '/documents/nba' },
        { name: 'ISO', path: '/documents/iso' },
        { name: 'NIRF', path: '/documents/nirf' },
        { name: 'Sustainable Audit', path: '/documents/audit' },
        { name: 'AICTE Approval', path: '/documents/aicte' },
        { name: 'Financial Statements', path: '/documents/financial' },
        { name: 'News Letters', path: '/documents/newsletter' },
        { name: 'e-Tattwadarshi', path: '/documents/tattwadarshi' },
      ]
    },
    {
      name: 'Activities',
      path: '/events',
      dropdown: [
        { name: 'INNOVO 2025', path: '/activities/innovo' },
        { name: 'Drone Club', path: '/activities/drone' },
        { name: 'GDG-SSGMCE', path: '/activities/gdg' },
        { name: 'PURSUIT', path: '/activities/pursuit' },
        { name: 'Parishkriti', path: '/activities/parishkriti' },
        { name: 'Social Media Team', path: '/activities/social' },
        { name: 'Cultural Council', path: '/activities/cultural' },
        { name: 'IEEE', path: '/activities/ieee' },
        { name: 'ISTE', path: '/activities/iste' },
        { name: 'E-CELL', path: '/activities/ecell' },
        { name: 'SAE', path: '/activities/sae' },
        { name: 'Team x-treme', path: '/activities/xtreme' },
        { name: 'IEI(MECH)', path: '/activities/iei-mech' },
        { name: 'IEI(ELPO)', path: '/activities/iei-elpo' },
        { name: 'ACM', path: '/activities/acm' },
        { name: 'MESA', path: '/activities/mesa' },
        { name: 'ESSA', path: '/activities/essa' },
        { name: 'CSESA', path: '/activities/csesa' },
        { name: 'Mozilla', path: '/activities/mozilla' },
        { name: 'ITSA', path: '/activities/itsa' },
        { name: 'NSS', path: '/activities/nss' },
        { name: 'UBA', path: '/activities/uba' },
      ]
    },
  ];

  return (
    <>
      {/* Top Buttons and Contact Bar - Above Image */}
      <div className="bg-[#003366] text-white py-1 md:py-1.5">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex flex-wrap justify-between items-center text-xs">
            {/* Left side - Quick Links */}
            <div className="flex items-center space-x-1 md:space-x-2 ml-6 md:ml-12 lg:ml-20">
              <button className="bg-ssgmce-orange hover:bg-ssgmce-light-orange px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white">
                FRA Fee Structure
              </button>
              <button className="bg-blue-700 hover:bg-blue-600 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white hidden sm:inline">
                Best Practices
              </button>
              <button className="bg-red-600 hover:bg-red-500 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white hidden md:inline">
                SSGMCE Blog
              </button>
              <button className="bg-ssgmce-orange hover:bg-ssgmce-light-orange px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white hidden lg:inline">
                Grievance Form
              </button>
            </div>
            
            {/* Right side - Contact Info moved/removed */}
            <div className="flex items-center space-x-2 md:space-x-4 text-white mr-6 md:mr-12 lg:mr-20">
               <a href="#" className="bg-red-600 hover:bg-red-500 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white">
                 Institute Brochure
               </a>
               <a href="#" className="bg-ssgmce-orange hover:bg-ssgmce-light-orange px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white">
                 Academic Calendar
               </a>
               <button className="bg-red-600 hover:bg-red-500 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white hidden lg:inline">
                 Alumni Registration
               </button>
               <button className="bg-blue-700 hover:bg-blue-600 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors shadow-lg text-white hidden lg:inline">
                 ERP Login
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upper Navbar Image Banner */}
      <div className="bg-[#003366] py-1 md:py-1.5">
        <div className="container mx-auto px-3 md:px-4">
          <img 
            src={uppernavbar} 
            alt="SSGMCE Header" 
            className="w-full h-14 md:h-16 lg:h-20 object-contain"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Main Navigation Menu - White Background */}
      <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-200">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-[60px] md:min-h-[70px]">
            {/* Logo on Left */}
            <Link to="/" className="flex-shrink-0 py-2 md:py-2.5">
              <img 
                src={logo} 
                alt="SSGMCE" 
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-ssgmce-blue font-bold text-lg md:text-xl">SSGMCE</span>';
                }}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ssgmce-blue text-xl py-3"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center flex-1 justify-end gap-0.5 lg:gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button className={`px-2.5 lg:px-3 py-2.5 text-gray-700 font-medium hover:text-ssgmce-blue transition-colors duration-300 flex items-center gap-0.5 whitespace-nowrap text-xs lg:text-sm ${
                        isActive(item.path) ? 'text-ssgmce-blue border-b-2 border-ssgmce-blue' : ''
                      }`}>
                        {item.name} <FaChevronDown className="text-[10px]" />
                      </button>
                      {activeDropdown === item.name && (
                        <ul className={`absolute top-full ${item.name === 'Activities' ? 'right-0 grid grid-cols-2 min-w-[500px]' : 'left-0 min-w-[240px]'} bg-white shadow-xl border-t-2 border-ssgmce-orange z-50`}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li 
                              key={subIndex} 
                              className="border-b border-gray-100 last:border-b-0 relative"
                              onMouseEnter={() => subItem.hasSubDropdown && setActiveSubDropdown(subItem.name)}
                            >
                              {subItem.hasSubDropdown ? (
                                <>
                                  <div className="flex items-center justify-between px-3.5 py-2 text-gray-700 hover:bg-ssgmce-blue hover:text-white transition-all duration-200 cursor-pointer text-xs">
                                    <span>{subItem.name}</span>
                                    <FaChevronRight className="text-[10px]" />
                                  </div>
                                  {activeSubDropdown === subItem.name && (
                                    <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[280px] border-t-2 border-ssgmce-orange ml-0">
                                      {subItem.subDropdown.map((nestedItem, nestedIndex) => (
                                        <li key={nestedIndex} className="border-b border-gray-100 last:border-b-0">
                                          <Link
                                            to={nestedItem.path}
                                            className="block px-3.5 py-2 text-gray-700 hover:bg-ssgmce-blue hover:text-white transition-all duration-200 text-xs"
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-3.5 py-2 text-gray-700 hover:bg-ssgmce-blue hover:text-white transition-all duration-200 text-xs"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-2.5 lg:px-3 py-2.5 text-gray-700 font-medium hover:text-ssgmce-blue transition-colors duration-300 whitespace-nowrap text-xs lg:text-sm ${
                        isActive(item.path) ? 'text-ssgmce-blue border-b-2 border-ssgmce-blue' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-3 max-h-[70vh] overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded flex justify-between items-center font-semibold text-sm"
                        >
                          {item.name} <FaChevronDown className={`text-[10px] transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <ul className="ml-2 mt-1 space-y-1">
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                {subItem.hasSubDropdown ? (
                                  <>
                                    <button
                                      onClick={() => setActiveSubDropdown(activeSubDropdown === subItem.name ? null : subItem.name)}
                                      className="w-full text-left px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded flex justify-between items-center text-xs"
                                    >
                                      {subItem.name} <FaChevronRight className={`text-[9px] transition-transform ${
                                        activeSubDropdown === subItem.name ? 'rotate-90' : ''
                                      }`} />
                                    </button>
                                    {activeSubDropdown === subItem.name && (
                                      <ul className="ml-2 mt-1 space-y-1">
                                        {subItem.subDropdown.map((nestedItem, nestedIndex) => (
                                          <li key={nestedIndex}>
                                            <Link
                                              to={nestedItem.path}
                                              onClick={() => setIsOpen(false)}
                                              className="block px-3 py-1.5 text-gray-500 hover:bg-gray-50 rounded text-xs"
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded text-xs"
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded font-semibold text-sm ${
                          isActive(item.path)
                            ? 'bg-ssgmce-blue text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
