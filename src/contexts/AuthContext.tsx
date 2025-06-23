import React, { createContext, useState, useContext, useEffect } from 'react';
// useNavigate tidak digunakan di file ini, jadi bisa dihapus untuk menghilangkan warning.
// import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'lecturer' | 'prodi' | 'industry' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = async (email: string, password: string) => {
    try {
      // === PERUBAHAN DI SINI ===
      // Kita tambahkan tipe data dengan "index signature" pada objek mockUsers.
      // Ini memberitahu TypeScript bahwa objek ini bisa diakses dengan kunci string apa pun
      // dan akan mengembalikan nilai bertipe User.
      const mockUsers: { [key: string]: User } = {
        'student@example.com': { 
          id: '1', 
          name: 'John Student', 
          email: 'student@example.com', 
          role: 'student',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        },
        'lecturer@example.com': { 
          id: '2', 
          name: 'Dr. Jane Lecturer', 
          email: 'lecturer@example.com', 
          role: 'lecturer',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
        },
        'prodi@example.com': { 
          id: '3', 
          name: 'Prodi Admin', 
          email: 'prodi@example.com', 
          role: 'prodi',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
        },
        'industry@example.com': { 
          id: '4', 
          name: 'Industry Partner', 
          email: 'industry@example.com', 
          role: 'industry',
          avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
        },
        'admin@example.com': { 
          id: '5', 
          name: 'System Admin', 
          email: 'admin@example.com', 
          role: 'admin',
          avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
        }
      };

      // Sekarang TypeScript tidak akan error saat mengakses mockUsers[email]
      if (mockUsers[email] && password === 'password123') {
        // 'as User' tidak lagi diperlukan karena TypeScript sudah tahu tipenya
        const userData = mockUsers[email]; 
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        
        setUser(userData);
        setIsAuthenticated(true);
        
        return;
      }
      
      throw new Error('Invalid email or password');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (storedUser && storedIsAuthenticated === 'true') {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};