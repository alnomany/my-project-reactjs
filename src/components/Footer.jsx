import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2023 حلول تقنية للمطاعم والمقاهي. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center space-x-6 space-x-reverse mt-4">
          <a href="#" className="hover:text-accent">الشروط والأحكام</a>
          <a href="#" className="hover:text-accent">سياسة الخصوصية</a>
          <a href="#" className="hover:text-accent">تواصل معنا</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;