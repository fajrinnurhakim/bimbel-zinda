import React, { useState, createContext, useEffect } from 'react';
import { DashboardNavbar } from './component/Dashboard/DashboardNavbar';
import { Sidebar } from './component/Dashboard/Sidebar';
import Dashboard from './pages/Dashboard';
import { Siswa } from './pages/DashboardPages/Siswa';
import { Tentor } from './pages/DashboardPages/Tentor';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AuthContext } from './context/auth.context-copy';

const DashboardLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uname, setUname] = useState('');

  const cookies = new Cookies();
  const navigate = useNavigate();

  const nama = cookies.get('name');
  const token = cookies.get('token');

  useEffect(() => {
    if (token != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Silakan Login');
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn }}> {/* // untuk mengatur session login  */}
        <div className="wrapper">
        <DashboardNavbar />
        {/* // bagian sidebar kotak hitam */}
        <Sidebar /> 
        {children}
         {/*bagian dari isi tabel  */}
        </div>
      </AuthContext.Provider>
    </div>
  );
};

export default DashboardLayout;
