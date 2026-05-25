import { useState } from "react";

export default function App() {
  const [openAI, setOpenAI] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* TOP BAR */}
      <div className="bg-blue-700 text-white text-center py-2 text-sm font-semibold">
        Bursa Geneli Klima • Kombi • Isı Pompası Servisi | Aynı Gün Müdahale
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white/90 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-extrabold">Er Er Ticaret</h1>
            <p className="text-xs text-gray-500">Profesyonel Teknik Servis</p>
          </div>

          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#services">Hizmetler</a>
            <a href="#brands">Markalar</a>
            <a href="#about">Hakkımızda</a>
            <a href="#contact">İletişim</a>
          </nav>

          <a href="tel:+905000000000" className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold">
            Hemen Ara
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Bursa’da Güvenilir Klima & Kombi Servisi
            </h2>
            <p className="mt-6 text-lg opacity-90">
              COPA, TCL, HYUNDAI, AIWA, ARISTON ve NIBE markalarında profesyonel montaj, bakım ve teknik destek.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="tel:+905000000000" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold">
                Hemen Ara
              </a>
              <a href="#services" className="border border-white px-6 py-3 rounded-xl">
                Hizmetler
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1621905252472-e8f1a59d5b0b"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Hizmetlerimiz</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Klima Montajı",
            "Klima Bakımı",
            "Kombi Servisi",
            "Gaz Dolumu",
            "Petek Temizliği",
            "Isı Pompası"
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">Profesyonel ve garantili hizmet.</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="bg-white py-24">
        <h2 className="text-4xl font-bold text-center mb-10">Markalarımız</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["COPA","TCL","HYUNDAI","AIWA","ARISTON","NIBE"].map((b,i)=> (
            <div key={i} className="px-8 py-4 bg-blue-50 rounded-2xl font-bold text-blue-700 shadow">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Hakkımızda</h2>
          <p className="text-gray-600 leading-8">
            Er Er Ticaret, Bursa’da klima, kombi ve ısı pompası alanında profesyonel teknik servis hizmeti sunar.
            Hızlı müdahale, garantili işçilik ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold">İletişime Geç</h2>
        <p className="mt-4">Aynı gün servis için bizi arayın</p>
        <a href="tel:+905000000000" className="mt-6 inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-bold">
          Hemen Ara
        </a>
      </section>

      {/* AI BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpenAI(!openAI)}
          className="bg-purple-600 text-white px-5 py-4 rounded-full shadow-xl font-bold"
        >
          AI Destek
        </button>

        {openAI && (
          <div className="w-80 h-96 bg-white shadow-2xl rounded-3xl p-4 mt-3 border">
            <h3 className="font-bold mb-2">Er Er AI</h3>
            <div className="h-64 overflow-y-auto bg-gray-50 p-2 rounded-xl text-sm">
              Merhaba 👋 Size nasıl yardımcı olabilirim?
            </div>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="w-full border mt-2 p-2 rounded-xl"
              placeholder="Sorunu yaz..."
            />
          </div>
        )}
      </div>

    </div>
  );
}
