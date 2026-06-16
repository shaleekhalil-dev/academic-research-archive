import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Folder, GraduationCap } from 'lucide-react';
import { archiveData } from '../data';

export default function Dashboard({ lang }) {
  return (
    <div>
      <header style={{ 
        marginBottom: '2.5rem', 
        background: '#ffffff', 
        padding: '2rem', 
        borderRadius: '0.75rem', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '0.75rem' }}>
          {lang === 'ar' ? 'المستودع الأكاديمي الرقمي' : 'Digital Academic Archive'}
        </h1>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'start', 
          gap: '0.75rem', 
          background: '#f8fafc', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          borderRight: lang === 'ar' ? '4px solid #0d9488' : 'none',
          borderLeft: lang === 'en' ? '4px solid #0d9488' : 'none'
        }}>
          <GraduationCap size={24} style={{ color: '#0d9488', flexShrink: 0, marginTop: '0.2rem' }} />
          <p style={{ color: '#334155', fontSize: '1.05rem', margin: 0, textAlign: 'justify' }}>
            {lang === 'ar' ? (
              <>
                هذا الأرشيف الأكاديمي مخصص لتوثيق وعرض الأبحاث والإنجازات العلمية الخاصة بالباحث <strong>شعلي خليل</strong> كطالب ماجستير في برنامج <strong>إدارة الموارد البشرية التطبيقية</strong>. تضم المنصة الأوراق البحثية، الدراسات التطبيقية، والنشاطات الأكاديمية المنفذة بدقة ومنهجية علمية متكاملة.
              </>
            ) : (
              <>
                This academic archive is dedicated to documenting and showcasing the research work and achievements of <strong>Shalee Khalil</strong>, as a Master's student in the <strong>Applied Human Resources Management</strong> program. The platform encapsulates research papers, applied case studies, and academic activities conducted with rigorous scientific methodology.
              </>
            )}
          </p>
        </div>
      </header>

      <div className="dashboard-grid">
        {archiveData.map((course) => {
          const currentCourseName = lang === 'ar' ? course.courseName.ar : course.courseName.en;
          
          return (
            <Link to={`/course/${course.id}`} key={course.id} className="card">
              <div style={{ marginBottom: '1rem' }}>
                <h2 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                  <Folder size={20} style={{ color: '#1e3a8a', flexShrink: 0 }} />
                  <span>{currentCourseName}</span>
                </h2>
              </div>
              <div className="card-meta" style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Layers size={16} />
                  {lang === 'ar' ? `رمز المادة: ${course.courseCode}` : `Course Code: ${course.courseCode}`}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <strong>{course.items.length}</strong> {lang === 'ar' ? 'ملفات مؤرشفة' : 'Archived Files'}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}