(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || { themes: {} };
  window.AL_HIWAR_DATA.themes.madrasah = {
    id: "madrasah",
    name: "Di Sekolah (Fi Al-Madrasah)",
    arabic: "فِي الْمَدْرَسَةِ",
    icon: "bx-book",

    dialogue: [
      { char: "Fatimah", side: "left", ar: "السَّلَامُ عَلَيْكُمْ يَا عَائِشَةُ!", latin: "As-salāmu 'alaykum yā 'Āisyah!", id: "Assalamualaikum Aisyah!" },
      { char: "Aisyah", side: "right", ar: "وَعَلَيْكُمُ السَّلَامُ يَا فَاطِمَةُ! كَيْفَ حَالُكِ؟", latin: "Wa 'alaykumus-salām yā Fāṭimah! Kayfa ḥāluki?", id: "Waalaikumsalam Fatimah! Apa kabar?" },
      { char: "Fatimah", side: "left", ar: "أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ. هَلْ أَنْتِ مُسْتَعِدَّةٌ لِلدِّرَاسَةِ الْيَوْمَ؟", latin: "Anā bikhairin wal-ḥamdu lillāh. Hal anti musta'iddah lid-dirāsah al-yawm?", id: "Aku baik alhamdulillah. Apakah kamu siap belajar hari ini?" },
      { char: "Aisyah", side: "right", ar: "نَعَمْ! عِنْدَنَا دُرُوسٌ كَثِيرَةٌ الْيَوْمَ.", latin: "Na'am! 'Indanā durūsun kathīrah al-yawm.", id: "Ya! Kita punya banyak pelajaran hari ini." },
      { char: "Fatimah", side: "left", ar: "مَا هُوَ الدَّرْسُ الْأَوَّلُ؟", latin: "Mā huwa ad-darsu al-awwal?", id: "Apa pelajaran pertama?" },
      { char: "Aisyah", side: "right", ar: "الدَّرْسُ الْأَوَّلُ هُوَ الرِّيَاضِيَّاتُ مَعَ الْأُسْتَاذِ أَحْمَدَ.", latin: "Ad-darsu al-awwal huwa ar-riyāḍiyyāt ma'a al-ustādh Aḥmad.", id: "Pelajaran pertama adalah Matematika dengan Ustadz Ahmad." },
      { char: "Fatimah", side: "left", ar: "أَنَا أُحِبُّ الرِّيَاضِيَّاتِ! هَلْ أَكْمَلْتِ الْوَاجِبَ الْمَنْزِلِيَّ؟", latin: "Anā uḥibbu ar-riyāḍiyyāt! Hal akmalti al-wājib al-manzilī?", id: "Aku suka Matematika! Apakah kamu sudah menyelesaikan PR?" },
      { char: "Aisyah", side: "right", ar: "نَعَمْ، لَكِنَّ بَعْضَ الْأَسْئِلَةِ كَانَتْ صَعْبَةً جِدًّا.", latin: "Na'am, lākinna ba'ḍa al-as'ilah kānat ṣa'bah jiddan.", id: "Ya, tapi beberapa soal sangat sulit." },
      { char: "Fatimah", side: "left", ar: "أَيُّ سُؤَالٍ كَانَ صَعْبًا عَلَيْكِ؟", latin: "Ayyu su'ālin kāna ṣa'ban 'alayki?", id: "Soal mana yang sulit bagimu?" },
      { char: "Aisyah", side: "right", ar: "السُّؤَالُ الْخَامِسُ عَنِ الْهَنْدَسَةِ. لَمْ أَفْهَمْهُ.", latin: "As-su'ālu al-khāmis 'an al-handasah. Lam afhamhu.", id: "Soal kelima tentang geometri. Aku tidak memahaminya." },
      { char: "Fatimah", side: "left", ar: "لَا تَقْلَقِي! سَأُسَاعِدُكِ قَبْلَ الدَّرْسِ.", latin: "Lā taqlaqī! Sa'usā'iduki qabla ad-dars.", id: "Jangan khawatir! Aku akan membantumu sebelum pelajaran." },
      { char: "Aisyah", side: "right", ar: "شُكْرًا جَزِيلًا! وَمَا الدَّرْسُ الثَّانِي؟", latin: "Syukran jazīlan! Wa mā ad-dars ath-thānī?", id: "Terima kasih banyak! Dan apa pelajaran kedua?" },
      { char: "Fatimah", side: "left", ar: "الدَّرْسُ الثَّانِي هُوَ اللُّغَةُ الْعَرَبِيَّةُ. أُحِبُّهَا كَثِيرًا!", latin: "Ad-dars ath-thānī huwa al-lughah al-'arabiyyah. Uḥibbuhā kathīran!", id: "Pelajaran kedua adalah Bahasa Arab. Aku sangat menyukainya!" },
      { char: "Aisyah", side: "right", ar: "أَنَا أَيْضًا! الْأُسْتَاذَةُ زَيْنَبُ مُعَلِّمَةٌ مُمْتَازَةٌ.", latin: "Anā ayḍan! Al-ustādzah Zaynab mu'allimatun mumtāzah.", id: "Aku juga! Ustadzah Zaynab adalah guru yang luar biasa." },
      { char: "Fatimah", side: "left", ar: "هَلْ سَنَكْتُبُ الْإِمْلَاءَ الْيَوْمَ؟", latin: "Hal sanaktubu al-imlā' al-yawm?", id: "Apakah kita akan menulis dikte hari ini?" },
      { char: "Aisyah", side: "right", ar: "نَعَمْ، وَسَنَقْرَأُ نَصًّا جَدِيدًا أَيْضًا.", latin: "Na'am, wa sanaqra'u naṣṣan jadīdan ayḍan.", id: "Ya, dan kita juga akan membaca teks baru." },
      { char: "Fatimah", side: "left", ar: "مَتَى يَبْدَأُ الِامْتِحَانُ النِّهَائِيُّ؟", latin: "Matā yabda'u al-imtiḥān an-nihā'ī?", id: "Kapan ujian akhir dimulai?" },
      { char: "Aisyah", side: "right", ar: "الِامْتِحَانُ يَبْدَأُ الْأُسْبُوعَ الْقَادِمَ يَوْمَ الِاثْنَيْنِ.", latin: "Al-imtiḥān yabda'u al-usbū' al-qādim yawm al-ithnayn.", id: "Ujian dimulai minggu depan hari Senin." },
      { char: "Fatimah", side: "left", ar: "يَجِبُ أَنْ نَدْرُسَ بِجِدٍّ! هَلْ نَذْهَبُ إِلَى الْمَكْتَبَةِ بَعْدَ الظُّهْرِ؟", latin: "Yajibu an nadrusa bi-jiddin! Hal nadhhabu ilā al-maktabah ba'da aẓ-ẓuhr?", id: "Kita harus belajar dengan giat! Apakah kita pergi ke perpustakaan setelah Zuhur?" },
      { char: "Aisyah", side: "right", ar: "فِكْرَةٌ مُمْتَازَةٌ! الْمَكْتَبَةُ هَادِئَةٌ وَمُنَاسِبَةٌ لِلدِّرَاسَةِ.", latin: "Fikratun mumtāzah! Al-maktabah hādi'ah wa munāsibah lid-dirāsah.", id: "Ide yang bagus! Perpustakaan tenang dan cocok untuk belajar." },
      { char: "Fatimah", side: "left", ar: "سَأَحْمِلُ كُتُبِي وَدَفَاتِرِي.", latin: "Sa'aḥmilu kutubī wa dafātirī.", id: "Aku akan membawa buku-buku dan buku tulisku." },
      { char: "Aisyah", side: "right", ar: "وَأَنَا سَأَحْمِلُ أَقْلَامِي وَمِسْطَرَتِي.", latin: "Wa anā sa'aḥmilu aqlāmī wa misṭaratī.", id: "Dan aku akan membawa pulpen-pulpenku dan penggarismu." },
      { char: "Fatimah", side: "left", ar: "هَلْ تُرِيدِينَ أَنْ نُرَاجِعَ مَادَّةَ الْعُلُومِ أَيْضًا؟", latin: "Hal turīdīna an nurāji'a māddah al-'ulūm ayḍan?", id: "Apakah kamu mau kita mengulang materi IPA juga?" },
      { char: "Aisyah", side: "right", ar: "بِالتَّأْكِيدِ! الْعُلُومُ مَادَّةٌ مُهِمَّةٌ لِلِامْتِحَانِ.", latin: "Bit-ta'kīd! Al-'ulūmu māddatun muhimmatun lil-imtiḥān.", id: "Tentu saja! IPA adalah materi penting untuk ujian." },
      { char: "Fatimah", side: "left", ar: "أَظُنُّ أَنَّ مُعَلِّمَ التَّارِيخِ سَيُعْطِينَا مُرَاجَعَةً.", latin: "Aẓunnu anna mu'allim at-tārīkh sa-yu'ṭīnā murāja'ah.", id: "Aku pikir guru Sejarah akan memberikan kita ulasan." },
      { char: "Aisyah", side: "right", ar: "نَعَمْ، الْأُسْتَاذُ عُمَرُ دَائِمًا يُسَاعِدُنَا فِي الْمُرَاجَعَةِ.", latin: "Na'am, al-ustādh 'Umar dā'iman yusā'idunā fī al-murāja'ah.", id: "Ya, Ustadz Umar selalu membantu kita dalam ulasan." },
      { char: "Fatimah", side: "left", ar: "هَيَّا نَذْهَبُ إِلَى الْفَصْلِ الْآنَ. الْجَرَسُ سَيَرِنُّ قَرِيبًا.", latin: "Hayyā nadhhabu ilā al-faṣl al-ān. Al-jaras sayarinnu qarīban.", id: "Ayo kita pergi ke kelas sekarang. Bel akan segera berbunyi." },
      { char: "Aisyah", side: "right", ar: "هَيَّا بِنَا! لَا نُرِيدُ أَنْ نَتَأَخَّرَ.", latin: "Hayyā binā! Lā nurīdu an nata'akhkhara.", id: "Ayo! Kita tidak mau terlambat." },
      { char: "Fatimah", side: "left", ar: "أَتَمَنَّى لَكِ يَوْمًا دِرَاسِيًّا سَعِيدًا!", latin: "Atamannā laki yawman dirāsiyyan sa'īdan!", id: "Aku berharap hari belajar yang menyenangkan untukmu!" },
      { char: "Aisyah", side: "right", ar: "وَأَنْتِ كَذَلِكَ! بِالتَّوْفِيقِ فِي الدُّرُوسِ!", latin: "Wa anti kadhālik! Bit-tawfīq fid-durūs!", id: "Kamu juga! Semoga sukses di pelajaran!" }
    ],

    vocabulary: [
      // === Sekolah (30) ===
      { ar: "مَدْرَسَةٌ", latin: "madrasah", id: "sekolah", category: "Sekolah" },
      { ar: "فَصْلٌ", latin: "faṣl", id: "kelas", category: "Sekolah" },
      { ar: "مَكْتَبٌ", latin: "maktab", id: "meja", category: "Sekolah" },
      { ar: "كُرْسِيٌّ", latin: "kursīy", id: "kursi", category: "Sekolah" },
      { ar: "سَبُّورَةٌ", latin: "sabbūrah", id: "papan tulis", category: "Sekolah" },
      { ar: "مُعَلِّمٌ", latin: "mu'allim", id: "guru (lk)", category: "Sekolah" },
      { ar: "مُعَلِّمَةٌ", latin: "mu'allimah", id: "guru (pr)", category: "Sekolah" },
      { ar: "تِلْمِيذٌ", latin: "tilmīdh", id: "murid (lk)", category: "Sekolah" },
      { ar: "تِلْمِيذَةٌ", latin: "tilmīdhah", id: "murid (pr)", category: "Sekolah" },
      { ar: "مُدِيرٌ", latin: "mudīr", id: "kepala sekolah", category: "Sekolah" },
      { ar: "دَرْسٌ", latin: "dars", id: "pelajaran", category: "Sekolah" },
      { ar: "وَاجِبٌ مَنْزِلِيٌّ", latin: "wājib manzilīy", id: "pekerjaan rumah (PR)", category: "Sekolah" },
      { ar: "جَدْوَلٌ", latin: "jadwal", id: "jadwal", category: "Sekolah" },
      { ar: "حِصَّةٌ", latin: "ḥiṣṣah", id: "jam pelajaran", category: "Sekolah" },
      { ar: "إِجَازَةٌ", latin: "ijāzah", id: "liburan", category: "Sekolah" },
      { ar: "جَرَسٌ", latin: "jaras", id: "bel", category: "Sekolah" },
      { ar: "زِيٌّ مَدْرَسِيٌّ", latin: "zīy madrasīy", id: "seragam sekolah", category: "Sekolah" },
      { ar: "شَهَادَةٌ", latin: "shahādah", id: "ijazah", category: "Sekolah" },
      { ar: "فَصْلٌ دِرَاسِيٌّ", latin: "faṣl dirāsīy", id: "semester", category: "Sekolah" },
      { ar: "عُطْلَةٌ", latin: "'uṭlah", id: "hari libur", category: "Sekolah" },
      { ar: "حَفْلَةُ التَّخَرُّجِ", latin: "ḥaflatu at-takharruj", id: "wisuda", category: "Sekolah" },
      { ar: "حَضَانَةٌ", latin: "ḥaḍānah", id: "TK", category: "Sekolah" },
      { ar: "طَابُورٌ", latin: "ṭābūr", id: "barisan/upacara", category: "Sekolah" },
      { ar: "نَشِيدٌ", latin: "nasyīd", id: "lagu/nasyid", category: "Sekolah" },
      { ar: "مَادَّةٌ", latin: "māddah", id: "mata pelajaran", category: "Sekolah" },
      { ar: "حَقِيبَةٌ مَدْرَسِيَّةٌ", latin: "ḥaqībah madrasiyyah", id: "tas sekolah", category: "Sekolah" },
      { ar: "مَقْعَدٌ", latin: "maq'ad", id: "tempat duduk", category: "Sekolah" },
      { ar: "نِظَامٌ", latin: "niẓām", id: "peraturan", category: "Sekolah" },
      { ar: "غِيَابٌ", latin: "ghiyāb", id: "absen/ketidakhadiran", category: "Sekolah" },
      { ar: "حُضُورٌ", latin: "ḥuḍūr", id: "kehadiran", category: "Sekolah" },

      // === Mata Pelajaran (25) ===
      { ar: "رِيَاضِيَّاتٌ", latin: "riyāḍiyyāt", id: "matematika", category: "Mata Pelajaran" },
      { ar: "عُلُومٌ", latin: "'ulūm", id: "ilmu pengetahuan alam", category: "Mata Pelajaran" },
      { ar: "تَارِيخٌ", latin: "tārīkh", id: "sejarah", category: "Mata Pelajaran" },
      { ar: "جُغْرَافِيَا", latin: "jughrāfiyā", id: "geografi", category: "Mata Pelajaran" },
      { ar: "لُغَةٌ عَرَبِيَّةٌ", latin: "lughah 'arabiyyah", id: "bahasa Arab", category: "Mata Pelajaran" },
      { ar: "لُغَةٌ إِنْجِلِيزِيَّةٌ", latin: "lughah injilīziyyah", id: "bahasa Inggris", category: "Mata Pelajaran" },
      { ar: "فِيزِيَاءُ", latin: "fīziyā'", id: "fisika", category: "Mata Pelajaran" },
      { ar: "كِيمِيَاءُ", latin: "kīmiyā'", id: "kimia", category: "Mata Pelajaran" },
      { ar: "أَحْيَاءُ", latin: "aḥyā'", id: "biologi", category: "Mata Pelajaran" },
      { ar: "تَرْبِيَةٌ إِسْلَامِيَّةٌ", latin: "tarbiyah islāmiyyah", id: "pendidikan agama Islam", category: "Mata Pelajaran" },
      { ar: "تَرْبِيَةٌ بَدَنِيَّةٌ", latin: "tarbiyah badaniyyah", id: "pendidikan jasmani", category: "Mata Pelajaran" },
      { ar: "فُنُونٌ", latin: "funūn", id: "kesenian", category: "Mata Pelajaran" },
      { ar: "مُوسِيقَى", latin: "mūsīqā", id: "musik", category: "Mata Pelajaran" },
      { ar: "حَاسُوبٌ", latin: "ḥāsūb", id: "komputer", category: "Mata Pelajaran" },
      { ar: "اِقْتِصَادٌ", latin: "iqtiṣād", id: "ekonomi", category: "Mata Pelajaran" },
      { ar: "فَلْسَفَةٌ", latin: "falsafah", id: "filsafat", category: "Mata Pelajaran" },
      { ar: "أَدَبٌ", latin: "adab", id: "sastra", category: "Mata Pelajaran" },
      { ar: "هَنْدَسَةٌ", latin: "handasah", id: "geometri", category: "Mata Pelajaran" },
      { ar: "جَبْرٌ", latin: "jabr", id: "aljabar", category: "Mata Pelajaran" },
      { ar: "قُرْآنٌ", latin: "qur'ān", id: "Al-Quran", category: "Mata Pelajaran" },
      { ar: "حَدِيثٌ", latin: "ḥadīth", id: "Hadits", category: "Mata Pelajaran" },
      { ar: "فِقْهٌ", latin: "fiqh", id: "fikih", category: "Mata Pelajaran" },
      { ar: "نَحْوٌ", latin: "naḥw", id: "tata bahasa Arab", category: "Mata Pelajaran" },
      { ar: "صَرْفٌ", latin: "ṣarf", id: "morfologi Arab", category: "Mata Pelajaran" },
      { ar: "خَطٌّ", latin: "khaṭṭ", id: "kaligrafi", category: "Mata Pelajaran" },

      // === Alat Tulis (25) ===
      { ar: "قَلَمٌ", latin: "qalam", id: "pena/pulpen", category: "Alat Tulis" },
      { ar: "قَلَمُ رَصَاصٍ", latin: "qalamu raṣāṣ", id: "pensil", category: "Alat Tulis" },
      { ar: "مِمْحَاةٌ", latin: "mimḥāh", id: "penghapus", category: "Alat Tulis" },
      { ar: "مِسْطَرَةٌ", latin: "misṭarah", id: "penggaris", category: "Alat Tulis" },
      { ar: "دَفْتَرٌ", latin: "daftar", id: "buku tulis", category: "Alat Tulis" },
      { ar: "كِتَابٌ", latin: "kitāb", id: "buku", category: "Alat Tulis" },
      { ar: "كُرَّاسَةٌ", latin: "kurrāsah", id: "buku catatan", category: "Alat Tulis" },
      { ar: "مِقْلَمَةٌ", latin: "miqlamah", id: "tempat pensil", category: "Alat Tulis" },
      { ar: "بَرَّايَةٌ", latin: "barrāyah", id: "rautan", category: "Alat Tulis" },
      { ar: "لَاصِقٌ", latin: "lāṣiq", id: "lem/perekat", category: "Alat Tulis" },
      { ar: "مِقَصٌّ", latin: "miqaṣṣ", id: "gunting", category: "Alat Tulis" },
      { ar: "وَرَقَةٌ", latin: "waraqah", id: "kertas", category: "Alat Tulis" },
      { ar: "حِبْرٌ", latin: "ḥibr", id: "tinta", category: "Alat Tulis" },
      { ar: "طَبَاشِيرُ", latin: "ṭabāshīr", id: "kapur", category: "Alat Tulis" },
      { ar: "قَلَمُ تَلْوِينٍ", latin: "qalamu talwīn", id: "pensil warna", category: "Alat Tulis" },
      { ar: "قَلَمُ تَحْدِيدٍ", latin: "qalamu taḥdīd", id: "spidol", category: "Alat Tulis" },
      { ar: "خَرِيطَةٌ", latin: "kharīṭah", id: "peta", category: "Alat Tulis" },
      { ar: "مُعْجَمٌ", latin: "mu'jam", id: "kamus", category: "Alat Tulis" },
      { ar: "أَطْلَسٌ", latin: "aṭlas", id: "atlas", category: "Alat Tulis" },
      { ar: "لَوْحَةٌ", latin: "lawḥah", id: "papan", category: "Alat Tulis" },
      { ar: "شَرِيطٌ لَاصِقٌ", latin: "syarīṭ lāṣiq", id: "selotip", category: "Alat Tulis" },
      { ar: "دَبُّوسٌ", latin: "dabbūs", id: "peniti", category: "Alat Tulis" },
      { ar: "مِنْقَلَةٌ", latin: "minqalah", id: "busur derajat", category: "Alat Tulis" },
      { ar: "فِرْجَارٌ", latin: "firjār", id: "jangka", category: "Alat Tulis" },
      { ar: "آلَةٌ حَاسِبَةٌ", latin: "ālah ḥāsibah", id: "kalkulator", category: "Alat Tulis" },

      // === Waktu (30) ===
      { ar: "سَاعَةٌ", latin: "sā'ah", id: "jam", category: "Waktu" },
      { ar: "دَقِيقَةٌ", latin: "daqīqah", id: "menit", category: "Waktu" },
      { ar: "ثَانِيَةٌ", latin: "thāniyah", id: "detik", category: "Waktu" },
      { ar: "صَبَاحٌ", latin: "ṣabāḥ", id: "pagi", category: "Waktu" },
      { ar: "ظُهْرٌ", latin: "ẓuhr", id: "siang", category: "Waktu" },
      { ar: "عَصْرٌ", latin: "'aṣr", id: "sore", category: "Waktu" },
      { ar: "مَسَاءٌ", latin: "masā'", id: "malam", category: "Waktu" },
      { ar: "الْيَوْمَ", latin: "al-yawm", id: "hari ini", category: "Waktu" },
      { ar: "غَدًا", latin: "ghadan", id: "besok", category: "Waktu" },
      { ar: "أَمْسِ", latin: "amsi", id: "kemarin", category: "Waktu" },
      { ar: "أُسْبُوعٌ", latin: "usbū'", id: "minggu", category: "Waktu" },
      { ar: "شَهْرٌ", latin: "syahr", id: "bulan", category: "Waktu" },
      { ar: "سَنَةٌ", latin: "sanah", id: "tahun", category: "Waktu" },
      { ar: "يَوْمُ الْأَحَدِ", latin: "yawm al-aḥad", id: "hari Minggu", category: "Waktu" },
      { ar: "يَوْمُ الِاثْنَيْنِ", latin: "yawm al-ithnayn", id: "hari Senin", category: "Waktu" },
      { ar: "يَوْمُ الثُّلَاثَاءِ", latin: "yawm ath-thulāthā'", id: "hari Selasa", category: "Waktu" },
      { ar: "يَوْمُ الْأَرْبِعَاءِ", latin: "yawm al-arbi'ā'", id: "hari Rabu", category: "Waktu" },
      { ar: "يَوْمُ الْخَمِيسِ", latin: "yawm al-khamīs", id: "hari Kamis", category: "Waktu" },
      { ar: "يَوْمُ الْجُمُعَةِ", latin: "yawm al-jumu'ah", id: "hari Jumat", category: "Waktu" },
      { ar: "يَوْمُ السَّبْتِ", latin: "yawm as-sabt", id: "hari Sabtu", category: "Waktu" },
      { ar: "صَبَاحًا", latin: "ṣabāḥan", id: "pada pagi hari", category: "Waktu" },
      { ar: "مَسَاءً", latin: "masā'an", id: "pada malam hari", category: "Waktu" },
      { ar: "قَبْلَ", latin: "qabla", id: "sebelum", category: "Waktu" },
      { ar: "بَعْدَ", latin: "ba'da", id: "setelah", category: "Waktu" },
      { ar: "الْآنَ", latin: "al-ān", id: "sekarang", category: "Waktu" },
      { ar: "دَائِمًا", latin: "dā'iman", id: "selalu", category: "Waktu" },
      { ar: "أَحْيَانًا", latin: "aḥyānan", id: "kadang-kadang", category: "Waktu" },
      { ar: "مُبَكِّرًا", latin: "mubakkiran", id: "lebih awal", category: "Waktu" },
      { ar: "مُتَأَخِّرًا", latin: "muta'akhkhiran", id: "terlambat", category: "Waktu" },
      { ar: "فِي الْوَقْتِ", latin: "fī al-waqt", id: "tepat waktu", category: "Waktu" },

      // === Aktivitas Belajar (25) ===
      { ar: "دِرَاسَةٌ", latin: "dirāsah", id: "belajar", category: "Aktivitas Belajar" },
      { ar: "قِرَاءَةٌ", latin: "qirā'ah", id: "membaca", category: "Aktivitas Belajar" },
      { ar: "كِتَابَةٌ", latin: "kitābah", id: "menulis", category: "Aktivitas Belajar" },
      { ar: "اِسْتِمَاعٌ", latin: "istimā'", id: "mendengarkan", category: "Aktivitas Belajar" },
      { ar: "مُحَادَثَةٌ", latin: "muḥādathah", id: "percakapan", category: "Aktivitas Belajar" },
      { ar: "حِفْظٌ", latin: "ḥifẓ", id: "menghafal", category: "Aktivitas Belajar" },
      { ar: "فَهْمٌ", latin: "fahm", id: "memahami", category: "Aktivitas Belajar" },
      { ar: "تَدْرِيبٌ", latin: "tadrīb", id: "latihan", category: "Aktivitas Belajar" },
      { ar: "مُرَاجَعَةٌ", latin: "murāja'ah", id: "mengulang/review", category: "Aktivitas Belajar" },
      { ar: "بَحْثٌ", latin: "baḥth", id: "penelitian/riset", category: "Aktivitas Belajar" },
      { ar: "مُنَاقَشَةٌ", latin: "munāqasyah", id: "diskusi", category: "Aktivitas Belajar" },
      { ar: "تَقْدِيمٌ", latin: "taqdīm", id: "presentasi", category: "Aktivitas Belajar" },
      { ar: "تَلْخِيصٌ", latin: "talkhīṣ", id: "meringkas", category: "Aktivitas Belajar" },
      { ar: "تَرْجَمَةٌ", latin: "tarjamah", id: "terjemahan", category: "Aktivitas Belajar" },
      { ar: "إِمْلَاءٌ", latin: "imlā'", id: "dikte", category: "Aktivitas Belajar" },
      { ar: "تَعْبِيرٌ", latin: "ta'bīr", id: "karangan", category: "Aktivitas Belajar" },
      { ar: "نَقْلٌ", latin: "naql", id: "menyalin", category: "Aktivitas Belajar" },
      { ar: "حَلُّ الْمَسَائِلِ", latin: "ḥallu al-masā'il", id: "memecahkan soal", category: "Aktivitas Belajar" },
      { ar: "تَجْرِبَةٌ", latin: "tajribah", id: "percobaan/eksperimen", category: "Aktivitas Belajar" },
      { ar: "مُذَاكَرَةٌ", latin: "mudhākarah", id: "belajar bersama", category: "Aktivitas Belajar" },
      { ar: "وَاجِبٌ", latin: "wājib", id: "tugas", category: "Aktivitas Belajar" },
      { ar: "مَشْرُوعٌ", latin: "masyrū'", id: "proyek", category: "Aktivitas Belajar" },
      { ar: "تَعَلُّمٌ", latin: "ta'allum", id: "pembelajaran", category: "Aktivitas Belajar" },
      { ar: "تَعْلِيمٌ", latin: "ta'līm", id: "pengajaran", category: "Aktivitas Belajar" },
      { ar: "تَفْكِيرٌ", latin: "tafkīr", id: "berpikir", category: "Aktivitas Belajar" },

      // === Gedung Sekolah (20) ===
      { ar: "مَكْتَبَةٌ", latin: "maktabah", id: "perpustakaan", category: "Gedung Sekolah" },
      { ar: "مُخْتَبَرٌ", latin: "mukhtabar", id: "laboratorium", category: "Gedung Sekolah" },
      { ar: "مَقْصَفٌ", latin: "maqṣaf", id: "kantin", category: "Gedung Sekolah" },
      { ar: "مَلْعَبٌ", latin: "mal'ab", id: "lapangan", category: "Gedung Sekolah" },
      { ar: "مَكْتَبُ الْمُدِيرِ", latin: "maktab al-mudīr", id: "kantor kepala sekolah", category: "Gedung Sekolah" },
      { ar: "بَوَّابَةٌ", latin: "bawwābah", id: "gerbang", category: "Gedung Sekolah" },
      { ar: "مَمَرٌّ", latin: "mamarr", id: "koridor", category: "Gedung Sekolah" },
      { ar: "حَمَّامٌ", latin: "ḥammām", id: "kamar mandi", category: "Gedung Sekolah" },
      { ar: "مُصَلَّى", latin: "muṣallā", id: "mushola", category: "Gedung Sekolah" },
      { ar: "قَاعَةٌ", latin: "qā'ah", id: "aula", category: "Gedung Sekolah" },
      { ar: "غُرْفَةُ الْمُعَلِّمِينَ", latin: "ghurfatu al-mu'allimīn", id: "ruang guru", category: "Gedung Sekolah" },
      { ar: "سَاحَةٌ", latin: "sāḥah", id: "halaman", category: "Gedung Sekolah" },
      { ar: "دَرَجٌ", latin: "daraj", id: "tangga", category: "Gedung Sekolah" },
      { ar: "طَابِقٌ", latin: "ṭābiq", id: "lantai/tingkat", category: "Gedung Sekolah" },
      { ar: "بَابٌ", latin: "bāb", id: "pintu", category: "Gedung Sekolah" },
      { ar: "نَافِذَةٌ", latin: "nāfidhah", id: "jendela", category: "Gedung Sekolah" },
      { ar: "مَوْقِفُ السَّيَّارَاتِ", latin: "mawqif as-sayyārāt", id: "tempat parkir", category: "Gedung Sekolah" },
      { ar: "حَدِيقَةٌ", latin: "ḥadīqah", id: "taman", category: "Gedung Sekolah" },
      { ar: "غُرْفَةُ الْفُنُونِ", latin: "ghurfatu al-funūn", id: "ruang seni", category: "Gedung Sekolah" },
      { ar: "غُرْفَةُ الْحَاسُوبِ", latin: "ghurfatu al-ḥāsūb", id: "ruang komputer", category: "Gedung Sekolah" },

      // === Ujian (15) ===
      { ar: "اِمْتِحَانٌ", latin: "imtiḥān", id: "ujian", category: "Ujian" },
      { ar: "اِخْتِبَارٌ", latin: "ikhtibār", id: "tes", category: "Ujian" },
      { ar: "دَرَجَةٌ", latin: "darajah", id: "nilai", category: "Ujian" },
      { ar: "نَتِيجَةٌ", latin: "natījah", id: "hasil", category: "Ujian" },
      { ar: "نَجَاحٌ", latin: "najāḥ", id: "lulus", category: "Ujian" },
      { ar: "رُسُوبٌ", latin: "rusūb", id: "tidak lulus", category: "Ujian" },
      { ar: "إِجَابَةٌ", latin: "ijābah", id: "jawaban", category: "Ujian" },
      { ar: "سُؤَالٌ", latin: "su'āl", id: "pertanyaan", category: "Ujian" },
      { ar: "صَحِيحٌ", latin: "ṣaḥīḥ", id: "benar", category: "Ujian" },
      { ar: "خَطَأٌ", latin: "khaṭa'", id: "salah", category: "Ujian" },
      { ar: "مُمْتَازٌ", latin: "mumtāz", id: "sangat baik", category: "Ujian" },
      { ar: "جَيِّدٌ", latin: "jayyid", id: "baik", category: "Ujian" },
      { ar: "مَقْبُولٌ", latin: "maqbūl", id: "cukup", category: "Ujian" },
      { ar: "تَقْدِيرٌ", latin: "taqdīr", id: "penilaian/peringkat", category: "Ujian" },
      { ar: "وَرَقَةُ الِامْتِحَانِ", latin: "waraqatu al-imtiḥān", id: "lembar ujian", category: "Ujian" },

      // === Kata Kerja (30) ===
      { ar: "ذَهَبَ", latin: "dhahaba", id: "pergi", category: "Kata Kerja" },
      { ar: "جَاءَ", latin: "jā'a", id: "datang", category: "Kata Kerja" },
      { ar: "جَلَسَ", latin: "jalasa", id: "duduk", category: "Kata Kerja" },
      { ar: "قَامَ", latin: "qāma", id: "berdiri", category: "Kata Kerja" },
      { ar: "فَتَحَ", latin: "fataḥa", id: "membuka", category: "Kata Kerja" },
      { ar: "أَغْلَقَ", latin: "aghlaqa", id: "menutup", category: "Kata Kerja" },
      { ar: "سَأَلَ", latin: "sa'ala", id: "bertanya", category: "Kata Kerja" },
      { ar: "أَجَابَ", latin: "ajāba", id: "menjawab", category: "Kata Kerja" },
      { ar: "عَلَّمَ", latin: "'allama", id: "mengajar", category: "Kata Kerja" },
      { ar: "تَعَلَّمَ", latin: "ta'allama", id: "belajar", category: "Kata Kerja" },
      { ar: "دَرَسَ", latin: "darasa", id: "mempelajari", category: "Kata Kerja" },
      { ar: "كَتَبَ", latin: "kataba", id: "menulis", category: "Kata Kerja" },
      { ar: "قَرَأَ", latin: "qara'a", id: "membaca", category: "Kata Kerja" },
      { ar: "سَمِعَ", latin: "sami'a", id: "mendengar", category: "Kata Kerja" },
      { ar: "تَكَلَّمَ", latin: "takallama", id: "berbicara", category: "Kata Kerja" },
      { ar: "حَفِظَ", latin: "ḥafiẓa", id: "menghafal", category: "Kata Kerja" },
      { ar: "فَهِمَ", latin: "fahima", id: "memahami", category: "Kata Kerja" },
      { ar: "نَجَحَ", latin: "najaḥa", id: "berhasil/lulus", category: "Kata Kerja" },
      { ar: "رَسَبَ", latin: "rasaba", id: "gagal/tidak lulus", category: "Kata Kerja" },
      { ar: "رَجَعَ", latin: "raja'a", id: "kembali", category: "Kata Kerja" },
      { ar: "دَخَلَ", latin: "dakhala", id: "masuk", category: "Kata Kerja" },
      { ar: "خَرَجَ", latin: "kharaja", id: "keluar", category: "Kata Kerja" },
      { ar: "نَظَرَ", latin: "naẓara", id: "melihat", category: "Kata Kerja" },
      { ar: "أَعْطَى", latin: "a'ṭā", id: "memberi", category: "Kata Kerja" },
      { ar: "أَخَذَ", latin: "akhadha", id: "mengambil", category: "Kata Kerja" },
      { ar: "وَضَعَ", latin: "waḍa'a", id: "meletakkan", category: "Kata Kerja" },
      { ar: "اِسْتَعَدَّ", latin: "ista'adda", id: "bersiap-siap", category: "Kata Kerja" },
      { ar: "سَاعَدَ", latin: "sā'ada", id: "membantu", category: "Kata Kerja" },
      { ar: "اِنْتَظَرَ", latin: "intaẓara", id: "menunggu", category: "Kata Kerja" },
      { ar: "اِسْتَخْدَمَ", latin: "istakhdama", id: "menggunakan", category: "Kata Kerja" }
    ],

    quiz: [
      {
        question: "Apa bahasa Arab dari 'sekolah'?",
        arabic: "مَدْرَسَةٌ",
        options: ["مَكْتَبَةٌ", "مَدْرَسَةٌ", "مَسْجِدٌ", "مَقْصَفٌ"],
        correct: 1
      },
      {
        question: "Apa arti dari 'قَلَمٌ'?",
        arabic: "قَلَمٌ",
        options: ["buku", "penghapus", "penggaris", "pena"],
        correct: 3
      },
      {
        question: "Apa bahasa Arab dari 'guru laki-laki'?",
        arabic: "مُعَلِّمٌ",
        options: ["مُعَلِّمٌ", "تِلْمِيذٌ", "مُدِيرٌ", "طَبِيبٌ"],
        correct: 0
      },
      {
        question: "Apa arti dari 'كِتَابٌ'?",
        arabic: "كِتَابٌ",
        options: ["meja", "kursi", "buku", "papan tulis"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'matematika'?",
        arabic: "رِيَاضِيَّاتٌ",
        options: ["عُلُومٌ", "تَارِيخٌ", "فِيزِيَاءُ", "رِيَاضِيَّاتٌ"],
        correct: 3
      },
      {
        question: "Apa bahasa Arab dari 'perpustakaan'?",
        arabic: "مَكْتَبَةٌ",
        options: ["مَكْتَبَةٌ", "مُخْتَبَرٌ", "مَقْصَفٌ", "مَلْعَبٌ"],
        correct: 0
      },
      {
        question: "Apa arti dari 'اِمْتِحَانٌ'?",
        arabic: "اِمْتِحَانٌ",
        options: ["pelajaran", "buku", "ujian", "jadwal"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'menulis'?",
        arabic: "كَتَبَ",
        options: ["قَرَأَ", "سَمِعَ", "كَتَبَ", "ذَهَبَ"],
        correct: 2
      },
      {
        question: "Apa arti dari 'فَصْلٌ'?",
        arabic: "فَصْلٌ",
        options: ["pintu", "jendela", "kelas", "tangga"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'pensil'?",
        arabic: "قَلَمُ رَصَاصٍ",
        options: ["مِسْطَرَةٌ", "قَلَمُ رَصَاصٍ", "مِمْحَاةٌ", "دَفْتَرٌ"],
        correct: 1
      },
      {
        question: "Apa arti dari 'سَبُّورَةٌ'?",
        arabic: "سَبُّورَةٌ",
        options: ["papan tulis", "buku tulis", "meja", "penggaris"],
        correct: 0
      },
      {
        question: "Apa bahasa Arab dari 'membaca'?",
        arabic: "قَرَأَ",
        options: ["كَتَبَ", "جَلَسَ", "قَرَأَ", "فَتَحَ"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'kantin'?",
        arabic: "مَقْصَفٌ",
        options: ["مَلْعَبٌ", "قَاعَةٌ", "مَقْصَفٌ", "حَمَّامٌ"],
        correct: 2
      },
      {
        question: "Apa arti dari 'دَرَسَ'?",
        arabic: "دَرَسَ",
        options: ["mempelajari", "bermain", "makan", "tidur"],
        correct: 0
      },
      {
        question: "Apa bahasa Arab dari 'sejarah'?",
        arabic: "تَارِيخٌ",
        options: ["جُغْرَافِيَا", "عُلُومٌ", "تَارِيخٌ", "أَدَبٌ"],
        correct: 2
      },
      {
        question: "Apa arti dari 'مِمْحَاةٌ'?",
        arabic: "مِمْحَاةٌ",
        options: ["rautan", "penghapus", "penggaris", "lem"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'pagi'?",
        arabic: "صَبَاحٌ",
        options: ["مَسَاءٌ", "ظُهْرٌ", "عَصْرٌ", "صَبَاحٌ"],
        correct: 3
      },
      {
        question: "Apa arti dari 'نَجَاحٌ'?",
        arabic: "نَجَاحٌ",
        options: ["gagal", "lulus", "ujian", "nilai"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'duduk'?",
        arabic: "جَلَسَ",
        options: ["قَامَ", "ذَهَبَ", "جَلَسَ", "دَخَلَ"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'bahasa Arab'?",
        arabic: "لُغَةٌ عَرَبِيَّةٌ",
        options: ["لُغَةٌ إِنْجِلِيزِيَّةٌ", "لُغَةٌ عَرَبِيَّةٌ", "تَارِيخٌ", "فِقْهٌ"],
        correct: 1
      },
      {
        question: "Apa arti dari 'بَوَّابَةٌ'?",
        arabic: "بَوَّابَةٌ",
        options: ["jendela", "pintu", "gerbang", "tangga"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'buku tulis'?",
        arabic: "دَفْتَرٌ",
        options: ["كِتَابٌ", "كُرَّاسَةٌ", "وَرَقَةٌ", "دَفْتَرٌ"],
        correct: 3
      },
      {
        question: "Apa arti dari 'مُخْتَبَرٌ'?",
        arabic: "مُخْتَبَرٌ",
        options: ["perpustakaan", "laboratorium", "kantin", "aula"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'bertanya'?",
        arabic: "سَأَلَ",
        options: ["أَجَابَ", "سَأَلَ", "كَتَبَ", "قَرَأَ"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'besok'?",
        arabic: "غَدًا",
        options: ["أَمْسِ", "الْيَوْمَ", "غَدًا", "الْآنَ"],
        correct: 2
      },
      {
        question: "Apa arti dari 'حَدِيقَةٌ'?",
        arabic: "حَدِيقَةٌ",
        options: ["lapangan", "koridor", "taman", "kantor"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'menghafal'?",
        arabic: "حَفِظَ",
        options: ["فَهِمَ", "دَرَسَ", "نَظَرَ", "حَفِظَ"],
        correct: 3
      },
      {
        question: "Apa arti dari 'أُسْبُوعٌ'?",
        arabic: "أُسْبُوعٌ",
        options: ["hari", "bulan", "minggu", "tahun"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'murid perempuan'?",
        arabic: "تِلْمِيذَةٌ",
        options: ["مُعَلِّمَةٌ", "تِلْمِيذَةٌ", "مُدِيرَةٌ", "طَبِيبَةٌ"],
        correct: 1
      },
      {
        question: "Apa arti dari 'سَاعَدَ'?",
        arabic: "سَاعَدَ",
        options: ["menunggu", "menggunakan", "membantu", "kembali"],
        correct: 2
      }
    ]
  };
})();
