import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import CoursePage from './pages/CoursePage';

export default function App() {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <Router>
      <div className="layout-container">
        <Navbar lang={lang} toggleLang={toggleLang} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard lang={lang} />} />
            <Route path="/course/:courseId" element={<CoursePage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}