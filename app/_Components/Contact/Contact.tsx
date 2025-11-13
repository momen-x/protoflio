"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import "./Contact.css";
import { TAddUser } from "@/app/validation/addUser";
import axios from "axios";
import { domin } from "@/app/lib/domin";
import GlobeCanvas from "../GlobeCanvas";
import { useLanguage } from "@/app/context/LanguageContext"; // Add this import

const Contact = () => {
  const [form, setForm] = useState<TAddUser>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage(); // Add this hook

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${domin}/api/momen_protoflio/users`, form);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("err becaue i dont know", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-background min-h-screen">
      <div className="contact-content py-16 px-4 md:py-24 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            {t("contact.keepInTouch")} {/* Translate */}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("contact.contact")} {/* Translate */}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            {t("contact.opinion")} {/* Translate */}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Globe Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-full min-h-[450px] lg:min-h-[550px] rounded-2xl overflow-hidden border border-gray-700/50 bg-blue-500/5"
          >
            <div className="w-full h-full">
              <GlobeCanvas />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.name")} * {/* Translate */}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-base"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.yourEmail")} * {/* Translate */}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-base"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.message")} * {/* Translate */}
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none transition-all duration-200 text-base min-h-[150px]"
                  />
                </div>

                {/* WhatsApp Section */}
                <div className="space-y-3 mt-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-green-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {t("contact.whatsapp")} {/* Translate */}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {t("contact.whatsappMessage")} {/* Translate */}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-900/50 rounded-lg p-3">
                      <code className="text-green-400 font-mono text-sm">
                        +972598817322
                      </code>
                      <button
                        onClick={() =>
                          window.open("https://wa.me/972598817322", "_blank")
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        {t("contact.whatsappSendMessage")} {/* Translate */}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("contact.sending")} {/* Translate */}
                    </div>
                  ) : (
                    t("contact.sendMessage") /* Translate */
                  )}
                </button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-white font-medium text-sm">
                  {t("contact.email")} {/* Translate */}
                </p>
                <p className="text-gray-400 text-xs">mmm.isam.99@gmail.com</p>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-white font-medium text-sm">
                  {t("contact.phone")} {/* Translate */}
                </p>
                <p className="text-gray-400 text-xs">+(972) 587-322</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
