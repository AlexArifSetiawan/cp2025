import React from 'react';
import { Upload, CalendarDays, List, FileText, Trash2, Pencil } from 'lucide-react';

const proyekListData = [
  { no: 1, judul: 'Web Management capstone', deskripsi: 'Untuk memudahkan mahasiswa sistem informasi dalam mendaftar capstone' },
  { no: 2, judul: 'Web Portofolio', deskripsi: 'Untuk penyimpanan data hasil kerja salam perkuliahn berlangsung dengn munggukana bahasa frontend react dan backend express' },
  { no: 3, judul: '', deskripsi: '' },
  { no: 4, judul: '', deskripsi: '' },
  { no: 5, judul: '', deskripsi: '' },
];

const KelolaProyek: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white min-h-full">
      {/* --- BAGIAN 1: FORM TAMBAHKAN PROYEK --- */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Tambahkan Proyek
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="judul-proyek" className="block text-sm font-semibold text-gray-700 mb-2">
            Judul Proyek
          </label>
          <input 
            type="text" 
            id="judul-proyek"
            className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          />
        </div>
        <div>
          <label htmlFor="tautan-proyek" className="block text-sm font-semibold text-gray-700 mb-2">
            Tautan / Github
          </label>
          <input 
            type="text" 
            id="tautan-proyek"
            className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          />
        </div>
        <div>
          <label htmlFor="deskripsi-proyek" className="block text-sm font-semibold text-gray-700 mb-2">
            Deskripsi Proyek
          </label>
          <textarea 
            id="deskripsi-proyek"
            rows={5}
            placeholder="Jelaskan Tentang Proyek Secara Singkat"
            className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Hasil
          </label>
          <label htmlFor="hasil-proyek-upload" className="flex items-center justify-center w-full h-full min-h-[148px] bg-teal-50 border-2 border-teal-200 border-dashed rounded-xl cursor-pointer hover:bg-teal-100 transition">
            <div className="flex items-center justify-center gap-4 p-4">
              <div className="p-3 bg-teal-200 rounded-lg">
                <Upload className="w-6 h-6 text-teal-600" />
              </div>
              <span className="text-lg font-semibold text-gray-400">Choose File</span>
            </div>
            <input id="hasil-proyek-upload" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-3">
        <button className="px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold text-sm shadow-md hover:bg-teal-600">
          Simpan Proyek
        </button>
        <button className="px-6 py-2 rounded-lg bg-white text-gray-600 font-semibold text-sm border border-gray-300 hover:bg-gray-50">
          Batal
        </button>
      </div>

      {/* --- BAGIAN 2: DAFTAR PROYEK TERSIMPAN --- */}
      {/* === PERUBAHAN DI SINI === */}
      {/* Margin atas diubah dari mt-16 menjadi mt-64 untuk menciptakan jarak yang sangat besar */}
      <div className="mt-64">
        <div className="mb-6 space-y-3">
          <h2 className="flex items-center gap-3 text-xl font-bold text-gray-800">
            <CalendarDays size={24} />
            Lihat Proyek Tersimpan
          </h2>
          <h3 className="flex items-center gap-3 text-lg font-semibold text-gray-700">
            <List size={22} />
            Daftar Proyek
          </h3>
        </div>

        <div className="bg-teal-500 rounded-xl p-4 lg:p-6 shadow-lg">
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="text-gray-800">
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-left w-16">No</th>
                  <th className="px-4 py-3 font-semibold text-left">Judul Proyek</th>
                  <th className="px-4 py-3 font-semibold text-left">Deskripsi proyek</th>
                  <th className="px-4 py-3 font-semibold text-left">File</th>
                  <th className="px-4 py-3 font-semibold text-left">Edit</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {proyekListData.map((item) => (
                  <tr key={item.no} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                    <td className="px-4 py-3 text-center align-top">{item.no}</td>
                    <td className="px-4 py-3 align-top">{item.judul}</td>
                    <td className="px-4 py-3 align-top">{item.deskripsi}</td>
                    <td className="px-4 py-3 align-top">
                        <button className="text-gray-500 hover:text-teal-600">
                            <FileText size={20} />
                        </button>
                    </td>
                    <td className="px-4 py-3 align-top">
                        <div className="flex items-center gap-4">
                            <button className="text-gray-500 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                            <button className="text-gray-500 hover:text-blue-500 transition-colors"><Pencil size={18} /></button>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelolaProyek;