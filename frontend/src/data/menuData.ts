import kitfoImg from "../assets/kitfo.jfif";
import tibsImg from "../assets/tibs.jfif";
import pizaImg from "../assets/piza.jfif";

export interface MenuItem {
  id: string;
  category: "breakfast" | "lunch" | "hot_drinks" | "cold_drinks";
  name: { am: string; en: string; ar: string };
  description: { am: string; en: string; ar: string };
  price: number;
  image: string;
  tag?: { am: string; en: string; ar: string };
}

export const menuItems: MenuItem[] = [
  // ================= 1. ቁርስ (Breakfast - 4 ዓይነት) =================
  {
    id: "b1",
    category: "breakfast",
    name: {
      am: "ስፔሻል ፉል (Special Ful)",
      en: "Special Ful Medames",
      ar: "فول مدمس سبيشال",
    },
    description: {
      am: "በተፈጨ ባቄላ፣ እንቁላል፣ ቲማቲም፣ ቃሪያ እና የወይራ ዘይት ተቀምሞ የሚቀርብ",
      en: "Seasoned fava beans topped with boiled eggs, fresh tomatoes, chilies, and olive oil.",
      ar: "فول مدمس متبل مع البيض المسلوق والطماطم الطازجة والفلفل وزيت الزيتون.",
    },
    price: 250,
    image:
      "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    tag: { am: "ተወዳጅ", en: "Popular", ar: "الأكثر طلباً" },
  },
  {
    id: "b2",
    category: "breakfast",
    name: {
      am: "ጨጨብሳ በማር እና ቅቤ",
      en: "Chechebsa with Honey & Butter",
      ar: "تشيتشيبسا بالعسل والسمن",
    },
    description: {
      am: "በንጹህ የሀገር ቅቤ እና በነጭ ማር የታሸ ትኩስ ጨጨብሳ",
      en: "Traditional pan-fried flatbread tossed in spiced Ethiopian butter and pure honey.",
      ar: "خبز تقليدي مقلي وممزوج بالسمن البلدي المتبل والعسل الصافي.",
    },
    price: 280,
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "b3",
    category: "breakfast",
    name: {
      am: "እንቁላል ፍርፍር (Scrambled Eggs)",
      en: "Spiced Scrambled Eggs",
      ar: "بيض مخفوق متبل",
    },
    description: {
      am: "በቲማቲም፣ በሽንኩርት እና በቃሪያ የተጠበሰ ትኩስ እንቁላል ከዳቦ ጋር",
      en: "Fluffy scrambled eggs sautéed with onions, tomatoes, and green peppers served with bread.",
      ar: "بيض مخفوق مطبوخ مع البصل والطماطم والفلفل الأخضر يقدم مع الخبز.",
    },
    price: 230,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "b4",
    category: "breakfast",
    name: {
      am: "ፈጢራ በእንቁላል እና ማር",
      en: "Fetira with Egg & Honey",
      ar: "فطيرة بالبيض والعسل",
    },
    description: {
      am: "ስስ እና ጣፋጭ ፈጢራ በእንቁላል ተጠብሶ በንጹህ ማር የታጀበ",
      en: "Crispy layered pan-fried dough stuffed with egg and drizzled with natural honey.",
      ar: "فطيرة مقرمشة محشوة بالبيض ومغطاة بالعسل الطبيعي.",
    },
    price: 300,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },

  // ================= 2. ምሳ (Lunch - 3 ዓይነት) =================
  {
    id: "l1",
    category: "lunch",
    name: {
      am: "ሁድሁድ ስፔሻል ክትፎ",
      en: "Hudhud Special Kitfo",
      ar: "كتفو هدهد سبيشال",
    },
    description: {
      am: "100% ሀላል ምርጥ የበሬ ስጋ በንጹህ ቅቤ እና ሚጥሚጣ ከአይብ እና ጎመን ጋር",
      en: "100% Halal minced prime beef seasoned with mitmita and niter kibbeh, served with ayib and greens.",
      ar: "لحم بقري مفروم حلال 100% متبل بالبهارات والسمن، يقدم مع الجبن والخضار.",
    },
    price: 650,
    image: kitfoImg,
    tag: { am: "ስፔሻል", en: "Chef Special", ar: "طبق الشيف" },
  },
  {
    id: "l2",
    category: "lunch",
    name: {
      am: "ሸክላ ጥብስ (Shekla Tibs)",
      en: "Sizzling Shekla Tibs",
      ar: "شيكلا تبس ساخن",
    },
    description: {
      am: "በሸክላ ምጣድ ላይ እየተንተከተከ የሚቀርብ ጣፋጭ የበሬ ጥብስ",
      en: "Tender cubes of Halal beef sautéed with rosemary, onions, and peppers served sizzling in a clay pot.",
      ar: "مكعبات لحم بقري طرية مقلية مع إكليل الجبل والبصل والفلفل تقدم ساخنة في وعاء فخاري.",
    },
    price: 600,
    image: tibsImg,
  },
  {
    id: "l3",
    category: "lunch",
    name: {
      am: "ሁድሁድ ስፔሻል ፒዛ",
      en: "Hudhud Special Pizza",
      ar: "بيتزا هدهد سبيشال",
    },
    description: {
      am: "በብዙ ቺዝ፣ ሀላል ስጋ እና ትኩስ አትክልቶች የተዘጋጀ ጣፋጭ ፒዛ",
      en: "Wood-fired style crust loaded with mozzarella cheese, seasoned Halal beef, and fresh vegetables.",
      ar: "عجينة مقرمشة مغطاة بجبنة الموزاريلا واللحم البقري الحلال المتبل والخضروات الطازجة.",
    },
    price: 550,
    image: pizaImg,
  },

  // ================= 3. ትኩስ መጠጦች (Hot Drinks - 4 ዓይነት) =================
  {
    id: "h1",
    category: "hot_drinks",
    name: {
      am: "የኢትዮጵያ ጀበና ቡና",
      en: "Traditional Jebena Coffee",
      ar: "قهوة إثيوبية تقليدية",
    },
    description: {
      am: "በባህላዊ ጀበና ተቆልቶ እና ተፈጭቶ የሚፈላ መዓዛው የሚያውድ ቡና",
      en: "Freshly roasted and brewed authentic Ethiopian organic coffee served in traditional style.",
      ar: "قهوة إثيوبية عضوية محمصة ومحضرة طازجة بالطريقة التقليدية.",
    },
    price: 70,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h2",
    category: "hot_drinks",
    name: {
      am: "ስፔሻል ማኪያቶ (Macchiato)",
      en: "Special Macchiato",
      ar: "ماكياتو سبيشال",
    },
    description: {
      am: "ወፍራም ክሬም ያለው ጣፋጭ የኢትዮጵያ ማኪያቶ",
      en: "Rich espresso shot topped with velvety steamed milk foam.",
      ar: "جرعة إسبريسو غنية مغطاة برغوة الحليب المخملية المبخرة.",
    },
    price: 90,
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h3",
    category: "hot_drinks",
    name: {
      am: "የቅመም ሻይ (Spiced Tea)",
      en: "Ethiopian Spiced Tea",
      ar: "شاي متبل",
    },
    description: {
      am: "በቀረፋ፣ በቅርንፉድ እና በኮረሪማ የታሸ ሞቅ የሚያደርግ ሻይ",
      en: "Aromatic black tea infused with cinnamon, cloves, and cardamom.",
      ar: "شاي أسود عطري منقوع بالقرفة والقرنفل والهيل.",
    },
    price: 60,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h4",
    category: "hot_drinks",
    name: {
      am: "ትኩስ ቸኮሌት (Hot Chocolate)",
      en: "Rich Hot Chocolate",
      ar: "شوكولاتة ساخنة",
    },
    description: {
      am: "በንጹህ ወተት እና ካካዎ የተዘጋጀ ጣፋጭ ትኩስ ቸኮሌት",
      en: "Creamy steamed milk blended with rich premium cocoa.",
      ar: "حليب كريمي مبخر ممزوج بالكاكاو الفاخر الغني.",
    },
    price: 130,
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
  },

  // ================= 4. ቀዝቃዛ መጠጦች (Cold Drinks - 4 ዓይነት) =================
  {
    id: "c1",
    category: "cold_drinks",
    name: {
      am: "ስፔሻል ስፕሪስ ጁስ",
      en: "Special Layered Fruit Juice",
      ar: "عصير فواكه طبقات سبيشال",
    },
    description: {
      am: "ከአቮካዶ፣ ማንጎ፣ ፓፓያ እና እንጆሪ በንብርብር የተዘጋጀ ትኩስ ጁስ",
      en: "Freshly blended layers of avocado, mango, papaya, and strawberry juice.",
      ar: "طبقات طازجة من عصير الأفوكادو والمانجو والبابايا والفراولة.",
    },
    price: 180,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
    tag: { am: "ትኩስ", en: "Fresh", ar: "طازج" },
  },
  {
    id: "c2",
    category: "cold_drinks",
    name: {
      am: "የተፈጥሮ ማንጎ ጁስ",
      en: "Fresh Mango Juice",
      ar: "عصير مانجو طازج",
    },
    description: {
      am: "ያለምንም ተጨማሪ ነገር ከበሰለ ጣፋጭ ማንጎ የተጨመቀ",
      en: "100% pure chilled mango nectar squeezed from ripe tropical mangoes.",
      ar: "عصير مانجو نقي ومبرد 100% معصور من ثمار المانجو الاستوائية الناضجة.",
    },
    price: 160,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c3",
    category: "cold_drinks",
    name: {
      am: "ሞሂቶ በሎሚ እና ሚንት",
      en: "Virgin Mint Mojito",
      ar: "موهيتو بالنعناع والليمون",
    },
    description: {
      am: "በሎሚ፣ በሚንት ቅጠል እና በበረዶ የቀዘቀዘ መንፈስን የሚያድስ መጠጥ",
      en: "Refreshing sparkling drink with fresh lime wedges, crushed mint leaves, and ice.",
      ar: "مشروب فوار منعش مع شرائح الليمون الطازج وأوراق النعناع المهروسة والثلج.",
    },
    price: 170,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c4",
    category: "cold_drinks",
    name: {
      am: "አይስድ ላቴ (Iced Latte)",
      en: "Chilled Iced Latte",
      ar: "آيس لاتيه مثلج",
    },
    description: {
      am: "በቀዝቃዛ ወተት እና በረዶ የተዘጋጀ ጣፋጭ ኤስፕሬሶ ቡና",
      en: "Smooth espresso poured over cold milk and ice cubes.",
      ar: "إسبريسو ناعم يُسكب فوق الحليب البارد ومكعبات الثلج.",
    },
    price: 150,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
  },
];
