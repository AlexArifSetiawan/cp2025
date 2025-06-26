// PencarianMahasiswa.tsx

import React, { useState } from 'react';

// --- 1. STRUKTUR DATA LENGKAP ---
interface Achievement {
  no: number;
  title: string;
  source: string;
  date: string;
}
interface Project {
  no: number;
  title: string;
  desc: string;
}
interface Student {
  id: number;
  name: string;
  skill: string;
  status: 'Terverifikasi' | 'Menunggu Verifikasi' | 'Tidak Terverifikasi';
  achievements: Achievement[];
  projects: Project[];
}

// Data mahasiswa yang komprehensif untuk disaring
const allStudents: Student[] = [
  {
    id: 1,
    name: 'Bayu Fauzan',
    skill: 'UI/UX',
    status: 'Terverifikasi',
    achievements: [
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
  {
    id: 2,
    name: 'Veri Kopling',
    skill: 'Backend',
    status: 'Tidak Terverifikasi',
    achievements: [{ no: 1, title: 'Sertifikasi Node.js', source: 'OpenJS Foundation', date: '15 Mar 2024' }],
    projects: [{ no: 1, title: 'API E-commerce', desc: 'Membangun REST API untuk toko online' }],
  },
  {
    id: 3,
    name: 'Andini Putri',
    skill: 'Front end',
    status: 'Menunggu Verifikasi',
    achievements: [],
    projects: [{ no: 1, title: 'Aplikasi Todo List', desc: 'Aplikasi manajemen tugas harian dengan React' }],
  },
];

const skillOptions = ['UI/UX', 'Backend', 'Data Analyst', 'Front end'];

const PencarianMahasiswa: React.FC = () => {
  // State untuk filter
  const [namaOrNim, setNamaOrNim] = useState('');
  const [keahlian, setKeahlian] = useState('');
  const [statusVerifikasi, setStatusVerifikasi] = useState('');

  // --- 2. STATE BARU UNTUK HASIL ---
  const [searchResults, setSearchResults] = useState<Student[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // --- 3. LOGIKA PENCARIAN ---
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    let results = allStudents;

    if (namaOrNim) {
      results = results.filter(s => s.name.toLowerCase().includes(namaOrNim.toLowerCase()));
    }
    if (keahlian) {
      results = results.filter(s => s.skill === keahlian);
    }
    if (statusVerifikasi) {
      results = results.filter(s => s.status === statusVerifikasi);
    }

    setSearchResults(results);
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center gap-12">
      
      {/* FORM FILTER */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8">
          <h1 className="text-3xl font-bold text-white">Filter Pencarian Mahasiswa</h1>
          <p className="text-teal-100 mt-1">Gunakan filter di bawah ini untuk menemukan talenta yang Anda butuhkan.</p>
        </div>
        <form onSubmit={handleSearch} className="p-8 space-y-8">
            {/* ... (semua elemen form tetap sama seperti sebelumnya) ... */}
            <div><label htmlFor="nama" className="block text-sm font-semibold text-gray-600 mb-2">Nama / NIM</label><input type="text" id="nama" value={namaOrNim} onChange={(e) => setNamaOrNim(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/></div>
            <div><label htmlFor="keahlian" className="block text-sm font-semibold text-gray-600 mb-2">Keahlian / Skill</label><div className="relative"><select id="keahlian" value={keahlian} onChange={(e) => setKeahlian(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"><option value="">-- Pilih Keahlian --</option>{skillOptions.map((skill) => (<option key={skill} value={skill}>{skill}</option>))}</select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"><svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg></div></div></div>
            <div><label className="block text-sm font-semibold text-gray-600 mb-3">Status Verifikasi</label><div className="space-y-3">{['Terverifikasi', 'Menunggu Verifikasi', 'Tidak Terverifikasi'].map(status => (<label key={status} className="cursor-pointer flex items-center"><input type="radio" name="status" value={status} checked={statusVerifikasi === status} onChange={(e) => setStatusVerifikasi(e.target.value)} className="sr-only peer"/><span className="block py-2 px-5 rounded-full text-sm font-medium border-2 border-slate-200 transition-all peer-checked:bg-teal-500 peer-checked:text-white peer-checked:border-teal-500">{status}</span></label>))}</div></div>
            <div className="flex justify-end pt-4"><button type="submit" className="w-full sm:w-auto bg-teal-500 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all transform hover:scale-105">Cari Mahasiswa</button></div>
        </form>
      </div>

      {/* --- 4. BAGIAN HASIL PENCARIAN --- */}
      {hasSearched && (
        <div className="w-full max-w-6xl space-y-12">
          {searchResults.length > 0 ? (
            searchResults.map(student => (
              <React.Fragment key={student.id}>
                {/* BAGIAN DAFTAR PRESTASI */}
                <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl border-2 border-blue-400">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Daftar Prestasi {student.name}</h2>
                  <div className="bg-white rounded-lg shadow-md overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="border-b-2 border-gray-200"><tr><th className="p-4 font-bold text-gray-600">No</th><th className="p-4 font-bold text-gray-600">Judul Sertifikasi</th><th className="p-4 font-bold text-gray-600">Sumber Sertifikasi</th><th className="p-4 font-bold text-gray-600">Tanggal</th><th className="p-4 font-bold text-gray-600">File</th></tr></thead><tbody>{student.achievements.map((cert, index) => (<tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"><td className="p-4 text-gray-500">{cert.no}</td><td className="p-4 text-gray-800">{cert.title}</td><td className="p-4 text-gray-800">{cert.source}</td><td className="p-4 text-gray-800">{cert.date}</td><td className="p-4 text-gray-800"><button className="text-slate-600 hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></button></td></tr>))}</tbody></table></div>
                </div>
                {/* BAGIAN DAFTAR PROYEK */}
                <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Daftar Proyek {student.name}</h2>
                  <div className="bg-white rounded-lg shadow-md overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="border-b-2 border-gray-200"><tr><th className="p-4 font-bold text-gray-600">No</th><th className="p-4 font-bold text-gray-600 w-1/4">Judul Proyek</th><th className="p-4 font-bold text-gray-600 w-2/4">Deskripsi proyek</th><th className="p-4 font-bold text-gray-600">File</th></tr></thead><tbody>{student.projects.map((proj, index) => (<tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"><td className="p-4 text-gray-500 align-top">{proj.no}</td><td className="p-4 text-gray-800 align-top">{proj.title}</td><td className="p-4 text-gray-800 align-top">{proj.desc}</td><td className="p-4 text-gray-800 align-top"><button className="text-slate-600 hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></button></td></tr>))}{[...Array(Math.max(0, 4 - student.projects.length))].map((_, i) => (<tr key={`empty-${i}`} className="border-b border-gray-200 last:border-b-0 h-14"><td className="p-4 text-gray-500">{student.projects.length + i + 1}</td><td></td><td></td><td></td></tr>))}</tbody></table></div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div className="text-center text-gray-500 font-semibold py-10 bg-white rounded-lg shadow-md">
              <p>Mahasiswa tidak ditemukan. Silakan coba dengan kriteria lain.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PencarianMahasiswa;