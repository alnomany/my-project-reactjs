import React from 'react';

const Reporting = () => {
  const reports = [
    { title: 'تحليل الأصناف', description: 'معرفة الأصناف الأكثر والأقل مبيعاً لاتخاذ قرارات مدروسة بشأن القائمة.' },
    { title: 'تحليل ساعات الذروة', description: 'تحديد أوقات الازدحام لتحسين جدولة الموظفين وتوفير التكاليف.' },
    { title: 'تقليل الهدر', description: 'تتبع المخزون واستهلاك المواد الخام لتقليل الهدر وتحسين إدارة المشتريات.' },
  ];

  return (
    <section id="reporting" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">نظام التقارير المتقدم</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3">{report.title}</h3>
              <p className="text-gray-600">{report.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reporting;