import React, { useState } from 'react';

interface FormData {
  mahasiswa: string;
  kegiatan: string;
  tanggalKegiatan: string;
  suratRekomendasi: File | null;
}

const RekomendasiProyek: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mahasiswa: 'Veri Kopling',
    kegiatan: 'Seminar',
    tanggalKegiatan: '2025-08-15',
    suratRekomendasi: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, suratRekomendasi: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  const handleReset = () => {
    setFormData({
      mahasiswa: 'Veri Kopling',
      kegiatan: 'Seminar',
      tanggalKegiatan: '2025-08-15',
      suratRekomendasi: null,
    });
  };

  // Sample options
  const mahasiswaOptions = ['Veri Kopling', 'Alex arif setiawan', 'Fauzan Brembo', 'Azrian R'];
  const kegiatanOptions = ['Seminar', 'Workshop', 'Kompetisi', 'Pelatihan'];

  return (
    <div className="p-6 bg-gradient-to-br from-teal-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 rounded-t-xl shadow-lg mb-4 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-center z-10 relative">Rekomendasi Mahasiswa untuk Kegiatan Prodi</h2>
          <div className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse"></div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-b-xl shadow-2xl space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <label className="block text-teal-700 mb-2">Pilih Mahasiswa</label>
              <select
                name="mahasiswa"
                value={formData.mahasiswa}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
              >
                {mahasiswaOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <label className="block text-teal-700 mb-2">Pilih Kegiatan</label>
              <select
                name="kegiatan"
                value={formData.kegiatan}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
              >
                {kegiatanOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <label className="block text-teal-700 mb-2">Tanggal Kegiatan</label>
              <input
                type="date"
                name="tanggalKegiatan"
                value={formData.tanggalKegiatan}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
              />
            </div>
            <div className="p-4 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <label className="block text-teal-700 mb-2">Surat_rekomendasi.pdf</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
              />
              {formData.suratRekomendasi && (
                <p className="text-sm text-gray-600 mt-1">
                  {formData.suratRekomendasi.name} - 15 Maret 2025
                </p>
              )}
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="w-1/2 p-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-1/2 p-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-lg hover:from-gray-400 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RekomendasiProyek;