import React, { useState } from 'react';

// Define the interface for a recommendation
interface Recommendation {
  name: string;
  angkatan: string;
  status: string;
}

const RekomendasiAktif: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sample recommendation data (you can replace this with API data)
  const recommendations: Recommendation[] = [
    { name: 'Veri r', angkatan: 'veri.r@webmail.uad.ac.id', status: 'Belum terverifikasi' },
    { name: 'Fauzan bre', angkatan: 'fauzan.bre@webmail.uad.ac.id', status: 'Terverifikasi' },
    { name: 'Alex arif', angkatan: 'alex.arif@webmail.uad.ac.id', status: 'Belum terverifikasi' },
    { name: 'Azrian r', angkatan: 'azrian@webmail.uad.ac.id', status: 'Belum terverifikasi' },
    { name: 'Oba ilo', angkatan: 'oba.ilo@webmail.uad.ac.id', status: 'Belum terverifikasi' },
  ];

  // Filter recommendations based on search query
  const filteredRecommendations = recommendations.filter((recommendation) =>
    recommendation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-teal-100 via-white to-gray-200 min-h-screen">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-teal-800 mb-8 border-b-2 border-teal-300 pb-2">
          Rekomendasi Aktif Mahasiswa
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari Nama Mahasiswa..."
            className="w-full p-4 bg-teal-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 shadow-md text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-100 text-teal-700">
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Angkatan</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecommendations.map((recommendation, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-teal-50 transition-all duration-300"
                >
                  <td className="p-3 flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-200 rounded-full">
                      <span className="text-teal-700 text-xl">👤</span>
                    </div>
                    <span className="text-gray-800 font-medium">{recommendation.name}</span>
                  </td>
                  <td className="p-3 text-gray-600">{recommendation.angkatan}</td>
                  <td className="p-3">
                    <span
                      className={`text-sm ${
                        recommendation.status === 'Terverifikasi'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {recommendation.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RekomendasiAktif;