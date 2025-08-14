import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import ReservationSystem from "./components/ReservationSystem.jsx";
import Reporting from "./components/Reporting.jsx";
import OnlinePresence from "./components/OnlinePresence.jsx";
import CustomerDatabase from "./components/CustomerDatabase.jsx";
import PosSystem from "./components/PosSystem.jsx";
import BranchManagement from "./components/BranchManagement.jsx";
import OrderManagement from "./components/OrderManagement.jsx";
import SmartMenu from "./components/SmartMenu.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero />
      <Features />
      <ReservationSystem />
      <Reporting />
      <OnlinePresence />
      <CustomerDatabase />
      <PosSystem />
      <BranchManagement />
      <OrderManagement />
      <SmartMenu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
