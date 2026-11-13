import kitfo from "../assets/kitfo.jfif";
import piza from "../assets/piza.jfif";
import tibs from "../assets/tibs.jfif";

export interface HeroSlide {
  id: number;
  badge: { am: string; en: string; ar: string };
  title: { am: string; en: string; ar: string };
  highlightText: { am: string; en: string; ar: string };
  description: { am: string; en: string; ar: string };
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: {
      am: "እንኳን ወደ ሁدهድ ሬስቶራንት በደህና መጡ",
      en: "Welcome to Hudhud Restaurant",
      ar: "مرحباً بكم في مطعم هدهد",
    },
    title: {
      am: "የተመረጠ እና ጣዕም ያለው",
      en: "Selected and Delicious",
      ar: "أطباق مختارة ولذيذة",
    },
    highlightText: {
      am: "ሀላል ምግብ በከተማችን",
      en: "Halal Food in Town",
      ar: "طعام حلال في المدينة",
    },
    description: {
      am: "በሁدهድ ሬስቶራንት ልዩ የባህላዊ እና ዘመናዊ ምግቦች ጣዕም ይለማመዱ። ሰውነትን ከማርካትም በላይ ነፍስን የሚያድስ ጥራት ያለው መስተንግዶ እናቀርባለን።",
      en: "Experience the unique taste of traditional and modern halal dishes at Hudhud Restaurant. We offer quality hospitality.",
      ar: "تجربة طعم فريد للأطباق الحلال التقليدية والحديثة في مطعم هدهد.",
    },
    image: kitfo,
  },
  {
    id: 2,
    badge: {
      am: "100% ንጹህ እና ጥራት ያለው",
      en: "100% Clean and Quality",
      ar: "100% نقي وعالي الجودة",
    },
    title: {
      am: "ልዩ የባህላዊ ምግቦች",
      en: "Special Traditional Dishes",
      ar: "أطباق تقليدية مميزة",
    },
    highlightText: {
      am: "እና የክብር መስተንግዶ",
      en: "And Honorable Hospitality",
      ar: "وضيافة مميزة",
    },
    description: {
      am: "በሰንበትም ሆነ በሳምንቱ ቀናት ከቤተሰብዎ ጋር በመሆን የሚወዷቸውን ጣፋጭ ምግቦች ይጎንጩ።",
      en: "Enjoy your favorite delicious meals with your family during weekends or weekdays.",
      ar: "استمتع بوجباتك المفضلة واللذيذة مع عائلتك.",
    },
    image: tibs,
  },
  {
    id: 3,
    badge: {
      am: "ፈጣን እና ምቹ አገልግሎት",
      en: "Fast and Convenient Service",
      ar: "خدمة سريعة ومريحة",
    },
    title: {
      am: "የታመነ የቤት ውስጥ ትዕዛዝ",
      en: "Trusted Home Delivery",
      ar: "توصيل منزلي موثوق",
    },
    highlightText: {
      am: "በአንድ ክሊክ ማድረስ",
      en: "Delivery with One Click",
      ar: "التوصيل بنقرة واحدة",
    },
    description: {
      am: "የመረጡትን ምግብ በጥራት እና በፍጥነት ወደ ያሉበት ቦታ እናደርሳለን።",
      en: "We deliver your chosen food with high quality and speed right to your location.",
      ar: "نقوم بتوصيل طعامك المختيار بجودة عالية وبسرعة.",
    },
    image: piza,
  },
];
