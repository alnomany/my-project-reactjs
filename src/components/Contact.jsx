import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">تواصل معنا اليوم</h2>
        <p className="text-xl mb-8">نحن هنا لمساعدتك في تحويل مطعمك أو مقهاك إلى عمل رقمي متكامل</p>
        <div className="max-w-md mx-auto bg-white text-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-2xl font-bold mb-4">0123456789</div>
          <div className="text-lg mb-4">info@techsolutions.com</div>
          <button className="bg-accent hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            أرسل رسالة
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;