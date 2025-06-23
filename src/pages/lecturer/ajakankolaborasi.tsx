import React, { useState } from 'react';

interface FormData {
  mahasiswa: string;
  topik: string;
  deskripsi: string;
}

const AjakanKolaborasi: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mahasiswa: 'azrian ramadhan',
    topik: 'Pengembangan aplikasi',
    deskripsi: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  // Sample mahasiswa options
  const mahasiswaOptions = ['azrian ramadhan', 'Veri r', 'Fauzan bre', 'Alex arif', 'Oba ilo'];

  return (
    <div className="p-6 bg-gradient-to-br from-teal-100 via-white to-gray-300 min-h-screen">
      <div className="w-full">
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-4 rounded-t-xl shadow-lg mb-6 relative overflow-hidden">
          <h1 className="text-4xl font-bold text-center z-10 relative">Ajakan Kolaborasi</h1>
          <div className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse"></div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-b-xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="p-5 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <label className="block text-teal-700 mb-3">Mahasiswa</label>
              <select
                name="mahasiswa"
                value={formData.mahasiswa}
                onChange={handleChange}
                className="w-full p-4 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
              >
                {mahasiswaOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="p-5 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <label className="block text-teal-700 mb-3">Topik</label>
              <input
                type="text"
                name="topik"
                value={formData.topik}
                onChange={handleChange}
                className="w-full p-4 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
              />
            </div>
            <div className="p-5 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <label className="block text-teal-700 mb-3">Deskripsi</label>
              <textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Masukkan deskripsi..."
                className="w-full p-4 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 h-40"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default AjakanKolaborasi;