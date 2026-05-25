import { useState } from "react";
import "./style.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div className="app">

      <div className="topbar">
        Bursa Klima • Kombi • Isı Pompası Servisi
      </div>

      <header className="header">
        <h1>Er Er Ticaret</h1>
        <a className="btn" href="tel:+905000000000">Hemen Ara</a>
      </header>

      <section className="hero">
        <h2>Bursa Teknik Servis</h2>
        <p>Klima, kombi ve ısı pompası hizmetleri</p>
      </section>

      <section className="section">
        <h2>Hizmetler</h2>

        <div className="grid">
          <div className="card">Klima Montaj</div>
          <div className="card">Klima Bakım</div>
          <div className="card">Kombi Servis</div>
        </div>
      </section>

      <section className="contact">
        <h2>İletişim</h2>
        <a className="btn" href="tel:+905000000000">Ara</a>
      </section>

      <div className="ai">
        <button onClick={() => setOpen(!open)}>AI Destek</button>

        {open && (
          <div className="chat">
            <p>Merhaba 👋</p>

            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Sorunu yaz..."
            />
          </div>
        )}
      </div>

    </div>
  );
}
