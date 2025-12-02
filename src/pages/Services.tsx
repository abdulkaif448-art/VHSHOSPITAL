import React from 'react';
import { facilities } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services & Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed for patient comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Laboratory" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Diagnostic Services</h2>
              <p className="text-gray-600 mb-6">
                Our diagnostic center is equipped with the latest imaging and laboratory technology to ensure accurate and timely results.
              </p>
              <ul className="space-y-3">
                {['MRI & CT Scan', 'Digital X-Ray', 'Ultrasound', 'Biochemistry & Pathology', 'Microbiology'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516574187841-69301976e499?auto=format&fit=crop&q=80&w=800" 
                alt="ICU" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Critical Care (ICU)</h2>
              <p className="text-gray-600 mb-6">
                Our Intensive Care Units are staffed by highly trained intensivists and nurses, providing 24/7 monitoring for critically ill patients.
              </p>
              <ul className="space-y-3">
                {['Ventilator Support', 'Cardiac Monitoring', 'Isolation Rooms', 'Post-Operative Care', 'Trauma Care'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
