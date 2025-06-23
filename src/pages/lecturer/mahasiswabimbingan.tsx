import React, { useState, FormEvent } from 'react';

// Definisikan tipe untuk mahasiswa bimbingan
interface Student {
  name: string;
  email: string;
}

const MahasiswaBimbingan: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [students, setStudents] = useState<Student[]>([
    { name: 'Veri', email: 'ver.tor@webmail.uad.ac.id' },
    { name: 'Fauzan bre', email: 'fauzan.bre@webmail.uad.ac.id' },
    { name: 'Alex arif', email: 'alex.arif@webmail.uad.ac.id' },
    { name: 'Azrian r', email: 'azrian@webmail.uad.ac.id' },
    { name: 'Oba ilo', email: 'oba.ilo@webmail.uad.ac.id' },
  ]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('Email input:', e.target.value); // Debugging
  };

  const handleAddStudent = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with email:', email); // Debugging
    if (email && email.includes('@')) {
      const newStudent: Student = {
        name: email.split('@')[0], // Ambil bagian sebelum '@' sebagai nama
        email: email,
      };
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      console.log('New student added:', newStudent); // Debugging
      setEmail(''); // Reset input setelah menambahkan
    } else {
      console.log('Invalid email format'); // Debugging
      alert('Masukkan alamat email yang valid');
    }
  };

  const handleRemoveStudent = (emailToRemove: string) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.email !== emailToRemove)
    );
    console.log('Student removed:', emailToRemove); // Debugging
  };

  return (
    <div className="p-4 bg-gradient-to-br from-teal-100 via-white to-gray-300 min-h-screen">
      <div className="w-full">
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-3 rounded-t-xl shadow-md mb-4 relative overflow-hidden">
          <h1 className="text-2xl font-bold text-center z-10 relative">Tambah dan Kelola Mahasiswa Bimbingan</h1>
          <div className="absolute inset-0 bg-white opacity-10 blur-md animate-pulse"></div>
        </div>

        {/* Form Tambah Mahasiswa */}
        <form onSubmit={handleAddStudent} className="bg-white p-4 rounded-b-xl shadow-md mb-6">
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Masukkan email mahasiswa"
              className="w-3/4 p-3 border border-teal-300 rounded-l-lg bg-teal-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="w-1/4 p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-r-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Tambah
            </button>
          </div>
        </form>

        {/* Daftar Mahasiswa Bimbingan */}
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.email}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-teal-50"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-200 rounded-full">
                  <span className="text-teal-700 text-xl">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{student.name}</p>
                  <p className="text-gray-600 text-sm">{student.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveStudent(student.email)}
                className="text-red-600 hover:text-red-800 transition-colors duration-300 text-lg"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MahasiswaBimbingan;