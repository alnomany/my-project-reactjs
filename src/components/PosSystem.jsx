import React from 'react';

const PosSystem = () => {
  const features = [
    {
      title: 'نظام متكامل',
      description: 'نظام نقاط بيع سهل الاستخدام يدعم جميع عمليات البيع والدفع.'
    },
    {
      title: 'تكامل مع الأنظمة الحالية',
      description: 'إمكانية التكامل مع أنظمة نقاط البيع الموجودة لديك بسلاسة.'
    },
    {
      title: 'تخزين سحابي',
      description: 'تخزين البيانات في السحابة للوصول إليها من أي مكان وفي أي وقت.'
    }
  ];

  return (
    <section id="pos" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">نظام نقاط البيع</h2>
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

export default PosSystem;