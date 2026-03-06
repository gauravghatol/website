import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const AboutSportDepartment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Sport Department | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="About Sport Department"
        subtitle="Promoting Physical Excellence"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SportsSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Vision & Mission
              </h3>
              <p className="text-gray-700 mb-4">
                The Sports Department at SSGMCE is dedicated to promoting
                physical fitness, sportsmanship, and overall personality
                development through various sports activities and competitions.
              </p>
              <p className="text-gray-700">
                We aim to provide world-class sports facilities and professional
                coaching to help students achieve excellence in both academics
                and athletics.
              </p>
            </section>
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Objectives
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>
                  Develop physical fitness and mental agility among students
                </li>
                <li>
                  Promote teamwork, leadership, and discipline through sports
                </li>
                <li>
                  Identify and nurture sporting talent for inter-collegiate
                  competitions
                </li>
                <li>
                  Organize regular tournaments and sports events on campus
                </li>
                <li>
                  Provide professional coaching in various indoor and outdoor
                  sports
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSportDepartment;
