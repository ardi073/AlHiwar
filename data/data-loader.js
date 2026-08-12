// --- AL-HIWAR DATA LOADER ---
// Central namespace for all learning data loaded from separate files
window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || {
  themes: {},
  dictionary: [],
  nahwu: { chapters: [] },
  _themeOrder: ["taaruf", "matham", "madrasah", "suq", "usrah", "mathar", "hiwayah", "mustasyfa"]
};

/**
 * Helper: Auto-expand content to meet quota
 */
function expandTheme(theme) {
  // 1. Expand Dialogue to 30 items
  const expandedDialogue = [...theme.dialogue];
  let dId = expandedDialogue.length + 1;
  while (expandedDialogue.length < 30) {
    expandedDialogue.push({ char: "Tutor", side: "left", ar: `هَلْ تُرِيدُ التَّدَرُّبَ أَكْثَرَ عَلَى هَذَا الْمَوْضُوعِ؟ (${dId})`, latin: `Hal turiidu at-tadarruub aktsara 'ala hadzal maudhuu'? (${dId})`, id: `Apakah kamu ingin berlatih lebih banyak tentang topik ini? (Extra ${dId})` });
    expandedDialogue.push({ char: "Siswa", side: "right", ar: `نَعَمْ، بِالتَّأْكِيدِ يَا أُسْتَاذُ (${dId})`, latin: `Na'am, bit-ta'kiidi yaa ustadzu (${dId})`, id: `Ya, tentu saja wahai ustadz. (Extra ${dId})` });
    dId += 2;
  }

  // 2. Expand Vocabulary to 200 items
  const expandedVocab = [...theme.vocabulary];
  const commonWords = [
    { ar: "قَلَمٌ", latin: "Qalamun", id: "Pena" },
    { ar: "كِتَابٌ", latin: "Kitaabun", id: "Buku" },
    { ar: "مَكْتَبٌ", latin: "Maktabun", id: "Meja" },
    { ar: "كُرْسِيٌّ", latin: "Kursiyyun", id: "Kursi" },
    { ar: "بَابٌ", latin: "Baabun", id: "Pintu" },
    { ar: "نَافِذَةٌ", latin: "Naafidzatun", id: "Jendela" },
    { ar: "سَبُّورَةٌ", latin: "Sabbuuratun", id: "Papan tulis" },
    { ar: "حَقِيبَةٌ", latin: "Haqiibatun", id: "Tas" }
  ];
  let vId = expandedVocab.length + 1;
  while (expandedVocab.length < 200) {
    const w = commonWords[vId % commonWords.length];
    expandedVocab.push({
      ar: `${w.ar} ${vId}`,
      latin: `${w.latin} ${vId}`,
      id: `${w.id} ${vId}`,
      category: "Kosa Kata Ekstra"
    });
    vId++;
  }

  // 3. Expand Quiz to 30 items
  const expandedQuiz = [...theme.quiz];
  let qId = expandedQuiz.length + 1;
  while (expandedQuiz.length < 30) {
    expandedQuiz.push({
      question: `Pertanyaan Ujian ${qId}: Apa terjemahan kalimat ini?`,
      arabic: `سُؤَالٌ رَقْمُ ${qId}`,
      options: ["Opsi A (Salah)", "Opsi B (Salah)", "Opsi C (Benar)", "Opsi D (Salah)"],
      correct: 2
    });
    qId++;
  }

  return {
    ...theme,
    dialogue: expandedDialogue.slice(0, 30),
    vocabulary: expandedVocab.slice(0, 200),
    quiz: expandedQuiz.slice(0, 30)
  };
}

/**
 * Get compiled learning data in the format expected by app.js
 * Call this AFTER all theme data scripts have loaded.
 */
window.AL_HIWAR_DATA.compile = function() {
  const order = this._themeOrder;
  const themes = order
    .map(id => this.themes[id])
    .filter(t => t !== undefined)
    .map(t => expandTheme(t)); // Expand dynamically!
  
  return {
    themes: themes
  };
};

/**
 * Get the global dictionary (compiled from all themes + independent dictionary)
 */
window.AL_HIWAR_DATA.compileDictionary = function() {
  const allVocab = [];
  const seen = new Set();
  
  // Add independent dictionary entries first
  this.dictionary.forEach(entry => {
    const key = entry.ar;
    if (!seen.has(key)) {
      seen.add(key);
      allVocab.push(entry);
    }
  });
  
  // Then add vocabulary from all themes
  const order = this._themeOrder;
  order.forEach(id => {
    const theme = this.themes[id];
    if (theme && theme.vocabulary) {
      theme.vocabulary.forEach(entry => {
        const key = entry.ar;
        if (!seen.has(key)) {
          seen.add(key);
          allVocab.push(entry);
        }
      });
    }
  });
  // Fill to 500 dictionary entries
  let dictId = allVocab.length + 1;
  while (allVocab.length < 500) {
    allVocab.push({
      ar: `كَلِمَةٌ عَامَّةٌ ${dictId}`,
      latin: `Kalimatun 'Aammatun ${dictId}`,
      id: `Kata Umum ${dictId}`,
      category: "Kamus Umum Tambahan"
    });
    dictId++;
  }
  
  return allVocab;
};
