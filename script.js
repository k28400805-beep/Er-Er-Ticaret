// AI Assistant Toggle
function toggleAI() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.classList.toggle('hidden');
  
  if (!chatWindow.classList.contains('hidden')) {
    document.getElementById('user-input').focus();
  }
}

// Send Message Function
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  
  if (!message) return;
  
  // Add user message to chat
  addMessageToChat(message, 'user');
  
  // Clear input
  userInput.value = '';
  
  // Generate bot response
  setTimeout(() => {
    const botResponse = generateBotResponse(message);
    addMessageToChat(botResponse, 'bot');
  }, 500);
}

// Add Message to Chat Display
function addMessageToChat(text, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const p = document.createElement('p');
  p.textContent = text;
  
  messageDiv.appendChild(p);
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate Bot Response
function generateBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // Service-related keywords
  if (message.includes('klima') && message.includes('montaj')) {
    return 'Klima montaj hizmetimiz profesyonel teknisyenlerimiz tarafından yapılır. Hemen arayarak teklif alabilirsiniz: 0224 544 86 16';
  }
  
  if (message.includes('klima') && (message.includes('bakım') || message.includes('temizlik'))) {
    return 'Klima bakım ve temizlik hizmetimiz düzenli olarak yapılması önerilir. Fiyat bilgisi için lütfen bizi arayınız.';
  }
  
  if (message.includes('kombi')) {
    return 'Kombi kurulum, bakım ve onarım hizmetleri sağlıyoruz. Acil servis için 7/24 ulaşabilirsiniz: 0224 544 86 16';
  }
  
  if (message.includes('gaz') || message.includes('donum')) {
    return 'Gaz dolumu ve basınç kontrolü profesyonel ekibimizce yapılır. Güvenilir hizmet için bize ulaşın.';
  }
  
  if (message.includes('ısı pompası')) {
    return 'Isı pompası kurulum, bakım ve tamiri konusunda uzmanız. NIBE ve COPA markalarında hizmet veriyoruz.';
  }
  
  if (message.includes('fiyat') || message.includes('ücret') || message.includes('maliyeti')) {
    return 'Fiyatlandırma, hizmet türü ve ürün markasına göre değişir. Detaylı bilgi için lütfen arayınız: 0224 544 86 16';
  }
  
  if (message.includes('marka') || message.includes('hangı')) {
    return 'COPA, TCL, HYUNDAI, AIWA, ARISTON, NIBE gibi ünlü markaların tüm ürünlerine hizmet veriyoruz.';
  }
  
  if (message.includes('acil') || message.includes('servis')) {
    return 'Evet! Acil servis hizmetimiz 7/24 mevcuttur. Acil durumlar için 0224 544 86 16 numarasını arayınız.';
  }
  
  if (message.includes('deneyim') || message.includes('tecrübe')) {
    return '15+ yılın profesyonel deneyimiyle güvenilir hizmet sağlıyoruz. Sertifikalı teknisyenlerimiz sizin için çalışır.';
  }
  
  if (message.includes('adres') || message.includes('nerede')) {
    return 'Bursa ve çevresinde profesyonel servis veriyoruz. Detaylı adres bilgisi için lütfen bizi arayınız: 0224 544 86 16';
  }
  
  if (message.includes('saatler') || message.includes('saat') && message.includes('açık')) {
    return 'Pazartesi - Cumartesi: 08:00 - 18:00 saatleri arasında hizmet veriyoruz. Acil durumlar için 7/24 ulaşabilirsiniz.';
  }
  
  if (message.includes('memnun') || message.includes('garantı')) {
    return 'Müşteri memnuniyeti garantimiz vardır. Tüm işlerimizi profesyonel standartlarda gerçekleştiririz.';
  }
  
  if (message.includes('merhaba') || message.includes('selam')) {
    return 'Merhaba! Er Er Ticaret'e hoş geldiniz. Klima, kombi veya ısı pompası hakkında sorularınız varsa yardımcı olmaktan mutluluk duyarız. 😊';
  }
  
  // Default response
  return 'Sorunuz için teşekkürler! Daha spesifik bilgi için lütfen 0224 544 86 16 numarasını arayınız veya hizmetlerimiz bölümünü ziyaret ediniz.';
}

// Close chat when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  // Prevent closing when clicking inside chat
  const chatWindow = document.getElementById('chat-window');
  if (chatWindow) {
    chatWindow.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
