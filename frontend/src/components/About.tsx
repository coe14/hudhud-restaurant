import { Sparkles, Utensils, HeartHandshake, Leaf, Award } from "lucide-react";
import kitfo from "../assets/kitfo.jfif";
import tibs from "../assets/tibs.jfif";
import piza from "../assets/piza.jfif";

interface AboutProps {
  lang?: "am" | "en" | "ar";
}

export const About = ({ lang = "am" }: AboutProps) => {
  const content = {
    am: {
      tag: "ስለ ሁدهድ ሬስቶራንት",
      title: "በእያንዳንዱ ንክሻ ልዩ ጣዕም እና ደስታን መፍጠር",
      desc: "ምግብ ከማጥገብም በላይ መገናኛ፣ ማክበሪያ እና የማይረሳ ትዝታ መፍጠሪያ መንገድ ነው። ለዚህም ነው እያንዳንዱ ምግብ፣ ግብአት እና መስተንግዶ በልዩ ጥንቃቄ፣ በባህላዊ እውቀት እና ፍቅር የሚዘጋጀው።",
      badge1: "100% ንጹህ እና ሀላል",
      badge2: "የባህል እና ዘመናዊ ጣዕም",
      badge3: "ፈጣን እና ጥራት ያለው መስተንግዶ",
    },
    en: {
      tag: "About Hudhud",
      title: "Our mission to delight every bite!",
      desc: "We believe that food is more than just sustenance—it is a way to connect, celebrate, and create lasting memories. That is why every dish and experience is crafted with care.",
      badge1: "100% Halal & Clean",
      badge2: "Traditional & Modern Taste",
      badge3: "Fast & Quality Hospitality",
    },
    ar: {
      tag: "عن مطعم هدهد",
      title: "رسالتنا هي إدخال البهجة في كل قمة!",
      desc: "نؤمن أن الطعام ليس مجرد طاقة، بل هو وسيلة للتواصل والاحتفال وخلق ذكريات لا تنسى. ولهذا السبب يتم إعداد كل طبق بعناية فائقة.",
      badge1: "100% حلال ونظيف",
      badge2: "مذاق تقليدي وحديث",
      badge3: "ضيافة سريعة وعالية الجودة",
    },
  };

  const t = content[lang];

  return (
    <section
      id="about"
      className="relative bg-[#133c2c] text-white py-20 lg:py-32 overflow-hidden border-b border-[#d4af37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#faf5ef]">
            {t.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Floating Cards & Images Collage with Orange Badges */}
        <div className="relative max-w-5xl mx-auto h-[320px] sm:h-[420px] flex items-center justify-center my-10">
          {/* Left Card */}
          <div className="absolute left-2 sm:left-10 w-44 sm:w-64 h-56 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/40 transform -rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
            <img
              src={kitfo}
              alt="Hudhud Special Kitfo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Main Card */}
          <div className="absolute w-52 sm:w-72 h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d4af37] transform z-20">
            <img
              src={tibs}
              alt="Hudhud Special Tibs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs sm:text-sm font-bold text-[#d4af37] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                Hudhud Signature
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="absolute right-2 sm:right-10 w-44 sm:w-64 h-56 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/40 transform rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
            <img
              src={piza}
              alt="Hudhud Pizza"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orange Circular Badge Left */}
          <div className="absolute left-1/4 -bottom-6 sm:bottom-4 z-30 hidden sm:flex items-center gap-2 bg-[#ff6600] text-white px-4 py-2 rounded-full shadow-xl text-xs font-bold animate-bounce">
            <Leaf className="w-4 h-4" />
            <span>{t.badge1}</span>
          </div>

          {/* Orange Circular Badge Right */}
          <div className="absolute right-1/4 -bottom-6 sm:bottom-4 z-30 hidden sm:flex items-center gap-2 bg-[#ff6600] text-white px-4 py-2 rounded-full shadow-xl text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>{t.badge3}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
