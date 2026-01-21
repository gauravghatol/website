import React from 'react';
import GenericPage from '../../components/GenericPage';

const Activities = () => {
  return (
    <GenericPage title="Training Activities">
      
        <div className="space-y-6">
            <p className="text-gray-700">The T&P Cell organizes a variety of activities throughout the year to prepare students for the competitive job market.</p>
            <ul className="space-y-4">
                {[
                    { "title": "Aptitude Training", "desc": "Weekly sessions on quantitative aptitude, logical reasoning, and verbal ability." },
                    { "title": "Mock Interviews", "desc": "One-on-one mock technical and HR interviews conducted by alumni and industry experts." },
                    { "title": "Group Discussions", "desc": "Regular GD sessions to enhance communication and critical thinking skills." },
                    { "title": "Webinars & Workshops", "desc": "Guest lectures on emerging technologies like AI/ML, Cloud Computing, and Industry 4.0." },
                    { "title": "Resume Building", "desc": "Workshops on creating effective resumes and LinkedIn profiles." }
                ].map((item, i) => (
                    <li key={i} className="flex bg-gray-50 p-4 rounded-lg">
                        <div className="mr-4 text-ssgmce-blue text-xl">✅</div>
                        <div>
                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    </GenericPage>
  );
};

export default Activities;
