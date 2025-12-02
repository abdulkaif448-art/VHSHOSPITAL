import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Phone, CalendarCheck, ShieldCheck, User } from 'lucide-react';
import { departments, doctors } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hospital Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Healthcare <br />
              <span className="text-blue-400">For You & Your Family</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              VHS Hospital provides world-class medical services with state-of-the-art facilities and a team of dedicated specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold text-center transition-colors">
                Book Appointment
              </Link>
              <Link to="/doctors" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-center transition-colors">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-gray-50 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><Clock size={24} /></div>
                <h3 className="text-xl font-bold">Opening Hours</h3>
              </div>
              <p className="text-gray-600">24/7 Emergency Services</p>
              <p className="text-gray-600">OPD: Mon-Sat, 9AM - 8PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-green-100 text-green-600 rounded-full"><Phone size={24} /></div>
                <h3 className="text-xl font-bold">Emergency</h3>
              </div>
              <p className="text-gray-600">Immediate medical attention.</p>
              <p className="text-2xl font-bold text-green-600 mt-1">+1 (555) 108-999</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><CalendarCheck size={24} /></div>
                <h3 className="text-xl font-bold">Appointments</h3>
              </div>
              <p className="text-gray-600 mb-4">Book your slot with top specialists.</p>
              <Link to="/contact" className="text-purple-600 font-semibold hover:underline flex items-center gap-1">
                Book Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Centers of Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our hospital specializes in a wide range of medical fields, ensuring you get the best care possible.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {departments.slice(0, 5).map((dept) => (
              <Link key={dept.id} to="/departments" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 text-center transition-all hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <dept.icon size={32} />
                </div>
                <h3 className="font-semibold text-gray-900">{dept.name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/departments" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View All Departments <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Specialists</h2>
              <p className="text-gray-600">Meet our team of experienced doctors.</p>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View All Doctors <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 4).map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-500 text-sm mb-4">{doctor.qualification}</p>
                  <Link to="/contact" className="block w-full py-2 border border-blue-600 text-blue-600 text-center rounded hover:bg-blue-50 transition-colors font-medium text-sm">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose VHS Hospital?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <ShieldCheck size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accredited Healthcare</h3>
                    <p className="text-blue-200">Recognized for maintaining the highest standards of safety and quality care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-blue-200">Our emergency and support teams are available round the clock for your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <User size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
                    <p className="text-blue-200">Highly qualified and experienced medical professionals across all specialties.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Hospital Facility" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
