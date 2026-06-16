import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Globe } from 'lucide-react';
import { archiveData } from '../data';

export default function Navbar({ lang, toggleLang }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}>
        <Link to="/" className="navbar-logo" style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}>
          <BookOpen size={24} />
          <span>{lang === 'ar' ? 'الأرشيف الأكاديمي الرقمي' : 'Digital Academic Archive'}</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}>
          <ul className="navbar-menu" style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}>
            <li>
              <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
                {lang === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            {archiveData.map((course) => (
              <li key={course.id}>
                <Link
                  to={`/course/${course.id}`}
                  className={`navbar-link ${location.pathname === `/course/${course.id}` ? 'active' : ''}`}
                >
                  {course.courseCode}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleLang} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: '#eff6ff',
              border: '1px solid #cbd5e1',
              padding: '0.4rem 0.8rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '600',
              color: '#1e3a8a'
            }}
          >
            <Globe size={16} />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}