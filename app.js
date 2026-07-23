// --- DATA MATERI PEMBELAJARAN (DATABASE) ---
// Data sekarang dimuat dari file eksternal (di dalam folder data/)
// data-loader.js akan menggabungkan semuanya ke dalam window.learningData dan window.globalDictionary
const learningData = window.AL_HIWAR_DATA.compile();
const globalDictionary = window.AL_HIWAR_DATA.compileDictionary();

// Konfigurasi Supabase
const supabaseUrl = 'https://cjwufugmuhzbvmbixjyx.supabase.co';
const supabaseKey = 'sb_publishable_L_Ds2zgmc_vK8Unkb-mB4A_cU6BDGEY';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

let appState = {
  activeTab: "dashboard",
  activeThemeId: "taaruf", // Default
  completedThemes: JSON.parse(localStorage.getItem("completedThemes")) || [],
  quizScores: JSON.parse(localStorage.getItem("quizScores")) || {},
  themeMode: localStorage.getItem("themeMode") || "light",
  currentFlashcardIndex: 0,
  currentQuizQuestionIndex: 0,
  quizAnswers: [], // stores correct/incorrect answers for active quiz
  currentQuizScore: 0,
  aiScenario: "general",
  aiChatHistory: JSON.parse(localStorage.getItem("aiChatHistory")) || [],
  aiModel: (localStorage.getItem("aiModel") && !localStorage.getItem("aiModel").includes("1.5")) ? localStorage.getItem("aiModel") : "gemini-3.5-flash-lite",
  aiModelList: JSON.parse(localStorage.getItem("aiModelList")) || [],
  favoriteWords: JSON.parse(localStorage.getItem("favoriteWords")) || [],
  dailyStreak: parseInt(localStorage.getItem("dailyStreak")) || 0,
  lastActiveDate: localStorage.getItem("lastActiveDate") || "",
  totalAiSentences: parseInt(localStorage.getItem("totalAiSentences")) || 0,
  isPremium: false,
  completedNahwu: JSON.parse(localStorage.getItem("completedNahwu")) || [],
  activeNahwuChapter: null
};

// Freemium Control: Theme 1 & 2 are free, rest are locked
const FREE_THEME_IDS = ["taaruf", "matham", "madrasah"];

// Premium Access Check
function checkPremiumAccess(themeId) {
  if (appState.isPremium) return true;
  if (FREE_THEME_IDS.includes(themeId)) return true;
  
  const modal = document.getElementById("premiumModal");
  modal.innerHTML = `
    <div class="glass-panel text-center max-w-sm w-full mx-4 relative">
      <div class="text-4xl text-amber-500 mb-4"><i class='bx bxs-crown'></i></div>
      <h3 class="text-xl font-bold mb-2">Fitur Premium</h3>
      <p class="text-gray-600 mb-6 text-sm">Gembok fitur ini hanya bisa dibuka oleh pengguna yang berlangganan Premium di Website Al-Hiwar.</p>
      
      <div class="space-y-3">
        <a href="https://member.alhiwar.click" target="_blank" class="block w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
          Buka Website & Berlangganan
        </a>
        <button onclick="closePremiumModal()" class="w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition-all">
          Nanti Saja
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add("active");
  return false;
}

function closePremiumModal() {
  document.getElementById("premiumModal").classList.remove("active");
}

// ==========================================
// SUPABASE AUTH & INIT
// ==========================================
async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  const loginOverlay = document.getElementById('login-overlay');
  
  if (!session) {
    // Tampilkan layar login
    if (loginOverlay) loginOverlay.style.display = 'flex';
  } else {
    // Sembunyikan layar login & cek status premium
    if (loginOverlay) loginOverlay.style.display = 'none';
    checkPremiumStatus(session.user.id);
  }
}

async function checkPremiumStatus(userId) {
  try {
    const { data, error } = await supabase
      .from('users_premium')
      .select('is_premium')
      .eq('id', userId)
      .single();
      
    if (data) {
      appState.isPremium = data.is_premium;
    }
  } catch (err) {
    console.error("Gagal mengambil data premium", err);
  }
}

// Logika Formulir Login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  const btn = document.getElementById('btn-login-submit');
  const txt = document.getElementById('txt-login-submit');
  const alertBox = document.getElementById('login-alert');
  
  btn.disabled = true;
  btn.style.opacity = '0.7';
  txt.innerHTML = "<i class='bx bx-loader-alt bx-spin' style='margin-right:8px;'></i> Memproses...";
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
  if (error) {
    alertBox.innerHTML = "Email atau password salah. Pastikan Anda sudah mendaftar di website.";
    alertBox.style.display = 'block';
    btn.disabled = false;
    btn.style.opacity = '1';
    txt.innerHTML = "Masuk Sekarang";
  } else {
    alertBox.style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none';
    showToast("Login Berhasil!");
    checkPremiumStatus(data.user.id);
  }
});

// --- DOM ELEMENTS ---
const elements = {
  mainContent: document.getElementById("mainContent"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  themeToggleIcon: document.getElementById("themeToggleIcon"),
  progressPercent: document.getElementById("progressPercent"),
  progressBarFill: document.getElementById("progressBarFill"),
  navbar: document.getElementById("appNavbar"),
  toastContainer: document.getElementById("toastContainer")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  calculateStreak();
  initTheme();
  setupEventListeners();
  updateProgressWidget();
  renderActiveTab();
  initAuth();
});

// --- THEME ENGINE ---
function initTheme() {
  if (appState.themeMode === "dark") {
    document.body.classList.add("dark-theme");
    elements.themeToggleIcon.className = "bx bx-sun";
  } else {
    document.body.classList.remove("dark-theme");
    elements.themeToggleIcon.className = "bx bx-moon";
  }
}

function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    elements.themeToggleIcon.className = "bx bx-moon";
    appState.themeMode = "light";
  } else {
    document.body.classList.add("dark-theme");
    elements.themeToggleIcon.className = "bx bx-sun";
    appState.themeMode = "dark";
  }
  localStorage.setItem("themeMode", appState.themeMode);
  showToast(`Mode ${appState.themeMode === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`, "info");
}

// --- AUDIO UTILITIES (TTS) ---
let currentAudio = null;

async function speakArabic(text, onStart = null, onEnd = null) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  try {
    showToast("Memuat suara...", "info"); // Added Loading Toast
    if (onStart) onStart(); // Memicu animasi UI
    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      console.warn("ElevenLabs TTS gagal (mungkin kuota habis), kembali menggunakan suara sistem...");
      fallbackSpeakArabic(text, null, onEnd); // onStart sudah dipanggil
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    currentAudio = new Audio(url);
    
    currentAudio.onended = () => {
      if (onEnd) onEnd();
      URL.revokeObjectURL(url);
    };
    currentAudio.onerror = () => {
      console.warn("Gagal memutar audio MP3, kembali menggunakan suara sistem...");
      fallbackSpeakArabic(text, null, onEnd);
    };
    
    currentAudio.play().catch(err => {
      console.warn("Pemutaran otomatis diblokir browser:", err);
      fallbackSpeakArabic(text, null, onEnd);
    });

  } catch (err) {
    console.error("Koneksi ke backend TTS gagal:", err);
    fallbackSpeakArabic(text, null, onEnd);
  }
}

function fallbackSpeakArabic(text, onStart = null, onEnd = null) {
  if ("speechSynthesis" in window) {
    // Batal suara yang sedang berjalan
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.80; // Diperlambat sedikit agar terdengar lebih luwes (seperti Ustadz)
    
    const voices = window.speechSynthesis.getVoices();
    
    // 1. Prioritaskan suara laki-laki Arab yang dikenal (Mac/iOS: Maged, Tarik | Windows: Naayf)
    let arVoice = voices.find(voice => 
      (voice.lang.startsWith("ar") || voice.lang.startsWith("AR")) && 
      (voice.name.includes("Maged") || voice.name.includes("Tarik") || voice.name.includes("Naayf") || voice.name.toLowerCase().includes("male"))
    );

    // 2. Jika tidak ada suara laki-laki, ambil suara Arab apa saja (biasanya Google TTS Female di Android)
    if (!arVoice) {
      arVoice = voices.find(voice => voice.lang.startsWith("ar") || voice.lang.startsWith("AR"));
    }

    if (arVoice) {
      utterance.voice = arVoice;
      
      // Jika suara yang terpilih BUKAN suara laki-laki asli (kemungkinan suara wanita), 
      // kita turunkan nadanya (pitch) agar terdengar lebih berat seperti laki-laki.
      if (!arVoice.name.match(/Maged|Tarik|Naayf|male/i)) {
        utterance.pitch = 0.65; // Nada berat (palsu laki-laki)
      } else {
        utterance.pitch = 0.95; // Nada asli laki-laki
      }
    } else if (voices.length > 0) {
      console.warn("Suara Bahasa Arab (ar-SA) tidak terdeteksi.");
      showToast("Suara Arab tidak ditemukan di sistem. Mencoba default browser.", "warning");
      utterance.pitch = 0.8;
    } else {
      console.warn("Daftar suara browser kosong. Mencoba memutar...");
      utterance.pitch = 0.8;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      if (onEnd) onEnd();
      console.error("Kesalahan SpeechSynthesis:", event);
      if (event.error === "language-unavailable") {
        showToast("Gagal: Paket suara Bahasa Arab tidak terpasang di sistem operasi Anda.", "error");
      } else if (event.error === "network") {
        showToast("Gagal: Membutuhkan koneksi internet untuk mengunduh suara online browser.", "error");
      } else if (event.error === "not-allowed") {
        showToast("Gagal: Interaksi pengguna diperlukan sebelum memutar suara.", "error");
      } else {
        showToast(`Kesalahan suara: ${event.error}`, "error");
      }
    };

    window.speechSynthesis.speak(utterance);
  } else {
    showToast("Browser Anda tidak mendukung Sintesis Suara.", "error");
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Theme toggle
  elements.themeToggleBtn.addEventListener("click", toggleTheme);

  // Tab navigation
  elements.navbar.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;

    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");

    appState.activeTab = btn.dataset.tab;
    renderActiveTab();
  });

  // Necessary for TTS voices loading asynchronously in Chrome/Opera
  if ("speechSynthesis" in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Just warming up voices cache
      window.speechSynthesis.getVoices();
    };
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = "bx-info-circle";
  if (type === "success") icon = "bx-check-circle";
  if (type === "error") icon = "bx-x-circle";

  toast.innerHTML = `<i class="bx ${icon}"></i><span>${message}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideUp 0.3s ease-in reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- PROGRESS WIDGET ---
function updateProgressWidget() {
  const totalThemes = learningData.themes.length;
  const completedCount = appState.completedThemes.length;
  const percentage = totalThemes > 0 ? Math.round((completedCount / totalThemes) * 100) : 0;

  elements.progressPercent.textContent = `${percentage}%`;
  elements.progressBarFill.style.width = `${percentage}%`;
}

function completeTheme(themeId) {
  if (!appState.completedThemes.includes(themeId)) {
    appState.completedThemes.push(themeId);
    localStorage.setItem("completedThemes", JSON.stringify(appState.completedThemes));
    updateProgressWidget();
    showToast("Hebat! Anda menyelesaikan tema ini 🎉", "success");

    // Refresh theme list in UI if on Learn Tab
    if (appState.activeTab === "learn") {
      renderLearnView();
    }
  }
}

// --- TAB ROUTER / RENDERING ---
function renderActiveTab() {
  elements.mainContent.innerHTML = "";

  switch (appState.activeTab) {
    case "dashboard":
      renderDashboardView();
      break;
    case "learn":
      renderLearnView();
      break;
    case "flashcard":
      renderFlashcardView();
      break;
    case "quiz":
      renderQuizView();
      break;
    case "dictionary":
      renderDictionaryView();
      break;
    case "nahwu":
      renderNahwuView();
      break;
    case "ai":
      renderAiView();
      break;
    default:
      elements.mainContent.innerHTML = `<p>Tab tidak ditemukan.</p>`;
  }
}

// --- 0. DASHBOARD VIEW ---
function renderDashboardView() {
  elements.mainContent.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "dashboard-layout animate-fade-in";

  const totalThemes = learningData.themes.length;
  const completedThemesCount = appState.completedThemes.length;
  const progressPercent = totalThemes > 0 ? Math.round((completedThemesCount / totalThemes) * 100) : 0;
  const totalStarred = appState.favoriteWords.length;
  const totalChats = appState.totalAiSentences;

  // Dashboard Header / Welcome
  const headerCard = document.createElement("div");
  headerCard.className = "quiz-card";
  headerCard.style.padding = "25px";
  headerCard.style.marginBottom = "20px";
  headerCard.style.background = "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.08))";
  headerCard.innerHTML = `
    <h2 style="font-size: 22px; margin-bottom: 5px; font-weight: 800; color: var(--text-main);">Marhaban di Al-Hiwar! 👋</h2>
    <p style="font-size: 14px; color: var(--text-muted); line-height: 1.5; max-width: 600px;">
      Aplikasi interaktif belajar bahasa Arab dengan skenario sehari-hari. Pantau kemajuan belajar Anda, uji pemahaman lewat kuis, dan tingkatkan keterampilan makhraj lewat obrolan asisten AI!
    </p>
  `;
  layout.appendChild(headerCard);

  // Grid Stats
  const statsGrid = document.createElement("div");
  statsGrid.className = "dashboard-grid";
  statsGrid.innerHTML = `
    <!-- Streak -->
    <div class="stat-card">
      <div class="stat-icon streak">
        <i class="bx bxs-flame"></i>
      </div>
      <div class="stat-info">
        <span class="stat-val">${appState.dailyStreak} Hari</span>
        <span class="stat-label">Streak Belajar</span>
      </div>
    </div>
    
    <!-- Progress -->
    <div class="stat-card">
      <div class="stat-icon">
        <i class="bx bx-check-double"></i>
      </div>
      <div class="stat-info">
        <span class="stat-val">${progressPercent}%</span>
        <span class="stat-label">Tema Selesai</span>
      </div>
    </div>
    
    <!-- Bookmarks -->
    <div class="stat-card">
      <div class="stat-icon vocab">
        <i class="bx bxs-star"></i>
      </div>
      <div class="stat-info">
        <span class="stat-val">${totalStarred} Kata</span>
        <span class="stat-label">Favorit Tersimpan</span>
      </div>
    </div>
    
    <!-- AI Practice -->
    <div class="stat-card">
      <div class="stat-icon chat">
        <i class="bx bxs-bot"></i>
      </div>
      <div class="stat-info">
        <span class="stat-val">${totalChats} Chat</span>
        <span class="stat-label">Latihan AI</span>
      </div>
    </div>
  `;
  layout.appendChild(statsGrid);

  // Two panels row: Theme Progress & Quiz Scores
  const panelsRow = document.createElement("div");
  panelsRow.className = "dashboard-row";

  // Left: Theme Completion List
  const themesPanel = document.createElement("div");
  themesPanel.className = "dashboard-panel";
  themesPanel.innerHTML = `
    <h3 class="panel-title"><i class="bx bx-book-open" style="color: var(--primary-color);"></i>Status Pembelajaran Tema</h3>
    <div class="quiz-score-list" id="dashboardThemeList"></div>
  `;

  // Right: Quiz Summary
  const quizPanel = document.createElement("div");
  quizPanel.className = "dashboard-panel";
  quizPanel.innerHTML = `
    <h3 class="panel-title"><i class="bx bx-trophy" style="color: #f59e0b;"></i>Ringkasan Skor Kuis Terbaik</h3>
    <div class="quiz-score-list" id="dashboardQuizList"></div>
  `;

  panelsRow.appendChild(themesPanel);
  panelsRow.appendChild(quizPanel);
  layout.appendChild(panelsRow);

  elements.mainContent.appendChild(layout);

  // Populate Dashboard lists
  const themeListContainer = layout.querySelector("#dashboardThemeList");
  const quizListContainer = layout.querySelector("#dashboardQuizList");

  learningData.themes.forEach(theme => {
    // Theme Card
    const isCompleted = appState.completedThemes.includes(theme.id);
    const themeItem = document.createElement("div");
    themeItem.className = "quiz-score-item";
    themeItem.innerHTML = `
      <div class="quiz-score-theme">
        <span class="qs-name">${theme.name}</span>
        <span class="qs-arabic">${theme.arabic}</span>
      </div>
      <span class="qs-score" style="color: ${isCompleted ? 'var(--success)' : 'var(--text-muted)'};">
        <i class="bx ${isCompleted ? 'bx-check-circle' : 'bx-circle'}"></i>
        ${isCompleted ? 'Selesai' : 'Belum'}
      </span>
    `;
    themeListContainer.appendChild(themeItem);

    // Quiz Card
    const highScore = appState.quizScores[theme.id] || 0;
    const maxScore = theme.quiz.length * 100;
    const scoreItem = document.createElement("div");
    scoreItem.className = "quiz-score-item";
    scoreItem.innerHTML = `
      <div class="quiz-score-theme">
        <span class="qs-name">${theme.name}</span>
        <span class="qs-arabic">${theme.arabic}</span>
      </div>
      <span class="qs-score" style="color: ${highScore > 0 ? (highScore === maxScore ? 'var(--success)' : 'var(--primary-color)') : 'var(--text-muted)'};">
        ${highScore} / ${maxScore}
      </span>
    `;
    quizListContainer.appendChild(scoreItem);
  });
}

// --- 1. LEARN VIEW (PERCAKAPAN) ---
function renderLearnView() {
  elements.mainContent.innerHTML = "";
  const activeTheme = learningData.themes.find(t => t.id === appState.activeThemeId) || learningData.themes[0];

  const layout = document.createElement("div");
  layout.className = "learn-layout animate-fade-in";

  // Left Themes Panel
  const themesPanel = document.createElement("div");
  themesPanel.className = "themes-panel";
  themesPanel.innerHTML = `<h3 class="themes-title">Daftar Tema</h3>`;

  const themeList = document.createElement("div");
  themeList.className = "theme-list";

  learningData.themes.forEach(theme => {
    const isCompleted = appState.completedThemes.includes(theme.id);
    const isActive = theme.id === activeTheme.id;
    const hasAccess = checkPremiumAccess(theme.id);

    const card = document.createElement("div");
    card.className = `theme-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${!hasAccess ? 'locked' : ''}`;

    let content = `
      <div class="theme-icon">
        <i class="bx ${theme.icon}"></i>
      </div>
      <div class="theme-info">
        <span class="theme-name">${theme.name}</span>
        <span class="theme-arabic">${theme.arabic}</span>
      </div>
    `;

    if (!hasAccess) {
      content += `
        <div style="margin-left: auto; color: var(--accent-color);">
          <i class="bx bxs-lock-alt" style="font-size: 18px;"></i>
        </div>
      `;
    }

    card.innerHTML = content;

    card.addEventListener("click", () => {
      if (!hasAccess) {
        showPremiumPaywall();
        return;
      }
      appState.activeThemeId = theme.id;
      renderLearnView();
    });

    themeList.appendChild(card);
  });
  themesPanel.appendChild(themeList);

  // Right Dialogue Panel
  const dialoguePanel = document.createElement("div");
  dialoguePanel.className = "dialogue-panel";

  const isCompleted = appState.completedThemes.includes(activeTheme.id);

  dialoguePanel.innerHTML = `
    <div class="dialogue-header">
      <div class="dialogue-title-area">
        <h2>${activeTheme.name} <span class="arabic-logo">${activeTheme.arabic}</span></h2>
        <p>Pelajari dialog sehari-hari di bawah ini</p>
      </div>
      <div class="dialogue-actions">
        <button id="markCompleteBtn" class="btn ${isCompleted ? 'btn-primary' : ''}" id="btnMarkComplete">
          <i class="bx ${isCompleted ? 'bx-check-double' : 'bx-check'}"></i>
          <span>${isCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
        </button>
      </div>
    </div>
    <div class="dialogue-body" id="dialogueBody"></div>
    <div class="dialogue-footer">
      <span class="text-secondary" style="font-size: 12px; font-weight: 500;">Tip: Ketuk tombol speaker untuk mendengar pelafalan.</span>
    </div>
  `;

  layout.appendChild(themesPanel);
  layout.appendChild(dialoguePanel);
  elements.mainContent.appendChild(layout);

  // Fill Dialogue Body bubbles
  const dialogueBody = layout.querySelector("#dialogueBody");
  activeTheme.dialogue.forEach((line, idx) => {
    const bubbleRow = document.createElement("div");
    bubbleRow.className = `bubble-row ${line.side}`;

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.innerHTML = `
      <span class="bubble-character">${line.char}</span>
      <p class="arabic-text" id="bubble-ar-${idx}">${line.ar}</p>
      <p class="latin-text">${line.latin}</p>
      <p class="translation-text">${line.id}</p>
      <button class="speak-btn" aria-label="Putar Suara" id="speak-btn-${activeTheme.id}-${idx}">
        <i class="bx bx-volume-full"></i>
      </button>
    `;

    // TTS click handler
    bubble.querySelector(".speak-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      speakArabic(line.ar);
    });

    bubbleRow.appendChild(bubble);
    dialogueBody.appendChild(bubbleRow);
  });

  // Mark Complete action
  layout.querySelector("#markCompleteBtn").addEventListener("click", () => {
    completeTheme(activeTheme.id);
  });
}

// --- 2. FLASHCARD VIEW ---
function renderFlashcardView() {
  elements.mainContent.innerHTML = "";
  const activeTheme = learningData.themes.find(t => t.id === appState.activeThemeId) || learningData.themes[0];
  const vocabList = activeTheme.vocabulary;

  if (appState.currentFlashcardIndex >= vocabList.length) {
    appState.currentFlashcardIndex = 0;
  }

  const layout = document.createElement("div");
  layout.className = "flashcard-layout animate-fade-in";

  // Theme Selector Dropdown
  const selectorContainer = document.createElement("div");
  selectorContainer.className = "flashcard-selector";
  selectorContainer.innerHTML = `
    <label class="progress-label" for="themeSelect">Pilih Tema Belajar:</label>
    <select class="select-dropdown" id="themeSelect">
      ${learningData.themes.map(t => `<option value="${t.id}" ${t.id === activeTheme.id ? 'selected' : ''}>${t.name}</option>`).join('')}
    </select>
  `;

  layout.appendChild(selectorContainer);

  // The Flip Card
  const cardContainer = document.createElement("div");
  cardContainer.className = "flashcard-container";
  cardContainer.id = "flashcardContainer";

  const currentVocab = vocabList[appState.currentFlashcardIndex];
  const isStarred = appState.favoriteWords.includes(currentVocab.ar);

  cardContainer.innerHTML = `
    <div class="flashcard" id="interactiveCard">
      <div class="card-face card-front">
        <span class="card-hint">Bahasa Arab (Ketuk untuk membalik)</span>
        <span class="arabic-text">${currentVocab.ar}</span>
        <div style="display: flex; gap: 15px; margin-top: 15px; z-index: 10;">
          <button class="btn btn-secondary" style="border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;" id="cardSpeakBtn" aria-label="Putar Suara">
            <i class="bx bx-volume-full" style="font-size: 20px;"></i>
          </button>
          <button class="btn btn-secondary star-btn ${isStarred ? 'active' : ''}" style="border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;" id="cardStarBtn" aria-label="Bookmark Kosakata">
            <i class="bx ${isStarred ? 'bxs-star' : 'bx-star'}" style="font-size: 20px;"></i>
          </button>
        </div>
      </div>
      <div class="card-face card-back">
        <span class="card-hint">Arti & Pelafalan</span>
        <span class="translation-text">${currentVocab.id}</span>
        <span class="latin-text">"${currentVocab.latin}"</span>
      </div>
    </div>
  `;

  layout.appendChild(cardContainer);

  // Card Controls (Prev, Status, Next)
  const controls = document.createElement("div");
  controls.className = "card-controls";
  controls.innerHTML = `
    <button class="card-btn" id="prevCardBtn" aria-label="Sebelumnya" ${appState.currentFlashcardIndex === 0 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
      <i class="bx bx-chevron-left"></i>
    </button>
    <span class="card-indicator">${appState.currentFlashcardIndex + 1} / ${vocabList.length}</span>
    <button class="card-btn" id="nextCardBtn" aria-label="Berikutnya" ${appState.currentFlashcardIndex === vocabList.length - 1 ? 'disabled style="opacity: 0.5; cursor: default;"' : ''}>
      <i class="bx bx-chevron-right"></i>
    </button>
  `;

  layout.appendChild(controls);
  elements.mainContent.appendChild(layout);

  // Handlers
  const themeSelect = layout.querySelector("#themeSelect");
  themeSelect.addEventListener("change", (e) => {
    const selectedThemeId = e.target.value;
    if (!checkPremiumAccess(selectedThemeId)) {
      showPremiumPaywall();
      e.target.value = appState.activeThemeId; // revert
      return;
    }
    appState.activeThemeId = selectedThemeId;
    appState.currentFlashcardIndex = 0;
    renderFlashcardView();
  });

  const interactiveCard = layout.querySelector("#interactiveCard");
  interactiveCard.addEventListener("click", () => {
    interactiveCard.classList.toggle("flipped");
  });

  const cardSpeakBtn = layout.querySelector("#cardSpeakBtn");
  cardSpeakBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent flipping the card when clicking speaker
    speakArabic(currentVocab.ar);
  });

  const cardStarBtn = layout.querySelector("#cardStarBtn");
  cardStarBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent flipping the card when clicking star
    toggleFavoriteWord(currentVocab.ar);
    renderFlashcardView();
  });

  const prevBtn = layout.querySelector("#prevCardBtn");
  prevBtn.addEventListener("click", () => {
    if (appState.currentFlashcardIndex > 0) {
      appState.currentFlashcardIndex--;
      renderFlashcardView();
    }
  });

  const nextBtn = layout.querySelector("#nextCardBtn");
  nextBtn.addEventListener("click", () => {
    if (appState.currentFlashcardIndex < vocabList.length - 1) {
      appState.currentFlashcardIndex++;
      renderFlashcardView();
    }
  });
}

// --- 3. KUIS INTERAKTIF ---
function renderQuizView() {
  elements.mainContent.innerHTML = "";
  const activeTheme = learningData.themes.find(t => t.id === appState.activeThemeId) || learningData.themes[0];
  const questions = activeTheme.quiz;

  const layout = document.createElement("div");
  layout.className = "quiz-layout animate-fade-in";

  // Check if quiz has ended
  if (appState.currentQuizQuestionIndex >= questions.length) {
    renderQuizResults(layout, activeTheme);
    return;
  }

  const currentQuestion = questions[appState.currentQuizQuestionIndex];

  // Header Info
  const progressPanel = document.createElement("div");
  progressPanel.className = "quiz-progress-panel";
  progressPanel.innerHTML = `
    <span class="progress-label">Tema: <strong>${activeTheme.name}</strong></span>
    <span class="card-indicator">Pertanyaan ${appState.currentQuizQuestionIndex + 1} / ${questions.length}</span>
  `;
  layout.appendChild(progressPanel);

  // Question Card
  const questionCard = document.createElement("div");
  questionCard.className = "quiz-card";

  let arabicSection = "";
  if (currentQuestion.arabic) {
    arabicSection = `
      <span class="arabic-text">${currentQuestion.arabic}</span>
      <button class="btn btn-secondary" style="margin: 0 auto 10px; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;" id="quizSpeakBtn" aria-label="Putar Suara">
        <i class="bx bx-volume-full"></i>
      </button>
    `;
  }

  questionCard.innerHTML = `
    <span class="quiz-question-lbl">Kuis Pilihan Ganda</span>
    <p class="quiz-question">${currentQuestion.question}</p>
    ${arabicSection}
    <div class="quiz-options" id="quizOptions">
      ${currentQuestion.options.map((opt, idx) => `
        <button class="quiz-option" data-idx="${idx}" id="quiz-opt-btn-${idx}">
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
  `;

  layout.appendChild(questionCard);
  elements.mainContent.appendChild(layout);

  // Speaker Event
  if (currentQuestion.arabic) {
    layout.querySelector("#quizSpeakBtn").addEventListener("click", () => {
      speakArabic(currentQuestion.arabic);
    });
  }

  // Handle Option Click
  const optionsContainer = layout.querySelector("#quizOptions");
  optionsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (!btn || btn.classList.contains("correct") || btn.classList.contains("incorrect")) return;

    // Disable all options
    const allBtns = optionsContainer.querySelectorAll(".quiz-option");

    const selectedIdx = parseInt(btn.dataset.idx);
    const correctIdx = currentQuestion.correct;

    if (selectedIdx === correctIdx) {
      btn.classList.add("correct");
      appState.currentQuizScore += 100; // 100 points per correct answer
      playSynthesizedSound("correct");
      showToast("Benar! Jawaban Anda tepat.", "success");
    } else {
      btn.classList.add("incorrect");
      allBtns[correctIdx].classList.add("correct");
      playSynthesizedSound("incorrect");
      showToast("Salah, coba perhatikan lagi.", "error");
    }

    // Proceed to next question after delay
    setTimeout(() => {
      appState.currentQuizQuestionIndex++;
      renderQuizView();
    }, 1800);
  });
}

function renderQuizResults(container, theme) {
  const totalQuestions = theme.quiz.length;
  const maxScore = totalQuestions * 100;
  const scorePercent = Math.round((appState.currentQuizScore / maxScore) * 100);

  // Save High Score in Project State
  const prevHighScore = appState.quizScores[theme.id] || 0;
  if (appState.currentQuizScore > prevHighScore) {
    appState.quizScores[theme.id] = appState.currentQuizScore;
    localStorage.setItem("quizScores", JSON.stringify(appState.quizScores));
  }

  // If score is 100%, automatically mark theme as complete
  if (scorePercent === 100) {
    completeTheme(theme.id);
    triggerConfetti();
    playSynthesizedSound("fanfare");
  } else if (scorePercent >= 80) {
    playSynthesizedSound("fanfare");
  }

  const resultsCard = document.createElement("div");
  resultsCard.className = "quiz-card quiz-results";

  let title = "Tetap Semangat!";
  let icon = "bx-sad";
  if (scorePercent >= 80) {
    title = "Sangat Bagus!";
    icon = "bx-medal";
  } else if (scorePercent >= 50) {
    title = "Cukup Baik!";
    icon = "bx-smile";
  }

  resultsCard.innerHTML = `
    <i class="bx ${icon} results-icon"></i>
    <h2>${title}</h2>
    <p>Anda telah menyelesaikan kuis untuk tema <strong>${theme.name}</strong></p>
    <div class="results-score">${appState.currentQuizScore}<span> / ${maxScore}</span></div>
    <p class="text-secondary" style="font-size: 13px;">Skor terbaik Anda: ${Math.max(prevHighScore, appState.currentQuizScore)}</p>
    <button class="btn btn-primary" id="restartQuizBtn" style="margin-top: 10px;">
      <i class="bx bx-refresh"></i>
      <span>Ulangi Kuis</span>
    </button>
  `;

  container.appendChild(resultsCard);
  elements.mainContent.appendChild(container);

  resultsCard.querySelector("#restartQuizBtn").addEventListener("click", () => {
    appState.currentQuizQuestionIndex = 0;
    appState.currentQuizScore = 0;
    renderQuizView();
  });
}

// --- 4. KAMUS SAKU (DICTIONARY) ---
function renderDictionaryView() {
  elements.mainContent.innerHTML = "";
  const layout = document.createElement("div");
  layout.className = "dictionary-layout animate-fade-in";

  let currentQuery = "";
  let onlyFavorites = false;

  // Search bar
  const searchContainer = document.createElement("div");
  searchContainer.className = "search-bar-container";
  searchContainer.innerHTML = `
    <i class="bx bx-search search-icon"></i>
    <input type="text" class="dictionary-search-input" id="dictionarySearch" placeholder="Cari kata Arab, transliterasi, atau arti Indonesia..." aria-label="Cari kosakata">
  `;
  layout.appendChild(searchContainer);

  // Filter bar
  const filterBar = document.createElement("div");
  filterBar.className = "filter-bar";
  filterBar.innerHTML = `
    <button class="btn btn-primary" id="allWordsBtn" style="padding: 6px 12px; font-size: 13px; border-radius: 8px;">Semua</button>
    <button class="btn btn-secondary" id="favWordsBtn" style="padding: 6px 12px; font-size: 13px; border-radius: 8px; display: flex; align-items: center; gap: 4px;">
      <i class="bx bxs-star" style="color: #f59e0b;"></i>
      <span>Favorit (${appState.favoriteWords.length})</span>
    </button>
  `;
  layout.appendChild(filterBar);

  // List container
  const listContainer = document.createElement("div");
  listContainer.className = "dictionary-list";
  listContainer.id = "dictionaryList";

  layout.appendChild(listContainer);
  elements.mainContent.appendChild(layout);

  // Initial render
  filterAndRenderDictionary("", false);

  // Event listeners
  const searchInput = layout.querySelector("#dictionarySearch");
  const allWordsBtn = layout.querySelector("#allWordsBtn");
  const favWordsBtn = layout.querySelector("#favWordsBtn");

  searchInput.addEventListener("input", (e) => {
    currentQuery = e.target.value.toLowerCase().trim();
    filterAndRenderDictionary(currentQuery, onlyFavorites);
  });

  allWordsBtn.addEventListener("click", () => {
    onlyFavorites = false;
    allWordsBtn.className = "btn btn-primary";
    favWordsBtn.className = "btn btn-secondary";
    filterAndRenderDictionary(currentQuery, onlyFavorites);
  });

  favWordsBtn.addEventListener("click", () => {
    onlyFavorites = true;
    allWordsBtn.className = "btn btn-secondary";
    favWordsBtn.className = "btn btn-primary";
    filterAndRenderDictionary(currentQuery, onlyFavorites);
  });
}

function filterAndRenderDictionary(query, onlyFavorites = false) {
  const listContainer = document.getElementById("dictionaryList");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  let filtered = globalDictionary.filter(item => {
    return item.ar.includes(query) ||
      item.latin.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
  });

  if (onlyFavorites) {
    filtered = filtered.filter(item => appState.favoriteWords.includes(item.ar));
  }

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="no-results">
        <i class="bx bx-search-alt"></i>
        <h3>Kosakata tidak ditemukan</h3>
        <p>${onlyFavorites ? 'Daftar favorit Anda kosong.' : 'Coba gunakan kata kunci lainnya.'}</p>
      </div>
    `;
    return;
  }

  let displayList = filtered;
  const isLimited = !appState.isPremium && filtered.length > 50;
  
  if (isLimited) {
    displayList = filtered.slice(0, 50);
  }

  displayList.forEach((item, idx) => {
    const isStarred = appState.favoriteWords.includes(item.ar);
    const card = document.createElement("div");
    card.className = "dictionary-card";
    card.id = `dict-card-${idx}`;
    card.innerHTML = `
      <div class="dict-header">
        <span class="dict-arabic">${item.ar}</span>
        <div style="display: flex; gap: 8px;">
          <button class="dict-speaker" id="dict-speak-btn-${idx}" aria-label="Putar Suara" style="border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
            <i class="bx bx-volume-full"></i>
          </button>
          <button class="star-btn ${isStarred ? 'active' : ''}" id="dict-star-btn-${idx}" aria-label="Bookmark Kosakata" style="padding: 4px;">
            <i class="bx ${isStarred ? 'bxs-star' : 'bx-star'}"></i>
          </button>
        </div>
      </div>
      <span class="dict-latin">"${item.latin}"</span>
      <span class="dict-indo">${item.id}</span>
      <span class="dict-category">${item.category}</span>
    `;

    // Play voice
    card.querySelector(".dict-speaker").addEventListener("click", () => {
      speakArabic(item.ar);
    });

    // Star toggle
    card.querySelector(".star-btn").addEventListener("click", () => {
      toggleFavoriteWord(item.ar);
      filterAndRenderDictionary(query, onlyFavorites);

      const favWordsBtn = document.getElementById("favWordsBtn");
      if (favWordsBtn) {
        favWordsBtn.querySelector("span").innerText = `Favorit (${appState.favoriteWords.length})`;
      }
    });

    listContainer.appendChild(card);
  });

  if (isLimited) {
    const paywallCard = document.createElement("div");
    paywallCard.style.padding = "20px";
    paywallCard.style.textAlign = "center";
    paywallCard.style.background = "var(--card-bg)";
    paywallCard.style.borderRadius = "15px";
    paywallCard.style.border = "1px dashed var(--primary-light)";
    paywallCard.style.marginTop = "20px";
    paywallCard.innerHTML = `
      <i class="bx bxs-lock-alt" style="font-size: 32px; color: var(--primary-color); margin-bottom: 10px;"></i>
      <h3 style="margin-bottom: 5px; color: var(--text-primary);">Akses Terbatas</h3>
      <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 15px;">Daftar ini dibatasi 50 kata. Tingkatkan ke Premium untuk membuka ribuan kosakata lainnya!</p>
      <button class="btn btn-primary" id="dictUpgradeBtn">Buka Akses Premium</button>
    `;
    
    paywallCard.querySelector("#dictUpgradeBtn").addEventListener("click", () => {
      showPremiumPaywall();
    });
    
    listContainer.appendChild(paywallCard);
  }
}

// --- 5. TUTOR AI VIEW ---
function renderAiView() {
  elements.mainContent.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "ai-layout new-design animate-fade-in";

  const isApiActive = appState.geminiApiKey && appState.geminiApiKey.length > 10;

  // Build Model Options dynamically
  const modelOptionsHtml = appState.aiModelList.length > 0
    ? appState.aiModelList.map(m => `<option value="${m}" ${m === appState.aiModel ? 'selected' : ''}>${m}</option>`).join('')
    : `
      <option value="gemini-3.5-flash-lite" ${appState.aiModel === 'gemini-3.5-flash-lite' ? 'selected' : ''}>3.5 Flash-Lite (Tercepat)</option>
      <option value="gemini-3.5-flash" ${appState.aiModel === 'gemini-3.5-flash' ? 'selected' : ''}>3.5 Flash (Stabil)</option>
      <option value="gemini-3.6-flash" ${appState.aiModel === 'gemini-3.6-flash' ? 'selected' : ''}>3.6 Flash (Terbaru)</option>
    `;

  // 70% Avatar Area
  const avatarArea = document.createElement("div");
  avatarArea.className = "ai-avatar-area";
  avatarArea.innerHTML = `
    <div style="position: absolute; top: 15px; left: 15px; z-index: 5; display: flex; gap: 8px; align-items: center;">
      <select id="inlineScenarioSelect" style="padding: 8px 12px; border-radius: 20px; border: 1px solid var(--card-border); background: var(--glass-bg); backdrop-filter: blur(8px); font-family: var(--font-primary); font-size: 13px; font-weight: 600; color: var(--text-secondary); outline: none; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.05); max-width: 200px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        <optgroup label="Gratis (Trial)">
          <option value="taaruf" ${appState.aiScenario === 'taaruf' ? 'selected' : ''}>Perkenalan</option>
          <option value="matham" ${appState.aiScenario === 'matham' ? 'selected' : ''}>Di Restoran</option>
          <option value="madrasah" ${appState.aiScenario === 'madrasah' ? 'selected' : ''}>Di Sekolah</option>
        </optgroup>
        <optgroup label="Premium (SaaS)">
          <option value="suq" ${appState.aiScenario === 'suq' ? 'selected' : ''}>Di Pasar (Premium)</option>
          <option value="usrah" ${appState.aiScenario === 'usrah' ? 'selected' : ''}>Keluarga (Premium)</option>
          <option value="mathar" ${appState.aiScenario === 'mathar' ? 'selected' : ''}>Di Bandara (Premium)</option>
          <option value="hiwayah" ${appState.aiScenario === 'hiwayah' ? 'selected' : ''}>Hobi (Premium)</option>
          <option value="mustasyfa" ${appState.aiScenario === 'mustasyfa' ? 'selected' : ''}>Rumah Sakit (Premium)</option>
          <option value="mihnah" ${appState.aiScenario === 'mihnah' ? 'selected' : ''}>Pekerjaan (Premium)</option>
          <option value="fushul" ${appState.aiScenario === 'fushul' ? 'selected' : ''}>Cuaca & Musim (Premium)</option>
          <option value="uthlah" ${appState.aiScenario === 'uthlah' ? 'selected' : ''}>Liburan (Premium)</option>
          <option value="riyadhah" ${appState.aiScenario === 'riyadhah' ? 'selected' : ''}>Olahraga (Premium)</option>
        </optgroup>
      </select>
      <button id="inlineClearChatBtn" title="Hapus Riwayat Chat" style="width: 35px; height: 35px; border-radius: 50%; border: 1px solid var(--card-border); background: var(--glass-bg); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--error);">
        <i class="bx bx-trash"></i>
      </button>
    </div>
    <img src="ustadz_avatar_1784090905001.jpg" alt="Ustadz Al-Hiwar">
  `;

  // 30% Chat Area
  const chatArea = document.createElement("div");
  chatArea.className = "ai-chat-area";
  chatArea.innerHTML = `
    <div class="chat-history" id="chatHistoryContainer"></div>
    <div class="typing-indicator" id="aiTypingIndicator" style="display: none; padding-left: 20px; padding-bottom: 10px;">
      <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
    </div>
    <div class="chat-input-bar" style="justify-content: center; padding: 15px; gap: 15px; border-top: 1px solid var(--glass-border); background: var(--card-bg);">
      <input type="hidden" id="chatInputField">
      <button class="voice-chat-btn" id="voiceInputIdBtn" style="flex: 1; padding: 15px; border-radius: 15px; border: 1px solid #ddd; background: #f8f9fa; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s;">
        <i class="bx bx-microphone" style="font-size: 28px; color: #E74C3C;"></i>
        <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">Bicara (Indo)</span>
      </button>
      <button class="voice-chat-btn" id="voiceInputArBtn" style="flex: 1; padding: 15px; border-radius: 15px; border: 1px solid var(--primary-light); background: rgba(30, 136, 116, 0.05); display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s;">
        <i class="bx bx-microphone" style="font-size: 28px; color: var(--primary-color);"></i>
        <span style="font-size: 13px; font-weight: 600; color: var(--primary-color);">Bicara (Arab)</span>
      </button>
    </div>
  `;

  layout.appendChild(avatarArea);
  layout.appendChild(chatArea);
  elements.mainContent.appendChild(layout);

  // DOM References
  const chatHistory = layout.querySelector("#chatHistoryContainer");
  const typingIndicator = layout.querySelector("#aiTypingIndicator");
  const chatInput = layout.querySelector("#chatInputField");
  const voiceInputIdBtn = layout.querySelector("#voiceInputIdBtn");
  const voiceInputArBtn = layout.querySelector("#voiceInputArBtn");
  const scenarioSelect = layout.querySelector("#inlineScenarioSelect");
  const clearChatBtn = layout.querySelector("#inlineClearChatBtn");

  // Render current chat history
  renderChatHistory(chatHistory);

  // Set default welcome message if history is empty
  if (appState.aiChatHistory.length === 0) {
    sendWelcomeMessage(chatHistory);
  }

  // --- WIRING LISTENERS ---

  // 1. Scenario Switch
  if (scenarioSelect) {
    scenarioSelect.addEventListener("change", (e) => {
      const selected = e.target.value;
      const premiumScenarios = ["suq", "usrah", "mathar", "hiwayah", "mustasyfa", "mihnah", "fushul", "uthlah", "riyadhah"];
      
      if (premiumScenarios.includes(selected) && !appState.isPremium) {
        showPremiumPaywall();
        e.target.value = appState.aiScenario; // Revert selection
        return;
      }
      appState.aiScenario = selected;
      localStorage.setItem("aiScenario", selected);
      appState.aiChatHistory = [];
      localStorage.removeItem("aiChatHistory");
      renderAiView(); // reload
    });
  }

  // 3. Clear chat history
  if (clearChatBtn) {
    clearChatBtn.addEventListener("click", () => {
      appState.aiChatHistory = [];
      localStorage.removeItem("aiChatHistory");
      renderAiView();
    });
  }

  // 3. Speech to Text (Speech Recognition & Auto Send)
  setupSpeechRecognition(voiceInputIdBtn, voiceInputArBtn, chatInput, chatHistory, typingIndicator);

  // (Removed Dynamic Model Fetching since model is fixed)
}

// --- RENDERING MESSAGE BUBBLES ---
function renderChatHistory(container) {
  container.innerHTML = "";
  appState.aiChatHistory.forEach((msg, idx) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-msg ${msg.sender}`;
    bubble.id = `chat-msg-${idx}`;

    const senderTitle = msg.sender === "user" ? "Anda" : "Ustadz Al-Hiwar";
    const isPracticeable = msg.sender === "ai" && msg.ar && msg.ar !== "تَشْخِيصُ النِّظَامِ" && msg.ar !== "خَطَأٌ فِي مِفْتَاحِ API";

    let contentHtml = "";
    if (msg.sender === "ai") {
      contentHtml = `
        <span class="chat-msg-header">${senderTitle}</span>
        <p class="arabic-text">${msg.ar || ''}</p>
        <p class="latin-text">${msg.latin || ''}</p>
        <p class="translation-text">${msg.id || ''}</p>
        <button class="speak-btn" aria-label="Putar Suara" id="ai-tts-${idx}">
          <i class="bx bx-volume-full"></i>
        </button>
        ${isPracticeable ? `
          <button class="practice-btn" id="ai-practice-${idx}">
            <i class="bx bx-microphone"></i>
            <span>Latih Makhraj</span>
          </button>
          <div class="diff-container" id="ai-diff-container-${idx}" style="display: none;">
            <div class="diff-title">Evaluasi Pelafalan:</div>
            <div class="diff-words" id="ai-diff-words-${idx}"></div>
          </div>
        ` : ''}
      `;
    } else {
      // User message
      contentHtml = `
        <span class="chat-msg-header">${senderTitle}</span>
        <p class="translation-text" style="font-size: 14px; font-weight: 500;">${msg.text}</p>
      `;
    }

    bubble.innerHTML = contentHtml;

    if (msg.sender === "ai") {
      bubble.querySelector(".speak-btn").addEventListener("click", (e) => {
        e.stopPropagation();

        const avatarFrame = document.getElementById("ustadzAvatarFrame");
        const avatarStatus = document.getElementById("ustadzStatus");

        speakArabic(msg.ar, () => {
          if (avatarFrame) {
            avatarFrame.className = "avatar-frame avatar-speaking";
            avatarStatus.innerText = "Sedang berbicara...";
          }
        }, () => {
          if (avatarFrame) {
            avatarFrame.className = "avatar-frame avatar-idle";
            avatarStatus.innerText = "Aktif (Idle)";
          }
        });
      });

      const practiceBtn = bubble.querySelector(".practice-btn");
      if (practiceBtn) {
        practiceBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          startPronunciationPractice(msg.ar, idx);
        });
      }
    }

    container.appendChild(bubble);
  });

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

// --- WELCOME MESSAGE ---
function sendWelcomeMessage(container) {
  let welcomeMsg = {};

  switch (appState.aiScenario) {
    case "taaruf":
      welcomeMsg = {
        sender: "ai",
        ar: "أَهْلًا وَسَهْلًا! أَنَا مُعَلِّمُكَ لِلتَّعَارُفِ. مَا اسْمُكَ وَمِنْ أَيْنَ أَنْتَ؟",
        latin: "Ahlan wa sahlan! Ana mu'allimuka lit-ta'arufi. Masmuka wa min ayna anta?",
        id: "Selamat datang! Saya guru Anda untuk topik perkenalan. Siapa namamu dan dari mana asalmu?"
      };
      break;
    case "restaurant":
      welcomeMsg = {
        sender: "ai",
        ar: "مَرْحَبًا بِكَ فِي المَطْعَمِ! أَيَّ خِدْمَةٍ؟ مَاذَا تُحِبُّ أَنْ تَأْكُلَ الْيَوْمَ؟",
        latin: "Marhaban bika fil math'ami! Ayya khidmah? Maadzaa tuhibbu an ta'kula al-yauma?",
        id: "Selamat datang di restoran! Ada yang bisa dibantu? Apa yang ingin Anda makan hari ini?"
      };
      break;
    case "airport":
      welcomeMsg = {
        sender: "ai",
        ar: "أَهْلًا بِكَ فِي الْمَطَارِ. أَعْطِنِي جَوَازَ السَّفَرِ وَالتَّذْكِرَةَ، مِنْ فَضْلِكَ.",
        latin: "Ahlan bika fil mathaari. A'thinii jawaazas safari wat tadzkirata, min fadhlik.",
        id: "Selamat datang di bandara. Berikan saya paspor dan tiket Anda, tolong."
      };
      break;
    default: // general
      welcomeMsg = {
        sender: "ai",
        ar: "السَّلَامُ عَلَيْكُمْ! أَنَا أُسْتَاذُ الْحِوَارِ. كَيْفَ حَالُكَ الْيَوْمَ؟",
        latin: "Assalaamu 'alaikum! Ana ustadzul hiwaar. Kaifa haaluka al-yaum?",
        id: "Semoga keselamatan tercurah untukmu! Saya Ustadz Al-Hiwar. Bagaimana kabarmu hari ini?"
      };
  }

  appState.aiChatHistory.push(welcomeMsg);
  localStorage.setItem("aiChatHistory", JSON.stringify(appState.aiChatHistory));
  renderChatHistory(container);

  // Auto-play sound
  setTimeout(() => speakArabic(welcomeMsg.ar), 500);
}

// --- SEND LOGIC ---
function handleUserSendMessage(container, inputField, typingIndicator) {
  const text = inputField.value.trim();
  if (!text) return;

  // Increment AI Practice stats
  appState.totalAiSentences++;
  localStorage.setItem("totalAiSentences", appState.totalAiSentences);

  // Add user bubble
  const userMsg = { sender: "user", text: text };
  appState.aiChatHistory.push(userMsg);
  localStorage.setItem("aiChatHistory", JSON.stringify(appState.aiChatHistory));
  renderChatHistory(container);

  // Clear input field
  inputField.value = "";

  // Show typing indicator & set avatar thinking
  typingIndicator.style.display = "flex";
  container.scrollTop = container.scrollHeight;

  const avatarFrame = document.getElementById("ustadzAvatarFrame");
  const avatarStatus = document.getElementById("ustadzStatus");
  if (avatarFrame) {
    avatarFrame.className = "avatar-frame avatar-thinking";
    avatarStatus.innerText = "Sedang berpikir...";
  }

  // Generate reply via Vercel Backend
  getGeminiApiResponse(text, container, typingIndicator);
}

// --- OFF LINE SIMULATOR ---
function getOfflineSimulatorResponse(userText) {
  const cleanText = userText.toLowerCase();

  // Generic responses depending on active scenario
  if (appState.aiScenario === "taaruf") {
    if (cleanText.includes("ismi") || cleanText.includes("nama saya") || cleanText.includes("saya")) {
      return {
        sender: "ai",
        ar: "مَا شَاءَ اللَّهُ! وَكَيْفَ حَالُكَ الْيَوْمَ؟ هَلْ أَنْتَ بِخَيْرٍ؟",
        latin: "Maa syaa Allah! Wa kaifa haalukal yauma? Hal anta bikhairin?",
        id: "Masya Allah! Dan bagaimana kabarmu hari ini? Apakah kamu baik-baik saja?"
      };
    }
    if (cleanText.includes("bikhair") || cleanText.includes("baik") || cleanText.includes("alhamdulillah")) {
      return {
        sender: "ai",
        ar: "الْحَمْدُ للهِ! هَلْ أَنْتَ طَالِبٌ أَمْ مُوَظَّفٌ؟",
        latin: "Alhamdulillah! Hal anta thaalibun am muwadhdhafun?",
        id: "Alhamdulillah! Apakah kamu seorang mahasiswa atau karyawan?"
      };
    }
    if (cleanText.includes("thaalib") || cleanText.includes("mahasiswa") || cleanText.includes("muwadhdhaf") || cleanText.includes("kerja")) {
      return {
        sender: "ai",
        ar: "مُمْتَازٌ جِدًّا! أَنَا سَعِيدٌ بِلِقَائِكَ وَبِهَذَا الْحِوَارِ. شُكْرًا لَكَ!",
        latin: "Mumtaazun jiddan! Ana sa'iidun biliqaa'ika wa bihadzal hiwaar. Syukran laka!",
        id: "Sangat luar biasa! Saya senang bertemu denganmu dan atas percakapan ini. Terima kasih!"
      };
    }
  } else if (appState.aiScenario === "restaurant") {
    if (cleanText.includes("uriidu") || cleanText.includes("ingin") || cleanText.includes("makan") || cleanText.includes("minta")) {
      return {
        sender: "ai",
        ar: "حَسَنًا، الرُّزُّ الْمَقْلِيُّ وَالدَّجَاجُ لَذِيذٌ جِدًّا. وَمَاذَا تُحِبُّ أَنْ تَشْرَبَ؟",
        latin: "Hasanan, ar-ruzzul maqliyy wad dajaaju ladziidun jiddan. Wa maadzaa tuhibbu an tasyraba?",
        id: "Baiklah, nasi goreng dan ayam itu sangat lezat. Dan apa yang ingin Anda minum?"
      };
    }
    if (cleanText.includes("minum") || cleanText.includes("jus") || cleanText.includes("teh") || cleanText.includes("burtuqal") || cleanText.includes("ma'a")) {
      return {
        sender: "ai",
        ar: "مُمْتَازٌ! هَلْ تُرِيدُ طَبَقًا آخَرَ، أَمْ هَذَا كَافٍ؟",
        latin: "Mumtaaz! Hal turiidu thabaqan aakhara, am hadzaa kaafin?",
        id: "Luar biasa! Apakah Anda ingin piring/hidangan lainnya, atau ini sudah cukup?"
      };
    }
    if (cleanText.includes("cukup") || cleanText.includes("tagihan") || cleanText.includes("hisaab") || cleanText.includes("laa") || cleanText.includes("tidak")) {
      return {
        sender: "ai",
        ar: "هَذَا هُوَ الْحِسَابُ، خَمْسَةَ عَشَرَ أَلْفَ رُوبِيَّةٍ. تَفَضَّلْ!",
        latin: "Hadzaa huwal hisaab, khamsata 'asyara alfa ruubiyyah. Tafadhdhal!",
        id: "Ini total tagihannya, 15 ribu rupiah. Silakan!"
      };
    }
  } else if (appState.aiScenario === "airport") {
    if (cleanText.includes("jawaaz") || cleanText.includes("paspor") || cleanText.includes("tiket") || cleanText.includes("tafadhdhal") || cleanText.includes("ini")) {
      return {
        sender: "ai",
        ar: "شُكْرًا لَكَ. مَا هِيَ وِجْهَتُكَ اليَوْمَ؟ هَلْ أَنْتَ ذَاهِبٌ لِلْعُمْرَةِ؟",
        latin: "Syukran laka. Maa hiya wijhatukal yauma? Hal anta dzaahibun lil 'umrati?",
        id: "Terima kasih. Ke mana tujuan Anda hari ini? Apakah Anda pergi untuk ibadah umroh?"
      };
    }
    if (cleanText.includes("umrah") || cleanText.includes("makkah") || cleanText.includes("ya") || cleanText.includes("na'am")) {
      return {
        sender: "ai",
        ar: "رِحْلَةٌ مُبَارَكَةٌ! هَذِهِ بِطَاقَةُ الصُّعُودِ. رِحْلَةً سَعِيدَةً!",
        latin: "Rihlatun mubaarakah! Hadzihi bitaaqatush shu'uud. Rihlatan sa'iidah!",
        id: "Perjalanan yang diberkahi! Ini kartu naik pesawat (boarding pass) Anda. Semoga perjalanan Anda menyenangkan!"
      };
    }
  }

  // General responses / Fallbacks
  if (cleanText.includes("salam") || cleanText.includes("assalamu")) {
    return {
      sender: "ai",
      ar: "وَعَلَيْكُمُ السَّلَامُ! كَيْفَ حَالُكَ يَا صَدِيقِي؟",
      latin: "Wa 'alaikumus salaam! Kaifa haaluka yaa shadiiqii?",
      id: "Dan keselamatan tercurah kepadamu! Bagaimana kabarmu wahai kawanku?"
    };
  }
  if (cleanText.includes("syukran") || cleanText.includes("terima kasih") || cleanText.includes("kasih")) {
    return {
      sender: "ai",
      ar: "عَفْوًا! أَنَا سَعِيدٌ جِدًّا بِالْمُحَادَثَةِ مَعَكَ.",
      latin: "'Afwan! Ana sa'iidun jiddan bil muhaadatsati ma'aka.",
      id: "Sama-sama! Saya sangat senang berbicara denganmu."
    };
  }

  // Default response showing API requirement
  return {
    sender: "ai",
    ar: "فَهِمْتُكَ، لَكِنَّنِي فِي الْوَضْعِ الأُفْقِيِّ (offline). لِلْإِجَابَةِ الذَّكِيَّةِ، يُرْجَى كِتَابَةُ مِفْتَاحِ API.",
    latin: "Fahimtuka, laakinnanii fil wadhi al-ufqiyy (offline). Lil ijaabatil dzakiyyah, yurjaa kitaabatu miftaah API.",
    id: "Saya paham, tapi saya sedang dalam mode offline. Untuk mendapat balasan cerdas, silakan masukkan API Key di samping."
  };
}

// --- GEMINI API INTEG RATION ---
async function getGeminiApiResponse(userText, container, typingIndicator) {
  try {
    const response = await fetch('/api/chat', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        userText: userText,
        aiScenario: appState.aiScenario,
        aiChatHistory: appState.aiChatHistory,
        aiModel: appState.aiModel
      })
    });

    const data = await response.json();
    typingIndicator.style.display = "none";

    if (data.error) {
      console.error("Gemini API Error:", data.error);

      const avFrame = document.getElementById("ustadzAvatarFrame");
      const avStatus = document.getElementById("ustadzStatus");
      if (avFrame) {
        avFrame.className = "avatar-frame avatar-idle";
        avStatus.innerText = "Aktif (Idle)";
      }

      const errMsg = data.error.message || "Kesalahan tidak dikenal.";
      const errReply = {
        sender: "ai",
        ar: "خَطَأٌ فِي مِفْتَاحِ API",
        latin: "[Khatha'un fii miftaahi API]",
        id: `Gagal memanggil Gemini API:\n**Pesan Kesalahan:** "${errMsg}"\n\nSilakan periksa kembali API Key Anda.`
      };
      appState.aiChatHistory.push(errReply);
      localStorage.setItem("aiChatHistory", JSON.stringify(appState.aiChatHistory));
      renderChatHistory(container);

      const speechBubble = document.getElementById("aiSpeechBubble");
      if (speechBubble) {
        speechBubble.textContent = "خَطَأٌ";
        speechBubble.classList.remove("hidden");
      }
      return;
    }

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      const rawText = data.candidates[0].content.parts[0].text.trim();
      const parsed = parseGeminiResponse(rawText);

      appState.totalAiSentences++;
      localStorage.setItem("totalAiSentences", appState.totalAiSentences);

      appState.aiChatHistory.push(parsed);
      localStorage.setItem("aiChatHistory", JSON.stringify(appState.aiChatHistory));
      renderChatHistory(container);
      container.scrollTop = container.scrollHeight;

      const speechBubble = document.getElementById("aiSpeechBubble");
      if (speechBubble) {
        speechBubble.textContent = parsed.ar;
        speechBubble.classList.remove("hidden");

        speechBubble.style.animation = 'none';
        speechBubble.offsetHeight;
        speechBubble.style.animation = null;
      }

      const avFrame = document.getElementById("ustadzAvatarFrame");
      const avStatus = document.getElementById("ustadzStatus");

      speakArabic(parsed.ar, () => {
        if (avFrame) {
          avFrame.className = "avatar-frame avatar-speaking";
          avStatus.innerText = "Sedang berbicara...";
        }
      }, () => {
        if (avFrame) {
          avFrame.className = "avatar-frame avatar-idle";
          avStatus.innerText = "Aktif (Idle)";
        }
      });
    } else {
      console.error("Format respons API salah:", data);
      throw new Error("Format respons tidak dikenal");
    }
  } catch (error) {
    console.error("Koneksi Gemini API Gagal:", error);
    typingIndicator.style.display = "none";

    const avFrame = document.getElementById("ustadzAvatarFrame");
    const avStatus = document.getElementById("ustadzStatus");
    if (avFrame) {
      avFrame.className = "avatar-frame avatar-idle";
      avStatus.innerText = "Aktif (Idle)";
    }

    const errReply = {
      sender: "ai",
      ar: "عُذْرًا، حَصَلَ خَطَأٌ فِي الِاتِّصَالِ بِالْخَادِمِ.",
      latin: "Udzran, hashala khatha'un fil ittishaali bil khaadim.",
      id: "Maaf, terjadi kesalahan koneksi jaringan saat menghubungi API Gemini. Pastikan API Key Anda benar."
    };
    appState.aiChatHistory.push(errReply);
    renderChatHistory(container);
    container.scrollTop = container.scrollHeight;
  }
}

// Helper to parse the Gemini output format
function parseGeminiResponse(text) {
  // We expect:
  // Arabic string
  // [Transliterasi]
  // [Arti]
  // (Optional correction)

  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);

  let ar = "";
  let latin = "";
  let id = "";

  lines.forEach(line => {
    if (line.startsWith("[") && line.endsWith("]")) {
      const clean = line.slice(1, -1);
      if (/[a-zA-Z]/.test(clean) && (!clean.includes(" ") || clean.split(" ").length < 6 || clean.toLowerCase().includes("kaifa") || clean.toLowerCase().includes("ismi") || clean.toLowerCase().includes("ana") || clean.toLowerCase().includes("marhaban"))) {
        if (!latin) latin = clean;
        else id += (id ? "\n" : "") + clean;
      } else {
        id += (id ? "\n" : "") + clean;
      }
    } else if (line.startsWith("(") && line.endsWith(")")) {
      id += (id ? "\n" : "") + `*Koreksi: ${line.slice(1, -1)}*`;
    } else {
      // Use regex to detect Arabic characters
      const isArabic = /[\u0600-\u06FF]/.test(line);
      if (isArabic) {
        ar += (ar ? " " : "") + line;
      } else {
        // If it's not Arabic and no brackets, it's an Indonesian note/correction
        id += (id ? "\n\n" : "") + `*Catatan:* ${line}`;
      }
    }
  });

  // Fallbacks if parsing fails
  if (!ar) ar = text;
  if (!latin) latin = "Ustadz Al-Hiwar";
  if (!id) id = "Terjemahan belum termuat.";

  return {
    sender: "ai",
    ar: ar,
    latin: "[" + latin + "]",
    id: id
  };
}

// --- SPEECH RECOGNITION (SPEECH TO TEXT) ---
function setupSpeechRecognition(idBtn, arBtn, chatInput, chatHistory, typingIndicator) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if(idBtn) idBtn.style.opacity = "0.5";
    if(arBtn) arBtn.style.opacity = "0.5";
    showToast("Browser Anda tidak mendukung Web Speech API.", "error");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let isListening = false;
  let currentLang = 'ar-SA';
  let activeBtn = null;

  const resetMicUI = () => {
    isListening = false;
    if (idBtn) idBtn.classList.remove("mic-active");
    if (arBtn) arBtn.classList.remove("mic-active");
  };

  const startListening = (btn, lang) => {
    if (isListening) {
      recognition.stop();
      if (activeBtn === btn) return; // Toggle off if clicking the same button
    }
    
    currentLang = lang;
    recognition.lang = lang;
    activeBtn = btn;
    
    try {
      recognition.start();
    } catch (err) {
      console.error(err);
    }
  };

  if (idBtn) {
    idBtn.addEventListener("click", () => startListening(idBtn, "id-ID"));
  }
  
  if (arBtn) {
    arBtn.addEventListener("click", () => startListening(arBtn, "ar-SA"));
  }

  recognition.onstart = () => {
    isListening = true;
    if (activeBtn) activeBtn.classList.add("mic-active");
    showToast(`Mendengarkan (${currentLang === 'id-ID' ? 'Indonesia' : 'Arab'})...`, "info");
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    showToast(`Kesalahan mikrofon: ${event.error}`, "error");
    resetMicUI();
  };

  recognition.onend = () => {
    resetMicUI();
  };

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    chatInput.value = speechToText;
    showToast("Suara ditangkap, sedang memproses...", "success");
    
    // Auto send to AI
    handleUserSendMessage(chatHistory, chatInput, typingIndicator);
  };
}

// --- DYNAMIC MODEL FETCHING ---
async function fetchSupportedModelsFromApi(modelDropdownSelect) {
  const url = `/api/models`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.models) {
      let genModels = data.models
        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
        .map(m => m.name.replace("models/", ""));

      // Prioritize flash models (free tier active) over pro models
      genModels.sort((a, b) => {
        const aIsFlash = a.includes("flash");
        const bIsFlash = b.includes("flash");
        if (aIsFlash && !bIsFlash) return -1;
        if (!aIsFlash && bIsFlash) return 1;
        return 0;
      });

      if (genModels.length > 0) {
        appState.aiModelList = genModels;
        localStorage.setItem("aiModelList", JSON.stringify(appState.aiModelList));

        // Re-populate dropdown
        if (modelDropdownSelect) {
          modelDropdownSelect.innerHTML = appState.aiModelList
            .map(m => `<option value="${m}" ${m === appState.aiModel ? 'selected' : ''}>${m}</option>`)
            .join('');
        }

        // If current model is not in the fetched list, set it to the first available
        if (!appState.aiModelList.includes(appState.aiModel)) {
          appState.aiModel = appState.aiModelList[0];
          localStorage.setItem("aiModel", appState.aiModel);
        }
      }
    } else if (data.error) {
      console.error("Gagal memanggil listModels:", data.error);
    }
  } catch (err) {
    console.error("Gagal mengambil model dari API:", err);
  }
}

// --- API DIAGNOSTICS ---
async function runApiDiagnostics(container) {
  if (!appState.geminiApiKey) {
    showToast("Masukkan API Key terlebih dahulu!", "warning");
    return;
  }

  // Insert initial diagnostic message
  const diagIdx = appState.aiChatHistory.length;
  const initMsg = {
    sender: "ai",
    ar: "تَشْخِيصُ النِّظَامِ",
    latin: "[Tasykhiisun nidhaam]",
    id: `🛠️ **Memulai Diagnosa API...**\nSedang menghubungkan ke server Google...`
  };

  appState.aiChatHistory.push(initMsg);
  renderChatHistory(container);

  const updateDiag = (text) => {
    appState.aiChatHistory[diagIdx].id = text;
    renderChatHistory(container);
  };

  const url = `https://generativelanguage.googleapis.com/v1/models?key=${appState.geminiApiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok && data.models) {
      let models = data.models
        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
        .map(m => m.name.replace("models/", ""));

      // Prioritize flash models (free tier active) over pro models
      models.sort((a, b) => {
        const aIsFlash = a.includes("flash");
        const bIsFlash = b.includes("flash");
        if (aIsFlash && !bIsFlash) return -1;
        if (!aIsFlash && bIsFlash) return 1;
        return 0;
      });

      // Auto-update model dropdown and state
      if (models.length > 0) {
        appState.aiModelList = models;
        localStorage.setItem("aiModelList", JSON.stringify(appState.aiModelList));

        const modelDropdownSelect = document.getElementById("aiModelSelect");

        // If current active model is not supported by key, pick the first available
        if (!appState.aiModelList.includes(appState.aiModel)) {
          appState.aiModel = appState.aiModelList[0];
          localStorage.setItem("aiModel", appState.aiModel);
        }

        if (modelDropdownSelect) {
          modelDropdownSelect.innerHTML = appState.aiModelList
            .map(m => `<option value="${m}" ${m === appState.aiModel ? 'selected' : ''}>${m}</option>`)
            .join('');
          modelDropdownSelect.value = appState.aiModel;
        }
      }

      updateDiag(`🛠️ **Hasil Diagnosa API (Sukses):**
✅ **Koneksi Google:** Berhasil terhubung!
✅ **API Key:** Valid.
📋 **Daftar Model yang Tersedia di Akun Anda:**
${models.map(m => `- \`${m}\``).join("\n")}

*Catatan:* Sistem telah memperbarui pilihan model Anda secara otomatis agar kompatibel dengan akun Anda. Sekarang silakan coba ketik pesan obrolan kembali.`);
    } else {
      const errMsg = data.error ? data.error.message : "Kesalahan tidak dikenal.";
      const errCode = data.error ? data.error.code : res.status;
      const errStatus = data.error ? data.error.status : "N/A";

      updateDiag(`🛠️ **Hasil Diagnosa API (Gagal):**
❌ **Koneksi Google:** Gagal (HTTP ${res.status})
❌ **Kode Error:** \`${errCode}\` (${errStatus})
❌ **Pesan Google:** "${errMsg}"

*Petunjuk:*
1. Jika pesannya adalah *"API key not valid"*, silakan ketik ulang Kunci API Anda dengan teliti tanpa spasi.
2. Jika pesannya *"location is not supported"*, berarti server Google memblokir akses dari wilayah/IP Anda.
3. Pastikan Anda membuat Kunci API melalui portal **Google AI Studio**, bukan Google Cloud Console biasa.`);
    }
  } catch (err) {
    updateDiag(`🛠️ **Hasil Diagnosa API (Gagal):**
❌ **Koneksi Google:** Gagal terhubung (Network Error)
❌ **Detail:** "${err.message}"

*Petunjuk:* Pastikan komputer Anda terhubung ke internet dan tidak diblokir oleh antivirus atau ekstensi pemblokir iklan (AdBlocker) di browser.`);
  }
}

// --- FASE 2: HELPER FUNCTIONS ---

// 1. Calculate Streak
function calculateStreak() {
  const today = new Date().toDateString();
  const lastActive = appState.lastActiveDate;

  if (lastActive === today) {
    return; // Already active today
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toDateString();

  if (lastActive === yesterdayString) {
    appState.dailyStreak++;
  } else if (lastActive === "") {
    appState.dailyStreak = 1;
  } else {
    appState.dailyStreak = 1; // broken streak
  }

  appState.lastActiveDate = today;
  localStorage.setItem("dailyStreak", appState.dailyStreak);
  localStorage.setItem("lastActiveDate", appState.lastActiveDate);
}

// 2. Play Synthesized Sound Effects
function playSynthesizedSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === "correct") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.25);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === "incorrect") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.25);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === "fanfare") {
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      const duration = 0.12;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * duration));

        gain.gain.setValueAtTime(0.06, ctx.currentTime + (i * duration));
        gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + (i * duration) + duration);

        osc.start(ctx.currentTime + (i * duration));
        osc.stop(ctx.currentTime + (i * duration) + duration);
      });
    }
  } catch (err) {
    console.warn("Failed to play sound effect:", err);
  }
}

// 3. Trigger Visual Confetti Celebration
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height + 15,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 18 - 8,
      size: Math.random() * 7 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: Math.random() * 8 - 4,
      opacity: 1
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4;
      p.vx *= 0.98;
      p.rotation += p.rSpeed;

      if (p.vy > 0) {
        p.opacity -= 0.018;
      }

      if (p.opacity > 0 && p.y < canvas.height && p.x > 0 && p.x < canvas.width) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  update();
}

// 4. File Exporter (TXT Downloader)
function exportToText(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// 5. Toggle Favorite Words
function toggleFavoriteWord(arabic) {
  const idx = appState.favoriteWords.indexOf(arabic);
  if (idx > -1) {
    appState.favoriteWords.splice(idx, 1);
    showToast("Dihapus dari favorit", "info");
  } else {
    appState.favoriteWords.push(arabic);
    showToast("Ditambahkan ke favorit", "success");
  }
  localStorage.setItem("favoriteWords", JSON.stringify(appState.favoriteWords));
  updateProgressWidget();
}

// 6. Speech Makhraj Evaluation (Visual Diff)
function startPronunciationPractice(targetArabic, idx) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    showToast("Browser Anda tidak mendukung Pengenalan Suara.", "error");
    return;
  }

  const practiceBtn = document.getElementById(`ai-practice-${idx}`);
  const diffContainer = document.getElementById(`ai-diff-container-${idx}`);
  const diffWords = document.getElementById(`ai-diff-words-${idx}`);

  if (!practiceBtn || !diffContainer || !diffWords) return;

  const recognition = new SpeechRecognition();
  recognition.lang = "ar-SA";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    practiceBtn.classList.add("mic-active");
    practiceBtn.querySelector("span").innerText = "Mendengarkan...";
    showToast("Silakan ucapkan kalimat Bahasa Arab di atas...", "info");
  };

  recognition.onerror = (e) => {
    console.error("Makhraj evaluation error:", e.error);
    showToast(`Gagal merekam suara: ${e.error}`, "error");
    resetPracticeUI();
  };

  recognition.onend = () => {
    resetPracticeUI();
  };

  recognition.onresult = (event) => {
    const userSpeech = event.results[0][0].transcript;
    showToast("Suara berhasil direkam! Mengevaluasi...", "success");

    const evaluationHtml = diffTexts(targetArabic, userSpeech);
    diffWords.innerHTML = evaluationHtml;
    diffContainer.style.display = "block";
  };

  function resetPracticeUI() {
    practiceBtn.classList.remove("mic-active");
    practiceBtn.querySelector("span").innerText = "Latih Makhraj";
  }

  try {
    recognition.start();
  } catch (err) {
    console.error("Failed to start speech recognition:", err);
  }
}

// Strip Harakat and normalization logic
function stripArabicHarakat(text) {
  let clean = text.replace(/[\u064B-\u0652\u0670]/g, ""); // strip tashkeel
  clean = clean.replace(/[أإآ]/g, "ا"); // normalize alef
  clean = clean.replace(/ة/g, "ه"); // normalize teh marbuta
  clean = clean.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()؟?!]/g, ""); // remove punctuation
  clean = clean.replace(/\s+/g, " ").trim();
  return clean.toLowerCase();
}

// Compare text word by word
function diffTexts(targetArabic, userSpeech) {
  const cleanUser = stripArabicHarakat(userSpeech);
  const userWordsClean = cleanUser.split(/\s+/).filter(w => w.length > 0);

  const targetWordsRaw = targetArabic.split(/\s+/).filter(w => w.length > 0);
  const targetWordsClean = targetWordsRaw.map(w => stripArabicHarakat(w));

  let html = "";

  targetWordsRaw.forEach((rawWord, i) => {
    const cleanWord = targetWordsClean[i];

    // Check if the user spoke this word (exists in the spoken transcript)
    const isCorrect = userWordsClean.includes(cleanWord);

    html += `<span class="diff-word ${isCorrect ? 'correct' : 'incorrect'}">${rawWord}</span>`;
  });

  return html;
}

// --- 6. NAHWU SHOROF VIEW ---
function renderNahwuView() {
  elements.mainContent.innerHTML = "";

  const nahwuData = window.AL_HIWAR_DATA && window.AL_HIWAR_DATA.nahwu
    ? window.AL_HIWAR_DATA.nahwu
    : { chapters: [] };

  const layout = document.createElement("div");
  layout.className = "nahwu-layout animate-fade-in";

  if (nahwuData.chapters.length === 0) {
    layout.innerHTML = `
      <div class="no-results">
        <i class="bx bx-loader-alt bx-spin"></i>
        <h3>Modul Nahwu Shorof</h3>
        <p>Data modul sedang dimuat atau belum tersedia.</p>
      </div>
    `;
    elements.mainContent.appendChild(layout);
    return;
  }

  // Sidebar: chapter list
  const sidebar = document.createElement("div");
  sidebar.className = "nahwu-sidebar";
  sidebar.innerHTML = `<h3 class="themes-title"><i class="bx bx-edit" style="color: var(--primary-color);"></i> Daftar Bab Nahwu Shorof</h3>`;

  const chapList = document.createElement("div");
  chapList.className = "theme-list";

  const activeChapterId = appState.activeNahwuChapter || nahwuData.chapters[0].id;

  nahwuData.chapters.forEach((chap, idx) => {
    const isActive = chap.id === activeChapterId;
    const isCompleted = (appState.completedNahwu || []).includes(chap.id);
    const isFree = idx < 2; // First 2 chapters are free
    const hasAccess = appState.isPremium || isFree;

    const card = document.createElement("div");
    card.className = `theme-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${!hasAccess ? 'locked' : ''}`;
    card.innerHTML = `
      <i class="bx ${chap.icon || 'bx-book'} theme-icon"></i>
      <div class="theme-info">
        <span class="theme-name">${idx + 1}. ${chap.title}</span>
        <span class="theme-arabic">${chap.titleAr || ''}</span>
      </div>
      ${!hasAccess ? '<i class="bx bx-lock-alt" style="color: var(--accent-color); font-size: 18px;"></i>' : ''}
    `;

    card.addEventListener("click", () => {
      if (!hasAccess) {
        showPremiumPaywall();
        return;
      }
      appState.activeNahwuChapter = chap.id;
      renderNahwuView();
    });

    chapList.appendChild(card);
  });

  sidebar.appendChild(chapList);

  // Main content: active chapter
  const mainPanel = document.createElement("div");
  mainPanel.className = "nahwu-main";

  const activeChapter = nahwuData.chapters.find(c => c.id === activeChapterId) || nahwuData.chapters[0];
  renderNahwuChapter(mainPanel, activeChapter);

  layout.appendChild(sidebar);
  layout.appendChild(mainPanel);
  elements.mainContent.appendChild(layout);
}

function renderNahwuChapter(container, chapter) {
  container.innerHTML = "";

  // Chapter header
  const header = document.createElement("div");
  header.className = "dialogue-header";
  header.innerHTML = `
    <div class="dialogue-title-area">
      <h2>${chapter.title} <span class="arabic-logo">${chapter.titleAr || ''}</span></h2>
      <p>Pelajari kaidah tata bahasa Arab</p>
    </div>
  `;
  container.appendChild(header);

  // Explanation
  if (chapter.explanation) {
    const explSection = document.createElement("div");
    explSection.className = "nahwu-explanation quiz-card";
    explSection.style.padding = "20px";
    explSection.innerHTML = `
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--primary-color);">
        <i class="bx bx-info-circle"></i> Penjelasan
      </h3>
      <div class="nahwu-text">${chapter.explanation.replace(/\n/g, '<br>')}</div>
    `;
    container.appendChild(explSection);
  }

  // Conjugation/Declension Table
  if (chapter.table && chapter.table.headers && chapter.table.rows) {
    const tableSection = document.createElement("div");
    tableSection.className = "nahwu-table-section quiz-card";
    tableSection.style.padding = "20px";
    tableSection.style.overflowX = "auto";

    let tableHtml = `
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--accent-color);">
        <i class="bx bx-table"></i> Tabel Tashrif / I'rab
      </h3>
      <table class="nahwu-table">
        <thead><tr>
          ${chapter.table.headers.map(h => `<th>${h}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${chapter.table.rows.map(row =>
      `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
    ).join('')}
        </tbody>
      </table>
    `;

    tableSection.innerHTML = tableHtml;
    container.appendChild(tableSection);
  }

  // Examples
  if (chapter.examples && chapter.examples.length > 0) {
    const exSection = document.createElement("div");
    exSection.className = "nahwu-examples quiz-card";
    exSection.style.padding = "20px";

    let exHtml = `
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--success);">
        <i class="bx bx-check-circle"></i> Contoh Kalimat
      </h3>
    `;

    chapter.examples.forEach((ex, i) => {
      exHtml += `
        <div class="nahwu-example" style="margin-bottom: 12px; padding: 12px; border-radius: 10px; background: var(--bg-secondary);">
          <p class="arabic-text" style="font-size: 20px; margin-bottom: 4px;">${ex.ar}</p>
          <p class="latin-text" style="font-size: 13px; margin-bottom: 2px;">${ex.latin || ''}</p>
          <p class="translation-text" style="font-size: 13px;">${ex.id}</p>
          ${ex.highlight ? `<p style="font-size: 12px; color: var(--primary-color); font-style: italic; margin-top: 4px;"><i class="bx bx-right-arrow-alt"></i> ${ex.highlight}</p>` : ''}
        </div>
      `;
    });

    exSection.innerHTML = exHtml;
    container.appendChild(exSection);
  }

  // Quiz section for this chapter
  if (chapter.quiz && chapter.quiz.length > 0) {
    const quizSection = document.createElement("div");
    quizSection.className = "nahwu-quiz quiz-card";
    quizSection.style.padding = "20px";

    quizSection.innerHTML = `
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 12px; color: var(--error);">
        <i class="bx bx-brain"></i> Latihan Bab Ini (${chapter.quiz.length} soal)
      </h3>
      <button class="btn btn-primary" id="startNahwuQuizBtn">
        <i class="bx bx-play"></i>
        <span>Mulai Latihan</span>
      </button>
      <div id="nahwuQuizContainer" style="display: none; margin-top: 15px;"></div>
    `;

    container.appendChild(quizSection);

    // Quiz logic
    quizSection.querySelector("#startNahwuQuizBtn").addEventListener("click", () => {
      const btn = quizSection.querySelector("#startNahwuQuizBtn");
      btn.style.display = "none";
      const quizContainer = quizSection.querySelector("#nahwuQuizContainer");
      quizContainer.style.display = "block";

      let currentQ = 0;
      let score = 0;

      function showQuestion() {
        if (currentQ >= chapter.quiz.length) {
          // Show results
          const pct = Math.round((score / chapter.quiz.length) * 100);
          quizContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
              <i class="bx ${pct >= 80 ? 'bx-medal' : pct >= 50 ? 'bx-smile' : 'bx-sad'}" style="font-size: 48px; color: ${pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--primary-color)' : 'var(--error)'}"></i>
              <h3 style="margin: 10px 0;">${pct >= 80 ? 'Sangat Bagus!' : pct >= 50 ? 'Cukup Baik!' : 'Tetap Semangat!'}</h3>
              <p>Skor: <strong>${score}</strong> / ${chapter.quiz.length} benar (${pct}%)</p>
              <button class="btn btn-primary" style="margin-top: 15px;" id="retryNahwuQuizBtn">
                <i class="bx bx-refresh"></i> Ulangi Latihan
              </button>
            </div>
          `;

          if (pct >= 80) {
            if (!appState.completedNahwu) appState.completedNahwu = [];
            if (!appState.completedNahwu.includes(chapter.id)) {
              appState.completedNahwu.push(chapter.id);
              localStorage.setItem("completedNahwu", JSON.stringify(appState.completedNahwu));
            }
            playSynthesizedSound("fanfare");
          }

          quizContainer.querySelector("#retryNahwuQuizBtn").addEventListener("click", () => {
            currentQ = 0;
            score = 0;
            showQuestion();
          });
          return;
        }

        const q = chapter.quiz[currentQ];
        quizContainer.innerHTML = `
          <div class="card-indicator" style="margin-bottom: 10px;">Soal ${currentQ + 1} / ${chapter.quiz.length}</div>
          <p style="font-weight: 600; margin-bottom: 8px;">${q.question}</p>
          ${q.arabic ? `<p class="arabic-text" style="font-size: 22px; margin-bottom: 12px;">${q.arabic}</p>` : ''}
          <div id="nahwuQuizOptions">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-idx="${i}" style="display: block; width: 100%; text-align: left; margin-bottom: 8px;">
                ${opt}
              </button>
            `).join('')}
          </div>
        `;

        quizContainer.querySelector("#nahwuQuizOptions").addEventListener("click", (e) => {
          const btn = e.target.closest(".quiz-option");
          if (!btn || btn.classList.contains("correct") || btn.classList.contains("incorrect")) return;

          const allBtns = quizContainer.querySelectorAll(".quiz-option");
          const selectedIdx = parseInt(btn.dataset.idx);

          if (selectedIdx === q.correct) {
            btn.classList.add("correct");
            score++;
            playSynthesizedSound("correct");
          } else {
            btn.classList.add("incorrect");
            allBtns[q.correct].classList.add("correct");
            playSynthesizedSound("incorrect");
          }

          setTimeout(() => {
            currentQ++;
            showQuestion();
          }, 1200);
        });
      }

      showQuestion();
    });
  }

  // Mark complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "btn btn-primary";
  completeBtn.style.cssText = "width: 100%; justify-content: center; margin-top: 15px;";
  const isCompleted = (appState.completedNahwu || []).includes(chapter.id);
  completeBtn.innerHTML = `
    <i class="bx ${isCompleted ? 'bx-check-double' : 'bx-check'}"></i>
    <span>${isCompleted ? 'Sudah Selesai' : 'Tandai Selesai'}</span>
  `;

  completeBtn.addEventListener("click", () => {
    if (!appState.completedNahwu) appState.completedNahwu = [];
    if (!appState.completedNahwu.includes(chapter.id)) {
      appState.completedNahwu.push(chapter.id);
      localStorage.setItem("completedNahwu", JSON.stringify(appState.completedNahwu));
      showToast("Bab ini ditandai selesai!", "success");
      renderNahwuView();
    }
  });

  container.appendChild(completeBtn);
}

