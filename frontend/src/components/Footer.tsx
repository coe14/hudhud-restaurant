import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface FooterProps {
  lang?: "am" | "en" | "ar";
}

export const Footer = ({ lang = "am" }: FooterProps) => {
  const content = {
    am: {
      aboutTitle: "ስለ ሁدهድ ሬስቶራንት",
      aboutText:
        "በአዲስ አበባ እና በዲሴ ከተሞች የሚገኝ፣ 100% ንጹህ እና ሀላል የሆኑ ባህላዊ እና ዘመናዊ ምግቦችን በጥራት የሚያቀርብ ሬስቶራንት።",
      quickLinks: "ፈጣን ሊንኮች",
      home: "መነሻ",
      menu: "ሜኑ",
      about: "ስለ እኛ",
      contact: "አግኙን",
      contactTitle: "አድራሻችን",
      address1: "አዲስ አበባ: ቦሌ",
      address2: "ዲሴ: ፒሳ",
      phone: "+251 914 08 10 65",
      email: "info@hudhudrestaurant.com",
      hoursTitle: "የስራ ሰዓት",
      hours: "ከሰኞ እስከ እሁድ: 11:00 ጠዋት - 4:00 ማታ",
      socialTitle: "ማህበራዊ ሚዲያዎቻችን",
      rights: "ሁሉም መብቶች የተጠበቁ ናቸው።",
    },
    en: {
      aboutTitle: "About Hudhud",
      aboutText:
        "Located in Addis Ababa and Dessie, offering 100% clean and halal traditional and modern dishes with high quality.",
      quickLinks: "Quick Links",
      home: "Home",
      menu: "Menu",
      about: "About Us",
      contact: "Contact",
      contactTitle: "Our Addresses",
      address1: "Addis Ababa: Bole",
      address2: "Dessie: Pissa",
      phone: "+251 914 08 10 65",
      email: "info@hudhudrestaurant.com",
      hoursTitle: "Working Hours",
      hours: "Mon - Sun: 8:00 AM - 10:00 PM",
      socialTitle: "Connect With Us",
      rights: "All rights reserved.",
    },
    ar: {
      aboutTitle: "عن مطعم هدهد",
      aboutText:
        "يقع في أديس أبابا وديسي، يقدم أطباقاً تقليدية وحديثة حلال 100% وبجودة عالية.",
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      menu: "القائمة",
      about: "من نحن",
      contact: "اتصل بنا",
      contactTitle: "عناويننا",
      address1: "أديس أبابا: بولي",
      address2: "ديسي: بيسا",
      phone: "+251 914 08 10 65",
      email: "info@hudhudrestaurant.com",
      hoursTitle: "ساعات العمل",
      hours: "من الإثنين إلى الأحد: 8:00 صباحاً - 10:00 مساءً",
      socialTitle: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
    },
  };

  const t = content[lang];

  return (
    <footer
      className="bg-[#0d2a1f] text-[#faf5ef] border-t border-[#d4af37]/30 pt-16 pb-8"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 1. About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37] tracking-wide">
              {t.aboutTitle}
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              {t.aboutText}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37] tracking-wide">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-stone-300 hover:text-[#d4af37] transition-colors"
                >
                  {t.home}
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-stone-300 hover:text-[#d4af37] transition-colors"
                >
                  {t.menu}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-stone-300 hover:text-[#d4af37] transition-colors"
                >
                  {t.about}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-stone-300 hover:text-[#d4af37] transition-colors"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info & Addresses */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37] tracking-wide">
              {t.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{t.address1}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{t.address2}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                <a
                  href="tel:+251914081065"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>{t.email}</span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media & Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37] tracking-wide">
              {t.hoursTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-stone-300 mb-4">
              <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{t.hours}</span>
            </div>

            <h4 className="text-sm font-bold text-[#d4af37] tracking-wide pt-2">
              {t.socialTitle}
            </h4>
            <div className="flex items-center gap-3">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#133c2c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#133c2c] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#133c2c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#133c2c] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/251914081065"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#133c2c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#121212] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            © {new Date().getFullYear()} Hudhud Restaurant. {t.rights}
          </p>
          <p className="text-stone-300 font-medium">
            Developed by{" "}
            <span className="text-[#d4af37] font-bold tracking-wider">
              Rehima Yesuf
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
