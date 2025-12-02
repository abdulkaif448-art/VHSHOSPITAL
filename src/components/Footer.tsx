import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">VHS</div>
              <span className="text-xl font-bold">VHS Hospital</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Providing world-class healthcare services with compassion and excellence since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-white">Find a Doctor</Link></li>
              <li><Link to="/departments" className="hover:text-white">Departments</Link></li>
              <li><Link to="/patient-info" className="hover:text-white">Patient Info</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">Emergency Care</Link></li>
              <li><Link to="/services" className="hover:text-white">Operation Theatre</Link></li>
              <li><Link to="/services" className="hover:text-white">Laboratory</Link></li>
              <li><Link to="/services" className="hover:text-white">Pharmacy</Link></li>
              <li><Link to="/services" className="hover:text-white">Ambulance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>123 Healthcare Avenue,<br />Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>info@vhshospital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VHS Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
