import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import StudentDashboard from './pages/student/Dashboard';
import LecturerDashboard from './pages/lecturer/Dashboard';
import ProdiDashboard from './pages/prodi/Dashboard';
import IndustryDashboard from './pages/industry/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import Profile from './components/shared/Profile';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import Project from './pages/student/project';
import KelolaSertifikasi from './pages/student/kelolasertifikasi';
import KelolaKegiatan from './pages/student/kelolakegiatan';
import KelolaProyek from './pages/student/kelolaproyek';
import { StudentDataProvider } from './contexts/StudentDataContext';
import MahasiswaBimbingan from './pages/lecturer/mahasiswabimbingan';
import RekomendasiAktif from './pages/lecturer/rekomendasiaktif';
import AjakanKolaborasi from './pages/lecturer/ajakankolaborasi';
import UpdateBimbingan from './pages/lecturer/updatebimbingan';
import PemetaanTalenta from './pages/prodi/pemetaantalenta';
import PemantauanMahasiswa from './pages/prodi/pemantauanmahasiswa';
import RekomendasiProyek from './pages/prodi/rekomendasiproyek';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route path="/student" element={<DashboardLayout role="student" />}>
            <Route index element={<StudentDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="project" element={<Project />} />
            <Route path="kelola-sertifikasi" element={<KelolaSertifikasi />} />
            <Route path="kelola-proyek" element={<KelolaProyek />} />
            <Route path="kelola-kegiatan" element={<KelolaKegiatan />} />
          </Route>
          <Route path="/lecturer" element={<DashboardLayout role="lecturer" />}>
            <Route index element={<LecturerDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="mahasiswa-bimbingan" element={<MahasiswaBimbingan />} /> 
            <Route path="rekomendasi-aktif" element={<RekomendasiAktif />} />
            <Route path="ajakan-kolaborasi" element={<AjakanKolaborasi />} /> 
            <Route path="update-bimbingan" element={<UpdateBimbingan />} />
          </Route>
          <Route path="/prodi" element={<DashboardLayout role="prodi" />}>
            <Route index element={<ProdiDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="pemetaan-talenta" element={<PemetaanTalenta />} />
            <Route path="pemantauan-mahasiswa" element={<PemantauanMahasiswa />} />
            <Route path="rekomendasi-proyek" element={<RekomendasiProyek />} />
          </Route>
          <Route path="/industry" element={<DashboardLayout role="industry" />}>
            <Route index element={<IndustryDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;