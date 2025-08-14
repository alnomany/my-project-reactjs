import { Calendar, BarChart3, Building2 } from "lucide-react";

const features = [
  {
    icon: <Calendar className="w-10 h-10 text-indigo-500" />,
    title: "نظام حجوزات ذكي",
    desc: "سهل حجوزات عملائك مع نظام ذكي يقلل التداخل والأخطاء ويضمن استغلال المساحة بشكل أمثل.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-pink-500" />,
    title: "تحليل المبيعات",
    desc: "تقارير تفصيلية عن المبيعات اليومية والأسبوعية والشهرية لمعرفة اتجاهات الأداء.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-green-500" />,
    title: "إدارة الفروع",
    desc: "مراقبة وإدارة جميع فروعك من مكان واحد بكفاءة وسهولة.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        الميزات الرئيسية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
