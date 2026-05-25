import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="container">

      <header className="header">
        <h1>Er Er Ticaret</h1>
        <p>Klima & Kombi Teknik Servisi</p>
      </header>

      <section className="hero">
        <h2>Bursa Klima ve Kombi Servisi</h2>
        <p>COPA, TCL, HYUNDAI, AIWA, ARISTON, NIBE markalarında profesyonel hizmet.</p>
        <a href="tel:+905000000000" className="btn">Hemen Ara</a>
      </section>

      <section className="services">
        <h2>Hizmetler</h2>

        <div className="grid">
          <div className="card">Klima Montajı</div>
          <div className="card">Klima Bakımı</div>
          <div className="card">Kombi Servisi</div>
          <div className="card">Gaz Dolumu</div>
          <div className="card">Petek Temizliği</div>
          <div className="card">Isı Pompası</div>
        </div>
      </section>

      {/* AI BUTTON */}
      <div className="ai-box">
        <button onClick={() => setOpen(!open)} className="ai-btn">
          AI Destek
        </button>

        {open && (
          <div className="chat">
            <p>Merhaba 👋 Nasıl yardımcı olabilirim?</p>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sorunu yaz..."
            />
          </div>
        )}
      </div>

    </div>
  );
}
