import React from "react";

const Header = ({ scrollToSection, activeSection }) => {
  const sections = [
    { id: "features", label: "الميزات" },
    { id: "reservation", label: "نظام الحجوزات" },
    { id: "reporting", label: "التقارير" },
    { id: "online", label: "الحضور الإلكتروني" },
    { id: "database", label: "قاعدة العملاء" },
    { id: "pos", label: "نقاط البيع" },
    { id: "contact", label: "اتصل بنا" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-lg rounded-b-2xl"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ الشعار */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <img src="/logo.jpg" alt="شعار" className="w-10 h-10 rounded-full" />
        </div>

        {/* ✅ الروابط */}
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* ✅ زر الموبايل */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
