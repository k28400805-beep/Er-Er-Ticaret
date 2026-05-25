import { useState } from "react";
import "./style.css";

export default function App() {
  const [openAI, setOpenAI] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div className="app">

      <div className="topbar">
        Bursa Geneli Klima • Kombi • Isı Pompası Servisi
      </div>

      <header className="navbar">
        <h1>Er Er Ticaret</h1>
        <a href="tel:+905000000000" className="callbtn">Hemen Ara</a>
      </header>

      <section className="hero">
        <h2>Bursa Klima & Kombi Servisi</h2>
        <p>COPA, TCL, HYUNDAI, ARISTON</p>
      </section>

      <section className="section">
        <h2>Hizmetler</h2>

        <div className="grid">
          <div className="card">Klima Montajı</div>
          <div className="card">Klima Bakımı</div>
          <div className="card">Kombi Servisi</div>
        </div>
      </section>

      {/* AI */}
      <div className="ai">
        <button onClick={() => setOpenAI(!openAI)}>
          AI Destek
        </button>

        {openAI && (
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
