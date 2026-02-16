import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Placement Overview', path: '/placements' },
  { name: 'About T&P Cell', path: '/placements/about' },
  { name: 'Objectives & Rules', path: '/placements/objectives' },
  { name: 'T&P Goals', path: '/placements/goals' },
  { name: 'Coordinators', path: '/placements/coordinators' },
  { name: 'Activities', path: '/placements/activities' },
  { name: 'Statistics', path: '/placements/statistics' },
  { name: 'Recruiters', path: '/placements/recruiters' },
  { name: 'Career Guidance', path: '/placements/career' },
  { name: 'Internships', path: '/placements/internship' },
  { name: 'Brochure', path: '/placements/brochure' },
  { name: 'Contact Us', path: '/contact' },
];

const PlacementSidebar = () => {
  const location = useLocation();

  return (
    <div>
      <h3 className="text-lg font-bold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200">
        Quick Links
      </h3>
      <ul className="space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-3 py-2 rounded transition-colors text-sm ${isActive
                    ? 'bg-orange-50 text-ssgmce-orange font-medium border-l-4 border-ssgmce-orange'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-ssgmce-blue'
                  }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlacementSidebar;
