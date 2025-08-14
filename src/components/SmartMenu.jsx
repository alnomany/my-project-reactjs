import React from "react";

const SmartMenu = () => {
  const benefits = [
    "توفير تكاليف الطباعة",
    "تقليل الأخطاء في الطلبات",
    "عرض العناصر المتوفرة فقط",
    "إمكانية عرض المكونات والسعرات",
  ];

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              قائمة منيو ذكية
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  عرض جميع الأصناف بشكل منظم وجذاب للعميل مع صور عالية الجودة
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  إمكانية تحديث الأسعار والوصف والصور بسهولة وبشكل فوري
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="menu.jpg"
              alt="Smart Menu"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMenu;
