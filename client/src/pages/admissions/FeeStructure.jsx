import React from 'react';
import GenericPage from '../../components/GenericPage';

const FeeStructure = () => {
  return (
    <GenericPage title="Fee Structure">
      
        <p>The fee structure is approved by the Fee Regulating Authority (FRA), Maharashtra.</p>
        <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Approx. Fee (Per Annum)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">Open</td>
                    <td className="border p-2">₹90,000 - ₹1,15,000</td>
                </tr>
                <tr>
                    <td className="border p-2">OBC</td>
                    <td className="border p-2">50% of Tuition Fee</td>
                </tr>
            </tbody>
        </table>
        
    </GenericPage>
  );
};

export default FeeStructure;
