import { useState } from "react";
import { ShoppingBag, Globe } from "lucide-react";
import logo from "../assets/hudhud-logo.svg";

interface NavbarProps {
  cartCount?: number;
}

export const Navbar = ({ cartCount = 0 }: NavbarProps) => {
  const [lang, setLang] = useState<"am" | "en" | "ar">("am");

  // የቋንቋ ትርጉሞች (Translations for Links)
  const t = {
    am: {
      home: "መነሻ",
      menu: "ሜኑ",
      about: "ስለ እኛ",
      contact: "አግኙን",
      cart: "ጋሪ",
    },
    en: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      cart: "Cart",
    },
    ar: {
      home: "الرئيسية",
      menu: "القائمة",
      about: "من نحن",
      contact: "اتصل بنا",
      cart: "السلة",
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-[#133c2c] shadow-lg border-b border-[#d4af37]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* 1. ሎጎው (Logo) */}
        <a href="/" className="flex items-center focus:outline-none">
          <img
            src={logo}
            alt="Hudhud Islamic Restaurant"
            className="h-20 w-auto object-contain py-1 transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* 2. ሊንኮች (Navigation Links - Home, Menu, About, Contact) */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase border-b-2 border-[#d4af37] pb-1"
          >
            {t[lang].home}
          </a>
          <a
            href="#menu"
            className="text-[#faf5ef]/90 hover:text-[#d4af37] font-medium text-sm tracking-wider uppercase transition-colors"
          >
            {t[lang].menu}
          </a>
          <a
            href="#about"
            className="text-[#faf5ef]/90 hover:text-[#d4af37] font-medium text-sm tracking-wider uppercase transition-colors"
          >
            {t[lang].about}
          </a>
          <a
            href="#contact"
            className="text-[#faf5ef]/90 hover:text-[#d4af37] font-medium text-sm tracking-wider uppercase transition-colors"
          >
            {t[lang].contact}
          </a>
        </nav>

        {/* 3. የቋንቋ መቀየሪያ እና የጋሪ ቁልፍ (Language Switcher & Cart) */}
        <div className="flex items-center gap-4">
          {/* Language Switcher Dropdown / Buttons */}
          <div className="flex items-center bg-[#0d2a1f] border border-[#d4af37]/40 rounded-full p-1 text-xs text-[#faf5ef]">
            <Globe className="w-4 h-4 text-[#d4af37] ml-2 mr-1" />

            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded-full transition-colors ${lang === "en" ? "bg-[#d4af37] text-[#133c2c] font-bold" : "hover:text-[#d4af37]"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`px-2 py-1 rounded-full transition-colors ${lang === "ar" ? "bg-[#d4af37] text-[#133c2c] font-bold" : "hover:text-[#d4af37]"}`}
            >
              عربي
            </button>
            <button
              onClick={() => setLang("am")}
              className={`px-2 py-1 rounded-full transition-colors ${lang === "am" ? "bg-[#d4af37] text-[#133c2c] font-bold" : "hover:text-[#d4af37]"}`}
            >
              አማ
            </button>
          </div>

          {/* Cart Button */}
          <button className="relative bg-[#133c2c] hover:bg-[#d4af37] text-[#d4af37] hover:text-[#133c2c] py-2.5 px-5 rounded-full transition-all duration-300 flex items-center gap-2.5 border-2 border-[#d4af37] shadow-md group cursor-pointer">
            <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="text-sm font-bold tracking-wide">
              {t[lang].cart} ({cartCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
