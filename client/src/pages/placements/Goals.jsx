import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";

const Goals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "T&P Goals | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="T&P Goals" 
        subtitle="Training & Placement Cell Goals"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              <PlacementSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Short Term Goals Section */}
            <section id="short-term" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200">
                Short Term Goals
              </h2>
              <div className="bg-orange-50 border-l-4 border-ssgmce-orange p-6 rounded-lg shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <span className="text-ssgmce-orange mr-3 font-bold">•</span>
                    <span>To serve the students as a launch-pad to catapult them to a glorious career.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-orange mr-3 font-bold">•</span>
                    <span>Providing them with copies guidance and counseling and making the updated version of the web portal reading available to them.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-orange mr-3 font-bold">•</span>
                    <span>To prepare students for off campus drive in case of Recession in Job market.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-orange mr-3 font-bold">•</span>
                    <span>Keeping the students and alumni abreast of the emerging trends in technology and latest developments in the job market scenario.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-orange mr-3 font-bold">•</span>
                    <span>To enhance employability, technical expertise, professional skills among the students including communication ability, Personality Development in accordance with emerging trends and demand of the job market.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Long Term Goals Section */}
            <section id="long-term">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200">
                Long Term Goals
              </h2>
              <div className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg shadow-sm">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>To Form Alumni Advisory Body for T&P Cell.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>Design Cluster Policy by alumni for students to provide updated and future technology.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>To Increase the minimum, average, median and maximum CTC of the students.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>Set-up Company sponsored Centre of Excellence for students to update them with newer and future technology.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>Rigorous efforts to increase the International Placements.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>To offer the International Internships with stipend.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>To provide and enhance Quality industry expertise accompanied by modern learning methods.</span>
                  </li>
                  <li className="flex">
                    <span className="text-ssgmce-blue mr-3 font-bold">•</span>
                    <span>To connect students with premier institutes of India viz IITs, NITs, IIITs, IIMs etc.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
