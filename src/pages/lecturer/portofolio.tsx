// PortfolioPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

// Data diperbarui agar sesuai persis dengan gambar, termasuk placeholder
const dummyStudents = [
  {
    id: 1,
    name: 'Bayu Fauzan',
    certifications: [
      { no: 1, title: 'Lomba UI/UX Nasional', source: 'Juara 2 lomba antarkampus', date: '12 Mei 2024' },
      { no: 2, title: 'Seminar AI', source: 'Peserta aktif', date: '28 Jan 2024' },
      { no: 3, title: 'volunteering Techfest', source: 'Koordinator acara', date: '18 Apr 2024' },
      { no: 4, title: 'xxxxxxxxxxxxxxxxxx', source: 'xxxxxxxxxxxxxxxxxx', date: 'xxxxxxxxxxxxxx' },
      { no: 5, title: 'xxxxxxxxxxxxxxxxxx', source: 'xxxxxxxxxxxxxxxxxx', date: 'xxxxxxxxxxxxxx' },
    ],
    projects: [
      { no: 1, title: 'Web Management capstone', desc: 'Untuk memudahkan mahasiswa sistem informasi dalam mendaftar capstone' },
      { no: 2, title: 'Web Portofolio', desc: 'Untuk penyimpanan data hasil kerja salam perkuliahn berlangsung dengn munggukana bahasa frontend react dan backend express' },
    ],
  },
  // Anda bisa menambahkan data mahasiswa lain di sini
];

const PortfolioPage = () => {
  const { studentId } = useParams();
  // Menggunakan '1' sebagai fallback jika studentId tidak ada, untuk keperluan demonstrasi
  const student = dummyStudents.find((s) => s.id === parseInt(studentId || '1', 10));

  if (!student) return <div className="p-8 text-red-600 text-center font-semibold">Portofolio tidak ditemukan.</div>;

  return (
    <div className="bg-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center space-y-12 font-sans">
      
      {/* BAGIAN DAFTAR PRESTASI */}
      <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl border-2 border-blue-400 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Daftar Prestasi {student.name}</h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="p-4 font-bold text-gray-600">No</th>
                <th className="p-4 font-bold text-gray-600">Judul Sertifikasi</th>
                <th className="p-4 font-bold text-gray-600">Sumber Sertifikasi</th>
                <th className="p-4 font-bold text-gray-600">Tanggal</th>
                <th className="p-4 font-bold text-gray-600">File</th>
              </tr>
            </thead>
            <tbody>
              {student.certifications.map((cert, index) => (
                <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="p-4 text-gray-500 align-middle">{index + 1}</td>
                  <td className="p-4 text-gray-800 align-middle">{cert.title}</td>
                  <td className="p-4 text-gray-800 align-middle">{cert.source}</td>
                  <td className="p-4 text-gray-800 align-middle">{cert.date}</td>
                  <td className="p-4 text-gray-800 align-middle">
                    <button className="text-slate-600 hover:text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BAGIAN DAFTAR PROYEK */}
      <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Daftar Proyek {student.name}
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full text-left text-sm">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="p-4 font-bold text-gray-600">No</th>
                        <th className="p-4 font-bold text-gray-600 w-1/4">Judul Proyek</th>
                        <th className="p-4 font-bold text-gray-600 w-2/4">Deskripsi proyek</th>
                        <th className="p-4 font-bold text-gray-600">File</th>
                    </tr>
                </thead>
                <tbody>
                {student.projects.map((proj, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                        <td className="p-4 text-gray-500 align-top">{index + 1}</td>
                        <td className="p-4 text-gray-800 align-top">{proj.title}</td>
                        <td className="p-4 text-gray-800 align-top">{proj.desc}</td>
                        <td className="p-4 text-gray-800 align-top">
                            <button className="text-slate-600 hover:text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </button>
                        </td>
                    </tr>
                ))}
                {/* Logika untuk membuat baris kosong agar total selalu 4 */}
                {[...Array(Math.max(0, 4 - student.projects.length))].map((_, i) => (
                    <tr key={`empty-${i}`} className="border-b border-gray-200 last:border-b-0 h-14">
                        <td className="p-4 text-gray-500">{student.projects.length + i + 1}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;