import React from "react";

const OnlinePresence = () => {
  const benefits = [
    { stat: "70%", description: "زيادة في معدل العودة" },
    { stat: "40%", description: "تقليل تكلفة التسويق" },
    { stat: "5x", description: "معدل التحويل" },
  ];

  return (
    <section id="online" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="resturant.jpg"
              alt="Online Presence"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              إطلاق موقعك الخاص
            </h2>
            <p className="text-lg mb-6">
              "ليوم السوق تغيّر… ما عاد النجاح بس بالموقع الجغرافي أو عدد
              الفروع."
            </p>
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
                  توسيع نطاق عملك ليشمل عملاء في كل أحياء مدينتك أو حتى مدن أخرى
                  بدون فتح فروع جديدة.
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
                  تطبيق خاص بمطعمك يمكن العملاء من تصفح القائمة وطلب الطعام
                  مباشرة.
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-4 text-center">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary text-white p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold">{item.stat}</div>
                  <div className="text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlinePresence;
