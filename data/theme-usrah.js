(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || { themes: {} };

  window.AL_HIWAR_DATA.themes.usrah = {
    id: "usrah",
    name: "Keluarga (Al-Usrah)",
    arabic: "الأُسْرَة",
    icon: "bx-group",

    dialogue: [
      {
        char: "Ahmad",
        side: "left",
        ar: "السَّلَامُ عَلَيْكُمْ يَا عَلِيُّ! كَيْفَ حَالُكَ؟",
        latin: "Assalāmu 'alaykum yā 'Aliyyu! Kayfa ḥāluka?",
        id: "Assalamualaikum Ali! Apa kabarmu?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "وَعَلَيْكُمُ السَّلَامُ يَا أَحْمَدُ! أَنَا بِخَيْرٍ، اُنْظُرْ إِلَى هَذِهِ الصُّورَةِ!",
        latin: "Wa 'alaykumus salāmu yā Aḥmadu! Anā bikhairin, unẓur ilā hāżihiṣ ṣūrati!",
        id: "Waalaikumsalam Ahmad! Aku baik-baik saja, lihat foto ini!"
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "مَا هَذِهِ الصُّورَةُ؟ هَلْ هَذِهِ صُورَةُ عَائِلَتِكَ؟",
        latin: "Mā hāżihiṣ ṣūratu? Hal hāżihi ṣūratu 'ā'ilatika?",
        id: "Apa foto ini? Apakah ini foto keluargamu?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَعَمْ، هَذِهِ صُورَةُ أُسْرَتِي. هَذَا أَبِي وَهَذِهِ أُمِّي.",
        latin: "Na'am, hāżihi ṣūratu usratī. Hāżā abī wa hāżihi ummī.",
        id: "Ya, ini foto keluargaku. Ini ayahku dan ini ibuku."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "مَا اسْمُ أَبِيكَ؟ وَمَا عَمَلُهُ؟",
        latin: "Masmu abīka? Wa mā 'amaluhu?",
        id: "Siapa nama ayahmu? Dan apa pekerjaannya?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "اسْمُ أَبِي مُحَمَّدٌ، وَهُوَ مُهَنْدِسٌ. يَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ.",
        latin: "Ismu abī Muḥammadun, wa huwa muhandisun. Ya'malu fī syarikatun kabīratin.",
        id: "Nama ayahku Muhammad, dan dia seorang insinyur. Dia bekerja di perusahaan besar."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "وَمَا اسْمُ أُمِّكَ؟ هَلْ هِيَ تَعْمَلُ أَيْضًا؟",
        latin: "Wa masmu ummika? Hal hiya ta'malu ayḍan?",
        id: "Dan siapa nama ibumu? Apakah dia juga bekerja?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "اسْمُ أُمِّي فَاطِمَةُ، وَهِيَ طَبِيبَةٌ فِي المُسْتَشْفَى.",
        latin: "Ismu ummī Fāṭimatu, wa hiya ṭabībatun fil mustasyfā.",
        id: "Nama ibuku Fatimah, dan dia seorang dokter di rumah sakit."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "مَا شَاءَ اللهُ! هَلْ عِنْدَكَ إِخْوَةٌ وَأَخَوَاتٌ؟",
        latin: "Mā syā'allāhu! Hal 'indaka ikhwatun wa akhawātun?",
        id: "Masya Allah! Apakah kamu punya saudara laki-laki dan perempuan?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَعَمْ، عِنْدِي أَخٌ وَاحِدٌ وَأُخْتَانِ. أَخِي اسْمُهُ خَالِدٌ وَهُوَ أَكْبَرُ مِنِّي.",
        latin: "Na'am, 'indī akhun wāḥidun wa ukhtāni. Akhī ismuhu Khālidun wa huwa akbaru minnī.",
        id: "Ya, aku punya satu saudara laki-laki dan dua saudara perempuan. Saudaraku namanya Khalid dan dia lebih tua dariku."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "كَمْ عُمْرُ أَخِيكَ خَالِدٍ؟ وَمَاذَا يَدْرُسُ؟",
        latin: "Kam 'umru akhīka Khālidin? Wa māżā yadrusu?",
        id: "Berapa umur saudaramu Khalid? Dan apa yang dia pelajari?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "عُمْرُهُ عِشْرُونَ سَنَةً، وَهُوَ يَدْرُسُ الطِّبَّ فِي الجَامِعَةِ.",
        latin: "'Umruhu 'isyrūna sanatan, wa huwa yadrusuṭ ṭibba fil jāmi'ati.",
        id: "Umurnya dua puluh tahun, dan dia belajar kedokteran di universitas."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "وَمَا اسْمُ أُخْتَيْكَ؟ كَمْ عُمْرُهُمَا؟",
        latin: "Wa masmu ukhtayka? Kam 'umruhumā?",
        id: "Dan siapa nama kedua saudarimu? Berapa umur mereka?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "أُخْتِي الكُبْرَى اسْمُهَا زَيْنَبُ، عُمْرُهَا سَبْعَ عَشْرَةَ سَنَةً. وَأُخْتِي الصُّغْرَى اسْمُهَا مَرْيَمُ، عُمْرُهَا عَشْرُ سَنَوَاتٍ.",
        latin: "Ukhtil kubrā ismuhā Zaynabu, 'umruhā sab'a 'asyrata sanatan. Wa ukhtīṣ ṣughrā ismuhā Maryamu, 'umruhā 'asyru sanawātin.",
        id: "Saudariku yang besar namanya Zainab, umurnya tujuh belas tahun. Dan saudariku yang kecil namanya Maryam, umurnya sepuluh tahun."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "هَلْ زَيْنَبُ تَدْرُسُ فِي المَدْرَسَةِ الثَّانَوِيَّةِ؟",
        latin: "Hal Zaynabu tadrusu fil madrasatiṡ ṡānawiyyati?",
        id: "Apakah Zainab belajar di sekolah menengah atas?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَعَمْ، هِيَ طَالِبَةٌ مُجْتَهِدَةٌ وَتُحِبُّ القِرَاءَةَ كَثِيرًا.",
        latin: "Na'am, hiya ṭālibatun mujtahidatun wa tuḥibbul qirā'ata kaṡīran.",
        id: "Ya, dia siswi yang rajin dan sangat suka membaca."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "وَمَرْيَمُ الصَّغِيرَةُ، مَاذَا تُحِبُّ أَنْ تَفْعَلَ؟",
        latin: "Wa Maryamuṣ ṣaghīratu, māżā tuḥibbu an taf'ala?",
        id: "Dan Maryam yang kecil, apa yang dia suka lakukan?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "مَرْيَمُ تُحِبُّ الرَّسْمَ وَاللَّعِبَ فِي الحَدِيقَةِ مَعَ القِطَّةِ.",
        latin: "Maryamu tuḥibbur rasma wal la'iba fil ḥadīqati ma'al qiṭṭati.",
        id: "Maryam suka menggambar dan bermain di taman dengan kucing."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "هَلْ عِنْدَكَ جَدٌّ وَجَدَّةٌ؟ أَيْنَ يَسْكُنَانِ؟",
        latin: "Hal 'indaka jaddun wa jaddatun? Ayna yaskunāni?",
        id: "Apakah kamu punya kakek dan nenek? Di mana mereka tinggal?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَعَمْ، جَدِّي وَجَدَّتِي يَسْكُنَانِ فِي القَرْيَةِ. جَدِّي كَانَ مُعَلِّمًا وَالآنَ هُوَ مُتَقَاعِدٌ.",
        latin: "Na'am, jaddī wa jaddatī yaskunāni fil qaryati. Jaddī kāna mu'alliman wal āna huwa mutaqā'idun.",
        id: "Ya, kakek dan nenekku tinggal di desa. Kakekku dulu seorang guru dan sekarang sudah pensiun."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "كَمْ عُمْرُ جَدِّكَ؟ هَلْ هُوَ بِصِحَّةٍ جَيِّدَةٍ؟",
        latin: "Kam 'umru jaddika? Hal huwa biṣiḥḥatin jayyidatin?",
        id: "Berapa umur kakekmu? Apakah dia sehat?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "عُمْرُهُ خَمْسٌ وَسِتُّونَ سَنَةً. نَعَمْ، هُوَ بِصِحَّةٍ جَيِّدَةٍ وَالحَمْدُ لِلَّهِ.",
        latin: "'Umruhu khamsun wa sittūna sanatan. Na'am, huwa biṣiḥḥatin jayyidatin wal ḥamdu lillāhi.",
        id: "Umurnya enam puluh lima tahun. Ya, dia sehat wal alhamdulillah."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "مَاذَا تَفْعَلُ أُسْرَتُكَ فِي الصَّبَاحِ عَادَةً؟",
        latin: "Māżā taf'alu usratuka fiṣ ṣabāḥi 'ādatan?",
        id: "Apa yang biasanya keluargamu lakukan di pagi hari?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَسْتَيْقِظُ مُبَكِّرِينَ وَنُصَلِّي الفَجْرَ مَعًا. ثُمَّ تَطْبُخُ أُمِّي الفُطُورَ وَنَأْكُلُ جَمِيعًا.",
        latin: "Nastayqiẓu mubakkirīna wa nuṣallil fajra ma'an. Ṡumma taṭbukhu ummil fuṭūra wa na'kulu jamī'an.",
        id: "Kami bangun pagi-pagi dan shalat Subuh bersama. Kemudian ibuku memasak sarapan dan kami makan bersama."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "هَذَا جَمِيلٌ! وَمَاذَا تَفْعَلُونَ فِي المَسَاءِ؟",
        latin: "Hāżā jamīlun! Wa māżā taf'alūna fil masā'i?",
        id: "Itu indah! Dan apa yang kalian lakukan di sore hari?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "فِي المَسَاءِ نَجْلِسُ فِي غُرْفَةِ الجُلُوسِ وَنَتَحَدَّثُ. أَبِي يَقْرَأُ الجَرِيدَةَ وَأُمِّي تَشْرَبُ الشَّايَ.",
        latin: "Fil masā'i najlisu fī ghurfatil julūsi wa nataḥaddaṡu. Abī yaqra'ul jarīdata wa ummī tasyrabūsy syāya.",
        id: "Di sore hari kami duduk di ruang tamu dan bercakap-cakap. Ayahku membaca koran dan ibuku minum teh."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "هَلْ عِنْدَكَ عَمٌّ وَخَالَةٌ؟ هَلْ تَزُورُونَهُمْ؟",
        latin: "Hal 'indaka 'ammun wa khālatun? Hal tazūrūnahum?",
        id: "Apakah kamu punya paman dan bibi? Apakah kalian mengunjungi mereka?"
      },
      {
        char: "Ali",
        side: "right",
        ar: "نَعَمْ، عِنْدِي عَمٌّ اسْمُهُ إِبْرَاهِيمُ وَهُوَ تَاجِرٌ. نَزُورُهُمْ كُلَّ أُسْبُوعٍ يَوْمَ الجُمُعَةِ.",
        latin: "Na'am, 'indī 'ammun ismuhu Ibrāhīmu wa huwa tājirun. Nazūruhum kulla usbū'in yawmal jumu'ati.",
        id: "Ya, aku punya paman namanya Ibrahim dan dia seorang pedagang. Kami mengunjungi mereka setiap hari Jumat."
      },
      {
        char: "Ahmad",
        side: "left",
        ar: "أُسْرَتُكَ جَمِيلَةٌ جِدًّا يَا عَلِيُّ! أَنَا أُحِبُّ أَنْ أَزُورَكُمْ.",
        latin: "Usratuka jamīlatun jiddan yā 'Aliyyu! Anā uḥibbu an azūrakum.",
        id: "Keluargamu sangat indah, Ali! Aku ingin mengunjungi kalian."
      },
      {
        char: "Ali",
        side: "right",
        ar: "أَهْلًا وَسَهْلًا! أَنْتَ مَدْعُوٌّ دَائِمًا. نُحِبُّ الضُّيُوفَ فِي بَيْتِنَا.",
        latin: "Ahlan wa sahlan! Anta mad'uwwun dā'iman. Nuḥibbuḍ ḍuyūfa fī baytinā.",
        id: "Selamat datang! Kamu selalu diundang. Kami suka tamu di rumah kami."
      }
    ],

    vocabulary: [
      // === Keluarga (~30 words) ===
      { ar: "أَبٌ", latin: "abun", id: "ayah", category: "Keluarga" },
      { ar: "أُمٌّ", latin: "ummun", id: "ibu", category: "Keluarga" },
      { ar: "أَخٌ", latin: "akhun", id: "saudara laki-laki", category: "Keluarga" },
      { ar: "أُخْتٌ", latin: "ukhtun", id: "saudara perempuan", category: "Keluarga" },
      { ar: "عَمٌّ", latin: "'ammun", id: "paman (dari ayah)", category: "Keluarga" },
      { ar: "خَالٌ", latin: "khālun", id: "paman (dari ibu)", category: "Keluarga" },
      { ar: "عَمَّةٌ", latin: "'ammatun", id: "bibi (dari ayah)", category: "Keluarga" },
      { ar: "خَالَةٌ", latin: "khālatun", id: "bibi (dari ibu)", category: "Keluarga" },
      { ar: "جَدٌّ", latin: "jaddun", id: "kakek", category: "Keluarga" },
      { ar: "جَدَّةٌ", latin: "jaddatun", id: "nenek", category: "Keluarga" },
      { ar: "اِبْنٌ", latin: "ibnun", id: "anak laki-laki", category: "Keluarga" },
      { ar: "بِنْتٌ", latin: "bintun", id: "anak perempuan", category: "Keluarga" },
      { ar: "زَوْجٌ", latin: "zawjun", id: "suami", category: "Keluarga" },
      { ar: "زَوْجَةٌ", latin: "zawjatun", id: "istri", category: "Keluarga" },
      { ar: "اِبْنُ العَمِّ", latin: "ibnul 'ammi", id: "sepupu laki-laki", category: "Keluarga" },
      { ar: "بِنْتُ العَمِّ", latin: "bintul 'ammi", id: "sepupu perempuan", category: "Keluarga" },
      { ar: "اِبْنُ الأَخِ", latin: "ibnul akhi", id: "keponakan laki-laki", category: "Keluarga" },
      { ar: "بِنْتُ الأَخِ", latin: "bintul akhi", id: "keponakan perempuan", category: "Keluarga" },
      { ar: "رَضِيعٌ", latin: "raḍī'un", id: "bayi", category: "Keluarga" },
      { ar: "تَوْأَمَانِ", latin: "taw'amāni", id: "anak kembar", category: "Keluarga" },
      { ar: "يَتِيمٌ", latin: "yatīmun", id: "anak yatim", category: "Keluarga" },
      { ar: "أُسْرَةٌ", latin: "usratun", id: "keluarga", category: "Keluarga" },
      { ar: "عَائِلَةٌ", latin: "'ā'ilatun", id: "keluarga besar", category: "Keluarga" },
      { ar: "أَقَارِبُ", latin: "aqāribu", id: "kerabat", category: "Keluarga" },
      { ar: "زَوْجُ الأُمِّ", latin: "zawjul ummi", id: "ayah tiri", category: "Keluarga" },
      { ar: "زَوْجَةُ الأَبِ", latin: "zawjatul abi", id: "ibu tiri", category: "Keluarga" },
      { ar: "حَمَاةٌ", latin: "ḥamātun", id: "mertua perempuan", category: "Keluarga" },
      { ar: "حَمٌ", latin: "ḥamun", id: "mertua laki-laki", category: "Keluarga" },
      { ar: "صِهْرٌ", latin: "ṣihrun", id: "menantu laki-laki", category: "Keluarga" },
      { ar: "كَنَّةٌ", latin: "kannatun", id: "menantu perempuan", category: "Keluarga" },

      // === Rumah & Kamar (~25 words) ===
      { ar: "بَيْتٌ", latin: "baytun", id: "rumah", category: "Rumah & Kamar" },
      { ar: "غُرْفَةٌ", latin: "ghurfatun", id: "kamar", category: "Rumah & Kamar" },
      { ar: "غُرْفَةُ النَّوْمِ", latin: "ghurfatun nawmi", id: "kamar tidur", category: "Rumah & Kamar" },
      { ar: "حَمَّامٌ", latin: "ḥammāmun", id: "kamar mandi", category: "Rumah & Kamar" },
      { ar: "مَطْبَخٌ", latin: "maṭbakhun", id: "dapur", category: "Rumah & Kamar" },
      { ar: "غُرْفَةُ الجُلُوسِ", latin: "ghurfatul julūsi", id: "ruang tamu", category: "Rumah & Kamar" },
      { ar: "حَدِيقَةٌ", latin: "ḥadīqatun", id: "taman", category: "Rumah & Kamar" },
      { ar: "بَابٌ", latin: "bābun", id: "pintu", category: "Rumah & Kamar" },
      { ar: "نَافِذَةٌ", latin: "nāfiżatun", id: "jendela", category: "Rumah & Kamar" },
      { ar: "جِدَارٌ", latin: "jidārun", id: "dinding", category: "Rumah & Kamar" },
      { ar: "أَرْضِيَّةٌ", latin: "arḍiyyatun", id: "lantai", category: "Rumah & Kamar" },
      { ar: "سَقْفٌ", latin: "saqfun", id: "atap", category: "Rumah & Kamar" },
      { ar: "دَرَجٌ", latin: "darajun", id: "tangga", category: "Rumah & Kamar" },
      { ar: "شُرْفَةٌ", latin: "syurfatun", id: "balkon", category: "Rumah & Kamar" },
      { ar: "مَرْأَبٌ", latin: "mar'abun", id: "garasi", category: "Rumah & Kamar" },
      { ar: "سِيَاجٌ", latin: "siyājun", id: "pagar", category: "Rumah & Kamar" },
      { ar: "مَمَرٌّ", latin: "mamarrun", id: "lorong", category: "Rumah & Kamar" },
      { ar: "قَبْوٌ", latin: "qabwun", id: "ruang bawah tanah", category: "Rumah & Kamar" },
      { ar: "عِلِّيَّةٌ", latin: "'illiyyatun", id: "loteng", category: "Rumah & Kamar" },
      { ar: "غُرْفَةُ الطَّعَامِ", latin: "ghurfatuṭ ṭa'āmi", id: "ruang makan", category: "Rumah & Kamar" },
      { ar: "فِنَاءٌ", latin: "fināun", id: "halaman", category: "Rumah & Kamar" },
      { ar: "مَدْخَلٌ", latin: "madkhalun", id: "pintu masuk", category: "Rumah & Kamar" },
      { ar: "سَطْحٌ", latin: "saṭḥun", id: "atap datar", category: "Rumah & Kamar" },
      { ar: "مَخْزَنٌ", latin: "makhzanun", id: "gudang", category: "Rumah & Kamar" },
      { ar: "غُرْفَةُ المَكْتَبِ", latin: "ghurfatul maktabi", id: "ruang kerja", category: "Rumah & Kamar" },

      // === Aktivitas Harian (~25 words) ===
      { ar: "اِسْتَيْقَظَ", latin: "istayqaẓa", id: "bangun tidur", category: "Aktivitas Harian" },
      { ar: "نَامَ", latin: "nāma", id: "tidur", category: "Aktivitas Harian" },
      { ar: "أَكَلَ", latin: "akala", id: "makan", category: "Aktivitas Harian" },
      { ar: "شَرِبَ", latin: "syariba", id: "minum", category: "Aktivitas Harian" },
      { ar: "طَبَخَ", latin: "ṭabakha", id: "memasak", category: "Aktivitas Harian" },
      { ar: "نَظَّفَ", latin: "naẓẓafa", id: "membersihkan", category: "Aktivitas Harian" },
      { ar: "غَسَلَ", latin: "ghasala", id: "mencuci", category: "Aktivitas Harian" },
      { ar: "صَلَّى", latin: "ṣallā", id: "shalat", category: "Aktivitas Harian" },
      { ar: "دَرَسَ", latin: "darasa", id: "belajar", category: "Aktivitas Harian" },
      { ar: "عَمِلَ", latin: "'amila", id: "bekerja", category: "Aktivitas Harian" },
      { ar: "لَعِبَ", latin: "la'iba", id: "bermain", category: "Aktivitas Harian" },
      { ar: "قَرَأَ", latin: "qara'a", id: "membaca", category: "Aktivitas Harian" },
      { ar: "كَتَبَ", latin: "kataba", id: "menulis", category: "Aktivitas Harian" },
      { ar: "شَاهَدَ", latin: "syāhada", id: "menonton", category: "Aktivitas Harian" },
      { ar: "اِسْتَمَعَ", latin: "istama'a", id: "mendengarkan", category: "Aktivitas Harian" },
      { ar: "اِسْتَحَمَّ", latin: "istaḥamma", id: "mandi", category: "Aktivitas Harian" },
      { ar: "لَبِسَ", latin: "labisa", id: "berpakaian", category: "Aktivitas Harian" },
      { ar: "تَمَرَّنَ", latin: "tamarrana", id: "berolahraga", category: "Aktivitas Harian" },
      { ar: "اِسْتَرَاحَ", latin: "istarāḥa", id: "beristirahat", category: "Aktivitas Harian" },
      { ar: "زَارَ", latin: "zāra", id: "mengunjungi", category: "Aktivitas Harian" },
      { ar: "ذَهَبَ", latin: "żahaba", id: "pergi", category: "Aktivitas Harian" },
      { ar: "رَجَعَ", latin: "raja'a", id: "pulang", category: "Aktivitas Harian" },
      { ar: "جَلَسَ", latin: "jalasa", id: "duduk", category: "Aktivitas Harian" },
      { ar: "تَحَدَّثَ", latin: "taḥaddaṡa", id: "berbicara", category: "Aktivitas Harian" },
      { ar: "مَشَى", latin: "masyā", id: "berjalan", category: "Aktivitas Harian" },

      // === Profesi (~20 words) ===
      { ar: "مُعَلِّمٌ", latin: "mu'allimun", id: "guru", category: "Profesi" },
      { ar: "طَبِيبٌ", latin: "ṭabībun", id: "dokter", category: "Profesi" },
      { ar: "مُهَنْدِسٌ", latin: "muhandisun", id: "insinyur", category: "Profesi" },
      { ar: "فَلَّاحٌ", latin: "fallāḥun", id: "petani", category: "Profesi" },
      { ar: "تَاجِرٌ", latin: "tājirun", id: "pedagang", category: "Profesi" },
      { ar: "سَائِقٌ", latin: "sā'iqun", id: "sopir", category: "Profesi" },
      { ar: "جُنْدِيٌّ", latin: "jundiyyun", id: "tentara", category: "Profesi" },
      { ar: "مُمَرِّضَةٌ", latin: "mumarriḍatun", id: "perawat", category: "Profesi" },
      { ar: "مُحَامٍ", latin: "muḥāmin", id: "pengacara", category: "Profesi" },
      { ar: "مُحَاسِبٌ", latin: "muḥāsibun", id: "akuntan", category: "Profesi" },
      { ar: "طَبَّاخٌ", latin: "ṭabbākhun", id: "koki", category: "Profesi" },
      { ar: "طَيَّارٌ", latin: "ṭayyārun", id: "pilot", category: "Profesi" },
      { ar: "صَحَفِيٌّ", latin: "ṣaḥafiyyun", id: "wartawan", category: "Profesi" },
      { ar: "فَنَّانٌ", latin: "fannānun", id: "seniman", category: "Profesi" },
      { ar: "مِعْمَارِيٌّ", latin: "mi'māriyyun", id: "arsitek", category: "Profesi" },
      { ar: "عَالِمٌ", latin: "'ālimun", id: "ilmuwan", category: "Profesi" },
      { ar: "طَبِيبُ أَسْنَانٍ", latin: "ṭabību asnānin", id: "dokter gigi", category: "Profesi" },
      { ar: "صَيْدَلِيٌّ", latin: "ṣaydaliyyun", id: "apoteker", category: "Profesi" },
      { ar: "أُسْتَاذٌ", latin: "ustāżun", id: "profesor", category: "Profesi" },
      { ar: "مُبَرْمِجٌ", latin: "mubarmijun", id: "programmer", category: "Profesi" },

      // === Sifat (~20 words) ===
      { ar: "كَبِيرٌ", latin: "kabīrun", id: "besar", category: "Sifat" },
      { ar: "صَغِيرٌ", latin: "ṣaghīrun", id: "kecil", category: "Sifat" },
      { ar: "طَوِيلٌ", latin: "ṭawīlun", id: "tinggi/panjang", category: "Sifat" },
      { ar: "قَصِيرٌ", latin: "qaṣīrun", id: "pendek", category: "Sifat" },
      { ar: "كَبِيرُ السِّنِّ", latin: "kabīrus sinni", id: "tua", category: "Sifat" },
      { ar: "شَابٌّ", latin: "syābbun", id: "muda", category: "Sifat" },
      { ar: "جَمِيلَةٌ", latin: "jamīlatun", id: "cantik", category: "Sifat" },
      { ar: "وَسِيمٌ", latin: "wasīmun", id: "tampan", category: "Sifat" },
      { ar: "ذَكِيٌّ", latin: "żakiyyun", id: "pintar", category: "Sifat" },
      { ar: "كَسْلَانٌ", latin: "kaslānun", id: "malas", category: "Sifat" },
      { ar: "مُجْتَهِدٌ", latin: "mujtahidun", id: "rajin", category: "Sifat" },
      { ar: "لَطِيفٌ", latin: "laṭīfun", id: "baik hati", category: "Sifat" },
      { ar: "صَارِمٌ", latin: "ṣārimun", id: "tegas", category: "Sifat" },
      { ar: "صَبُورٌ", latin: "ṣabūrun", id: "sabar", category: "Sifat" },
      { ar: "كَرِيمٌ", latin: "karīmun", id: "dermawan", category: "Sifat" },
      { ar: "شُجَاعٌ", latin: "syujā'un", id: "berani", category: "Sifat" },
      { ar: "خَجُولٌ", latin: "khajūlun", id: "pemalu", category: "Sifat" },
      { ar: "مَرِحٌ", latin: "mariḥun", id: "ceria", category: "Sifat" },
      { ar: "هَادِئٌ", latin: "hādi'un", id: "tenang", category: "Sifat" },
      { ar: "نَشِيطٌ", latin: "nasyīṭun", id: "aktif", category: "Sifat" },

      // === Hubungan (~20 words) ===
      { ar: "أَحَبَّ", latin: "aḥabba", id: "mencintai", category: "Hubungan" },
      { ar: "اِحْتَرَمَ", latin: "iḥtarama", id: "menghormati", category: "Hubungan" },
      { ar: "سَاعَدَ", latin: "sā'ada", id: "membantu", category: "Hubungan" },
      { ar: "اِهْتَمَّ", latin: "ihtamma", id: "memperhatikan", category: "Hubungan" },
      { ar: "اِشْتَاقَ", latin: "isytāqa", id: "merindukan", category: "Hubungan" },
      { ar: "زَارَ", latin: "zāra", id: "mengunjungi", category: "Hubungan" },
      { ar: "اِتَّصَلَ", latin: "ittaṣala", id: "menelepon", category: "Hubungan" },
      { ar: "عَانَقَ", latin: "'ānaqa", id: "memeluk", category: "Hubungan" },
      { ar: "قَبَّلَ", latin: "qabbala", id: "mencium", category: "Hubungan" },
      { ar: "دَعَمَ", latin: "da'ama", id: "mendukung", category: "Hubungan" },
      { ar: "عَلَّمَ", latin: "'allama", id: "mengajar", category: "Hubungan" },
      { ar: "أَرْشَدَ", latin: "arsyada", id: "membimbing", category: "Hubungan" },
      { ar: "حَمَى", latin: "ḥamā", id: "melindungi", category: "Hubungan" },
      { ar: "سَامَحَ", latin: "sāmaḥa", id: "memaafkan", category: "Hubungan" },
      { ar: "وَثِقَ", latin: "waṡiqa", id: "mempercayai", category: "Hubungan" },
      { ar: "تَوَاصَلَ", latin: "tawāṣala", id: "berkomunikasi", category: "Hubungan" },
      { ar: "شَارَكَ", latin: "syāraka", id: "berbagi", category: "Hubungan" },
      { ar: "تَخَاصَمَ", latin: "takhāṣama", id: "bertengkar", category: "Hubungan" },
      { ar: "تَصَالَحَ", latin: "taṣālaḥa", id: "berdamai", category: "Hubungan" },
      { ar: "تَرَابَطَ", latin: "tarābaṭa", id: "mempererat hubungan", category: "Hubungan" },

      // === Peralatan Rumah (~25 words) ===
      { ar: "طَاوِلَةٌ", latin: "ṭāwilatun", id: "meja", category: "Peralatan Rumah" },
      { ar: "كُرْسِيٌّ", latin: "kursiyyun", id: "kursi", category: "Peralatan Rumah" },
      { ar: "سَرِيرٌ", latin: "sarīrun", id: "tempat tidur", category: "Peralatan Rumah" },
      { ar: "أَرِيكَةٌ", latin: "arīkatun", id: "sofa", category: "Peralatan Rumah" },
      { ar: "خِزَانَةٌ", latin: "khizānatun", id: "lemari", category: "Peralatan Rumah" },
      { ar: "مِرْآةٌ", latin: "mir'ātun", id: "cermin", category: "Peralatan Rumah" },
      { ar: "مِصْبَاحٌ", latin: "miṣbāḥun", id: "lampu", category: "Peralatan Rumah" },
      { ar: "مِرْوَحَةٌ", latin: "mirwaḥatun", id: "kipas angin", category: "Peralatan Rumah" },
      { ar: "تِلْفَازٌ", latin: "tilfāzun", id: "televisi", category: "Peralatan Rumah" },
      { ar: "ثَلَّاجَةٌ", latin: "ṡallājatun", id: "kulkas", category: "Peralatan Rumah" },
      { ar: "مَوْقِدٌ", latin: "mawqidun", id: "kompor", category: "Peralatan Rumah" },
      { ar: "فُرْنٌ", latin: "furnun", id: "oven", category: "Peralatan Rumah" },
      { ar: "غَسَّالَةٌ", latin: "ghassālatun", id: "mesin cuci", category: "Peralatan Rumah" },
      { ar: "سَجَّادَةٌ", latin: "sajjādatun", id: "karpet", category: "Peralatan Rumah" },
      { ar: "سِتَارَةٌ", latin: "sitāratun", id: "gorden", category: "Peralatan Rumah" },
      { ar: "وِسَادَةٌ", latin: "wisādatun", id: "bantal", category: "Peralatan Rumah" },
      { ar: "بَطَّانِيَّةٌ", latin: "baṭṭāniyyatun", id: "selimut", category: "Peralatan Rumah" },
      { ar: "رَفٌّ", latin: "raffun", id: "rak", category: "Peralatan Rumah" },
      { ar: "سَاعَةٌ", latin: "sā'atun", id: "jam", category: "Peralatan Rumah" },
      { ar: "مِزْهَرِيَّةٌ", latin: "mizhariyyatun", id: "vas bunga", category: "Peralatan Rumah" },
      { ar: "مِكْنَسَةٌ", latin: "miknasatun", id: "sapu", category: "Peralatan Rumah" },
      { ar: "مِمْسَحَةٌ", latin: "mimsaḥatun", id: "kain pel", category: "Peralatan Rumah" },
      { ar: "دَلْوٌ", latin: "dalwun", id: "ember", category: "Peralatan Rumah" },
      { ar: "مِكْوَاةٌ", latin: "mikwātun", id: "setrika", category: "Peralatan Rumah" },
      { ar: "صَحْنٌ", latin: "ṣaḥnun", id: "piring", category: "Peralatan Rumah" },

      // === Kata Kerja Rumah (~20 words) ===
      { ar: "فَتَحَ", latin: "fataḥa", id: "membuka", category: "Kata Kerja Rumah" },
      { ar: "أَغْلَقَ", latin: "aghlaqa", id: "menutup", category: "Kata Kerja Rumah" },
      { ar: "أَشْعَلَ", latin: "asy'ala", id: "menyalakan", category: "Kata Kerja Rumah" },
      { ar: "أَطْفَأَ", latin: "aṭfa'a", id: "mematikan", category: "Kata Kerja Rumah" },
      { ar: "رَتَّبَ", latin: "rattaba", id: "merapikan", category: "Kata Kerja Rumah" },
      { ar: "زَيَّنَ", latin: "zayyana", id: "menghias", category: "Kata Kerja Rumah" },
      { ar: "أَصْلَحَ", latin: "aṣlaḥa", id: "memperbaiki", category: "Kata Kerja Rumah" },
      { ar: "دَهَنَ", latin: "dahana", id: "mengecat", category: "Kata Kerja Rumah" },
      { ar: "كَنَسَ", latin: "kanasa", id: "menyapu", category: "Kata Kerja Rumah" },
      { ar: "مَسَحَ", latin: "masaḥa", id: "mengepel", category: "Kata Kerja Rumah" },
      { ar: "كَوَى", latin: "kawā", id: "menyetrika", category: "Kata Kerja Rumah" },
      { ar: "طَوَى", latin: "ṭawā", id: "melipat", category: "Kata Kerja Rumah" },
      { ar: "عَلَّقَ", latin: "'allaqa", id: "menggantung", category: "Kata Kerja Rumah" },
      { ar: "خَزَّنَ", latin: "khazzana", id: "menyimpan", category: "Kata Kerja Rumah" },
      { ar: "نَقَلَ", latin: "naqala", id: "memindahkan", category: "Kata Kerja Rumah" },
      { ar: "وَضَعَ", latin: "waḍa'a", id: "meletakkan", category: "Kata Kerja Rumah" },
      { ar: "أَقْفَلَ", latin: "aqfala", id: "mengunci", category: "Kata Kerja Rumah" },
      { ar: "فَتَحَ القُفْلَ", latin: "fataḥal qufla", id: "membuka kunci", category: "Kata Kerja Rumah" },
      { ar: "بَنَى", latin: "banā", id: "membangun", category: "Kata Kerja Rumah" },
      { ar: "هَدَمَ", latin: "hadama", id: "merobohkan", category: "Kata Kerja Rumah" },

      // === Waktu (~15 words) ===
      { ar: "صَبَاحٌ", latin: "ṣabāḥun", id: "pagi", category: "Waktu" },
      { ar: "ظُهْرٌ", latin: "ẓuhrun", id: "siang", category: "Waktu" },
      { ar: "مَسَاءٌ", latin: "masā'un", id: "sore", category: "Waktu" },
      { ar: "لَيْلٌ", latin: "laylun", id: "malam", category: "Waktu" },
      { ar: "فَجْرٌ", latin: "fajrun", id: "fajar", category: "Waktu" },
      { ar: "شُرُوقٌ", latin: "syurūqun", id: "terbit matahari", category: "Waktu" },
      { ar: "غُرُوبٌ", latin: "ghurūbun", id: "terbenam matahari", category: "Waktu" },
      { ar: "اليَوْمَ", latin: "al-yawma", id: "hari ini", category: "Waktu" },
      { ar: "غَدًا", latin: "ghadan", id: "besok", category: "Waktu" },
      { ar: "أَمْسِ", latin: "amsi", id: "kemarin", category: "Waktu" },
      { ar: "أُسْبُوعٌ", latin: "usbū'un", id: "minggu", category: "Waktu" },
      { ar: "شَهْرٌ", latin: "syahrun", id: "bulan", category: "Waktu" },
      { ar: "سَنَةٌ", latin: "sanatun", id: "tahun", category: "Waktu" },
      { ar: "سَاعَةٌ", latin: "sā'atun", id: "jam", category: "Waktu" },
      { ar: "دَقِيقَةٌ", latin: "daqīqatun", id: "menit", category: "Waktu" }
    ],

    quiz: [
      {
        question: "Apa arti kata 'أَبٌ' dalam bahasa Indonesia?",
        arabic: "أَبٌ",
        options: ["Ibu", "Ayah", "Kakek", "Paman"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'ibu'?",
        arabic: "أُمٌّ",
        options: ["أُخْتٌ", "أُمٌّ", "جَدَّةٌ", "خَالَةٌ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'أُسْرَةٌ'?",
        arabic: "أُسْرَةٌ",
        options: ["Sekolah", "Rumah", "Keluarga", "Teman"],
        correct: 2
      },
      {
        question: "Siapa yang disebut 'جَدَّةٌ' dalam keluarga?",
        arabic: "جَدَّةٌ",
        options: ["Bibi", "Nenek", "Ibu", "Saudari"],
        correct: 1
      },
      {
        question: "Apa arti kata 'مُهَنْدِسٌ'?",
        arabic: "مُهَنْدِسٌ",
        options: ["Dokter", "Guru", "Insinyur", "Pedagang"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'saudara laki-laki'?",
        arabic: "أَخٌ",
        options: ["أَبٌ", "عَمٌّ", "أَخٌ", "اِبْنٌ"],
        correct: 2
      },
      {
        question: "Apa arti kata 'مَطْبَخٌ'?",
        arabic: "مَطْبَخٌ",
        options: ["Kamar tidur", "Kamar mandi", "Ruang tamu", "Dapur"],
        correct: 3
      },
      {
        question: "Apa bahasa Arab dari 'membaca'?",
        arabic: "قَرَأَ",
        options: ["كَتَبَ", "قَرَأَ", "دَرَسَ", "شَاهَدَ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'طَبِيبٌ'?",
        arabic: "طَبِيبٌ",
        options: ["Guru", "Dokter", "Perawat", "Apoteker"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'rumah'?",
        arabic: "بَيْتٌ",
        options: ["غُرْفَةٌ", "بَابٌ", "بَيْتٌ", "مَدْرَسَةٌ"],
        correct: 2
      },
      {
        question: "Siapa yang disebut 'عَمٌّ' dalam keluarga?",
        arabic: "عَمٌّ",
        options: ["Paman dari pihak ayah", "Paman dari pihak ibu", "Kakek", "Sepupu"],
        correct: 0
      },
      {
        question: "Apa arti kata 'صَلَّى'?",
        arabic: "صَلَّى",
        options: ["Makan", "Tidur", "Shalat", "Belajar"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'pintar'?",
        arabic: "ذَكِيٌّ",
        options: ["كَسْلَانٌ", "ذَكِيٌّ", "صَبُورٌ", "شُجَاعٌ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'ثَلَّاجَةٌ'?",
        arabic: "ثَلَّاجَةٌ",
        options: ["Kompor", "Mesin cuci", "Kulkas", "Oven"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'pagi'?",
        arabic: "صَبَاحٌ",
        options: ["مَسَاءٌ", "لَيْلٌ", "صَبَاحٌ", "ظُهْرٌ"],
        correct: 2
      },
      {
        question: "Apa arti kata 'خَالَةٌ'?",
        arabic: "خَالَةٌ",
        options: ["Bibi dari pihak ibu", "Bibi dari pihak ayah", "Nenek", "Saudari"],
        correct: 0
      },
      {
        question: "Apa bahasa Arab dari 'memasak'?",
        arabic: "طَبَخَ",
        options: ["غَسَلَ", "طَبَخَ", "نَظَّفَ", "أَكَلَ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'غُرْفَةُ الجُلُوسِ'?",
        arabic: "غُرْفَةُ الجُلُوسِ",
        options: ["Kamar tidur", "Kamar mandi", "Ruang tamu", "Dapur"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'mencintai'?",
        arabic: "أَحَبَّ",
        options: ["سَاعَدَ", "أَحَبَّ", "سَامَحَ", "زَارَ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'سَرِيرٌ'?",
        arabic: "سَرِيرٌ",
        options: ["Kursi", "Meja", "Tempat tidur", "Sofa"],
        correct: 2
      },
      {
        question: "Siapa yang disebut 'زَوْجَةٌ'?",
        arabic: "زَوْجَةٌ",
        options: ["Suami", "Istri", "Anak perempuan", "Ibu"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'menyapu'?",
        arabic: "كَنَسَ",
        options: ["مَسَحَ", "غَسَلَ", "كَنَسَ", "كَوَى"],
        correct: 2
      },
      {
        question: "Apa arti kata 'فَجْرٌ'?",
        arabic: "فَجْرٌ",
        options: ["Siang", "Sore", "Malam", "Fajar"],
        correct: 3
      },
      {
        question: "Apa bahasa Arab dari 'rajin'?",
        arabic: "مُجْتَهِدٌ",
        options: ["كَسْلَانٌ", "مُجْتَهِدٌ", "نَشِيطٌ", "صَبُورٌ"],
        correct: 1
      },
      {
        question: "Apa arti kata 'اِسْتَيْقَظَ'?",
        arabic: "اِسْتَيْقَظَ",
        options: ["Tidur", "Bangun tidur", "Mandi", "Berjalan"],
        correct: 1
      },
      {
        question: "Apa bahasa Arab dari 'jendela'?",
        arabic: "نَافِذَةٌ",
        options: ["بَابٌ", "جِدَارٌ", "نَافِذَةٌ", "سَقْفٌ"],
        correct: 2
      },
      {
        question: "Apa arti kata 'تَاجِرٌ'?",
        arabic: "تَاجِرٌ",
        options: ["Petani", "Sopir", "Pedagang", "Tentara"],
        correct: 2
      },
      {
        question: "Apa bahasa Arab dari 'membantu'?",
        arabic: "سَاعَدَ",
        options: ["أَحَبَّ", "سَاعَدَ", "عَلَّمَ", "حَمَى"],
        correct: 1
      },
      {
        question: "Apa arti kata 'غَسَّالَةٌ'?",
        arabic: "غَسَّالَةٌ",
        options: ["Kompor", "Kulkas", "Oven", "Mesin cuci"],
        correct: 3
      },
      {
        question: "Siapa yang disebut 'اِبْنُ الأَخِ'?",
        arabic: "اِبْنُ الأَخِ",
        options: ["Sepupu laki-laki", "Keponakan laki-laki", "Anak laki-laki", "Cucu laki-laki"],
        correct: 1
      }
    ]
  };
})();
