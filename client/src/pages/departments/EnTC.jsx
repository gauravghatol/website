import React from 'react';
import GenericPage from '../../components/GenericPage';
import electronicsBanner from '../../assets/images/departments/electronics/Electronics Banner.png';

const EnTC = () => {
  return (
    <GenericPage title="Electronics & Telecommunication Engg." backgroundImage={electronicsBanner}>
      
        <div className="space-y-8">
            <section>
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-blue-100 text-ssgmce-blue px-4 py-2 rounded-full font-semibold">Center of Excellence in VLSI</div>
                    <div className="bg-orange-100 text-ssgmce-orange px-4 py-2 rounded-full font-semibold">Active IEEE Student Chapter</div>
                </div>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Department Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                   The Department of Electronics & Telecommunication Engineering is dedicated to fostering expertise in signal processing, communication systems, and embedded technologies. We provide a platform for students to innovate through our strong industry connections and project-based learning approach.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Laboratories & Facilities</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                        <span className="text-ssgmce-orange mr-2">➜</span> 
                        <span><strong>VLSI Design Lab:</strong> FPGA kits and Xilinx software for digital system design.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-ssgmce-orange mr-2">➜</span> 
                        <span><strong>DSP Lab:</strong> Texas Instruments DSP kits for audio and image processing.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-ssgmce-orange mr-2">➜</span> 
                        <span><strong>Embedded Systems Lab:</strong> Microcontrollers (ARM, PIC, 8051) and development boards.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-ssgmce-orange mr-2">➜</span> 
                        <span><strong>Communication Engineering:</strong> Analog/Digital communication kits and Fiber Optics.</span>
                    </li>
                </ul>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default EnTC;
