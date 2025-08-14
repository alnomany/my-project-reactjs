import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">حلول تقنية للمطاعم والمقاهي</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          نظام متكامل يساعد أصحاب المطاعم والمقاهي على مراقبة المبيعات، تقليل التكاليف، وتحقيق النمو المستدام بدون زيادة التعقيد
        </p>
        <button className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          اكتشف المزيد
        </button>
      </div>
    </section>
  );
};

export default Hero;