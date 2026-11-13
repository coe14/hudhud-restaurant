import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export function App() {
  const [lang, setLang] = useState<"am" | "en" | "ar">("am");

  return (
    <div
      className={`min-h-screen bg-[#faf5ef] text-[#121212] font-sans ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 1. Navbar with Language Switcher */}
      <Navbar lang={lang} setLang={setLang} cartCount={0} />

      {/* 2. Hero Section */}
      <Hero lang={lang} />

      {/* 3. Footer with Addresses and Social Links */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
