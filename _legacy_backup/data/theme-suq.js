(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || { themes: {} };
  window.AL_HIWAR_DATA.themes.suq = {
    id: "suq",
    name: "Di Pasar (Fi As-Suq)",
    arabic: "فِي السُّوقِ",
    icon: "bx-store",
    dialogue: [
      { char: "Penjual", side: "left", ar: "تَفَضَّلْ يَا سَيِّدِي! مَاذَا تُرِيدُ أَنْ تَشْتَرِيَ؟", latin: "Tafadhdhal yaa sayyidii! Maadzaa turiidu an tasytariya?", id: "Silakan, Tuan! Apa yang ingin Anda beli?" },
      { char: "Pembeli", side: "right", ar: "أُرِيدُ بَعْضَ الْفَوَاكِهِ وَالْخُضْرَوَاتِ.", latin: "Uriidu ba'dhal fawaakihi wal khudhrawaat.", id: "Saya ingin (membeli) beberapa buah dan sayuran." },
      { char: "Penjual", side: "left", ar: "لَدَيْنَا تُفَّاحٌ طَازَجٌ وَبُرْتُقَالٌ حُلْوٌ وَعِنَبٌ لَذِيذٌ.", latin: "Ladaynaa tuffaahun thaazajun wa burtuqaalun hulwun wa 'inabun ladziidz.", id: "Kami punya apel segar, jeruk manis, dan anggur lezat." },
      { char: "Pembeli", side: "right", ar: "بِكَمْ كِيلُو التُّفَّاحِ؟", latin: "Bikam kiilut tuffaah?", id: "Berapa harga sekilo apel?" },
      { char: "Penjual", side: "left", ar: "كِيلُو التُّفَّاحِ بِخَمْسِينَ أَلْفَ رُوبِيَّةٍ.", latin: "Kiilut tuffaahi bikhamsiina alfa ruubiyyah.", id: "Sekilo apel harganya lima puluh ribu rupiah." },
      { char: "Pembeli", side: "right", ar: "هَذَا غَالٍ جِدًّا! هَلْ يُمْكِنُ تَخْفِيضُ السِّعْرِ؟", latin: "Haadzaa ghaalin jiddan! Hal yumkinu takhfiidhus si'ri?", id: "Ini sangat mahal! Bisakah diturunkan harganya?" },
      { char: "Penjual", side: "left", ar: "حَسَنًا، لِأَجْلِكَ، بِخَمْسَةٍ وَأَرْبَعِينَ أَلْفًا. هَلْ تُوَافِقُ؟", latin: "Hasanan, li'ajlika, bikhamsatin wa arba'iina alfan. Hal tuwaafiqu?", id: "Baiklah, untukmu, empat puluh lima ribu. Apakah Anda setuju?" },
      { char: "Pembeli", side: "right", ar: "مُوَافِقٌ. أَعْطِنِي كِيلُو وَنِصْفَ كِيلُو مِنَ التُّفَّاحِ.", latin: "Muwaafiqun. A'thinii kiiluu wa nishfa kiiluu minat tuffaah.", id: "Setuju. Beri saya satu setengah kilo apel." },
      { char: "Penjual", side: "left", ar: "وَهَلْ تُرِيدُ شَيْئًا مِنَ الْخُضْرَوَاتِ؟", latin: "Wa hal turiidu syai'an minal khudhrawaat?", id: "Dan apakah Anda ingin sayuran?" },
      { char: "Pembeli", side: "right", ar: "نَعَمْ، أُرِيدُ طَمَاطِمَ، وَبَصَلًا، وَجَزَرًا.", latin: "Na'am, uriidu thamaathima, wa bashalan, wa jazaran.", id: "Ya, saya ingin tomat, bawang, dan wortel." },
      { char: "Penjual", side: "left", ar: "كَمْ كِيلُو مِنَ الطَّمَاطِمِ؟", latin: "Kam kiiluu minat thamaathimi?", id: "Berapa kilo tomat?" },
      { char: "Pembeli", side: "right", ar: "كِيلُو وَاحِدٌ فَقَطْ.", latin: "Kiiluu waahidun faqath.", id: "Satu kilo saja." },
      { char: "Penjual", side: "left", ar: "حَسَنًا. هَلْ هُنَاكَ شَيْءٌ آخَرُ؟", latin: "Hasanan. Hal hunaaka syai'un aakhar?", id: "Baik. Apakah ada yang lain?" },
      { char: "Pembeli", side: "right", ar: "لَا، هَذَا يَكْفِي. كَمِ الْحِسَابُ الْإِجْمَالِيُّ؟", latin: "Laa, haadzaa yakfii. Kamil hisaabul ijmaaliyyu?", id: "Tidak, ini cukup. Berapa total tagihannya?" },
      { char: "Penjual", side: "left", ar: "الْحِسَابُ مِائَةُ أَلْفِ رُوبِيَّةٍ بَعْدَ التَّخْفِيضِ.", latin: "Al-hisaabu mi'atu alfi ruubiyyah ba'dat takhfiidh.", id: "Tagihannya seratus ribu rupiah setelah diskon." },
      { char: "Pembeli", side: "right", ar: "تَفَضَّلْ، هَذِهِ هِيَ النُّقُودُ.", latin: "Tafadhdhal, haadzihi hiyan nuquud.", id: "Silakan, ini uangnya." },
      { char: "Penjual", side: "left", ar: "شُكْرًا لَكَ. بَارَكَ اللَّهُ فِيكَ.", latin: "Syukran laka. Baarakallaahu fiika.", id: "Terima kasih. Semoga Allah memberkahimu." },
      { char: "Pembeli", side: "right", ar: "وَفِيكَ بَارَكَ. مَعَ السَّلَامَةِ.", latin: "Wa fiika baaraka. Ma'as salaamah.", id: "Dan semoga memberkahimu juga. Selamat tinggal." }
    ],
    vocabulary: [
      { ar: "سُوقٌ", latin: "Suuqun", id: "Pasar", category: "Tempat" },
      { ar: "دُكَّانٌ / مَحَلٌّ", latin: "Dukkaanun / Mahallun", id: "Toko / Kedai", category: "Tempat" },
      { ar: "بَائِعٌ", latin: "Baa'i'un", id: "Penjual (Laki-laki)", category: "Profesi" },
      { ar: "مُشْتَرٍ / زَبُونٌ", latin: "Musytarin / Zabuunun", id: "Pembeli / Pelanggan", category: "Profesi" },
      { ar: "بِضَاعَةٌ", latin: "Bidhaa'atun", id: "Barang dagangan", category: "Barang" },
      { ar: "سِعْرٌ / ثَمَنٌ", latin: "Si'run / Tsamanun", id: "Harga", category: "Transaksi" },
      { ar: "تَخْفِيضٌ", latin: "Takhfiidhun", id: "Diskon / Potongan Harga", category: "Transaksi" },
      { ar: "رَخِيصٌ", latin: "Rakhiishun", id: "Murah", category: "Sifat" },
      { ar: "غَالٍ", latin: "Ghaalin", id: "Mahal", category: "Sifat" },
      { ar: "طَازَجٌ", latin: "Thaazajun", id: "Segar", category: "Sifat" },
      { ar: "فَاكِهَةٌ", latin: "Faakihatun", id: "Buah-buahan", category: "Buah" },
      { ar: "تُفَّاحٌ", latin: "Tuffaahun", id: "Apel", category: "Buah" },
      { ar: "بُرْتُقَالٌ", latin: "Burtuqaalun", id: "Jeruk", category: "Buah" },
      { ar: "مَوْزٌ", latin: "Mauzun", id: "Pisang", category: "Buah" },
      { ar: "عِنَبٌ", latin: "Inabun", id: "Anggur", category: "Buah" },
      { ar: "بِطِّيخٌ", latin: "Bitthiikhun", id: "Semangka", category: "Buah" },
      { ar: "تَمْرٌ", latin: "Tamrun", id: "Kurma", category: "Buah" },
      { ar: "خُضْرَوَاتٌ", latin: "Khudhrawaatun", id: "Sayur-sayuran", category: "Sayur" },
      { ar: "طَمَاطِمُ", latin: "Thamaathimu", id: "Tomat", category: "Sayur" },
      { ar: "بَصَلٌ", latin: "Bashalun", id: "Bawang", category: "Sayur" },
      { ar: "ثُومٌ", latin: "Tsuumun", id: "Bawang putih", category: "Sayur" },
      { ar: "جَزَرٌ", latin: "Jazarun", id: "Wortel", category: "Sayur" },
      { ar: "بَطَاطِسُ", latin: "Bathaathisu", id: "Kentang", category: "Sayur" },
      { ar: "فُلْفُلٌ", latin: "Fulfulun", id: "Cabai / Lada", category: "Sayur" },
      { ar: "لَحْمٌ", latin: "Lahmun", id: "Daging", category: "Daging" },
      { ar: "دَجَاجٌ", latin: "Dajaajun", id: "Ayam", category: "Daging" },
      { ar: "سَمَكٌ", latin: "Samakun", id: "Ikan", category: "Daging" },
      { ar: "بَيْضٌ", latin: "Baidhun", id: "Telur", category: "Makanan" },
      { ar: "مِيزَانٌ", latin: "Miizaanun", id: "Timbangan", category: "Alat" },
      { ar: "كِيسٌ", latin: "Kiisun", id: "Kantong / Plastik", category: "Benda" },
      { ar: "مِائَةٌ", latin: "Mi'atun", id: "Seratus", category: "Angka" },
      { ar: "أَلْفٌ", latin: "Alfun", id: "Seribu", category: "Angka" },
      { ar: "عِشْرُونَ", latin: "Isyruuna", id: "Dua puluh", category: "Angka" },
      { ar: "خَمْسُونَ", latin: "Khamsuuna", id: "Lima puluh", category: "Angka" },
      { ar: "اِشْتَرَى - يَشْتَرِي", latin: "Isytaraa - Yasytarii", id: "Membeli", category: "Kata Kerja" },
      { ar: "بَاعَ - يَبِيعُ", latin: "Baa'a - Yabii'u", id: "Menjual", category: "Kata Kerja" },
      { ar: "دَفَعَ - يَدْفَعُ", latin: "Dafa'a - Yadfa'u", id: "Membayar", category: "Kata Kerja" },
      { ar: "سَاوَمَ - يُسَاوِمُ", latin: "Saawama - Yusaawimu", id: "Menawar", category: "Kata Kerja" },
      { ar: "وَافَقَ - يُوَافِقُ", latin: "Waafaqa - Yuwaafiqu", id: "Setuju", category: "Kata Kerja" }
    ],
    quiz: [
      {
        question: "Apa arti dari 'Suuqun' (سُوقٌ)?",
        arabic: "سُوقٌ",
        options: ["Sekolah", "Rumah Sakit", "Pasar", "Restoran"],
        correct: 2
      },
      {
        question: "Siapa yang disebut 'Baa'i'un' (بَائِعٌ)?",
        arabic: "بَائِعٌ",
        options: ["Pembeli", "Penjual", "Pelayan", "Dokter"],
        correct: 1
      },
      {
        question: "Terjemahkan 'Bikam kiilut tuffaah?'",
        arabic: "بِكَمْ كِيلُو التُّفَّاحِ؟",
        options: ["Apa ini apel segar?", "Berapa harga sekilo apel?", "Dimana sekilo apel?", "Siapa yang beli apel?"],
        correct: 1
      },
      {
        question: "Apa bahasa Arabnya 'Murah'?",
        arabic: "مُورَاه",
        options: ["غَالٍ", "طَازَجٌ", "رَخِيصٌ", "حُلْوٌ"],
        correct: 2
      },
      {
        question: "Kata 'Khudhrawaatun' (خُضْرَوَاتٌ) berarti...",
        arabic: "خُضْرَوَاتٌ",
        options: ["Buah-buahan", "Sayur-sayuran", "Minuman", "Daging"],
        correct: 1
      },
      {
        question: "Apa arti dari 'Takhfiidhun' (تَخْفِيضٌ)?",
        arabic: "تَخْفِيضٌ",
        options: ["Harga", "Uang", "Diskon / Potongan Harga", "Timbangan"],
        correct: 2
      },
      {
        question: "Bahasa Arab dari 'Bawang' adalah...",
        arabic: "بَاوَانْگ",
        options: ["طَمَاطِمُ", "ثُومٌ", "بَصَلٌ", "جَزَرٌ"],
        correct: 2
      },
      {
        question: "Apa arti dari fi'il 'Yasytarii' (يَشْتَرِي)?",
        arabic: "يَشْتَرِي",
        options: ["Membeli", "Menjual", "Membayar", "Menawar"],
        correct: 0
      },
      {
        question: "Angka 'Mi'atun' (مِائَةٌ) bernilai...",
        arabic: "مِائَةٌ",
        options: ["Sepuluh", "Seratus", "Seribu", "Sejuta"],
        correct: 1
      },
      {
        question: "Kalimat 'Haadzaa ghaalin jiddan!' (هَذَا غَالٍ جِدًّا) berarti...",
        arabic: "هَذَا غَالٍ جِدًّا!",
        options: ["Ini murah sekali!", "Ini manis sekali!", "Ini segar sekali!", "Ini mahal sekali!"],
        correct: 3
      }
    ]
  };
})();
