import React, { useState } from 'react';
import { FiCalendar, FiUpload, FiFileText, FiTrash2, FiEdit } from 'react-icons/fi';

// Data tiruan untuk tabel daftar prestasi
const prestasiListData = [
  { no: 1, judul: 'Lomba UI/UX Nasional', sumber: 'Juara 2 lomba antarkampus', tanggal: '12 mei 2024' },
  { no: 2, judul: 'Seminar AI', sumber: 'Peserta aktif', tanggal: '28 jan 2024' },
  { no: 3, judul: 'volunteering Techfest', sumber: 'Koordinator acara', tanggal: '18 Apr 2024' },
  { no: 4, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx' },
  { no: 5, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx' },
];

const KelolaSertifikasiPage: React.FC = () => {
  // State untuk mengontrol tampilan mana yang aktif: 'form' atau 'list'
  const [activeView, setActiveView] = useState<'form' | 'list'>('form');

  // Komponen untuk Form Tambah Prestasi
  const FormTambahPrestasi = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Kolom Kiri: Input Fields */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <label htmlFor="judul" className="block text-sm font-semibold text-gray-700 mb-2">Judul Sertifikasi</label>
          <input type="text" id="judul" placeholder="Judul Sertifikasi" className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"/>
        </div>
        <div>
          <label htmlFor="sumber" className="block text-sm font-semibold text-gray-700 mb-2">Sumber Sertifikasi</label>
          <input type="text" id="sumber" placeholder="Sumber Sertifikasi" className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"/>
        </div>
        <div>
          <label htmlFor="tanggal" className="block text-sm font-semibold text-gray-700 mb-2">Tanggal</label>
          <div className="relative">
            <input type="text" id="tanggal" placeholder="Tanggal" className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition pr-10"/>
            <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      {/* Kolom Kanan: Upload */}
      <div className="lg:col-span-1">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Unggah Sertifikat / Piagam</label>
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-48 bg-teal-50 border-2 border-teal-200 border-dashed rounded-xl cursor-pointer hover:bg-teal-100 transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="p-3 bg-teal-200 rounded-lg mb-3"><FiUpload className="w-6 h-6 text-teal-600" /></div>
            <p className="text-lg font-semibold text-gray-400">Choose File</p>
          </div>
          <input id="file-upload" type="file" className="hidden" />
        </label>
      </div>
       {/* Tombol Aksi Form */}
       <div className="lg:col-span-3 mt-2 flex justify-end gap-3">
          <button className="px-6 py-2 rounded-lg bg-white text-gray-600 font-semibold text-sm border border-gray-300 hover:bg-gray-50">
            Batal
          </button>
          <button className="px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold text-sm shadow-md hover:bg-teal-600">
            Simpan Presetasi
          </button>
        </div>
    </div>
  );

  // Komponen untuk Tabel Daftar Prestasi
  const TabelDaftarPrestasi = () => (
    <div className="bg-teal-500 rounded-xl p-4 lg:p-6 shadow-lg">
      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="text-gray-800">
            <tr className="border-b border-gray-300">
              <th className="px-4 py-3 font-semibold text-left w-16">No</th>
              <th className="px-4 py-3 font-semibold text-left">Judul Sertifikasi</th>
              <th className="px-4 py-3 font-semibold text-left">Sumber Sertifikasi</th>
              <th className="px-4 py-3 font-semibold text-left">Tanggal</th>
              <th className="px-4 py-3 font-semibold text-left">File</th>
              <th className="px-4 py-3 font-semibold text-left">Edit</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {prestasiListData.map((item) => (
              <tr key={item.no} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                <td className="px-4 py-3 text-center">{item.no}</td>
                <td className="px-4 py-3 whitespace-nowrap">{item.judul}</td>
                <td className="px-4 py-3 whitespace-nowrap">{item.sumber}</td>
                <td className="px-4 py-3 whitespace-nowrap">{item.tanggal}</td>
                <td className="px-4 py-3">
                    <button className="text-teal-600 hover:text-teal-800">
                        <FiFileText size={20} />
                    </button>
                </td>
                <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-red-500 transition-colors"><FiTrash2 size={18} /></button>
                        <button className="text-gray-500 hover:text-blue-500 transition-colors"><FiEdit size={18} /></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          {activeView === 'form' ? 'Kelola Sertifikasi' : 'Daftar Sertifikasi'}
        </h1>
        {/* Tombol Navigasi/Tab */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveView('form')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${activeView === 'form' ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'}`}
          >
            Tambah Sertifikasi
          </button>
          <button 
            onClick={() => setActiveView('list')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${activeView === 'list' ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'}`}
          >
            Daftar Sertifikasi
          </button>
        </div>
      </div>

      <div className="mt-6">
        {/* Render komponen secara kondisional berdasarkan state activeView */}
        {activeView === 'form' ? <FormTambahPrestasi /> : <TabelDaftarPrestasi />}
      </div>
    </div>
  );
};

export default KelolaSertifikasiPage;