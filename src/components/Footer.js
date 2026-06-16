import React from 'react';

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
        <div className="footer-text" style={{ fontWeight: '500' }}>
          {lang === 'ar' ? (
            <>الأرشيف الأكاديمي للأبحاث والأوراق العلمية © {new Date().getFullYear()} | إعداد الطالب شعلي خليل</>
          ) : (
            <>Academic Research & Papers Archive © {new Date().getFullYear()} | Developed by Shalee Khalil</>
          )}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
          <a 
            href="https://www.facebook.com/shalee.ibrahim/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: '600' }}
          >
            Facebook
          </a>
          <a 
            href="https://shaleekhalil-portfolio.vercel.app/certs" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#0d9488', textDecoration: 'none', fontWeight: '600' }}
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}