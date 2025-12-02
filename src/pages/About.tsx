import React from 'react';
import { Award, Users, History, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About VHS Hospital</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing compassionate, accessible, and high-quality healthcare to our community since 1995.
          </p>
        </div>

        {/* History & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
              alt="Hospital Building" 
              className="rounded-xl shadow-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <History className="text-blue-600" /> Our History
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, VHS Hospital started as a small clinic with a vision to serve the local community. Over the decades, we have grown into a multi-specialty hospital equipped with advanced medical technology and a team of over 100 specialized doctors.
            </p>
            <p className="text-gray-600">
              Our journey has been defined by our commitment to patient care and medical excellence, making us a trusted name in healthcare in the region.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-blue-600" /> Our Mission
              </h2>
              <p className="text-gray-700">
                To provide affordable, high-quality healthcare services with compassion and integrity, ensuring the well-being of every patient we serve.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="text-green-600" /> Our Vision
              </h2>
              <p className="text-gray-700">
                To be a leader in healthcare innovation and patient experience, setting global standards in medical treatment and care.
              </p>
            </div>
          </div>
        </div>

        {/* Management & Accreditation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership & Accreditation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="Director" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-bold">Dr. Robert Smith</h3>
                <p className="text-blue-600">Medical Director</p>
             </div>
             <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="CEO" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-blue-600">Chief Executive Officer</p>
             </div>
             <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                    <Award size={48} />
                </div>
                <h3 className="text-xl font-bold">Accreditation</h3>
                <p className="text-gray-600 text-sm mt-2">NABH Accredited<br/>ISO 9001:2015 Certified</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
