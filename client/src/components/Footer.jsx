import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants/socialLinks';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-ssgmce-dark-blue to-ssgmce-blue text-white mt-auto">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[120rem] px-4 py-8 sm:px-5 sm:py-10 lg:px-6">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-3 text-[clamp(1rem,1.6vw,1.15rem)] font-bold text-ssgmce-orange">About SSGMCE</h3>
            <p className="mb-4 text-[clamp(0.74rem,1.4vw,0.82rem)] leading-relaxed text-gray-300">
              Shri Sant Gajanan Maharaj College of Engineering is a premier engineering institution 
              in Maharashtra, affiliated to Sant Gadge Baba Amravati University and approved by AICTE.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-ssgmce-blue transition-colors duration-300 hover:bg-ssgmce-orange"
                  >
                    <Icon className="text-[0.82rem]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-[clamp(1rem,1.6vw,1.15rem)] font-bold text-ssgmce-orange">Quick Links</h3>
            <ul className="space-y-1.5 text-[clamp(0.74rem,1.4vw,0.82rem)]">
              <li><Link to="/about" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">About Us</Link></li>
              <li><Link to="/admissions" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Admissions</Link></li>
              <li><Link to="/departments" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Departments</Link></li>
              <li><Link to="/placements" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Placements</Link></li>
              <li><Link to="/research" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Research</Link></li>
              <li><Link to="/contact" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Contact Us</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-3 text-[clamp(1rem,1.6vw,1.15rem)] font-bold text-ssgmce-orange">Important Links</h3>
            <ul className="space-y-1.5 text-[clamp(0.74rem,1.4vw,0.82rem)]">
              <li><a href="https://sgbau.ac.in" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">SGBAU</a></li>
              <li><a href="https://aicte-india.org" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">AICTE</a></li>
              <li><a href="https://www.education.gov.in" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">MHRD</a></li>
              <li><a href="https://dte.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">DTE Maharashtra</a></li>
              <li><Link to="/events" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Events</Link></li>
              <li><Link to="/gallery" className="inline-block text-gray-300 transition-all duration-200 hover:pl-2 hover:text-ssgmce-orange">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-[clamp(1rem,1.6vw,1.15rem)] font-bold text-ssgmce-orange">Contact Info</h3>
            <ul className="space-y-2.5 text-[clamp(0.74rem,1.4vw,0.82rem)]">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-[0.75rem] text-ssgmce-orange" />
                <span className="text-gray-300">Shegaon - 444203, Dist. Buldhana, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="flex-shrink-0 text-[0.75rem] text-ssgmce-orange" />
                <span className="text-gray-300">+91-7265-252101</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0 text-[0.75rem] text-ssgmce-orange" />
                <span className="text-gray-300">principal@ssgmce.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-ssgmce-dark-blue border-t border-gray-700">
        <div className="mx-auto w-full max-w-[120rem] px-4 py-3 sm:px-5 lg:px-6">
          <div className="flex flex-col items-start justify-between gap-1 text-[clamp(0.7rem,1.2vw,0.78rem)] text-gray-400 sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} SSGMCE Shegaon. All Rights Reserved.</p>
            {/* <p>Designed & Developed with ❤️ by Gaurav</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
