import React from 'react';
import GenericPage from '../../components/GenericPage';

const CSE = () => {
  return (
    <GenericPage title="Computer Science and Engineering">
      
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">About the Department</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    The Department of Computer Science and Engineering is committed to providing value-based technical education and molding students into competent professionals. With a focus on keeping pace with rapidly changing technologies, the department emphasizes both theoretical foundations and practical application. Our curriculum involves a blend of core computing subjects and emerging technologies effectively delivered by experienced faculty members.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-ssgmce-blue">
                    <p className="mb-2"><strong>Vision:</strong> To emerge as a premier center of excellence in Computer Science and Engineering education and research.</p>
                    <p><strong>Mission:</strong> To impart quality education, foster innovation, and groom students into ethical professionals contributing to society.</p>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Laboratory Facilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "High-Performance Computing Lab",
                        "Database Management Systems (DBMS) Lab",
                        "Artificial Intelligence & Machine Learning Lab",
                        "Software Engineering Lab",
                        "IoT & Embedded Systems Lab",
                        "Computer Networks & Security Lab"
                    ].map((lab, index) => (
                        <div key={index} className="flex items-center p-3 bg-white shadow-sm rounded border border-gray-100">
                            <div className="w-2 h-2 bg-ssgmce-orange rounded-full mr-3"></div>
                            <span>{lab}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Key Achievements</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Consistently achieving above 90% placement record in top-tier MNCs.</li>
                    <li>Students regularly win accolades in national-level hackathons like Smart India Hackathon (SIH).</li>
                    <li>Faculty and students have published over 50+ research papers in reputed IEEE and Springer conferences in the last academic year.</li>
                    <li>MoUs with leading IT industries for internships and industrial visits.</li>
                </ul>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default CSE;
