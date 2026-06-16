import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { archiveData } from '../data';

export default function CoursePage({ lang }) {
  const { courseId } = useParams();
  const course = archiveData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h2>{lang === 'ar' ? 'المادة المطلوبة غير موجودة' : 'Course Not Found'}</h2>
        <Link to="/" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          {lang === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} 
          {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Dashboard'}
        </Link>
      </div>
    );
  }

  const getBadgeClass = (type) => {
    switch (type) {
      case 'activity': return 'badge badge-activity';
      case 'research': return 'badge badge-research';
      case 'case_study': return 'badge badge-case_study';
      default: return 'badge';
    }
  };

  const getTypeText = (type) => {
    if (lang === 'ar') {
      switch (type) {
        case 'activity': return 'نشاط تطبيقي';
        case 'research': return 'بحث علمي';
        case 'case_study': return 'دراسة حالة';
        default: return 'ملف';
      }
    } else {
      switch (type) {
        case 'activity': return 'Applied Activity';
        case 'research': return 'Academic Research';
        case 'case_study': return 'Case Study';
        default: return 'File';
      }
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#475569', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {lang === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          {lang === 'ar' ? 'العودة للوحة التحكم' : 'Back to Dashboard'}
        </Link>
        <h1 style={{ fontSize: '1.75rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>
          {lang === 'ar' ? course.courseName.ar : course.courseName.en}
        </h1>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          {lang === 'ar' ? `كود المادة: ${course.courseCode}` : `Course Code: ${course.courseCode}`}
        </p>
      </div>

      <div className="list-container">
        {course.items.map((item) => (
          <div key={item.id} className="list-item" style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}>
            <div className="item-info" style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row', textDirection: 'rtl' }}>
              <FileText size={20} style={{ color: '#475569', flexShrink: 0 }} />
              <div style={{ minWidth: 0, flex: 1, textAlign: 'right' }}>
                <div className="item-title" title={item.title}>{item.title}</div>
                <div style={{ marginTop: '0.25rem', display: 'flex', justifyContent: lang === 'en' ? 'flex-end' : 'flex-start' }}>
                  <span className={getBadgeClass(item.type)}>{getTypeText(item.type)}</span>
                </div>
              </div>
            </div>
            <div>
              <a 
                href={`${course.folderPath}${item.title}`} 
                download={item.title} 
                className="btn-download"
                style={{ flexDirection: lang === 'en' ? 'row-reverse' : 'row' }}
              >
                <Download size={16} />
                <span>{lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}