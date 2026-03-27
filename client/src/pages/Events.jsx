import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import useFetch from '../hooks/useFetch';

const Events = () => {
  const { data: eventsData, loading } = useFetch('/api/events');
  const [filter, setFilter] = useState('All');

  const sampleEvents = [
    {
      _id: '1',
      title: 'Technical Symposium 2024',
      eventDate: '2024-01-20',
      location: 'College Auditorium',
      description: 'Annual technical symposium with various competitions, paper presentations, and workshops.',
      category: 'Technical',
    },
    {
      _id: '2',
      title: 'Industry Expert Lecture Series',
      eventDate: '2024-01-25',
      location: 'Seminar Hall',
      description: 'Guest lecture by industry experts on emerging technologies and career opportunities.',
      category: 'Workshop',
    },
    {
      _id: '3',
      title: 'Sports Week',
      eventDate: '2024-02-05',
      location: 'Sports Ground',
      description: 'Inter-department sports competitions including cricket, football, volleyball, and athletics.',
      category: 'Sports',
    },
    {
      _id: '4',
      title: 'Cultural Fest - Techfest 2024',
      eventDate: '2024-02-15',
      location: 'College Campus',
      description: 'Annual cultural festival with music, dance, drama, and various cultural activities.',
      category: 'Cultural',
    },
  ];

  const displayEvents = eventsData || sampleEvents;
  const categories = ['All', 'Technical', 'Workshop', 'Cultural', 'Sports'];

  const filteredEvents = filter === 'All' 
    ? displayEvents 
    : displayEvents.filter(e => e.category === filter);

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Events & Activities" 
        subtitle="Stay Updated with Campus Events" 
      />

      {/* Event Categories Filter */}
      <section className="bg-gray-50 py-7 sm:py-8">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                  filter === category
                    ? 'bg-ssgmce-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ssgmce-blue"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-2">
              {filteredEvents.map((event) => (
                <div 
                  key={event._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-5 text-white sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className="bg-ssgmce-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                          {event.category}
                        </span>
                        <h3 className="mb-2 mt-3 text-[clamp(1.12rem,2.8vw,1.5rem)] font-bold">{event.title}</h3>
                      </div>
                      <div className="ml-3 rounded-lg bg-white/20 p-2.5 text-center backdrop-blur-sm sm:ml-4 sm:p-3">
                        <div className="text-2xl font-bold sm:text-3xl">
                          {new Date(event.eventDate).getDate()}
                        </div>
                        <div className="text-xs sm:text-sm">
                          {new Date(event.eventDate).toLocaleDateString('en-IN', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="mb-4 text-[clamp(0.92rem,1.7vw,1rem)] text-gray-700">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-ssgmce-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Annual Events */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Annual Events</h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Technical Symposium', icon: '🔬', desc: 'Annual tech fest with competitions and workshops' },
              { title: 'Cultural Fest', icon: '🎭', desc: 'Celebration of art, music, and cultural activities' },
              { title: 'Sports Meet', icon: '⚽', desc: 'Inter-department sports competitions' },
              { title: 'Alumni Meet', icon: '🎓', desc: 'Reunion of our esteemed alumni' },
            ].map((event, index) => (
              <div key={index} className="rounded-lg bg-white p-5 text-center shadow-lg transition-transform duration-300 hover:scale-105 sm:p-6">
                <div className="mb-4 text-5xl sm:text-6xl">{event.icon}</div>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Student Clubs & Activities</h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {[
              { name: 'Coding Club', desc: 'Programming competitions, hackathons, and coding workshops' },
              { name: 'Robotics Club', desc: 'Robotics projects, competitions, and automation workshops' },
              { name: 'Drama & Theatre', desc: 'Street plays, stage performances, and acting workshops' },
              { name: 'Music & Dance', desc: 'Cultural performances, competitions, and music events' },
              { name: 'Photography Club', desc: 'Photography exhibitions, workshops, and campus coverage' },
              { name: 'NSS Unit', desc: 'Social service activities and community development programs' },
            ].map((club, index) => (
              <div key={index} className="rounded-lg border-l-4 border-ssgmce-orange bg-gradient-to-br from-white to-gray-50 p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6">
                <h4 className="mb-3 text-[clamp(1rem,2.2vw,1.25rem)] font-bold text-ssgmce-blue">{club.name}</h4>
                <p className="text-[clamp(0.9rem,1.6vw,1rem)] text-gray-600">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Past Event Highlights</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-${1540575467063 + num * 10000}?w=400&h=400&fit=crop`}
                  alt={`Event ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
