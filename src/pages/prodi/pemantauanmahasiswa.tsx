import React, { useState } from 'react';

const PemantauanMahasiswa: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biodata' | 'prestasi' | 'proyek'>('biodata');
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<{
    namaKompetisi: string;
    kategoriPrestasi: string;
    tingkatKompetisi: string;
  } | null>(null);

  const biodata = {
    namaLengkap: 'Ahmad Fauzan Budi',
    nim: '220001687',
    programStudi: 'Sistem Informasi',
    fakultas: 'Ilmu Komputer',
    angkatan: '2022',
    kontak: 'Ahmad@student.univ.ac.id',
  };

  const keahlian = [
    { keahlian: 'Pemrograman web', tingkatKemahiran: 'Lanjutan', buktiPendukung: 'Sertifikat Dicoding 2023' },
    { keahlian: 'Desain UI/UX', tingkatKemahiran: 'Menengah', buktiPendukung: 'Proyek Aplikasi Kasir 2022' },
    { keahlian: 'Public Speaking', tingkatKemahiran: 'Dasar', buktiPendukung: 'Dokumentasi Seminar 2021' },
    { keahlian: 'Desain', tingkatKemahiran: 'Menengah', buktiPendukung: 'Nilai A pada Mata Kuliah' },
  ];

  const prestasi = [
    {
      namaKompetisi: 'Juara 2',
      kategoriPrestasi: 'Juara 2',
      tingkatKompetisi: 'Regional',
    },
    {
      namaKompetisi: 'Juara 1',
      kategoriPrestasi: 'Juara 1',
      tingkatKompetisi: 'Regional',
    },
  ];

  const proyekKegiatan = [
    {
      kategori: 'Magang Perusahaan',
      detail: 'Manggang Perusahaan kalpier Brembo Jan 2024 - Apr 2024',
      subDetail: 'Melakukan penelitian pasar dalam bidang pemasaran',
    },
    {
      kategori: 'Workshop Teknologi Cloud',
      detail: 'Des 2023',
      subDetail: 'Mengikuti lokakarya mengenai komputasi awan',
    },
    {
      kategori: 'Kepanitiaan Acara Kompetisi',
      detail: 'Agt 2023 - Sep 2023',
      subDetail: 'Menjadi anggota divisi acara dalam kegiatan lomba mahasiswa',
    },
  ];

  const handleViewCertificate = (achievement: typeof prestasi[0]) => {
    setSelectedAchievement(achievement);
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-teal-50 via-white to-gray-100 min-h-screen">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('biodata')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'biodata'
              ? 'bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Biodata & Keahlian
        </button>
        <button
          onClick={() => setActiveTab('prestasi')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'prestasi'
              ? 'bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Prestasi Terverifikasi
        </button>
        <button
          onClick={() => setActiveTab('proyek')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'proyek'
              ? 'bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Proyek & Kegiatan
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow-2xl">
        {activeTab === 'biodata' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">Biodata & Keahlian</h2>
            {/* Biodata Card */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Informasi Biodata</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p><strong>Nama Lengkap:</strong> {biodata.namaLengkap}</p>
                <p><strong>NIM:</strong> {biodata.nim}</p>
                <p><strong>Program Studi:</strong> {biodata.programStudi}</p>
                <p><strong>Fakultas:</strong> {biodata.fakultas}</p>
                <p><strong>Angkatan:</strong> {biodata.angkatan}</p>
                <p><strong>Kontak:</strong> {biodata.kontak}</p>
              </div>
            </div>
            {/* Keahlian Card */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Keahlian/Kompetensi</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="p-3 text-left">Keahlian</th>
                      <th className="p-3 text-left">Tingkat Kemahiran</th>
                      <th className="p-3 text-left">Bukti Pendukung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keahlian.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-teal-50 transition">
                        <td className="p-3">{item.keahlian}</td>
                        <td className="p-3">{item.tingkatKemahiran}</td>
                        <td className="p-3">{item.buktiPendukung}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'prestasi' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">Prestasi Terverifikasi</h2>
            <div className="space-y-4">
              {prestasi.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-teal-600 text-white p-4 rounded-lg shadow-md">
                  <div>
                    <p><strong>Nama Kompetisi:</strong> {item.namaKompetisi}</p>
                    <p><strong>Kategori Prestasi:</strong> {item.kategoriPrestasi}</p>
                    <p><strong>Tingkat Kompetisi:</strong> {item.tingkatKompetisi}</p>
                  </div>
                  <button
                    onClick={() => handleViewCertificate(item)}
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                  >
                    Lihat Sertifikat
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'proyek' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">Proyek & Kegiatan</h2>
            <div className="space-y-4">
              {proyekKegiatan.map((item, index) => (
                <div key={index} className="bg-teal-600 text-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold">Budi Atala</h3>
                      <p className="text-sm">Program Studi</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white text-black p-3 rounded-md">
                      <p><strong>{item.kategori}</strong></p>
                      <p>{item.detail}</p>
                      <p>{item.subDetail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showCertificate && selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-2xl mx-auto">
            <button
              onClick={handleCloseCertificate}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <div className="bg-yellow-50 p-6 rounded-lg border-4 border-yellow-300 relative">
              <div className="bg-indigo-400 text-white text-center py-2 mb-4 rounded-t-lg">
                CERTIFICATE OF ACHIEVEMENT
              </div>
              <p className="text-center text-gray-600 mb-2">This certificate is awarded to</p>
              <h3 className="text-3xl font-bold text-center mb-4">{biodata.namaLengkap}</h3>
              <p className="text-center text-gray-600 mb-4">
                For outstanding achievement in {selectedAchievement.namaKompetisi} competition, demonstrating excellence and dedication.
              </p>
              <div className="flex justify-between items-center mt-8">
                <div>
                  <p className="text-gray-600">Date</p>
                  <hr className="w-24 border-gray-400" />
                </div>
                <div>
                  <p className="text-gray-600">Signature</p>
                  <hr className="w-24 border-gray-400" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center text-white">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Animation keyframes
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default PemantauanMahasiswa;