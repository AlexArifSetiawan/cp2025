import React, { useState, useEffect } from 'react';
import { Upload, FileText, Trash2, Pencil, X } from 'lucide-react';
import fileImage from '../../assets/file.png';

// Tipe data proyek
interface ProyekItem {
  no: number;
  judul: string;
  deskripsi: string;
  tautan: string;
  fileName?: string;
}

// Data awal
const initialProyekData: ProyekItem[] = [
  {
    no: 1,
    judul: 'Web Management Capstone',
    deskripsi: 'Untuk memudahkan mahasiswa sistem informasi dalam mendaftar capstone',
    tautan: '',
    fileName: 'file.png',
  },
  {
    no: 2,
    judul: 'Web Portofolio',
    deskripsi: 'Penyimpanan data hasil kerja selama perkuliahan menggunakan React dan Express.',
    tautan: 'https://github.com/user/portfolio',
  },
  {
    no: 3,
    judul: 'Proyek Analisis Data',
    deskripsi: 'Analisis sentimen pada media sosial menggunakan Python.',
    tautan: 'https://github.com/user/data-analysis',
  },
];

// State kosong untuk form
const emptyFormState: Omit<ProyekItem, 'no'> = {
  judul: '',
  tautan: '',
  deskripsi: '',
  fileName: undefined,
};

// Modal File
const FileModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
    <div className="bg-white p-4 rounded-lg max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
        <X size={24} />
      </button>
      <img src={fileImage} alt="Hasil Proyek" className="w-full rounded" />
    </div>
  </div>
);

// Form Tambah/Edit
const FormProyek: React.FC<{
  onSubmit: (data: ProyekItem) => void;
  onCancel: () => void;
  initialData: ProyekItem | null;
}> = ({ onSubmit, onCancel, initialData }) => {
  const isEditMode = !!initialData;
  const [formData, setFormData] = useState(initialData || emptyFormState);
  const [fileName, setFileName] = useState(initialData?.fileName || '');

  useEffect(() => {
    setFormData(initialData || emptyFormState);
    setFileName(initialData?.fileName || '');
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const finalData: ProyekItem = {
      ...formData,
      no: initialData?.no || 0,
      fileName,
    };
    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Judul Proyek</label>
          <input id="judul" value={formData.judul} onChange={handleChange} required className="w-full p-4 rounded-xl bg-teal-50 border border-teal-200" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Tautan / Github</label>
          <input id="tautan" value={formData.tautan} onChange={handleChange} className="w-full p-4 rounded-xl bg-teal-50 border border-teal-200" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Deskripsi Proyek</label>
          <textarea id="deskripsi" rows={4} value={formData.deskripsi} onChange={handleChange} required className="w-full p-4 rounded-xl bg-teal-50 border border-teal-200" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Hasil</label>
          <label htmlFor="file-upload" className="flex items-center justify-center h-40 bg-teal-50 border-2 border-dashed border-teal-200 rounded-xl cursor-pointer hover:bg-teal-100">
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-6 h-6 text-teal-600" />
              <p className="text-gray-500 text-sm">{fileName || 'Choose File'}</p>
            </div>
            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-100">Batal</button>
        <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">{isEditMode ? 'Simpan Perubahan' : 'Simpan Proyek'}</button>
      </div>
    </form>
  );
};

// Tabel Proyek
const TabelProyek: React.FC<{
  data: ProyekItem[];
  onEdit: (item: ProyekItem) => void;
  onDelete: (no: number) => void;
  onViewFile: () => void;
}> = ({ data, onEdit, onDelete, onViewFile }) => (
  <div className="bg-teal-500 rounded-xl p-4 shadow-lg">
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="text-gray-800">
          <tr className="border-b">
            <th className="px-4 py-3 text-left">No</th>
            <th className="px-4 py-3 text-left">Judul Proyek</th>
            <th className="px-4 py-3 text-left">Deskripsi</th>
            <th className="px-4 py-3 text-left">File</th>
            <th className="px-4 py-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item) => (
            <tr key={item.no} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3 font-semibold">{item.judul}</td>
              <td className="px-4 py-3">{item.deskripsi}</td>
              <td className="px-4 py-3">
                <button onClick={onViewFile} className="text-gray-600 hover:text-teal-600">
                  <FileText size={18} />
                </button>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-3">
                  <button onClick={() => onDelete(item.no)} className="text-gray-600 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => onEdit(item)} className="text-gray-600 hover:text-blue-500">
                    <Pencil size={18} />
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

// Komponen Utama
const KelolaProyek: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'form'>('list');
  const [proyekList, setProyekList] = useState<ProyekItem[]>(initialProyekData);
  const [editingData, setEditingData] = useState<ProyekItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (item: ProyekItem) => {
    setEditingData(item);
    setActiveView('form');
  };

  const handleAddNew = () => {
    setEditingData(null);
    setActiveView('form');
  };

  const handleCancel = () => {
    setEditingData(null);
    setActiveView('list');
  };

  const handleDelete = (no: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
      setProyekList(prev => prev.filter(item => item.no !== no));
    }
  };

  const handleSubmit = (data: ProyekItem) => {
    if (editingData) {
      setProyekList(prev =>
        prev.map(item => (item.no === editingData.no ? { ...data, no: item.no } : item))
      );
    } else {
      const newNo = proyekList.length > 0 ? Math.max(...proyekList.map(p => p.no)) + 1 : 1;
      setProyekList(prev => [...prev, { ...data, no: newNo }]);
    }
    setActiveView('list');
    setEditingData(null);
  };

  return (
    <>
      <div className="p-6 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {activeView === 'list' ? 'Daftar Proyek' : editingData ? 'Edit Proyek' : 'Tambah Proyek'}
          </h1>
          <div className="flex gap-2">
            <button onClick={handleAddNew} className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-50">
              Tambah Proyek
            </button>
            <button onClick={() => setActiveView('list')} className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-50">
              Daftar
            </button>
          </div>
        </div>
        {activeView === 'form' ? (
          <FormProyek onSubmit={handleSubmit} onCancel={handleCancel} initialData={editingData} />
        ) : (
          <TabelProyek data={proyekList} onEdit={handleEdit} onDelete={handleDelete} onViewFile={() => setShowModal(true)} />
        )}
      </div>
      {showModal && <FileModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default KelolaProyek;
