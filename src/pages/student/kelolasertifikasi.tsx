import React, { useState, useEffect } from 'react';
import { FiCalendar, FiUpload, FiFileText, FiTrash2, FiX } from 'react-icons/fi';
import { FaPenToSquare } from "react-icons/fa6";
import SertifikatImage from '../../assets/sertfikat.png';


// Definisikan tipe untuk data
interface SertifikasiItem {
  no: number;
  judul: string;
  sumber: string;
  tanggal: string;
  fileName?: string;
  fileUrl?: string; // Menambahkan URL gambar sertifikat
}

// Data awal, ditambahkan properti fileUrl
const initialSertifikasiData: SertifikasiItem[] = [
  { no: 1, judul: 'Lomba UI/UX Nasional', sumber: 'Juara 2 lomba antarkampus', tanggal: '12 Mei 2024', fileName: 'sertifikat-lomba-uiux.pdf', fileUrl: SertifikatImage },
  { no: 2, judul: 'Seminar AI', sumber: 'Peserta aktif', tanggal: '28 Jan 2024', fileName: 'sertifikat-seminar-ai.pdf', fileUrl: SertifikatImage },
  { no: 3, judul: 'Volunteering Techfest', sumber: 'Koordinator acara', tanggal: '18 Apr 2024', fileName: 'sertifikat-volunteer.pdf', fileUrl: SertifikatImage },
  { no: 4, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx', fileUrl: SertifikatImage },
  { no: 5, judul: 'xxxxxxxxxxxxxxxxxxxx', sumber: 'xxxxxxxxxxxxxxxxxxxx', tanggal: 'xxxxxxxxxxxx', fileUrl: SertifikatImage },
];


const emptyFormState: Omit<SertifikasiItem, 'no'> = {
  judul: '',
  sumber: '',
  tanggal: '',
  fileName: undefined,
};

// ===================================================================
// BAGIAN BARU: Komponen Modal untuk Menampilkan Sertifikat
// ===================================================================
interface SertifikatModalProps {
  item: SertifikasiItem;
  onClose: () => void;
}

const SertifikatModal: React.FC<SertifikatModalProps> = ({ item, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Menutup modal saat mengklik area luar
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat mengklik area dalam
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{item.judul}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <FiX size={24} />
          </button>
        </div>
        <div className="bg-gray-100 p-2 rounded-md">
          {item.fileUrl ? (
             <img src={item.fileUrl || SertifikatImage} alt={`Sertifikat untuk ${item.judul}`} className="w-full h-auto rounded" />
          ) : (
            <div className="h-64 flex justify-center items-center text-gray-500">
              Pratinjau tidak tersedia.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ===================================================================
// Komponen Form (Tidak ada perubahan)
// ===================================================================
interface SertifikasiFormProps {
  onSubmit: (formData: SertifikasiItem) => void;
  onCancel: () => void;
  initialData: SertifikasiItem | null;
}

const SertifikasiForm: React.FC<SertifikasiFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const isEditMode = !!initialData;
  const [formData, setFormData] = useState(initialData || emptyFormState);
  const [fileName, setFileName] = useState(initialData?.fileName || '');

  useEffect(() => {
    setFormData(initialData || emptyFormState);
    setFileName(initialData?.fileName || '');
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData: SertifikasiItem = {
      ...formData,
      no: initialData?.no || 0, 
      fileName: fileName,
    };
    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Konten form tetap sama */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <label htmlFor="judul" className="block text-sm font-semibold text-gray-700 mb-2">Judul Sertifikasi</label>
          <input type="text" id="judul" placeholder="Judul Sertifikasi" value={formData.judul} onChange={handleInputChange} required className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"/>
        </div>
        <div>
          <label htmlFor="sumber" className="block text-sm font-semibold text-gray-700 mb-2">Sumber Sertifikasi</label>
          <input type="text" id="sumber" placeholder="Sumber Sertifikasi" value={formData.sumber} onChange={handleInputChange} required className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"/>
        </div>
        <div>
          <label htmlFor="tanggal" className="block text-sm font-semibold text-gray-700 mb-2">Tanggal</label>
          <div className="relative">
            <input type="text" id="tanggal" placeholder="Contoh: 12 Mei 2024" value={formData.tanggal} onChange={handleInputChange} required className="w-full p-4 bg-teal-50 border border-teal-200 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition pr-10"/>
            <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Unggah Sertifikat / Piagam</label>
        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-48 bg-teal-50 border-2 border-teal-200 border-dashed rounded-xl cursor-pointer hover:bg-teal-100 transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="p-3 bg-teal-200 rounded-lg mb-3"><FiUpload className="w-6 h-6 text-teal-600" /></div>
            {fileName ? (
              <p className="text-sm font-semibold text-teal-700 px-2 text-center">{fileName}</p>
            ) : (
              <p className="text-lg font-semibold text-gray-400">Choose File</p>
            )}
          </div>
          <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
       <div className="lg:col-span-3 mt-2 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="px-6 py-2 rounded-lg bg-white text-gray-600 font-semibold text-sm border border-gray-300 hover:bg-gray-50">
            Batal
          </button>
          <button type="submit" className="px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold text-sm shadow-md hover:bg-teal-600">
            {isEditMode ? 'Simpan Perubahan' : 'Simpan Sertifikasi'}
          </button>
        </div>
    </form>
  );
};

// ===================================================================
// Komponen Tabel (Dengan pembaruan)
// ===================================================================
interface TabelProps {
  data: SertifikasiItem[];
  onEdit: (item: SertifikasiItem) => void;
  onDelete: (no: number) => void;
  onViewFile: (item: SertifikasiItem) => void; // Prop baru untuk handle lihat file
}

const TabelDaftarSertifikasi: React.FC<TabelProps> = ({ data, onEdit, onDelete, onViewFile }) => (
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
            <th className="px-4 py-3 font-semibold text-left">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {data.map((item) => (
            <tr key={item.no} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
              <td className="px-4 py-3 text-center">{item.no}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.judul}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.sumber}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.tanggal}</td>
              <td className="px-4 py-3">
                  {/* Tombol File sekarang memanggil onViewFile */}
                  <button 
                    onClick={() => onViewFile(item)} 
                    className="text-teal-600 hover:text-teal-800 disabled:text-gray-300"
                    disabled={!item.fileUrl} // Tombol non-aktif jika tidak ada file
                  >
                      <FiFileText size={20} />
                  </button>
              </td>
              <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                      <button onClick={() => onDelete(item.no)} className="text-gray-500 hover:text-red-500 transition-colors"><FiTrash2 size={18} /></button>
                      <button onClick={() => onEdit(item)} className="text-gray-500 hover:text-blue-500 transition-colors">
                        <FaPenToSquare size={18} />
                      </button>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ===================================================================
// Komponen Halaman Utama (Dengan pembaruan)
// ===================================================================
const KelolaSertifikasiPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'form'>('list');
  const [sertifikasiList, setSertifikasiList] = useState<SertifikasiItem[]>(initialSertifikasiData);
  const [editingData, setEditingData] = useState<SertifikasiItem | null>(null);
  const [selectedSertifikat, setSelectedSertifikat] = useState<SertifikasiItem | null>(null); // State baru untuk modal

  const handleEdit = (item: SertifikasiItem) => {
    setEditingData(item);
    setActiveView('form');
  };

  const handleAddNew = () => {
    setEditingData(null);
    setActiveView('form');
  }

  const handleCancel = () => {
    setEditingData(null);
    setActiveView('list');
  };
  
  const handleDelete = (no: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        setSertifikasiList(prevList => prevList.filter(item => item.no !== no));
    }
  }

  const handleSubmit = (formData: SertifikasiItem) => {
    if (editingData) {
      setSertifikasiList(prevList =>
        prevList.map(item => (item.no === editingData.no ? { ...formData, no: item.no } : item))
      );
    } else {
      const newNo = sertifikasiList.length > 0 ? Math.max(...sertifikasiList.map(item => item.no)) + 1 : 1;
      setSertifikasiList(prevList => [...prevList, { ...formData, no: newNo }]);
    }
    setActiveView('list');
    setEditingData(null);
  };
  
  // Fungsi baru untuk membuka modal
  const handleViewFile = (item: SertifikasiItem) => {
    setSelectedSertifikat(item);
  };

  // Fungsi baru untuk menutup modal
  const handleCloseModal = () => {
    setSelectedSertifikat(null);
  };

  const getPageTitle = () => {
    if(activeView === 'list') return 'Daftar Sertifikasi';
    return editingData ? 'Edit Sertifikasi' : 'Tambah Sertifikasi Baru';
  }

  return (
    <> {/* Menggunakan React Fragment agar bisa merender modal di level atas */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
              {getPageTitle()}
            </h1>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleAddNew}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${activeView === 'form' && !editingData ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'}`}
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

          <div className="mt-8">
            {activeView === 'form' ? (
              <SertifikasiForm onSubmit={handleSubmit} onCancel={handleCancel} initialData={editingData} />
            ) : (
              <TabelDaftarSertifikasi data={sertifikasiList} onEdit={handleEdit} onDelete={handleDelete} onViewFile={handleViewFile} />
            )}
          </div>
        </div>
      </div>

      {/* Render Modal secara kondisional di sini */}
      {selectedSertifikat && (
        <SertifikatModal item={selectedSertifikat} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default KelolaSertifikasiPage;