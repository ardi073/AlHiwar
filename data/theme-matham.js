(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || { themes: {} };
  window.AL_HIWAR_DATA.themes.matham = {
    id: "matham",
    name: "Di Restoran (Fi Al-Math'am)",
    arabic: "فِي المَطْعَمِ",
    icon: "bx-restaurant",
    dialogue: [
      { char: "Pelayan", side: "left", ar: "أَهْلًا وَسَهْلًا! أَيَّ خِدْمَةٍ يَا سَيِّدِي؟", latin: "Ahlan wa sahlan! Ayya khidmah yaa sayyidii?", id: "Selamat datang! Ada yang bisa dibantu, Tuan?" },
      { char: "Pelanggan", side: "right", ar: "أُرِيدُ طَاوِلَةً لِشَخْصَيْنِ، مِنْ فَضْلِكَ.", latin: "Uriidu thaawilatan lisyakhshaini, min fadhlik.", id: "Saya ingin meja untuk dua orang, tolong." },
      { char: "Pelayan", side: "left", ar: "تَفَضَّلْ مِنْ هُنَا. هَلْ هَذِهِ الطَّاوِلَةُ مُنَاسِبَةٌ؟", latin: "Tafadhdhal min hunaa. Hal haadzihith thaawilatu munaasibah?", id: "Silakan lewat sini. Apakah meja ini sesuai?" },
      { char: "Pelanggan", side: "right", ar: "نَعَمْ، مُمْتَازَةٌ. أَعْطِنِي قَائِمَةَ الطَّعَامِ.", latin: "Na'am, mumtaazah. A'thinii qaa'imatath tha'aam.", id: "Ya, bagus sekali. Beri saya daftar menu." },
      { char: "Pelayan", side: "left", ar: "تَفَضَّلِ الْقَائِمَةَ. مَاذَا تُحِبُّ أَنْ تَأْكُلَ؟", latin: "Tafadhdhalil qaa'imah. Maadzaa tuhibbu an ta'kula?", id: "Silakan menunya. Anda ingin makan apa?" },
      { char: "Pelanggan", side: "right", ar: "مَا هُوَ الطَّبَقُ الْخَاصُّ الْيَوْمَ؟", latin: "Maa huwath thabaqul khaashshul yauma?", id: "Apa hidangan spesial hari ini?" },
      { char: "Pelayan", side: "left", ar: "لَدَيْنَا دَجَاجٌ مَشْوِيٌّ مَعَ الْأَرُزِّ وَلَحْمٌ مَقْلِيٌّ.", latin: "Ladaynaa dajaajun masywiyyun ma'al aruzzi wa lahmun maqliyyun.", id: "Kami punya ayam bakar dengan nasi dan daging goreng." },
      { char: "Pelanggan", side: "right", ar: "أُرِيدُ الدَّجَاجَ الْمَشْوِيَّ وَسَلَطَةً خَضْرَاءَ.", latin: "Uriidud dajaajal masywiyya wa salathatan khadhraa'a.", id: "Saya ingin ayam bakar dan salad hijau." },
      { char: "Pelayan", side: "left", ar: "حَسَنًا. وَمَاذَا تَطْلُبُ لِلشُّرْبِ؟", latin: "Hasanan. Wa maadzaa tathlubu lisy syurbi?", id: "Baik. Dan apa pesanan Anda untuk minum?" },
      { char: "Pelanggan", side: "right", ar: "عَصِيرَ بُرْتُقَالٍ بَارِدٍ، بِدُونِ سُكَّرٍ كَثِيرٍ.", latin: "'Ashiira burtuqaalin baaridin, biduuni sukkarin katsiirin.", id: "Jus jeruk dingin, tanpa banyak gula." },
      { char: "Pelayan", side: "left", ar: "هَلْ تُرِيدُ حَسَاءً قَبْلَ الطَّعَامِ؟", latin: "Hal turiidu hasaa'an qablath tha'aami?", id: "Apakah Anda ingin sup sebelum makan?" },
      { char: "Pelanggan", side: "right", ar: "نَعَمْ، حَسَاءَ دَجَاجٍ سَاخِنٍ.", latin: "Na'am, hasaa'a dajaajin saakhinin.", id: "Ya, sup ayam panas." },
      { char: "Pelayan", side: "left", ar: "وَهَلْ تُرِيدُ شَيْئًا لِلتَّحْلِيَةِ بَعْدَ الطَّعَامِ؟", latin: "Wa hal turiidu syai'an lit tahliyati ba'dath tha'aami?", id: "Dan apakah Anda ingin sesuatu untuk pencuci mulut setelah makan?" },
      { char: "Pelanggan", side: "right", ar: "أُرِيدُ قِطْعَةَ كَعْكٍ بِالشُّوكُولَاتَةِ.", latin: "Uriidu qith'ata ka'kin bisy syuukuulaatah.", id: "Saya ingin sepotong kue cokelat." },
      { char: "Pelayan", side: "left", ar: "طَلَبُكَ سَيَكُونُ جَاهِزًا بَعْدَ عَشْرِ دَقَائِقَ.", latin: "Thalabuka sayakuunu jaahizan ba'da 'asyri daqaa'iq.", id: "Pesanan Anda akan siap dalam sepuluh menit." },
      { char: "Pelanggan", side: "right", ar: "شُكْرًا لَكَ، أَنَا جَائِعٌ جِدًّا.", latin: "Syukran laka, ana jaa'i'un jiddan.", id: "Terima kasih, saya sangat lapar." },
      { char: "Pelayan", side: "left", ar: "تَفَضَّلِ الطَّعَامَ، شَهِيَّةٌ طَيِّبَةٌ!", latin: "Tafadhdhalith tha'aama, syahiyyatun thayyibah!", id: "Silakan makanannya, selamat menikmati!" },
      { char: "Pelanggan", side: "right", ar: "الطَّعَامُ لَذِيذٌ جِدًّا! تَسْلَمُ يَدَاكَ.", latin: "Ath-tha'aamu ladziidzun jiddan! Taslamu yadaak.", id: "Makanannya sangat lezat! Diberkatilah tangan (koki) mu." },
      { char: "Pelayan", side: "left", ar: "بِالصِّحَّةِ وَالْعَافِيَةِ. هَلْ تَحْتَاجُ إِلَى شَيْءٍ آخَرَ؟", latin: "Bish shihhati wal 'aafiyah. Hal tahtaaju ilaa syai'in aakhar?", id: "Semoga sehat dan afiat. Apakah Anda butuh yang lain?" },
      { char: "Pelanggan", side: "right", ar: "لَا شُكْرًا. الْفَاتُورَةَ، مِنْ فَضْلِكَ.", latin: "Laa syukran. Al-faatuurata, min fadhlik.", id: "Tidak terima kasih. Tagihannya, tolong." },
      { char: "Pelayan", side: "left", ar: "تَفَضَّلْ. الْحِسَابُ عِشْرُونَ دُولَارًا.", latin: "Tafadhdhal. Al-hisaabu 'isyruuna duulaaran.", id: "Silakan. Tagihannya dua puluh dolar." },
      { char: "Pelanggan", side: "right", ar: "هَلْ يُمْكِنُنِي الدَّفْعُ بِالْبِطَاقَةِ الائْتِمَانِيَّةِ؟", latin: "Hal yumkinunid daf'u bil bithaaqatil i'timaaniyyah?", id: "Bisakah saya membayar dengan kartu kredit?" },
      { char: "Pelayan", side: "left", ar: "نَعَمْ، بِالتَّأْكِيدِ يَا سَيِّدِي.", latin: "Na'am, bit ta'kiidi yaa sayyidii.", id: "Ya, tentu saja Tuan." },
      { char: "Pelanggan", side: "right", ar: "هَذِهِ هِيَ الْبِطَاقَةُ.", latin: "Haadzihi hiyal bithaaqah.", id: "Ini kartunya." },
      { char: "Pelayan", side: "left", ar: "شُكْرًا لَكَ. هَذَا هُوَ الْإِيصَالُ.", latin: "Syukran laka. Haadzaa huwal iishaal.", id: "Terima kasih. Ini struknya." },
      { char: "Pelanggan", side: "right", ar: "وَهَذِهِ بَقْشِيشٌ لَكَ عَلَى خِدْمَتِكَ الْمُمَيَّزَةِ.", latin: "Wa haadzihi baqsyiisyun laka 'alaa khidmatikal mumayyazah.", id: "Dan ini tip untukmu atas pelayananmu yang istimewa." },
      { char: "Pelayan", side: "left", ar: "شُكْرًا جَزِيلًا! نَتَمَنَّى زِيَارَتَكَ مَرَّةً أُخْرَى.", latin: "Syukran jaziilan! Natamannaa ziyaarataka marratan ukhraa.", id: "Terima kasih banyak! Kami berharap kunjungan Anda lagi." },
      { char: "Pelanggan", side: "right", ar: "إِنْ شَاءَ اللَّهُ، سَأَعُودُ مَعَ عَائِلَتِي.", latin: "In syaa Allah, sa'a'uudu ma'a 'aa'ilatii.", id: "Insya Allah, saya akan kembali bersama keluarga saya." },
      { char: "Pelayan", side: "left", ar: "فِي حِفْظِ اللَّهِ وَرِعَايَتِهِ. مَعَ السَّلَامَةِ.", latin: "Fii hifzhillaahi wa ri'aayatih. Ma'as salaamah.", id: "Dalam penjagaan Allah dan perlindungan-Nya. Selamat tinggal." },
      { char: "Pelanggan", side: "right", ar: "مَعَ السَّلَامَةِ.", latin: "Ma'as salaamah.", id: "Selamat tinggal." }
    ],
    vocabulary: [
      { ar: "مَطْعَمٌ", latin: "Math'amun", id: "Restoran", category: "Tempat" },
      { ar: "قَائِمَةُ الطَّعَامِ", latin: "Qaa'imatuth tha'aam", id: "Daftar menu", category: "Restoran" },
      { ar: "طَاوِلَةٌ", latin: "Thaawilatun", id: "Meja", category: "Benda" },
      { ar: "نَادِلٌ / جَرْسُون", latin: "Naadilun / Jarsuun", id: "Pelayan (Laki-laki)", category: "Profesi" },
      { ar: "طَبَقٌ", latin: "Thabaqun", id: "Piring / Hidangan", category: "Benda" },
      { ar: "فَاتُورَةٌ / حِسَابٌ", latin: "Faatuurah / Hisaabun", id: "Tagihan", category: "Transaksi" },
      { ar: "أَرُزٌّ", latin: "Aruzzun", id: "Nasi", category: "Makanan" },
      { ar: "دَجَاجٌ", latin: "Dajaajun", id: "Ayam", category: "Makanan" },
      { ar: "لَحْمٌ", latin: "Lahmun", id: "Daging", category: "Makanan" },
      { ar: "سَمَكٌ", latin: "Samakun", id: "Ikan", category: "Makanan" },
      { ar: "حَسَاءٌ / شُورْبَةٌ", latin: "Hasaa'un / Syuurbatun", id: "Sup", category: "Makanan" },
      { ar: "سَلَطَةٌ", latin: "Salathatun", id: "Salad", category: "Makanan" },
      { ar: "خُبْزٌ", latin: "Khubzun", id: "Roti", category: "Makanan" },
      { ar: "بَيْضٌ", latin: "Baidhun", id: "Telur", category: "Makanan" },
      { ar: "مَاءٌ", latin: "Maa'un", id: "Air", category: "Minuman" },
      { ar: "عَصِيرٌ", latin: "Ashiirun", id: "Jus", category: "Minuman" },
      { ar: "شَايٌ", latin: "Syaayun", id: "Teh", category: "Minuman" },
      { ar: "قَهْوَةٌ", latin: "Qahwatun", id: "Kopi", category: "Minuman" },
      { ar: "حَلِيبٌ", latin: "Haliibun", id: "Susu", category: "Minuman" },
      { ar: "سُكَّرٌ", latin: "Sukkarun", id: "Gula", category: "Rasa" },
      { ar: "مِلْحٌ", latin: "Milhun", id: "Garam", category: "Rasa" },
      { ar: "تَحْلِيَةٌ", latin: "Tahliyatun", id: "Pencuci mulut (Dessert)", category: "Makanan" },
      { ar: "كَعْكَةٌ", latin: "Ka'katun", id: "Kue", category: "Makanan" },
      { ar: "مَشْوِيٌّ", latin: "Masywiyyun", id: "Bakar / Panggang", category: "Sifat Makanan" },
      { ar: "مَقْلِيٌّ", latin: "Maqliyyun", id: "Goreng", category: "Sifat Makanan" },
      { ar: "مَسْلُوقٌ", latin: "Masluuqun", id: "Rebus", category: "Sifat Makanan" },
      { ar: "لَذِيذٌ / شَهِيٌّ", latin: "Ladziidzun / Syahiyyun", id: "Lezat / Enak", category: "Rasa" },
      { ar: "حَارٌّ", latin: "Haarrun", id: "Pedas / Panas", category: "Rasa" },
      { ar: "حُلْوٌ", latin: "Hulwun", id: "Manis", category: "Rasa" },
      { ar: "حَامِضٌ", latin: "Haamidhun", id: "Asam", category: "Rasa" },
      { ar: "مُرٌّ", latin: "Murrun", id: "Pahit", category: "Rasa" },
      { ar: "مَالِحٌ", latin: "Maalihun", id: "Asin", category: "Rasa" },
      { ar: "بَارِدٌ", latin: "Baaridun", id: "Dingin", category: "Sifat" },
      { ar: "سَاخِنٌ", latin: "Saakhinun", id: "Panas", category: "Sifat" },
      { ar: "جَائِعٌ", latin: "Jaa'i'un", id: "Lapar", category: "Kondisi" },
      { ar: "عَطْشَانٌ", latin: "Athsyaanun", id: "Haus", category: "Kondisi" },
      { ar: "شَبْعَانٌ", latin: "Syab'aanun", id: "Kenyang", category: "Kondisi" },
      { ar: "مِلْعَقَةٌ", latin: "Mil'aqatun", id: "Sendok", category: "Alat Makan" },
      { ar: "شَوْكَةٌ", latin: "Syaukatun", id: "Garpu", category: "Alat Makan" },
      { ar: "سِكِّينٌ", latin: "Sikkiinun", id: "Pisau", category: "Alat Makan" },
      { ar: "كُوبٌ / كَأْسٌ", latin: "Kuubun / Ka'sun", id: "Gelas", category: "Alat Makan" },
      { ar: "فِنْجَانٌ", latin: "Finjaanun", id: "Cangkir", category: "Alat Makan" },
      { ar: "مِنْدِيلٌ", latin: "Mindiilun", id: "Tisu / Serbet", category: "Benda" },
      { ar: "طَلَبٌ", latin: "Thalabun", id: "Pesanan", category: "Restoran" },
      { ar: "وَجْبَةٌ", latin: "Wajbatun", id: "Porsi / Waktu makan", category: "Makanan" },
      { ar: "فُطُورٌ", latin: "Futhuurun", id: "Sarapan", category: "Waktu Makan" },
      { ar: "غَدَاءٌ", latin: "Ghadaa'un", id: "Makan siang", category: "Waktu Makan" },
      { ar: "عَشَاءٌ", latin: "Asyaa'un", id: "Makan malam", category: "Waktu Makan" },
      { ar: "نُقُودٌ / فُلُوسٌ", latin: "Nuquudun / Fuluusun", id: "Uang", category: "Transaksi" },
      { ar: "بِطَاقَةُ ائْتِمَانٍ", latin: "Bithaaqatu i'timaanin", id: "Kartu kredit", category: "Transaksi" },
      { ar: "بَقْشِيشٌ", latin: "Baqsyiisyun", id: "Uang tip", category: "Transaksi" },
      { ar: "صِرَافَةٌ / بَاقِي", latin: "Shiraafatun / Baaqii", id: "Uang kembalian", category: "Transaksi" },
      { ar: "تَفَضَّلْ", latin: "Tafadhdhal", id: "Silakan (Laki-laki)", category: "Ungkapan" },
      { ar: "مِنْ فَضْلِكَ", latin: "Min fadhlik", id: "Tolong / Permisi", category: "Ungkapan" },
      { ar: "أَكَلَ - يَأْكُلُ", latin: "Akala - Ya'kulu", id: "Makan", category: "Kata Kerja" },
      { ar: "شَرِبَ - يَشْرَبُ", latin: "Syariba - Yasyrabu", id: "Minum", category: "Kata Kerja" },
      { ar: "طَلَبَ - يَطْلُبُ", latin: "Thalaba - Yathlubu", id: "Memesan / Meminta", category: "Kata Kerja" },
      { ar: "دَفَعَ - يَدْفَعُ", latin: "Dafa'a - Yadfa'u", id: "Membayar", category: "Kata Kerja" },
      { ar: "أَحَبَّ - يُحِبُّ", latin: "Ahabba - Yuhibbu", id: "Menyukai", category: "Kata Kerja" },
      { ar: "أَرَادَ - يُرِيدُ", latin: "Araada - Yuriidu", id: "Menginginkan", category: "Kata Kerja" }
    ],
    quiz: [
      {
        question: "Apa arti dari 'Math'amun' (مَطْعَمٌ)?",
        arabic: "مَطْعَمٌ",
        options: ["Sekolah", "Restoran", "Masjid", "Pasar"],
        correct: 1
      },
      {
        question: "Terjemahkan ke bahasa Indonesia: 'Qaa'imatuth tha'aam'",
        arabic: "قَائِمَةُ الطَّعَامِ",
        options: ["Meja makan", "Daftar menu", "Tagihan", "Pesanan"],
        correct: 1
      },
      {
        question: "Apa bahasa Arabnya 'Nasi'?",
        arabic: "نَاسِي",
        options: ["أَرُزٌّ", "لَحْمٌ", "خُبْزٌ", "دَجَاجٌ"],
        correct: 0
      },
      {
        question: "Lengkapi kalimat berikut: 'Uriidu dajaajan ...' (Saya ingin ayam bakar)",
        arabic: "أُرِيدُ دَجَاجًا ...",
        options: ["مَقْلِيًّا", "مَسْلُوقًا", "مَشْوِيًّا", "بَارِدًا"],
        correct: 2
      },
      {
        question: "Apa arti 'Ashiirun' (عَصِيرٌ)?",
        arabic: "عَصِيرٌ",
        options: ["Air", "Kopi", "Susu", "Jus"],
        correct: 3
      },
      {
        question: "Bagaimana mengatakan 'Tagihannya, tolong' dalam bahasa Arab?",
        arabic: "التَّاجِيهَان",
        options: ["الْحِسَابُ، مِنْ فَضْلِكَ", "الْمَاءُ، مِنْ فَضْلِكَ", "الطَّعَامُ، مِنْ فَضْلِكَ", "الطَّاوِلَةُ، مِنْ فَضْلِكَ"],
        correct: 0
      },
      {
        question: "Apa arti kata 'Ladziidzun' (لَذِيذٌ)?",
        arabic: "لَذِيذٌ",
        options: ["Panas", "Lezat", "Asin", "Pedas"],
        correct: 1
      },
      {
        question: "Kata 'Mil'aqatun' (مِلْعَقَةٌ) berarti...",
        arabic: "مِلْعَقَةٌ",
        options: ["Sendok", "Garpu", "Pisau", "Piring"],
        correct: 0
      },
      {
        question: "Jika makanan terasa pedas, kita sebut...",
        arabic: "پِدَاس",
        options: ["حُلْوٌ", "مَالِحٌ", "حَارٌّ", "مُرٌّ"],
        correct: 2
      },
      {
        question: "Apa bahasa Arabnya 'Lapar'?",
        arabic: "لَاپَار",
        options: ["عَطْشَانٌ", "شَبْعَانٌ", "جَائِعٌ", "سَاخِنٌ"],
        correct: 2
      },
      {
        question: "Apa terjemahan dari 'Futhuurun' (فُطُورٌ)?",
        arabic: "فُطُورٌ",
        options: ["Makan siang", "Sarapan", "Makan malam", "Cemilan"],
        correct: 1
      },
      {
        question: "Apa arti dari kalimat 'Syahiyyatun thayyibah' (شَهِيَّةٌ طَيِّبَةٌ)?",
        arabic: "شَهِيَّةٌ طَيِّبَةٌ",
        options: ["Terima kasih banyak", "Selamat datang", "Selamat menikmati / Selamat makan", "Silakan duduk"],
        correct: 2
      },
      {
        question: "Kata 'Khubzun' (خُبْزٌ) berarti...",
        arabic: "خُبْزٌ",
        options: ["Telur", "Daging", "Ikan", "Roti"],
        correct: 3
      },
      {
        question: "Bahasa Arab dari 'Uang tip' adalah...",
        arabic: "اُوَانْگ تِيپ",
        options: ["فَاتُورَةٌ", "بَقْشِيشٌ", "صِرَافَةٌ", "نُقُودٌ"],
        correct: 1
      },
      {
        question: "Apa arti dari fi'il 'Yadfa'u' (يَدْفَعُ)?",
        arabic: "يَدْفَعُ",
        options: ["Makan", "Minum", "Memesan", "Membayar"],
        correct: 3
      }
    ]
  };
})();
