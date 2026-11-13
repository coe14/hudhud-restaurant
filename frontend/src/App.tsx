import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { menuItems } from "./data/menuData"; // <-- ትክክለኛው ፓዝ (Path) ከ src ስር ሲሆን `./data/menuData` ይባላል

export function App() {
  const [lang, setLang] = useState<"am" | "en" | "ar">("am");
  const [currentPage, setCurrentPage] = useState<
    "home" | "menu" | "about" | "contact"
  >("home");
  const [cartCount, setCartCount] = useState(0);

  return (
    <div
      className={`min-h-screen bg-[#faf5ef] text-[#121212] font-sans ${lang === "ar" ? "rtl" : "ltr"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 1. Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* 2. Dynamic Page Content */}
      <main className="min-h-[70vh]">
        {currentPage === "home" && <Hero lang={lang} />}
        {currentPage === "menu" && (
          <Menu
            lang={lang}
            onAddToCart={() => setCartCount((prev) => prev + 1)}
          />
        )}
        {currentPage === "about" && <About lang={lang} />}
        {currentPage === "contact" && <Contact lang={lang} />}
      </main>

      {/* 3. Footer */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
