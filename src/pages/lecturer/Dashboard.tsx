import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentData } from "../../contexts/StudentDataContext";

const skills = ["UI/UX", "Front End", "Back End", "Data Analyst"];

const LecturerDashboard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const navigate = useNavigate();
  const { students } = useStudentData(); // ✅ PAKAI DARI CONTEXT

  const handleSkillSelect = (skill: string | null) => {
    setSelectedSkill(skill);
    setIsDropdownOpen(false);
  };

  const handleViewPortfolio = (studentId: number) => {
  navigate(`/lecturer/portofolio/${studentId}`);
};


  const filteredStudents = selectedSkill
    ? students.filter((student) => student.skill === selectedSkill)
    : students;

  return (
    <div className="bg-white p-10 font-sans min-h-screen">
      <h1 className="text-5xl font-extrabold text-black mb-6">
        Selamat Datang di Sistem E-Portofolio
      </h1>
      <p className="text-base text-gray-800 leading-relaxed mb-4">
        Sistem E-Portofolio Mahasiswa UAD adalah platform digital...
      </p>
      <p className="text-base text-gray-800 leading-relaxed mb-10">
        Melalui sistem ini, setiap mahasiswa dapat membangun profil...
      </p>

      {/* Filter Dropdown */}
      <div className="relative inline-block text-left mb-10">
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-[#419a93] hover:bg-[#38837e] text-white font-medium py-2 px-6 rounded-lg flex items-center justify-between shadow-md transition-colors w-64">
          <span>{selectedSkill || "Pemetaan Keahlian"}</span>
          <span className="ml-3 text-xl font-bold">{isDropdownOpen ? "∧" : "∨"}</span>
        </button>
        {isDropdownOpen && (
          <div className="origin-top-right absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-[#419a93] ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1" role="menu">
              <a href="#" onClick={(e) => { e.preventDefault(); handleSkillSelect(null); }} className="block px-4 py-3 text-lg text-white hover:bg-[#38837e]">Semua Keahlian</a>
              {skills.map((skill) => (
                <a key={skill} href="#" onClick={(e) => { e.preventDefault(); handleSkillSelect(skill); }} className="block px-4 py-3 text-lg text-white hover:bg-[#38837e] border-t border-[#63a9a4]">{skill}</a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tabel Mahasiswa */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <table className="min-w-full text-left">
          <thead className="bg-[#419a93]">
            <tr>
              <th className="py-4 px-6 text-white font-bold">No</th>
              <th className="py-4 px-6 text-white font-bold">Nama Mahasiswa</th>
              <th className="py-4 px-6 text-white font-bold">Email</th>
              <th className="py-4 px-6 text-white font-bold">Keahlian</th>
              <th className="py-4 px-6 text-white font-bold">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-[#b3d7d4]">
            {filteredStudents.map((student) => (
              <tr key={student.no} className="border-t-2 border-[#86b8b4]">
                <td className="py-4 px-6">{student.no}</td>
                <td className="py-4 px-6 font-medium">{student.name}</td>
                <td className="py-4 px-6">{student.email}</td>
                <td className="py-4 px-6">{student.skill}</td>
                <td className="py-4 px-6">
                  <button onClick={() => handleViewPortfolio(student.no)} className="flex items-center hover:opacity-75 transition-opacity font-medium">
                    <span className="mr-2 text-xl">👤</span>
                    <span>Lihat Portofolio</span>
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr><td colSpan={5} className="text-center py-10 text-gray-600">Tidak ada mahasiswa dengan keahlian "{selectedSkill}".</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LecturerDashboard;
