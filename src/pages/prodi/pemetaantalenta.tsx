import React, { useState } from 'react';

interface FormData {
  keahlian: string;
  prestasi: string;
  proyekKegiatan: string;
}

const PemetaanTalenta: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    keahlian: '',
    prestasi: '',
    proyekKegiatan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search criteria:', formData);
    // Add search logic here
  };

  // Dropdown options
  const keahlianOptions = [
    'Pilih keahlian',
    'Pemrograman web (HTML, CSS, JavaScript)',
    'Desain Grafis (Adobe Photoshop)',
    'Analisis Data',
    'Manajemen Proyek',
  ];

  const prestasiOptions = [
    'Pilih prestasi',
    'Juara 1 Lomba Debat Nasional',
    'Penerimaan Beasiswa Unggulan',
    'Juara 3 Karya Tulis Ilmiah',
    'Sertifikat TOEFL di atas 600',
    'Juara 1 Kompetisi Startup Mahasiswa',
  ];

  const proyekKegiatanOptions = [
    'Pilih proyek/kegiatan',
    'Ketua Panitia Seminar',
    'Anggota Tim PKM',
    'Asisten Dosen',
    'Developer Aplikasi Kampus',
    'Tim Peneliti Hibah DIKTI',
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-white to-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-2xl font-bold text-teal-700 mb-4 text-center">Pencarian Mahasiswa Berdasarkan</h2>
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 rounded-lg shadow-md">
              <label className="block text-teal-700 mb-2 flex items-center">
                <span className="mr-2">💡</span> Keahlian atau Kompetensi Spesifik
              </label>
              <select
                name="keahlian"
                value={formData.keahlian}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              >
                {keahlianOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg shadow-md">
              <label className="block text-teal-700 mb-2 flex items-center">
                <span className="mr-2">🏆</span> Prestasi Akademik & Non Akademik
              </label>
              <select
                name="prestasi"
                value={formData.prestasi}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              >
                {prestasiOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg shadow-md">
              <label className="block text-teal-700 mb-2 flex items-center">
                <span className="mr-2">📋</span> Partisipasi dalam Proyek & Kegiatan
              </label>
              <select
                name="proyekKegiatan"
                value={formData.proyekKegiatan}
                onChange={handleChange}
                className="w-full p-3 bg-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              >
                {proyekKegiatanOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Cari Mahasiswa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PemetaanTalenta;