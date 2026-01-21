import React from 'react';
import GenericPage from '../../components/GenericPage';

const PlacementStats = () => {
  return (
    <GenericPage title="Placement Statistics">
      
        <div className="space-y-8">
            <section className="bg-gray-800 text-white p-8 rounded-xl">
                 <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-600">
                    <div>
                        <div className="text-4xl font-bold text-ssgmce-orange mb-2">90%+</div>
                        <div className="text-gray-300">Placement Percentage</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-ssgmce-orange mb-2">12 LPA</div>
                        <div className="text-gray-300">Highest Package</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-ssgmce-orange mb-2">4.5 LPA</div>
                        <div className="text-gray-300">Average Package</div>
                    </div>
                 </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4">Year-wise Trends</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left border-b">Academic Year</th>
                                <th className="py-3 px-4 text-left border-b">Placement %</th>
                                <th className="py-3 px-4 text-left border-b">Avg. Package</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 px-4 border-b">2023-24</td>
                                <td className="py-3 px-4 border-b">90%+</td>
                                <td className="py-3 px-4 border-b">4.5 LPA</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b">2022-23</td>
                                <td className="py-3 px-4 border-b">88%</td>
                                <td className="py-3 px-4 border-b">4.2 LPA</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 border-b">2021-22</td>
                                <td className="py-3 px-4 border-b">92%</td>
                                <td className="py-3 px-4 border-b">4.0 LPA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default PlacementStats;
