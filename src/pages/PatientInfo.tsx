import React from 'react';
import { FileText, Clock, Shield, Info } from 'lucide-react';

const PatientInfo = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Information</h1>
          <p className="text-xl text-gray-600">Everything you need to know for a smooth hospital visit.</p>
        </div>

        <div className="space-y-6">
          {/* Admission */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Admission Procedure</h2>
                <p className="text-gray-600 mb-4">
                  Patients are advised to bring prior medical records and a valid ID proof during admission. In case of emergency, admission is prioritized immediately.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Valid Government ID (Aadhar/Passport/License)</li>
                  <li>Insurance Card (if applicable)</li>
                  <li>Referral letter from doctor</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Visiting Hours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded border border-gray-100">
                    <h3 className="font-semibold text-gray-900">General Wards</h3>
                    <p className="text-gray-600 text-sm">10:00 AM - 12:00 PM</p>
                    <p className="text-gray-600 text-sm">5:00 PM - 7:00 PM</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-100">
                    <h3 className="font-semibold text-gray-900">ICU / Critical Care</h3>
                    <p className="text-gray-600 text-sm">11:00 AM - 11:30 AM</p>
                    <p className="text-gray-600 text-sm">6:00 PM - 6:30 PM</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">* Only one attendant allowed with ICU patients.</p>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600 shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Insurance & TPA</h2>
                <p className="text-gray-600 mb-4">
                  We are empanelled with all major insurance providers and TPAs to facilitate cashless treatments.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Star Health', 'HDFC Ergo', 'ICICI Lombard', 'Max Bupa', 'Medi Assist', 'Vidal Health'].map(ins => (
                    <span key={ins} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{ins}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Download Forms</h2>
                <div className="space-y-2">
                  <button className="text-blue-600 hover:underline text-sm block">Download Admission Form (PDF)</button>
                  <button className="text-blue-600 hover:underline text-sm block">Download Surgery Consent Form (PDF)</button>
                  <button className="text-blue-600 hover:underline text-sm block">Patient Feedback Form (PDF)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
