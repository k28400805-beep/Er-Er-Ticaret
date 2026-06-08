// AI Assistant Toggle Function
function toggleAI() {
  const chatWindow = document.getElementById('chat-window');
  if (!chatWindow) {
    console.error('Chat window element not found');
    return;
  }
  chatWindow.classList.toggle('hidden');
  
  // Focus input when chat opens
  if (!chatWindow.classList.contains('hidden')) {
    setTimeout(() => {
      const input = document.getElementById('user-input');
      if (input) input.focus();
    }, 100);
  }
}

// Send Message Function
function sendMessage() {
  const userInput = document.getElementById('user-input');
  
  if (!userInput) {
    console.error('User input element not found');
    return;
  }
  
  const message = userInput.value.trim();
  
  if (!message) return;
  
  // Add user message to chat
  addMessageToChat(message, 'user');
  
  // Clear input
  userInput.value = '';
  
  // Generate bot response with delay
  setTimeout(() => {
    const botResponse = generateBotResponse(message);
    addMessageToChat(botResponse, 'bot');
  }, 800);
}

// Add Message to Chat Display
function addMessageToChat(text, sender) {
  const chatMessages = document.getElementById('chat-messages');
  
  if (!chatMessages) {
    console.error('Chat messages container not found');
    return;
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const p = document.createElement('p');
  p.textContent = text;
  
  messageDiv.appendChild(p);
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom with delay
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 50);
}

// Generate Bot Response with AI Logic
function generateBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // Klima Montajı
  if (message.includes('klima') && (message.includes('montaj') || message.includes('monte'))) {
    return '✅ Klima montaj hizmetimiz profesyonel teknisyenlerimiz tarafından yapılır. Tüm markalara uyumlu ve garantili kurulum. Hemen arayarak teklif alabilirsiniz: 📞 0224 544 86 16';
  }
  
  // Klima Bakımı
  if (message.includes('klima') && (message.includes('bakım') || message.includes('temizlik') || message.includes('petek'))) {
    return '🧹 Klima bakım ve temizlik hizmetimiz düzenli olarak yapılması çok önerilir. Sezon başında ve mevsim sonu bakımı yapıyoruz. Detaylı fiyat için: 📞 0224 544 86 16';
  }
  
  // Kombi
  if (message.includes('kombi')) {
    return '🔥 Kombi kurulum, bakım ve onarım hizmetleri sağlıyoruz. Tüm markaların ürünlerine hizmet veriyoruz. Acil servis için 7/24 ulaşabilirsiniz: 📞 0224 544 86 16';
  }
  
  // Gaz Dolumu
  if (message.includes('gaz') || message.includes('dolum') || message.includes('basınç')) {
    return '💨 Gaz dolumu ve basınç kontrolü profesyonel ekibimizce yapılır. Orijinal gaz kullanıyoruz. Güvenilir hizmet için: 📞 0224 544 86 16';
  }
  
  // Isı Pompası
  if (message.includes('ısı') || message.includes('pompa')) {
    return '🌡️ Isı pompası kurulum, bakım ve tamiri konusunda uzmanız. NIBE ve COPA markalarında özel hizmet veriyoruz. Bilgi için: 📞 0224 544 86 16';
  }
  
  // Fiyat Sorgusu
  if (message.includes('fiyat') || message.includes('ücret') || message.includes('maliyet') || message.includes('ne kadar')) {
    return '💰 Fiyatlandırma, hizmet türü ve ürün markasına göre değişir. Kesin fiyat için lütfen arayınız ve detaylı bilgi verelim: 📞 0224 544 86 16';
  }
  
  // Markalar
  if (message.includes('marka') || message.includes('hangı ürün') || message.includes('ne markalara')) {
    return '🏢 Çalıştığımız markalar: COPA, TCL, HYUNDAI, AIWA, ARISTON, NIBE. Tüm markaların ürünlerine profesyonel servis veriyoruz!';
  }
  
  // Acil Servis
  if (message.includes('acil') || message.includes('7/24') || message.includes('gece')) {
    return '⚡ Evet! Acil servis hizmetimiz 7/24 mevcuttur. Acil durumlarda hemen müdahale ediyoruz. Acil çağrılar için: 📞 0224 544 86 16';
  }
  
  // Deneyim
  if (message.includes('deneyim') || message.includes('tecrübe') || message.includes('kaç yıl')) {
    return '✅ 15+ yılın profesyonel deneyimi vardır! Sertifikalı teknisyenlerimiz sizin için çalışır ve kaliteli hizmet sağlarız.';
  }
  
  // Adres/Konum
  if (message.includes('adres') || message.includes('nerede') || message.includes('konum') || message.includes('bursa')) {
    return '📍 Bursa ve çevresinde profesyonel servis veriyoruz. Ev ve işyerlerinize gidiyoruz. Detaylı bilgi: 📞 0224 544 86 16';
  }
  
  // Çalışma Saatleri
  if (message.includes('saatler') || (message.includes('saat') && message.includes('açık'))) {
    return '🕒 Normal Saatler: Pazartesi - Cumartesi 08:00 - 18:00 | Acil Servis: 24/7 | Pazar: Sadece acil işler';
  }
  
  // Garanti/Memnuniyet
  if (message.includes('garanti') || message.includes('memnun') || message.includes('güvence')) {
    return '✅ Müşteri memnuniyeti garantimiz vardır! Tüm işlerimizi profesyonel standartlarda ve garantili olarak gerçekleştiririz.';
  }
  
  // Selamlaşma
  if (message.includes('merhaba') || message.includes('selam') || message.includes('hey') || message.includes('hoş')) {
    return 'Merhaba! 👋 Er Er Ticaret'e hoş geldiniz. Klima, kombi veya ısı pompası hakkında sorularınız varsa çok yardımcı olabilirim. Ne sorabilirim?';
  }
  
  // Teşekkür
  if (message.includes('teşekkür') || message.includes('sağol') || message.includes('çok iyi')) {
    return '😊 Size hizmet vermekten mutluyuz! Başka sorunuz varsa sormaktan çekinmeyin. Hizmet almak için: 📞 0224 544 86 16';
  }

  // Default response
  return 'Sorunuz için teşekkürler! 🙏 Daha spesifik bilgi için lütfen 📞 0224 544 86 16 numarasını arayınız veya yukarıdaki hizmetlerimiz bölümünü inceleyiniz.';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded - AI Assistant ready');
  
  // Make sure chat window starts hidden
  const chatWindow = document.getElementById('chat-window');
  if (chatWindow) {
    chatWindow.classList.add('hidden');
  }
  
  // Prevent closing when clicking inside chat
  if (chatWindow) {
    chatWindow.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
