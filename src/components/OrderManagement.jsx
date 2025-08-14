import React from "react";

const OrderManagement = () => {
  const steps = [
    { id: 1, name: "استلام" },
    { id: 2, name: "تجهيز" },
    { id: 3, name: "تسليم" },
    { id: 4, name: "متابعة" },
  ];

  return (
    <section id="orders" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          إدارة الطلبات بذكاء
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex justify-between mb-8">
                {steps.map((step) => (
                  <div key={step.id} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      {step.id}
                    </div>
                    <span>{step.name}</span>
                  </div>
                ))}
              </div>
              <img
                src="dashboard.png"
                alt="Order Management"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">مسار الطلب</h3>
            <ul className="space-y-4 mb-6">
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
                <span>تنظيم جميع الطلبات بطريقة مرتبة وسهلة التتبع</span>
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
                <span>تقليل وقت الانتظار لضمان تجربة سلسة للعميل</span>
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm">تقليل وقت التحضير</div>
              </div>
              <div className="bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm">تقليل الأخطاء</div>
              </div>
              <div className="bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm">زيادة الإنتاجية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderManagement;
