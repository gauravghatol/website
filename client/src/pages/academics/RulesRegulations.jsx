import React from 'react';
import GenericPage from '../../components/GenericPage';

const RulesRegulations = () => {
  return (
    <GenericPage title="Rules & Regulations">
      
        <p>The institute maintains high standards of discipline.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Attendance:</strong> Minimum 75% attendance is mandatory in both theory and practical classes.</li>
            <li><strong>Uniform:</strong> Students must adhere to the prescribed college uniform.</li>
            <li><strong>Anti-Ragging:</strong> Strict zero-tolerance policy towards ragging.</li>
        </ul>
        
    </GenericPage>
  );
};

export default RulesRegulations;
