// ProdiDashboard.tsx

import React, { useState } from "react";

// 1. Struktur Data Lengkap untuk Mahasiswa dan Portofolionya
interface Achievement {
  id: number;
  title: string;
  source: string;
  date: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
}

interface Student {
  no: number;
  name: string;
  email: string;
  skill: string;
  achievements: Achievement[];
  projects: Project[];
}

// Data mahasiswa dengan portofolio lengkap
const allStudents: Student[] = [
  {
    no: 1,
    name: "Bayu Fauzan",
    email: "Bayul234@gmail.com",
    skill: "UI/UX",
    achievements: [
      { id: 1, title: 'Lomba UI/UX Nasional', source: 'Juara 2 lomba antarkampus', date: '12 Mei 2024' },
      { id: 2, title: 'Seminar AI', source: 'Peserta aktif', date: '28 Jan 2024' },
      { id: 3, title: 'volunteering Techfest', source: 'Koordinator acara', date: '18 Apr 2024' },
      { id: 4, title: 'xxxxxxxxxxxxxxxxxx', source: 'xxxxxxxxxxxxxxxxxx', date: 'xxxxxxxxxxxxxx' },
      { id: 5, title: 'xxxxxxxxxxxxxxxxxx', source: 'xxxxxxxxxxxxxxxxxx', date: 'xxxxxxxxxxxxxx' },
    ],
    projects: [
      { id: 1, title: 'Web Management capstone', description: 'Untuk memudahkan mahasiswa sistem informasi dalam mendaftar capstone' },
      { id: 2, title: 'Web Portofolio', description: 'Untuk penyimpanan data hasil kerja salam perkuliahn berlangsung dengn munggukana bahasa frontend react dan backend express' },
    ]
  },
  {
    no: 2,
    name: "Veri Kopling",
    email: "Veril234@gmail.com",
    skill: "Back End",
    achievements: [
      { id: 1, title: 'Hackathon Internal', source: 'Juara 1', date: '10 Jan 2024' },
    ],
    projects: [
      { id: 1, title: 'API E-commerce', description: 'Membangun RESTful API untuk platform e-commerce.' },
    ]
  },
  // Tambahkan data mahasiswa lain jika diperlukan
];

const skills = ["UI/UX", "Front End", "Back End", "Data Analyst"];

const ProdiDashboard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  // State untuk melacak portofolio yang sedang dilihat
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSkillSelect = (skill: string | null) => {
    setSelectedSkill(skill);
    setIsDropdownOpen(false);
  };
  
  const handleViewPortfolio = (student: Student) => {
    setSelectedStudent(student);
  };
  
  const handleClosePortfolio = () => {
    setSelectedStudent(null);
  }

  const filteredStudents = selectedSkill
    ? allStudents.filter((student) => student.skill === selectedSkill)
    : allStudents;

  return (
    <div className="bg-white p-10 font-sans min-h-screen">
      {/* Bagian Atas: Deskripsi Sistem */}
      <h1 className="text-5xl font-extrabold text-black mb-6">
        Selamat Datang di Sistem E-Portofolio
      </h1>
      <p className="text-base text-gray-800 leading-relaxed mb-4">
        Sistem E-Portofolio Mahasiswa UAD adalah platform digital yang menyimpan dan menampilkan seluruh data terkait mahasiswa, mulai dari prestasi, proyek, hingga aktivitas organisasi secara terstruktur. Portofolio ini berisi informasi lengkap seperti biodata mahasiswa, daftar keahlian, riwayat prestasi, proyek yang pernah dikerjakan, serta keterlibatan dalam berbagai kegiatan kampus maupun sosial.
      </p>
      <p className="text-base text-gray-800 leading-relaxed mb-10">
        Melalui sistem ini, setiap mahasiswa dapat membangun profil akademik dan profesional secara digital, yang dapat diakses oleh dosen, program studi, hingga mitra industri. Portofolio tersebut menjadi alat dokumentasi sekaligus sarana personal branding, memudahkan pencarian talenta sesuai bidang keahlian, serta mendukung kolaborasi dalam penelitian, pengabdian, dan peluang karier.
      </p>

      {/* Filter Pemetaan Keahlian */}
      <div className="relative inline-block text-left mb-6">
        <div>
          <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-[#419a93] hover:bg-[#38837e] text-white font-medium py-2 px-6 rounded-lg flex items-center justify-between shadow-md transition-colors w-64">
            <span>{selectedSkill || "Pemetaan Keahlian"}</span>
            <span className="ml-3 text-xl font-bold">{isDropdownOpen ? "∧" : "∨"}</span>
          </button>
        </div>
        {isDropdownOpen && (
          <div className="origin-top-right absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-[#419a93] ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <a href="#" onClick={(e) => { e.preventDefault(); handleSkillSelect(null); }} className="block px-4 py-3 text-lg text-white hover:bg-[#38837e] transition-colors" role="menuitem">Semua Keahlian</a>
              {skills.map((skill) => (
                <a key={skill} href="#" onClick={(e) => { e.preventDefault(); handleSkillSelect(skill); }} className="block px-4 py-3 text-lg text-white hover:bg-[#38837e] border-t border-[#63a9a4] transition-colors" role="menuitem">{skill}</a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Judul Tabel */}
      <h2 className="text-xl font-bold text-gray-700 mb-4 mt-4">Pemetaan Keahlian</h2>

      {/* Tabel Mahasiswa */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <table className="min-w-full text-left">
          <thead className="bg-[#419a93]">
            <tr>
              <th className="py-4 px-6 text-white font-bold tracking-wider">No</th>
              <th className="py-4 px-6 text-white font-bold tracking-wider">Nama Mahasiswa</th>
              <th className="py-4 px-6 text-white font-bold tracking-wider">Email</th>
              <th className="py-4 px-6 text-white font-bold tracking-wider">Keahlian</th>
              <th className="py-4 px-6 text-white font-bold tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-[#b3d7d4]">
            {filteredStudents.map((student) => (
              <tr key={student.no} className="border-t-2 border-[#86b8b4]">
                <td className="py-4 px-6 text-gray-800">{student.no}</td>
                <td className="py-4 px-6 text-gray-800 font-medium">{student.name}</td>
                <td className="py-4 px-6 text-gray-800">{student.email}</td>
                <td className="py-4 px-6 text-gray-800">{student.skill}</td>
                <td className="py-4 px-6 text-gray-800">
                  <button onClick={() => handleViewPortfolio(student)} className="flex items-center hover:opacity-75 transition-opacity font-medium">
                    <span className="mr-2 text-xl">👤</span>
                    <span>Lihat Portofolio</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bagian Portofolio Mahasiswa yang Dipilih (Render Kondisional) */}
      {selectedStudent && (
        <div className="mt-16 space-y-12">
           <div className="flex justify-end">
                <button onClick={handleClosePortfolio} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors">Tutup Portofolio</button>
            </div>
          <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl border-2 border-blue-400">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Daftar Prestasi {selectedStudent.name}</h2>
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b-2 border-gray-200">
                  <tr><th className="p-4 font-bold text-gray-600">No</th><th className="p-4 font-bold text-gray-600">Judul Sertifikasi</th><th className="p-4 font-bold text-gray-600">Sumber Sertifikasi</th><th className="p-4 font-bold text-gray-600">Tanggal</th><th className="p-4 font-bold text-gray-600">File</th></tr>
                </thead>
                <tbody>
                  {selectedStudent.achievements.map((item, index) => (
                    <tr key={item.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                      <td className="p-4 text-gray-500 align-middle">{index + 1}</td><td className="p-4 text-gray-800 align-middle">{item.title}</td><td className="p-4 text-gray-800 align-middle">{item.source}</td><td className="p-4 text-gray-800 align-middle">{item.date}</td><td className="p-4 text-gray-800 align-middle"><button className="text-slate-600 hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-[#86b8b4] p-6 sm:p-8 rounded-xl shadow-xl">
             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Daftar Proyek {selectedStudent.name}
             </h2>
             <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                   <thead className="border-b-2 border-gray-200">
                      <tr><th className="p-4 font-bold text-gray-600">No</th><th className="p-4 font-bold text-gray-600 w-1/4">Judul Proyek</th><th className="p-4 font-bold text-gray-600 w-2/4">Deskripsi proyek</th><th className="p-4 font-bold text-gray-600">File</th></tr>
                   </thead>
                   <tbody>
                    {selectedStudent.projects.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                            <td className="p-4 text-gray-500 align-top">{index + 1}</td><td className="p-4 text-gray-800 align-top">{item.title}</td><td className="p-4 text-gray-800 align-top">{item.description}</td><td className="p-4 text-gray-800 align-top"><button className="text-slate-600 hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></button></td>
                        </tr>
                    ))}
                    {[...Array(Math.max(0, 4 - selectedStudent.projects.length))].map((_, i) => (<tr key={`empty-${i}`} className="border-b border-gray-200 last:border-b-0 h-14"><td className="p-4 text-gray-500">{selectedStudent.projects.length + i + 1}</td><td></td><td></td><td></td></tr>
                    ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdiDashboard;