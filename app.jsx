import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>

      <h1>Er Er Ticaret</h1>

      <p>Bursa Klima & Kombi Servisi</p>

      <button onClick={() => setOpen(!open)}>
        AI Aç
      </button>

      {open && (
        <div style={{
          marginTop: 20,
          padding: 10,
          background: "#eee"
        }}>
          Merhaba 👋 Site çalışıyor
        </div>
      )}

    </div>
  );
}
