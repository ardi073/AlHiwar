(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || { themes: {} };

  window.AL_HIWAR_DATA.themes.mathar = {
    id: "mathar",
    name: "Di Bandara (Fi Al-Mathar)",
    arabic: "فِي المَطَارِ",
    icon: "bx-plane",

    dialogue: [
      {
        char: "Petugas",
        side: "left",
        ar: "أَهْلًا وَسَهْلًا فِي المَطَارِ! كَيْفَ يُمْكِنُنِي مُسَاعَدَتُكَ؟",
        latin: "Ahlan wa sahlan fil mathaar! Kayfa yumkinunii musaa'adatuka?",
        id: "Selamat datang di bandara! Bagaimana saya bisa membantu Anda?"
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "أُرِيدُ تَسْجِيلَ الدُّخُولِ لِرِحْلَتِي إِلَى جَكَرْتَا.",
        latin: "Uriidu tasjiilad dukhuli lirihlati ilaa Jakarta.",
        id: "Saya ingin check-in untuk penerbangan saya ke Jakarta."
      },
      {
        char: "Petugas",
        side: "left",
        ar: "حَسَنًا، مِنْ فَضْلِكَ أَعْطِنِي جَوَازَ سَفَرِكَ وَتَذْكِرَتَكَ.",
        latin: "Hasanan, min fadhlika a'thinii jawaaza safarika wa tadzkirataka.",
        id: "Baik, tolong berikan paspor dan tiket Anda."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "تَفَضَّلْ، هَذَا جَوَازُ سَفَرِي وَهَذِهِ التَّذْكِرَةُ الإِلِكْتِرُونِيَّةُ.",
        latin: "Tafadhdhal, haadzaa jawaazu safarii wa haadzihi at-tadzkiratul ilikturuuniyyah.",
        id: "Silakan, ini paspor saya dan ini tiket elektroniknya."
      },
      {
        char: "Petugas",
        side: "left",
        ar: "شُكْرًا. كَمْ حَقِيبَةً مَعَكَ؟",
        latin: "Syukran. Kam haqiibatan ma'aka?",
        id: "Terima kasih. Berapa tas yang kamu bawa?"
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "مَعِي حَقِيبَتَانِ: حَقِيبَةٌ كَبِيرَةٌ وَحَقِيبَةُ يَدٍ.",
        latin: "Ma'ii haqiibataani: haqiibatun kabiiratun wa haqiibatu yadin.",
        id: "Saya bawa dua tas: satu tas besar dan satu tas tangan."
      },
      {
        char: "Petugas",
        side: "left",
        ar: "ضَعِ الحَقِيبَةَ الكَبِيرَةَ عَلَى المِيزَانِ مِنْ فَضْلِكَ.",
        latin: "Dha'il haqiibatal kabiirata 'alal miizaani min fadhlika.",
        id: "Taruh tas besar di atas timbangan, tolong."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "هَلْ وَزْنُ الحَقِيبَةِ مَقْبُولٌ؟",
        latin: "Hal waznul haqiibati maqbuulun?",
        id: "Apakah berat tasnya bisa diterima?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "نَعَمْ، الوَزْنُ عِشْرُونَ كِيلُوغْرَامًا. هَذَا ضِمْنَ الحَدِّ المَسْمُوحِ.",
        latin: "Na'am, al-waznu 'ishruuna kiiluughraaman. Haadzaa dhimnal haddil masmuuhi.",
        id: "Ya, beratnya dua puluh kilogram. Ini masih dalam batas yang diperbolehkan."
      },
      {
        char: "Petugas",
        side: "left",
        ar: "هَذِهِ بِطَاقَةُ صُعُودِكَ. مَقْعَدُكَ رَقْمُ ١٥ أ.",
        latin: "Haadzihi bithaqatu shu'uudika. Maq'aduka raqmu 15 A.",
        id: "Ini kartu boarding Anda. Kursi Anda nomor 15A."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "هَلْ يُمْكِنُنِي الحُصُولُ عَلَى مَقْعَدٍ بِجَانِبِ النَّافِذَةِ؟",
        latin: "Hal yumkinunii al-hushuulu 'alaa maq'adin bijaanibinnaafizati?",
        id: "Bisakah saya mendapatkan kursi di samping jendela?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "بِالطَّبْعِ! لَقَدْ غَيَّرْتُ مَقْعَدَكَ إِلَى ١٥ ف بِجَانِبِ النَّافِذَةِ.",
        latin: "Bith-thab'i! Laqad ghayyartu maq'adaka ilaa 15 F bijaanibin naafizati.",
        id: "Tentu saja! Saya sudah mengubah kursi Anda ke 15F di samping jendela."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "شُكْرًا جَزِيلًا. أَيْنَ نُقْطَةُ التَّفْتِيشِ الأَمْنِيِّ؟",
        latin: "Syukran jaziilan. Ayna nuqthatu at-taftiishil amnii?",
        id: "Terima kasih banyak. Di mana titik pemeriksaan keamanan?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "اِذْهَبْ إِلَى اليَمِينِ ثُمَّ اِمْشِ مُسْتَقِيمًا.",
        latin: "Idzhab ilal yamiini tsumma imsyi mustaqiiman.",
        id: "Pergi ke kanan lalu jalan lurus."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "عَفْوًا، هَلْ يَجِبُ أَنْ أُخْرِجَ الحَاسُوبَ المَحْمُولَ مِنَ الحَقِيبَةِ؟",
        latin: "'Afwan, hal yajibu an ukhrija al-hasuubal mahmuula minal haqiibati?",
        id: "Maaf, apakah saya harus mengeluarkan laptop dari tas?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "نَعَمْ، أَخْرِجِ الحَاسُوبَ وَالسَّوَائِلَ مِنْ حَقِيبَتِكَ.",
        latin: "Na'am, akhrijil hasuuba was-sawaa'ila min haqiibatika.",
        id: "Ya, keluarkan laptop dan cairan dari tas Anda."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "حَسَنًا، هَلْ أَمُرُّ مِنْ هُنَا؟",
        latin: "Hasanan, hal amurru min hunaa?",
        id: "Baik, apakah saya lewat dari sini?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "نَعَمْ، اُمْرُرْ مِنْ جِهَازِ الكَشْفِ مِنْ فَضْلِكَ.",
        latin: "Na'am, umrur min jihaazil kashfi min fadhlika.",
        id: "Ya, silakan lewat melalui alat pendeteksi."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "لَقَدْ مَرَرْتُ. هَلْ كُلُّ شَيْءٍ عَلَى مَا يُرَامُ؟",
        latin: "Laqad marartu. Hal kullu syay'in 'alaa maa yuraamu?",
        id: "Saya sudah lewat. Apakah semuanya baik-baik saja?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "نَعَمْ، كُلُّ شَيْءٍ بِخَيْرٍ. يُمْكِنُكَ المُتَابَعَةُ.",
        latin: "Na'am, kullu syay'in bikhayrin. Yumkinukal mutaaba'ah.",
        id: "Ya, semuanya baik. Anda bisa melanjutkan."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "مِنْ فَضْلِكَ، أَيْنَ بَوَّابَةُ رَقْمِ ثَمَانِيَةٍ؟",
        latin: "Min fadhlika, ayna bawwaabatu raqmi tsamaaniyatin?",
        id: "Tolong, di mana gerbang nomor delapan?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "اِمْشِ مُسْتَقِيمًا ثُمَّ اِنْعَطِفْ إِلَى اليَسَارِ. البَوَّابَةُ عَلَى يَمِينِكَ.",
        latin: "Imsyi mustaqiiman tsumma in'athif ilal yasaari. Al-bawwaabatu 'alaa yamiinika.",
        id: "Jalan lurus lalu belok ke kiri. Gerbangnya ada di sebelah kanan Anda."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "هَلْ عِنْدِي وَقْتٌ كَافٍ قَبْلَ الصُّعُودِ؟",
        latin: "Hal 'indii waqtun kaafin qabla ash-shu'uudi?",
        id: "Apakah saya punya cukup waktu sebelum boarding?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "نَعَمْ، الصُّعُودُ يَبْدَأُ بَعْدَ ثَلَاثِينَ دَقِيقَةً.",
        latin: "Na'am, ash-shu'uudu yabda'u ba'da tsalaatsiina daqiiqatan.",
        id: "Ya, boarding dimulai setelah tiga puluh menit."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "هَلْ يُمْكِنُنِي شِرَاءُ شَيْءٍ مِنَ السُّوقِ الحُرَّةِ؟",
        latin: "Hal yumkinunii syiraa'u syay'in minas suuqil hurrati?",
        id: "Bisakah saya membeli sesuatu dari toko bebas pajak?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "بِالتَّأْكِيدِ، السُّوقُ الحُرَّةُ عَلَى يَسَارِكَ قَبْلَ البَوَّابَةِ.",
        latin: "Bit-ta'kiidi, as-suuqul hurratu 'alaa yasaarika qablal bawwaabati.",
        id: "Tentu, toko bebas pajak ada di sebelah kiri sebelum gerbang."
      },
      {
        char: "Petugas",
        side: "left",
        ar: "اِنْتِبَاهٌ لِلرُّكَّابِ! يَبْدَأُ الصُّعُودُ الآنَ لِلرِّحْلَةِ رَقْمِ مِائَةٍ وَعِشْرِينَ.",
        latin: "Intibaahun lir-rukkaabi! Yabda'u ash-shu'uudul aana lir-rihlati raqmi mi'atin wa 'ishriina.",
        id: "Perhatian untuk penumpang! Boarding dimulai sekarang untuk penerbangan nomor 120."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "هَذِهِ رِحْلَتِي! أَيْنَ أَقِفُ فِي الصَّفِّ؟",
        latin: "Haadzihi rihlatii! Ayna aqifu fis shaffi?",
        id: "Itu penerbangan saya! Di mana saya mengantri?"
      },
      {
        char: "Petugas",
        side: "left",
        ar: "قِفْ فِي الصَّفِّ هُنَا مِنْ فَضْلِكَ. أَرِنِي بِطَاقَةَ الصُّعُودِ.",
        latin: "Qif fish shaffi hunaa min fadhlika. Arinii bithaqatash shu'uudi.",
        id: "Berdirilah di antrian di sini. Tunjukkan kartu boarding Anda."
      },
      {
        char: "Penumpang",
        side: "right",
        ar: "تَفَضَّلْ بِطَاقَةُ الصُّعُودِ. رِحْلَةٌ سَعِيدَةٌ لِلْجَمِيعِ إِنْ شَاءَ اللهُ!",
        latin: "Tafadhdhal bithaqatu ash-shu'uudi. Rihlatun sa'iidatun lil-jamii'i in syaa'a Allaahu!",
        id: "Ini kartu boarding. Semoga penerbangan menyenangkan untuk semua, insyaallah!"
      }
    ],

    vocabulary: [
      // === Bandara (~25) ===
      { ar: "مَطَارٌ", latin: "mathaarun", id: "bandara", category: "Bandara" },
      { ar: "صَالَةُ المُغَادَرَةِ", latin: "shaalatul mughaadirati", id: "ruang keberangkatan", category: "Bandara" },
      { ar: "صَالَةُ الوُصُولِ", latin: "shaalatul wushuuli", id: "ruang kedatangan", category: "Bandara" },
      { ar: "بَوَّابَةٌ", latin: "bawwaabatun", id: "gerbang", category: "Bandara" },
      { ar: "مَدْرَجٌ", latin: "madrajun", id: "landasan pacu", category: "Bandara" },
      { ar: "بُرْجُ المُرَاقَبَةِ", latin: "burjul muraaqabati", id: "menara pengawas", category: "Bandara" },
      { ar: "كَاوُنْتَرُ تَسْجِيلِ الدُّخُولِ", latin: "kaawuntaru tasjiilid dukhuli", id: "konter check-in", category: "Bandara" },
      { ar: "مِنْطَقَةُ اسْتِلَامِ الأَمْتِعَةِ", latin: "minthaqatu istilaamil amti'ati", id: "area pengambilan bagasi", category: "Bandara" },
      { ar: "جُمْرُكٌ", latin: "jumrukun", id: "bea cukai", category: "Bandara" },
      { ar: "مُرَاقَبَةُ الجَوَازَاتِ", latin: "muraaqabatul jawaazaati", id: "pemeriksaan paspor", category: "Bandara" },
      { ar: "سُوقٌ حُرَّةٌ", latin: "suuqun hurratun", id: "toko bebas pajak", category: "Bandara" },
      { ar: "صَالَةُ الِانْتِظَارِ", latin: "shaalatul intizhaari", id: "ruang tunggu", category: "Bandara" },
      { ar: "بِطَاقَةُ الصُّعُودِ", latin: "bithaqatush shu'uudi", id: "kartu boarding", category: "Bandara" },
      { ar: "حِزَامُ الأَمْتِعَةِ", latin: "hizaamul amti'ati", id: "sabuk bagasi", category: "Bandara" },
      { ar: "عَرَبَةُ الأَمْتِعَةِ", latin: "arabatul amti'ati", id: "troli bagasi", category: "Bandara" },
      { ar: "مَكْتَبُ المَعْلُومَاتِ", latin: "maktabul ma'luumaati", id: "meja informasi", category: "Bandara" },
      { ar: "تَفْتِيشٌ أَمْنِيٌّ", latin: "taftiishun amniyyun", id: "pemeriksaan keamanan", category: "Bandara" },
      { ar: "مِنْطَقَةُ الِانْتِظَارِ", latin: "minthaqatul intizhaari", id: "area tunggu", category: "Bandara" },
      { ar: "إِعْلَانٌ", latin: "i'laanun", id: "pengumuman", category: "Bandara" },
      { ar: "شُبَّاكُ التَّذَاكِرِ", latin: "syubbaakut tadzaakiri", id: "loket tiket", category: "Bandara" },
      { ar: "عُبُورٌ", latin: "ubuurun", id: "transit", category: "Bandara" },
      { ar: "مَوْقِفُ السَّيَّارَاتِ", latin: "mawqifus sayyaaraati", id: "tempat parkir", category: "Bandara" },
      { ar: "مَدْخَلٌ", latin: "madkhalun", id: "pintu masuk", category: "Bandara" },
      { ar: "مَخْرَجٌ", latin: "makhrajun", id: "pintu keluar", category: "Bandara" },
      { ar: "مَحَطَّةٌ طَرَفِيَّةٌ", latin: "mahatthatun tharafiyyatun", id: "terminal", category: "Bandara" },

      // === Transportasi (~25) ===
      { ar: "طَائِرَةٌ", latin: "thaa'iratun", id: "pesawat terbang", category: "Transportasi" },
      { ar: "حَافِلَةٌ", latin: "haafilatun", id: "bus", category: "Transportasi" },
      { ar: "سَيَّارَةُ أُجْرَةٍ", latin: "sayyaaratu ujratin", id: "taksi", category: "Transportasi" },
      { ar: "قِطَارٌ", latin: "qithaarun", id: "kereta api", category: "Transportasi" },
      { ar: "سَيَّارَةٌ", latin: "sayyaaratun", id: "mobil", category: "Transportasi" },
      { ar: "سَفِينَةٌ", latin: "safiinatun", id: "kapal", category: "Transportasi" },
      { ar: "دَرَّاجَةٌ نَارِيَّةٌ", latin: "darraajatun naariyyatun", id: "sepeda motor", category: "Transportasi" },
      { ar: "دَرَّاجَةٌ هَوَائِيَّةٌ", latin: "darraajatun hawaa'iyyatun", id: "sepeda", category: "Transportasi" },
      { ar: "طَائِرَةٌ مِرْوَحِيَّةٌ", latin: "thaa'iratun mirwahiyyatun", id: "helikopter", category: "Transportasi" },
      { ar: "مِتْرُو الأَنْفَاقِ", latin: "mitrul anfaaqi", id: "kereta bawah tanah", category: "Transportasi" },
      { ar: "قَارِبٌ", latin: "qaaribun", id: "perahu", category: "Transportasi" },
      { ar: "شَاحِنَةٌ", latin: "syaahinatun", id: "truk", category: "Transportasi" },
      { ar: "سَيَّارَةُ إِسْعَافٍ", latin: "sayyaaratu is'aafin", id: "ambulans", category: "Transportasi" },
      { ar: "عَبَّارَةٌ", latin: "abaaratun", id: "feri", category: "Transportasi" },
      { ar: "تِلِفِرِيكٌ", latin: "tilifirikun", id: "kereta gantung", category: "Transportasi" },
      { ar: "عَرَبَةٌ يَدَوِيَّةٌ", latin: "arabatun yadawiyyatun", id: "becak", category: "Transportasi" },
      { ar: "عَرَبَةٌ حِصَانِيَّةٌ", latin: "arabatun hishaaniyyatun", id: "delman", category: "Transportasi" },
      { ar: "دَرَّاجَةٌ بُخَارِيَّةٌ", latin: "darraajatun bukhaariyyatun", id: "skuter", category: "Transportasi" },
      { ar: "يَخْتٌ", latin: "yakhtun", id: "kapal pesiar", category: "Transportasi" },
      { ar: "طَائِرَةٌ نَفَّاثَةٌ", latin: "thaa'iratun naffaatsatun", id: "jet", category: "Transportasi" },
      { ar: "عَرَبَةُ قِطَارٍ", latin: "arabatu qithaarin", id: "gerbong", category: "Transportasi" },
      { ar: "حَافِلَةٌ صَغِيرَةٌ", latin: "haafilatun shaghiiratun", id: "minibus", category: "Transportasi" },
      { ar: "شَاحِنَةٌ صَغِيرَةٌ", latin: "syaahinatun shaghiiratun", id: "van", category: "Transportasi" },
      { ar: "تِرَامٌ", latin: "tiraamun", id: "trem", category: "Transportasi" },
      { ar: "مَرْكَبَةٌ حَرْبِيَّةٌ", latin: "markabatun harbiyyatun", id: "kereta perang", category: "Transportasi" },

      // === Dokumen (~20) ===
      { ar: "جَوَازُ سَفَرٍ", latin: "jawaazu safarin", id: "paspor", category: "Dokumen" },
      { ar: "تَأْشِيرَةٌ", latin: "ta'shiiratun", id: "visa", category: "Dokumen" },
      { ar: "تَذْكِرَةٌ", latin: "tadzkiratun", id: "tiket", category: "Dokumen" },
      { ar: "بِطَاقَةُ صُعُودٍ", latin: "bithaqatu shu'uudin", id: "kartu boarding", category: "Dokumen" },
      { ar: "بِطَاقَةُ هُوِيَّةٍ", latin: "bithaqatu huwiyyatin", id: "kartu identitas", category: "Dokumen" },
      { ar: "تَأْمِينُ السَّفَرِ", latin: "ta'miinus safari", id: "asuransi perjalanan", category: "Dokumen" },
      { ar: "بِطَاقَةُ الأَمْتِعَةِ", latin: "bithaqatul amti'ati", id: "label bagasi", category: "Dokumen" },
      { ar: "إِيصَالٌ", latin: "iishaalun", id: "kuitansi", category: "Dokumen" },
      { ar: "اِسْتِمَارَةٌ", latin: "istimaaratun", id: "formulir", category: "Dokumen" },
      { ar: "شَهَادَةٌ", latin: "syahaadatun", id: "sertifikat", category: "Dokumen" },
      { ar: "رُخْصَةٌ", latin: "rukhshatun", id: "lisensi", category: "Dokumen" },
      { ar: "تَصْرِيحٌ", latin: "tashriihun", id: "izin", category: "Dokumen" },
      { ar: "إِقْرَارٌ", latin: "iqraarun", id: "deklarasi", category: "Dokumen" },
      { ar: "خُطَّةُ الرِّحْلَةِ", latin: "khutthatur rihlati", id: "rencana perjalanan", category: "Dokumen" },
      { ar: "حَجْزٌ", latin: "hajzun", id: "reservasi", category: "Dokumen" },
      { ar: "تَأْكِيدٌ", latin: "ta'kiidun", id: "konfirmasi", category: "Dokumen" },
      { ar: "فَاتُورَةٌ", latin: "faatuuratun", id: "faktur", category: "Dokumen" },
      { ar: "خَتْمٌ", latin: "khatmun", id: "stempel", category: "Dokumen" },
      { ar: "خَاتَمٌ رَسْمِيٌّ", latin: "khaatamun rasmiyyun", id: "segel resmi", category: "Dokumen" },
      { ar: "وَثِيقَةٌ", latin: "watsiiqatun", id: "dokumen", category: "Dokumen" },

      // === Arah (~20) ===
      { ar: "يَمِينٌ", latin: "yamiinun", id: "kanan", category: "Arah" },
      { ar: "يَسَارٌ", latin: "yasaarun", id: "kiri", category: "Arah" },
      { ar: "مُسْتَقِيمٌ", latin: "mustaqiimun", id: "lurus", category: "Arah" },
      { ar: "فَوْقٌ", latin: "fawqun", id: "atas", category: "Arah" },
      { ar: "تَحْتٌ", latin: "tahtun", id: "bawah", category: "Arah" },
      { ar: "شَمَالٌ", latin: "syamaalun", id: "utara", category: "Arah" },
      { ar: "جَنُوبٌ", latin: "januubun", id: "selatan", category: "Arah" },
      { ar: "شَرْقٌ", latin: "syarqun", id: "timur", category: "Arah" },
      { ar: "غَرْبٌ", latin: "gharbun", id: "barat", category: "Arah" },
      { ar: "أَمَامٌ", latin: "amaamun", id: "depan", category: "Arah" },
      { ar: "خَلْفٌ", latin: "khalfun", id: "belakang", category: "Arah" },
      { ar: "بِجَانِبٌ", latin: "bijaanibun", id: "di samping", category: "Arah" },
      { ar: "بَيْنٌ", latin: "baynun", id: "antara", category: "Arah" },
      { ar: "فَوْقَ", latin: "fawqa", id: "di atas", category: "Arah" },
      { ar: "أَسْفَلَ", latin: "asfala", id: "di bawah", category: "Arah" },
      { ar: "قَرِيبٌ", latin: "qariibun", id: "dekat", category: "Arah" },
      { ar: "بَعِيدٌ", latin: "ba'iidun", id: "jauh", category: "Arah" },
      { ar: "دَاخِلٌ", latin: "daakhilun", id: "di dalam", category: "Arah" },
      { ar: "خَارِجٌ", latin: "khaarijun", id: "di luar", category: "Arah" },
      { ar: "مُقَابِلٌ", latin: "muqaabilun", id: "berseberangan", category: "Arah" },

      // === Tempat (~25) ===
      { ar: "مَطَارٌ", latin: "mathaarun", id: "bandara", category: "Tempat" },
      { ar: "مَحَطَّةٌ", latin: "mahatthatun", id: "stasiun", category: "Tempat" },
      { ar: "فُنْدُقٌ", latin: "funduqun", id: "hotel", category: "Tempat" },
      { ar: "مَطْعَمٌ", latin: "math'amun", id: "restoran", category: "Tempat" },
      { ar: "مَسْجِدٌ", latin: "masjidun", id: "masjid", category: "Tempat" },
      { ar: "مُسْتَشْفَى", latin: "mustasyfan", id: "rumah sakit", category: "Tempat" },
      { ar: "بَنْكٌ", latin: "bankun", id: "bank", category: "Tempat" },
      { ar: "سُوقٌ", latin: "suuqun", id: "pasar", category: "Tempat" },
      { ar: "حَدِيقَةٌ", latin: "hadiiqatun", id: "taman", category: "Tempat" },
      { ar: "شَاطِئٌ", latin: "syaathi'un", id: "pantai", category: "Tempat" },
      { ar: "جَبَلٌ", latin: "jabalun", id: "gunung", category: "Tempat" },
      { ar: "مَتْحَفٌ", latin: "mathafun", id: "museum", category: "Tempat" },
      { ar: "مَكْتَبَةٌ", latin: "maktabatun", id: "perpustakaan", category: "Tempat" },
      { ar: "جَامِعَةٌ", latin: "jaami'atun", id: "universitas", category: "Tempat" },
      { ar: "سِفَارَةٌ", latin: "sifaaratun", id: "kedutaan", category: "Tempat" },
      { ar: "مَرْكَزُ الشُّرْطَةِ", latin: "markazusy syurthati", id: "kantor polisi", category: "Tempat" },
      { ar: "مَكْتَبُ البَرِيدِ", latin: "maktabul bariidi", id: "kantor pos", category: "Tempat" },
      { ar: "صَيْدَلِيَّةٌ", latin: "shaydaliyyatun", id: "apotek", category: "Tempat" },
      { ar: "سِينِمَا", latin: "siiniimaa", id: "bioskop", category: "Tempat" },
      { ar: "مَسْرَحٌ", latin: "masrahun", id: "teater", category: "Tempat" },
      { ar: "مَلْعَبٌ", latin: "mal'abun", id: "stadion", category: "Tempat" },
      { ar: "مِينَاءٌ", latin: "miinaa'un", id: "pelabuhan", category: "Tempat" },
      { ar: "مَرْكَزُ التَّسَوُّقِ", latin: "markazut tasawwuqi", id: "pusat perbelanjaan", category: "Tempat" },
      { ar: "مَكْتَبٌ", latin: "maktabun", id: "kantor", category: "Tempat" },
      { ar: "مَدْرَسَةٌ", latin: "madrasatun", id: "sekolah", category: "Tempat" },

      // === Perjalanan (~25) ===
      { ar: "سَفَرٌ", latin: "safarun", id: "perjalanan", category: "Perjalanan" },
      { ar: "رِحْلَةٌ", latin: "rihlatun", id: "perjalanan/wisata", category: "Perjalanan" },
      { ar: "رِحْلَةٌ طَوِيلَةٌ", latin: "rihlatun thawilatun", id: "perjalanan panjang", category: "Perjalanan" },
      { ar: "رِحْلَةُ طَيَرَانٍ", latin: "rihlatu thayaraanin", id: "penerbangan", category: "Perjalanan" },
      { ar: "مُغَادَرَةٌ", latin: "mughaadratun", id: "keberangkatan", category: "Perjalanan" },
      { ar: "وُصُولٌ", latin: "wusuulun", id: "kedatangan", category: "Perjalanan" },
      { ar: "عُبُورٌ", latin: "ubuurun", id: "transit", category: "Perjalanan" },
      { ar: "تَأْخِيرٌ", latin: "ta'khiirun", id: "keterlambatan", category: "Perjalanan" },
      { ar: "إِلْغَاءٌ", latin: "ilghaa'un", id: "pembatalan", category: "Perjalanan" },
      { ar: "حَجْزٌ", latin: "hajzun", id: "reservasi", category: "Perjalanan" },
      { ar: "حَجْزٌ مُسْبَقٌ", latin: "hajzun musbaqun", id: "pemesanan", category: "Perjalanan" },
      { ar: "تَسْجِيلُ الدُّخُولِ", latin: "tasjiilud dukhuli", id: "check-in", category: "Perjalanan" },
      { ar: "تَسْجِيلُ الخُرُوجِ", latin: "tasjiilul khuruuji", id: "check-out", category: "Perjalanan" },
      { ar: "أَمْتِعَةٌ", latin: "amti'atun", id: "bagasi", category: "Perjalanan" },
      { ar: "حَقِيبَةُ سَفَرٍ", latin: "haqiibatu safarin", id: "koper", category: "Perjalanan" },
      { ar: "حَقِيبَةُ ظَهْرٍ", latin: "haqiibatu zhahrin", id: "ransel", category: "Perjalanan" },
      { ar: "جَوَازُ سَفَرٍ", latin: "jawaazu safarin", id: "paspor", category: "Perjalanan" },
      { ar: "تَأْشِيرَةٌ", latin: "ta'shiiratun", id: "visa", category: "Perjalanan" },
      { ar: "جُمْرُكٌ", latin: "jumrukun", id: "bea cukai", category: "Perjalanan" },
      { ar: "هِجْرَةٌ", latin: "hijratun", id: "imigrasi", category: "Perjalanan" },
      { ar: "جَوْلَةٌ", latin: "jawlatun", id: "tur", category: "Perjalanan" },
      { ar: "سِيَاحَةٌ", latin: "siyaahatun", id: "pariwisata", category: "Perjalanan" },
      { ar: "إِجَازَةٌ", latin: "ijaazatun", id: "liburan", category: "Perjalanan" },
      { ar: "وِجْهَةٌ", latin: "wijhatun", id: "tujuan", category: "Perjalanan" },
      { ar: "مُغَامَرَةٌ", latin: "mughaamaratun", id: "petualangan", category: "Perjalanan" },

      // === Kata Kerja Perjalanan (~25) ===
      { ar: "سَافَرَ", latin: "saafara", id: "bepergian", category: "Kata Kerja Perjalanan" },
      { ar: "طَارَ", latin: "thaara", id: "terbang", category: "Kata Kerja Perjalanan" },
      { ar: "هَبَطَ", latin: "habatha", id: "mendarat", category: "Kata Kerja Perjalanan" },
      { ar: "أَقْلَعَ", latin: "aqla'a", id: "lepas landas", category: "Kata Kerja Perjalanan" },
      { ar: "وَصَلَ", latin: "washala", id: "tiba", category: "Kata Kerja Perjalanan" },
      { ar: "غَادَرَ", latin: "ghaadara", id: "berangkat", category: "Kata Kerja Perjalanan" },
      { ar: "صَعِدَ", latin: "sha'ida", id: "naik (pesawat)", category: "Kata Kerja Perjalanan" },
      { ar: "نَزَلَ", latin: "nazala", id: "turun (pesawat)", category: "Kata Kerja Perjalanan" },
      { ar: "سَجَّلَ", latin: "sajjala", id: "mendaftar/check-in", category: "Kata Kerja Perjalanan" },
      { ar: "حَزَمَ", latin: "hazama", id: "mengemas", category: "Kata Kerja Perjalanan" },
      { ar: "فَتَحَ الحَقِيبَةَ", latin: "fataha al-haqiibata", id: "membongkar koper", category: "Kata Kerja Perjalanan" },
      { ar: "حَجَزَ", latin: "hajaza", id: "memesan", category: "Kata Kerja Perjalanan" },
      { ar: "حَجَزَ مُسْبَقًا", latin: "hajaza musbaqan", id: "memesan di muka", category: "Kata Kerja Perjalanan" },
      { ar: "أَلْغَى", latin: "alghaa", id: "membatalkan", category: "Kata Kerja Perjalanan" },
      { ar: "تَأَخَّرَ", latin: "ta'akhkhara", id: "terlambat", category: "Kata Kerja Perjalanan" },
      { ar: "اِنْتَظَرَ", latin: "intazhara", id: "menunggu", category: "Kata Kerja Perjalanan" },
      { ar: "أَسْرَعَ", latin: "asra'a", id: "bergegas", category: "Kata Kerja Perjalanan" },
      { ar: "رَكَضَ", latin: "rakadha", id: "berlari", category: "Kata Kerja Perjalanan" },
      { ar: "مَشَى", latin: "masyaa", id: "berjalan", category: "Kata Kerja Perjalanan" },
      { ar: "رَكِبَ", latin: "rakiba", id: "menaiki", category: "Kata Kerja Perjalanan" },
      { ar: "قَادَ", latin: "qaada", id: "mengemudi", category: "Kata Kerja Perjalanan" },
      { ar: "أَبْحَرَ", latin: "abhara", id: "berlayar", category: "Kata Kerja Perjalanan" },
      { ar: "اِسْتَكْشَفَ", latin: "istakshafa", id: "menjelajahi", category: "Kata Kerja Perjalanan" },
      { ar: "زَارَ", latin: "zaara", id: "mengunjungi", category: "Kata Kerja Perjalanan" },
      { ar: "عَادَ", latin: "'aada", id: "kembali", category: "Kata Kerja Perjalanan" },

      // === Waktu & Jadwal (~20) ===
      { ar: "جَدْوَلٌ", latin: "jadwalun", id: "jadwal", category: "Waktu & Jadwal" },
      { ar: "جَدْوَلُ المَوَاعِيدِ", latin: "jadwalul mawaa'iidi", id: "jadwal waktu", category: "Waktu & Jadwal" },
      { ar: "وَقْتُ المُغَادَرَةِ", latin: "waqtul mughaadrati", id: "waktu keberangkatan", category: "Waktu & Jadwal" },
      { ar: "وَقْتُ الوُصُولِ", latin: "waqtul wusuuli", id: "waktu kedatangan", category: "Waktu & Jadwal" },
      { ar: "فِي المَوْعِدِ", latin: "fil maw'idi", id: "tepat waktu", category: "Waktu & Jadwal" },
      { ar: "مُتَأَخِّرٌ", latin: "muta'akhkhirun", id: "terlambat", category: "Waktu & Jadwal" },
      { ar: "مُبَكِّرٌ", latin: "mubakkirun", id: "lebih awal", category: "Waktu & Jadwal" },
      { ar: "مُتَأَخِّرٌ", latin: "muta'akhkhirun", id: "terlambat", category: "Waktu & Jadwal" },
      { ar: "مُدَّةٌ", latin: "muddatun", id: "durasi", category: "Waktu & Jadwal" },
      { ar: "تَوَقُّفٌ مُؤَقَّتٌ", latin: "tawaqqufun mu'aqqatun", id: "transit sementara", category: "Waktu & Jadwal" },
      { ar: "رِحْلَةٌ مُتَّصِلَةٌ", latin: "rihlatun muttashilatun", id: "penerbangan lanjutan", category: "Waktu & Jadwal" },
      { ar: "رِحْلَةُ الصَّبَاحِ", latin: "rihlatush shabaahi", id: "penerbangan pagi", category: "Waktu & Jadwal" },
      { ar: "رِحْلَةُ المَسَاءِ", latin: "rihlatush masaa'i", id: "penerbangan malam", category: "Waktu & Jadwal" },
      { ar: "مُنْتَصَفُ اللَّيْلِ", latin: "muntashaful layli", id: "tengah malam", category: "Waktu & Jadwal" },
      { ar: "ظُهْرٌ", latin: "zhuhrun", id: "siang", category: "Waktu & Jadwal" },
      { ar: "رُبْعٌ", latin: "rub'un", id: "seperempat", category: "Waktu & Jadwal" },
      { ar: "نِصْفٌ", latin: "nishfun", id: "setengah", category: "Waktu & Jadwal" },
      { ar: "تَمَامًا", latin: "tamaaman", id: "tepat", category: "Waktu & Jadwal" },
      { ar: "تَقْرِيبًا", latin: "taqriiban", id: "kira-kira", category: "Waktu & Jadwal" },
      { ar: "عَدٌّ تَنَازُلِيٌّ", latin: "addun tanaazuliyyun", id: "hitung mundur", category: "Waktu & Jadwal" },

      // === Negara (~15) ===
      { ar: "المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ", latin: "al-mamlakatul 'arabiyyatus su'uudiyyatu", id: "Arab Saudi", category: "Negara" },
      { ar: "مِصْرُ", latin: "mishru", id: "Mesir", category: "Negara" },
      { ar: "إِنْدُونِيسِيَا", latin: "induuniisiyaa", id: "Indonesia", category: "Negara" },
      { ar: "مَالِيزِيَا", latin: "maaliiziyaa", id: "Malaysia", category: "Negara" },
      { ar: "تُرْكِيَا", latin: "turkiyaa", id: "Turki", category: "Negara" },
      { ar: "المَغْرِبُ", latin: "al-maghribu", id: "Maroko", category: "Negara" },
      { ar: "الإِمَارَاتُ العَرَبِيَّةُ المُتَّحِدَةُ", latin: "al-imaaraatul 'arabiyyatul muttahidatu", id: "Uni Emirat Arab", category: "Negara" },
      { ar: "الأُرْدُنُّ", latin: "al-urdunnu", id: "Yordania", category: "Negara" },
      { ar: "العِرَاقُ", latin: "al-'iraqu", id: "Irak", category: "Negara" },
      { ar: "سُورِيَا", latin: "suuriyaa", id: "Suriah", category: "Negara" },
      { ar: "فِلَسْطِينُ", latin: "filasthiinu", id: "Palestina", category: "Negara" },
      { ar: "لُبْنَانُ", latin: "lubnaanu", id: "Lebanon", category: "Negara" },
      { ar: "قَطَرُ", latin: "qatharu", id: "Qatar", category: "Negara" },
      { ar: "الكُوَيْتُ", latin: "al-kuwaytu", id: "Kuwait", category: "Negara" },
      { ar: "عُمَانُ", latin: "'umaanu", id: "Oman", category: "Negara" }
    ],

    quiz: [
      {
        question: "Apa bahasa Arab dari 'bandara'?",
        arabic: "مَطَارٌ",
        options: ["Masjid", "Bandara", "Stasiun", "Hotel"],
        correct: 1
      },
      {
        question: "Apa arti dari 'جَوَازُ سَفَرٍ'?",
        arabic: "جَوَازُ سَفَرٍ",
        options: ["Tiket", "Paspor", "Visa", "Kartu identitas"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'pesawat terbang'?",
        arabic: "طَائِرَةٌ",
        options: ["Helikopter", "Kapal", "Pesawat terbang", "Bus"],
        correct: 2
      },
      {
        question: "Apa arti dari 'بِطَاقَةُ الصُّعُودِ'?",
        arabic: "بِطَاقَةُ الصُّعُودِ",
        options: ["Kartu identitas", "Tiket kereta", "Kartu boarding", "Kartu kredit"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'kanan'?",
        arabic: "يَمِينٌ",
        options: ["Kanan", "Kiri", "Lurus", "Belakang"],
        correct: 0
      },
      {
        question: "Apa arti dari 'مُغَادَرَةٌ'?",
        arabic: "مُغَادَرَةٌ",
        options: ["Kedatangan", "Keberangkatan", "Pembatalan", "Keterlambatan"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'hotel'?",
        arabic: "فُنْدُقٌ",
        options: ["Restoran", "Rumah sakit", "Hotel", "Sekolah"],
        correct: 2
      },
      {
        question: "Apa arti dari 'تَذْكِرَةٌ'?",
        arabic: "تَذْكِرَةٌ",
        options: ["Paspor", "Tiket", "Visa", "Formulir"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'terbang'?",
        arabic: "طَارَ",
        options: ["Berlari", "Mendarat", "Terbang", "Berjalan"],
        correct: 2
      },
      {
        question: "Apa arti dari 'وُصُولٌ'?",
        arabic: "وُصُولٌ",
        options: ["Keberangkatan", "Transit", "Pembatalan", "Kedatangan"],
        correct: 3
      },
      {
        question: "Apa bahasa Arab dari 'kiri'?",
        arabic: "يَسَارٌ",
        options: ["Kanan", "Atas", "Kiri", "Bawah"],
        correct: 2
      },
      {
        question: "Apa arti dari 'حَقِيبَةُ سَفَرٍ'?",
        arabic: "حَقِيبَةُ سَفَرٍ",
        options: ["Ransel", "Koper", "Tas tangan", "Dompet"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'bea cukai'?",
        arabic: "جُمْرُكٌ",
        options: ["Imigrasi", "Bea cukai", "Keamanan", "Informasi"],
        correct: 1
      },
      {
        question: "Apa arti dari 'سَافَرَ'?",
        arabic: "سَافَرَ",
        options: ["Bepergian", "Mendarat", "Menunggu", "Berlari"],
        correct: 0
      },
      {
        question: "Apa bahasa Arab dari 'jadwal'?",
        arabic: "جَدْوَلٌ",
        options: ["Tiket", "Jadwal", "Dokumen", "Formulir"],
        correct: 1
      },
      {
        question: "Apa arti dari 'مَسْجِدٌ'?",
        arabic: "مَسْجِدٌ",
        options: ["Museum", "Perpustakaan", "Masjid", "Universitas"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'menunggu'?",
        arabic: "اِنْتَظَرَ",
        options: ["Menunggu", "Berlari", "Terbang", "Mendarat"],
        correct: 0
      },
      {
        question: "Apa arti dari 'إِنْدُونِيسِيَا'?",
        arabic: "إِنْدُونِيسِيَا",
        options: ["Malaysia", "Turki", "Indonesia", "Mesir"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'lepas landas'?",
        arabic: "أَقْلَعَ",
        options: ["Mendarat", "Terbang", "Lepas landas", "Berlayar"],
        correct: 2
      },
      {
        question: "Apa arti dari 'تَأْخِيرٌ'?",
        arabic: "تَأْخِيرٌ",
        options: ["Pembatalan", "Reservasi", "Keterlambatan", "Konfirmasi"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'dekat'?",
        arabic: "قَرِيبٌ",
        options: ["Jauh", "Dekat", "Lurus", "Belakang"],
        correct: 1
      },
      {
        question: "Apa arti dari 'صَالَةُ الِانْتِظَارِ'?",
        arabic: "صَالَةُ الِانْتِظَارِ",
        options: ["Ruang makan", "Ruang keberangkatan", "Ruang tunggu", "Ruang kedatangan"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'troli bagasi'?",
        arabic: "عَرَبَةُ الأَمْتِعَةِ",
        options: ["Sabuk bagasi", "Koper", "Troli bagasi", "Ransel"],
        correct: 2
      },
      {
        question: "Apa arti dari 'هَبَطَ'?",
        arabic: "هَبَطَ",
        options: ["Terbang", "Mendarat", "Lepas landas", "Berangkat"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'visa'?",
        arabic: "تَأْشِيرَةٌ",
        options: ["Paspor", "Visa", "Tiket", "Boarding pass"],
        correct: 1
      },
      {
        question: "Apa arti dari 'مُسْتَقِيمٌ'?",
        arabic: "مُسْتَقِيمٌ",
        options: ["Kanan", "Kiri", "Lurus", "Belok"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'liburan'?",
        arabic: "إِجَازَةٌ",
        options: ["Perjalanan", "Liburan", "Petualangan", "Wisata"],
        correct: 1
      },
      {
        question: "Apa arti dari 'سُوقٌ حُرَّةٌ'?",
        arabic: "سُوقٌ حُرَّةٌ",
        options: ["Pasar tradisional", "Toko bebas pajak", "Pusat perbelanjaan", "Minimarket"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'Arab Saudi'?",
        arabic: "المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ",
        options: ["Uni Emirat Arab", "Qatar", "Arab Saudi", "Kuwait"],
        correct: 2
      },
      {
        question: "Apa arti dari 'بَوَّابَةٌ'?",
        arabic: "بَوَّابَةٌ",
        options: ["Terminal", "Pintu masuk", "Gerbang", "Pintu keluar"],
        correct: 2
      }
    ]
  };
})();
