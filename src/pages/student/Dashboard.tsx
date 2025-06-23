import React from 'react';

// Data untuk tabel, diletakkan di luar komponen agar lebih rapi
const prestasiData = [
  { no: 1, judul: 'Lomba UI/UX Nasional', sumber: 'Juara 2 lomba antarkampus', tanggal: '12 mei 2024' },
  { no: 2, judul: 'Seminar AI', sumber: 'Peserta aktif', tanggal: '28 jan 2024' },
  { no: 3, judul: 'volunteering Techfest', sumber: 'Koordinator acara', tanggal: '18 Apr 2024' },
  { no: 4, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx' },
  { no: 5, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx' },
];

const proyekData = [
  { no: 1, judul: 'Web Management capstone', deskripsi: 'Untuk memudahkan mahasiswa sistem informasi dalam mendaftar capstone' },
  { no: 2, judul: 'Web Portofolio', deskripsi: 'Untuk penyimpanan data hasil kerja salam perkuliahn berlangsung dengn munggukana bahasa frontend react dan backend express' },
  { no: 3, judul: '', deskripsi: '' },
  { no: 4, judul: '', deskripsi: '' },
  { no: 5, judul: '', deskripsi: '' },
];


const StudentDashboard: React.FC = () => {
  return (
    // Padding responsif: lebih kecil di mobile, lebih besar di desktop
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      
      {/* --- BAGIAN HEADER & DESKRIPSI --- */}
      {/* Ukuran font judul responsif */}
      <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
        Selamat Datang di Sistem E-Portofolio
      </h1>

      {/* Jarak bawah (margin-bottom) responsif */}
      <div className="text-gray-700 text-base space-y-4 mb-12 lg:mb-16">
        <p>
          Sistem E-Portofolio Mahasiswa UAD adalah platform digital yang menyimpan dan menampilkan seluruh data terkait mahasiswa, mulai dari prestasi, proyek, hingga aktivitas organisasi secara terstruktur. Portofolio ini berisi informasi lengkap seperti biodata mahasiswa, daftar keahlian, riwayat prestasi, proyek yang pernah dikerjakan, serta keterlibatan dalam berbagai kegiatan kampus maupun sosial.
        </p>
        <p>
          Melalui sistem ini, setiap mahasiswa dapat membangun profil akademik dan profesional secara digital, yang dapat diakses oleh dosen, program studi, hingga mitra industri. Portofolio tersebut menjadi alat dokumentasi sekaligus sarana personal branding, memudahkan pencarian talenta sesuai bidang keahlian, serta mendukung kolaborasi dalam penelitian, pengabdian, dan peluang karier.
        </p> {/* <-- PERBAIKAN ADA DI SINI */}
      </div>

      {/* --- BAGIAN STATISTIK --- */}
      {/* Grid ini sudah responsif: 1 kolom di mobile, 2 di tablet, 4 di desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-teal-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center h-48">
          {/* Ukuran font angka responsif */}
          <div className="text-6xl lg:text-7xl font-bold">18</div>
          <div className="text-lg mt-2">Jumlah Presetasi</div>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-48">
          <div>
            <h3 className="font-bold text-lg">Proyek Yang Sedang Berjalan</h3>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Website Portfolio</p>
            <p className="text-sm text-teal-100">10 Mei 2025 - 20 Jul 2025</p>
          </div>
          <div className="w-full">
            <div className="bg-teal-400 rounded-full h-2.5">
              <div className="bg-white h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-right text-sm mt-1">70%</p>
          </div>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center h-48">
          {/* Ukuran font teks responsif */}
          <div className="text-4xl lg:text-5xl font-bold">Aktif</div>
          <div className="text-lg mt-2">Status Mahasiswa</div>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-xl shadow-lg flex flex-col h-48">
          <h3 className="font-bold text-lg mb-3">Kegiatan Terbaru</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="h-2 w-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-semibold leading-tight">15 juni 2025</p>
                <p className="text-teal-100 leading-tight">Webiner: UI/UX Boocamp</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-semibold leading-tight">12 juni 2025</p>
                <p className="text-teal-100 leading-tight">Mengunggah Sertifikat Baru</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-semibold leading-tight">8 juni 2025</p>
                <p className="text-teal-100 leading-tight">Webiner: UI/UX Boocamp</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* --- BAGIAN TABEL DATA --- */}
      {/* Jarak atas responsif, lebih kecil di mobile, lebih besar di desktop */}
      <div className="mt-24 lg:mt-48 space-y-12">

        {/* --- DAFTAR PRESTASI --- */}
        <div className="bg-teal-500 rounded-xl p-4 lg:p-6 shadow-lg">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">Daftar Prestasi</h2>
          {/* Wrapper untuk membuat tabel bisa di-scroll horizontal di layar kecil */}
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="text-gray-800">
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-left w-16">No</th>
                  <th className="px-4 py-3 font-semibold text-left">Judul Sertifikasi</th>
                  <th className="px-4 py-3 font-semibold text-left">Sumber Sertifikasi</th>
                  <th className="px-4 py-3 font-semibold text-left">Tanggal</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {prestasiData.map((item) => (
                  <tr key={item.no} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-4 py-3 text-center">{item.no}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.judul}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.sumber}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.tanggal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- DAFTAR PROYEK --- */}
        <div className="bg-teal-500 rounded-xl p-4 lg:p-6 shadow-lg">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">Daftar Proyek</h2>
          {/* Wrapper untuk membuat tabel bisa di-scroll horizontal di layar kecil */}
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="text-gray-800">
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-left w-16">No</th>
                  <th className="px-4 py-3 font-semibold text-left">Judul Proyek</th>
                  <th className="px-4 py-3 font-semibold text-left">Deskripsi proyek</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {proyekData.map((item) => (
                  <tr key={item.no} className="border-b border-gray-200 last:border-b-0 h-14">
                    <td className="px-4 py-3 text-center">{item.no}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.judul}</td>
                    <td className="px-4 py-3">{item.deskripsi}</td>
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

export default StudentDashboard;