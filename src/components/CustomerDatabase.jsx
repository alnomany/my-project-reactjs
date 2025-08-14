import React from 'react';

const CustomerDatabase = () => {
  const features = [
    {
      title: 'بناء قاعدة بيانات متكاملة',
      description: 'جمع وتنظيم بيانات العملاء بطريقة آمنة وفعالة.'
    },
    {
      title: 'حملات تسويقية مخصصة',
      description: 'إرسال عروض وحملات مخصصة بناءً على تفضيلات العملاء وسلوكهم الشرائي.'
    },
    {
      title: 'تواصل متعدد القنوات',
      description: 'التواصل مع العملاء عبر البريد الإلكتروني والرسائل النصية وتطبيقات التواصل.'
    }
  ];

  return (
    <section id="database" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">قاعدة بيانات العملاء</h2>
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

export default CustomerDatabase;