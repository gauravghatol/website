import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFax } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch with SSGMCE" 
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-ssgmce-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-ssgmce-blue mb-2">Phone</h3>
              <p className="text-gray-600">+91-7265-252274</p>
              <p className="text-gray-600">+91-7265-252275</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-ssgmce-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-ssgmce-blue mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-all">info@ssgmce.ac.in</p>
              <p className="text-gray-600 text-sm break-all">principal@ssgmce.ac.in</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFax className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-ssgmce-blue mb-2">Fax</h3>
              <p className="text-gray-600">+91-7265-252276</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-ssgmce-blue mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon - Fri</p>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">Send Us a Message</h2>
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 animate-pulse">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ssgmce-blue focus:ring-2 focus:ring-ssgmce-blue/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ssgmce-blue focus:ring-2 focus:ring-ssgmce-blue/20"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ssgmce-blue focus:ring-2 focus:ring-ssgmce-blue/20"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ssgmce-blue focus:ring-2 focus:ring-ssgmce-blue/20"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ssgmce-blue focus:ring-2 focus:ring-ssgmce-blue/20"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-ssgmce-blue hover:bg-ssgmce-dark-blue text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Address & Map */}
            <div>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">Our Location</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="text-ssgmce-orange text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-ssgmce-blue mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Shri Sant Gajanan Maharaj College of Engineering<br />
                      Shegaon - 444203<br />
                      Dist. Buldhana, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8373394634!2d76.69861!3d20.79239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7258c8aad6f39%3A0x1f1e6b5c3d2a4b5c!2sShegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSGMCE Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Department Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { dept: 'Admissions Office', email: 'admission@ssgmce.ac.in', phone: '+91-7265-252274' },
              { dept: 'Examination Cell', email: 'exam@ssgmce.ac.in', phone: '+91-7265-252277' },
              { dept: 'Training & Placement', email: 'placement@ssgmce.ac.in', phone: '+91-7265-252278' },
              { dept: 'Accounts Section', email: 'accounts@ssgmce.ac.in', phone: '+91-7265-252279' },
              { dept: 'Library', email: 'library@ssgmce.ac.in', phone: '+91-7265-252280' },
              { dept: 'Hostel Office', email: 'hostel@ssgmce.ac.in', phone: '+91-7265-252281' },
            ].map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-ssgmce-orange hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4">{contact.dept}</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <FaEnvelope className="text-ssgmce-orange mr-3" />
                    <span className="break-all">{contact.email}</span>
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="text-ssgmce-orange mr-3" />
                    {contact.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
