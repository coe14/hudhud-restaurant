import { useState, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import contactBg from "../assets/contactimag.jpg";

interface ContactProps {
  lang?: "am" | "en" | "ar";
}

export const Contact = ({ lang = "am" }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const content = {
    am: {
      badge: "ያግኙን",
      title: "እኛን ያግኙን",
      desc: "ጥያቄ፣ አስተያየት ወይም የትዕዛዝ ማስተካከያ ካለዎት ከታች ባለው ፎርም ሊያገኙን ይችላሉ።",
      addis: "አዲስ አበባ: ቦሌ",
      dessie: "ዲሴ: ፒሳ",
      phoneText: "+251 914 08 10 65",
      emailText: "info@hudhudrestaurant.com",
      hoursText: "ከሰኞ - እሁድ: 8:00 ጠዋት - 4:00 ማታ",
      nameLabel: "ሙሉ ስም",
      emailLabel: "ኢሜይል አድራሻ",
      phoneLabel: "ስልክ ቁጥር",
      msgLabel: "መልእክትዎ",
      sendBtn: "ላክ (SUBMIT)",
      successMsg: "እናመሰግናለን! መልእክትዎ በተሳካ ሁኔታ ደርሷል።",
    },
    en: {
      badge: "GET IN TOUCH",
      title: "CONTACT US",
      desc: "Have questions, feedback, or want to make a reservation? Reach out to us.",
      addis: "Addis Ababa: Bole",
      dessie: "Dessie: Pissa",
      phoneText: "+251 914 08 10 65",
      emailText: "info@hudhudrestaurant.com",
      hoursText: "Mon - Sun: 8:00 AM - 10:00 PM",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      msgLabel: "Message",
      sendBtn: "SUBMIT",
      successMsg: "Thank you! Your message has been sent successfully.",
    },
    ar: {
      badge: "تواصل معنا",
      title: "اتصل بنا",
      desc: "هل لديك أسئلة أو ملاحظات؟ تواصل معنا.",
      addis: "أديس أبابا: بولي",
      dessie: "ديسي: بيسا",
      phoneText: "+251 914 08 10 65",
      emailText: "info@hudhudrestaurant.com",
      hoursText: "من الإثنين إلى الأحد: 8:00 صباحاً - 10:00 مساءً",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      msgLabel: "الرسالة",
      sendBtn: "إرسال",
      successMsg: "شكراً لك! تم إرسال رسالتك بنجاح.",
    },
  };

  const t = content[lang];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-[#faf5ef] text-[#121212]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/30 bg-[#f4ebe1]">
          {/* Left Column: Image */}
          <div className="relative min-h-[350px] lg:min-h-[600px] overflow-hidden">
            <img
              src={contactBg}
              alt="Hudhud Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
              <div className="text-white space-y-2">
                <span className="bg-[#d4af37] text-[#121212] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Hudhud Restaurant
                </span>
                <p className="text-lg font-semibold drop-shadow-md">
                  Luxury Halal Dining & Hospitality
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Info & Form */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#f8f3ed]">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#133c2c] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  {t.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#133c2c]">
                  {t.title}
                </h2>
                <p className="text-stone-600 text-sm">{t.desc}</p>
              </div>

              {/* Quick Contacts List */}
              <div className="space-y-3 pt-2 text-sm text-stone-700">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#133c2c]" />
                  <a
                    href="tel:+251914081065"
                    className="font-bold hover:text-[#d4af37] transition-colors"
                  >
                    {t.phoneText}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#133c2c]" />
                  <span>{t.emailText}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#133c2c] mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      {t.addis} | {t.dessie}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#133c2c]" />
                  <span>{t.hoursText}</span>
                </div>
              </div>

              {submitted ? (
                <div className="bg-[#133c2c] text-white p-6 rounded-2xl text-center space-y-2 my-6">
                  <CheckCircle2 className="w-10 h-10 text-[#d4af37] mx-auto" />
                  <p className="font-semibold text-sm">{t.successMsg}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 pt-4 border-t border-stone-300"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#133c2c] text-sm shadow-sm"
                        placeholder={t.nameLabel}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#133c2c] text-sm shadow-sm"
                        placeholder={t.emailLabel}
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#133c2c] text-sm shadow-sm"
                      placeholder={t.phoneLabel}
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#133c2c] text-sm shadow-sm resize-none"
                      placeholder={t.msgLabel}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#133c2c] hover:bg-[#0d2a1f] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm tracking-wider uppercase disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>{t.sendBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp Quick Link at bottom */}
            <div className="pt-6 mt-6 border-t border-stone-300 flex items-center justify-between text-xs text-stone-600">
              <span>Need instant help?</span>
              <a
                href="https://wa.me/251914081065"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133c2c] font-bold hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
