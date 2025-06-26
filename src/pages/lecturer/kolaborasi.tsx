// Kolaborasi.tsx

import React, { useState } from 'react';

// Mendefinisikan tipe data untuk setiap entri kolaborasi
interface CollaborationEntry {
  id: number;
  email: string;
  proyek: string;
  deskripsi: string;
  pesan: string;
}

// Data awal untuk mengisi tabel, sesuai dengan gambar
const initialCollaborations: CollaborationEntry[] = [
  {
    id: 1,
    email: 'Budi1234@gmail.com',
    proyek: 'Aplikasi Kasir',
    deskripsi: 'Membuat Kasir lebih Aman',
    pesan: 'Kalau ikuti project saya hubungi Secara Pribadi',
  },
  {
    id: 2,
    email: 'VeriKopling1234@gmail.com',
    proyek: 'Web Portofolio',
    deskripsi: 'Membuat Aplikasi Kampus',
    pesan: 'Kalau ikuti project saya hubungi Secara Pribadi',
  },
  {
    id: 3,
    email: 'AlexMx1234@gmail.com',
    proyek: 'Aplikasi Kasir',
    deskripsi: 'Membuat Kasir lebih Aman',
    pesan: '', // Dikosongkan sesuai gambar
  },
  {
    id: 4,
    email: 'OjanBalap444@gmail.com',
    proyek: 'Web Portofolio',
    deskripsi: 'Membuat Aplikasi Kampus',
    pesan: '', // Dikosongkan sesuai gambar
  },
    {
    id: 5,
    email: 'OjanBalap444@gmail.com',
    proyek: 'Web Portofolio',
    deskripsi: 'Membuat Aplikasi Kampus',
    pesan: '', // Dikosongkan sesuai gambar
  },
];

const Kolaborasi: React.FC = () => {
  // State untuk data form
  const [formData, setFormData] = useState({
    judulProyek: '',
    deskripsiSingkat: '',
    pesan: '',
    email: '',
  });
  
  // State untuk data tabel kolaborasi
  const [collaborations, setCollaborations] = useState<CollaborationEntry[]>(initialCollaborations);

  // Handler untuk memperbarui state form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler saat form disubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.judulProyek || !formData.email || !formData.deskripsiSingkat) {
        alert('Mohon isi Judul Proyek, Email, dan Deskripsi Singkat.');
        return;
    }

    const newCollaboration: CollaborationEntry = {
        id: collaborations.length + 1,
        email: formData.email,
        proyek: formData.judulProyek,
        deskripsi: formData.deskripsiSingkat,
        pesan: formData.pesan,
    };

    setCollaborations(prev => [newCollaboration, ...prev]);

    setFormData({
        judulProyek: '',
        deskripsiSingkat: '',
        pesan: '',
        email: '',
    });
    
    alert('Pengajuan kolaborasi berhasil ditambahkan ke tabel!');
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center gap-16 font-sans">
      
      {/* BAGIAN 1: FORM PENGAJUAN KOLABORASI */}
      {/* Lebar disamakan dengan tabel menggunakan max-w-6xl */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8">
          <h1 className="text-3xl font-bold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Ajukan Kolaborasi Proyek
          </h1>
          <p className="text-teal-100 mt-1 ml-12">Penelitian / Pengabdian</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-1">
            <label htmlFor="judulProyek" className="block text-sm font-semibold text-gray-600 mb-2">Judul Proyek</label>
            <input type="text" id="judulProyek" name="judulProyek" value={formData.judulProyek} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>
          <div className="md:col-span-1">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email Anda</label>
            <input type="email" id="email" name="email" placeholder="contoh@email.com" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="deskripsiSingkat" className="block text-sm font-semibold text-gray-600 mb-2">Deskripsi Singkat</label>
            <textarea id="deskripsiSingkat" name="deskripsiSingkat" rows={3} value={formData.deskripsiSingkat} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="pesan" className="block text-sm font-semibold text-gray-600 mb-2">Tulis Pesan Detail</label>
            <textarea id="pesan" name="pesan" rows={4} value={formData.pesan} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Undang Mahasiswa (Opsional)</label>
              <button type="button" className="bg-transparent border-2 border-teal-500 text-teal-600 font-semibold py-2 px-6 rounded-lg hover:bg-teal-500 hover:text-white transition-all"> + Tambah Mahasiswa</button>
            </div>
            <button type="submit" className="w-full sm:w-auto bg-teal-500 text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all transform hover:scale-105">Ajukan Kolaborasi</button>
          </div>
        </form>
      </div>

      {/* BAGIAN 2: TABEL DATA KOLABORASI */}
      <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-700 mb-6">Data Kolaborasi Mahasiswa</h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-bold text-gray-600">No</th>
                <th className="p-4 font-bold text-gray-600">Email</th>
                <th className="p-4 font-bold text-gray-600">Proyek</th>
                <th className="p-4 font-bold text-gray-600">Deskripsi</th>
                <th className="p-4 font-bold text-gray-600">Pesan</th>
              </tr>
            </thead>
            <tbody>
              {collaborations.map((collab, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="p-4 text-gray-500">{index + 1}</td>
                  <td className="p-4 text-gray-800">{collab.email}</td>
                  <td className="p-4 text-gray-800">{collab.proyek}</td>
                  <td className="p-4 text-gray-800">{collab.deskripsi}</td>
                  <td className="p-4 text-gray-800">{collab.pesan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Kolaborasi;