import React from 'react';
import { departments } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Departments = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical care across specialized disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <dept.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
              <p className="text-gray-600 mb-6">{dept.description}</p>
              <Link to="/doctors" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                View Specialists <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
