import React from 'react';

const BranchManagement = () => {
  const features = [
    {
      title: 'إدارة مركزية',
      description: 'مراقبة وإدارة جميع فروعك من مكان واحد بكفاءة وسهولة.'
    },
    {
      title: 'متابعة الأداء',
      description: 'تعرف على مبيعات كل فرع، عدد الحجوزات، والكفاءة التشغيلية بشكل مباشر.'
    },
    {
      title: 'إدارة الموظفين',
      description: 'تعيين الصلاحيات والمهام لكل موظف بحسب فرعه وتتبع أدائهم.'
    }
  ];

  return (
    <section id="branches" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">إدارة الفروع</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchManagement;