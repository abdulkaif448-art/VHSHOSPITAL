import React, { useState } from 'react';
import { doctors } from '../data/mockData';
import { Search, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');

  const specialties = ['All', ...new Set(doctors.map(d => d.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'All' || doctor.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find a Doctor</h1>
          <p className="text-xl text-gray-600">Expert consultants ready to help you heal.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-1/4">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
              >
                {specialties.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all">
              <div className="flex flex-col sm:flex-row md:flex-col">
                <div className="w-full sm:w-2/5 md:w-full h-64 sm:h-auto md:h-64 relative">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6 w-full sm:w-3/5 md:w-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
                      {doctor.specialty}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-gray-500 text-sm">{doctor.qualification}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-500" />
                      <span>{doctor.timings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500" />
                      <span>Main Building, Floor 2</span>
                    </div>
                  </div>

                  <Link to="/contact" className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded transition-colors font-medium">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No doctors found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
