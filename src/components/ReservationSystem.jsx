import React from "react";

const ReservationSystem = () => {
  const features = [
    {
      title: "إدارة الوقت بكفاءة",
      description:
        "تحديد مدة الحجز المتوقعة لكل طاولة وإرسال تنبيهات عند اقتراب موعد الحجز التالي.",
    },
    {
      title: "حجوزات عبر الإنترنت",
      description:
        "تمكين العملاء من حجز طاولاتهم مباشرة عبر موقعك الإلكتروني أو تطبيق الهاتف المحمول.",
    },
    {
      title: "تنبيهات تلقائية",
      description:
        "إرسال رسائل تأكيد وتذكير للعملاء تلقائياً لتقليل نسبة التخلف عن الحجوزات.",
    },
  ];

  return (
    <section id="reservation" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              نظام حجوزات متكامل
            </h2>
            <p className="text-lg mb-6">
              تنظيم الحجوزات بذكاء لتحسين تجربة العملاء وزيادة كفاءة عملك.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
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
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
            <img
              src="/table-reservation.png"
              alt="Reservation System"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSystem;
