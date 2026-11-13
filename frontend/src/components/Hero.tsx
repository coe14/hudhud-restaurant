import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroSlides } from "./heroData";

interface HeroProps {
  lang?: "am" | "en" | "ar";
}

export const Hero = ({ lang = "am" }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ምስሎቹ በየ 4.5 ሰኮንዱ እራሳቸው እንዲንቀሳቀሱ (Auto Slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentIndex];

  const texts = {
    menuBtn: { am: "ሜኑ ይመልከቱ", en: "View Menu", ar: "عرض القائمة" },
    contactBtn: { am: "ያግኙን (Contact Us)", en: "Contact Us", ar: "اتصل بنا" },
    branchTitle: {
      am: "Addis Ababa & Dessie",
      en: "Addis Ababa & Dessie",
      ar: "أديس أبابا وديسي",
    },
    branchSub: {
      am: "ዋና ቅርንጫፎቻችን",
      en: "Main Branches",
      ar: "فروعنا الرئيسية",
    },
    qualityTitle: {
      am: "100% Halal & Clean",
      en: "100% Halal & Clean",
      ar: "100% حلال ونظيف",
    },
    qualitySub: {
      am: "ጥራት የተረጋገጠበት",
      en: "Quality Guaranteed",
      ar: "الجودة مضمونة",
    },
  };

  return (
    <section
      id="home"
      className="relative bg-[#121212] text-white py-12 lg:py-24 overflow-hidden border-b border-[#d4af37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ዴስክቶፕ ላይ ጎን ለጎን, ሞባይል ላይ አንዱ ከሌላው በታች */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${lang === "ar" ? "lg:text-right" : ""}`}
        >
          {/* የግራ ክፍል - ጽሁፎች */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 transition-all duration-700 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>{slide.badge[lang]}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {slide.title[lang]} <br />
              <span className="text-[#d4af37]">
                {slide.highlightText[lang]}
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-xl">
              {slide.description[lang]}
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 pt-2 ${lang === "ar" ? "flex-row-reverse" : ""}`}
            >
              <a
                href="#menu"
                className="bg-[#d4af37] hover:bg-[#c59b27] text-[#121212] font-bold px-7 py-3 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 group cursor-pointer text-sm sm:text-base"
              >
                <span>{texts.menuBtn[lang]}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`}
                />
              </a>
              <a
                href="#contact"
                className="border-2 border-[#d4af37]/50 hover:border-[#d4af37] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#d4af37]/10 cursor-pointer text-sm sm:text-base"
              >
                {texts.contactBtn[lang]}
              </a>
            </div>

            <div className="pt-6 border-t border-stone-800 flex items-center gap-6 text-sm text-stone-400">
              <div>
                <p className="font-bold text-[#d4af37] text-sm sm:text-base">
                  {texts.branchTitle[lang]}
                </p>
                <p className="text-xs">{texts.branchSub[lang]}</p>
              </div>
              <div className="h-8 w-[1px] bg-stone-800"></div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">
                  {texts.qualityTitle[lang]}
                </p>
                <p className="text-xs">{texts.qualitySub[lang]}</p>
              </div>
            </div>
          </div>

          {/* የቀኝ ክፍል - ተንቀሳቃሽ የምግብ ምስሎች */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none h-[280px] sm:h-[380px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/30 bg-[#133c2c]">
              {heroSlides.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={item.image}
                    alt="Hudhud Restaurant Food"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* የቁጥር አመልካች ነጥቦች */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "w-8 bg-[#d4af37]"
                        : "w-2 bg-white/50"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
