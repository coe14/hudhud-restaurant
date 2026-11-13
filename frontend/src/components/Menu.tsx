import { useState } from "react";
import { Sparkles, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { menuItems } from "../data/menuData";

interface MenuProps {
  lang?: "am" | "en" | "ar";
  onAddToCart?: () => void;
}

export const Menu = ({ lang = "am", onAddToCart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "breakfast" | "lunch" | "hot_drinks" | "cold_drinks"
  >("all");

  const content = {
    am: {
      badge: "የእኛ ሜኑ",
      title: "ጣፋጭ እና 100% ሀላል ምግቦቻችን",
      desc: "በልዩ ጥንቃቄ እና ንጽህና የተዘጋጁ የቁርስ፣ የምሳ እንዲሁም ትኩስ እና ቀዝቃዛ መጠጦችን ይምረጡ።",
      currency: "ብር",
      orderBtn: "ወደ ጋሪ ጨምር",
      categories: {
        all: "ሁሉም (15)",
        breakfast: "ቁርስ (4)",
        lunch: "ምሳ (3)",
        hot_drinks: "ትኩስ መጠጥ (4)",
        cold_drinks: "ቀዝቃዛ መጠጥ (4)",
      },
    },
    en: {
      badge: "OUR MENU",
      title: "Delicious & 100% Halal Dishes",
      desc: "Explore our freshly prepared breakfast, lunch, hot beverages, and refreshing cold drinks.",
      currency: "ETB",
      orderBtn: "Add to Cart",
      categories: {
        all: "All Items (15)",
        breakfast: "Breakfast (4)",
        lunch: "Lunch (3)",
        hot_drinks: "Hot Drinks (4)",
        cold_drinks: "Cold Drinks (4)",
      },
    },
    ar: {
      badge: "قائمتنا",
      title: "أطباقنا الشهية والحلال 100%",
      desc: "استكشف وجبات الإفطار والغداء الطازجة والمشروبات الساخنة والباردة المنعشة.",
      currency: "بر",
      orderBtn: "أضف إلى السلة",
      categories: {
        all: "الكل (15)",
        breakfast: "إفطار (4)",
        lunch: "غداء (3)",
        hot_drinks: "مشروبات ساخنة (4)",
        cold_drinks: "مشروبات باردة (4)",
      },
    },
  };

  const t = content[lang];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#faf5ef] text-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#133c2c]/10 border border-[#133c2c]/20 text-[#133c2c] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#133c2c]">
            {t.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12">
          {(Object.keys(t.categories) as Array<keyof typeof t.categories>).map(
            (catKey) => (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                  activeCategory === catKey
                    ? "bg-[#133c2c] text-[#d4af37] border-2 border-[#d4af37] scale-105"
                    : "bg-white text-stone-700 border border-stone-200 hover:border-[#133c2c] hover:text-[#133c2c]"
                }`}
              >
                {t.categories[catKey]}
              </button>
            ),
          )}
        </div>

        {/* Food & Drinks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-stone-200/80 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#133c2c]/95 backdrop-blur-sm text-[#d4af37] font-extrabold px-3.5 py-1.5 rounded-xl text-sm shadow-lg border border-[#d4af37]/40">
                    {item.price} {t.currency}
                  </div>
                  {/* Optional Tag */}
                  {item.tag && (
                    <div className="absolute top-3 left-3 bg-[#d4af37] text-[#121212] font-bold px-3 py-1 rounded-full text-xs shadow-md flex items-center gap-1">
                      <UtensilsCrossed className="w-3 h-3" />
                      <span>{item.tag[lang]}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-extrabold text-[#133c2c] group-hover:text-[#c59b27] transition-colors">
                    {item.name[lang]}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={onAddToCart}
                  className="w-full bg-[#faf5ef] hover:bg-[#133c2c] text-[#133c2c] hover:text-[#d4af37] border border-[#133c2c]/20 font-bold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.orderBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
