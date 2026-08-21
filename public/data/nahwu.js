(function() {
  window.AL_HIWAR_DATA = window.AL_HIWAR_DATA || {};
  window.AL_HIWAR_DATA.nahwu = {
    chapters: [
      {
        id: "chap_1",
        title: "Huruf Hijaiyah & Harakat",
        titleAr: "الْحُرُوْفُ الْهِجَائِيَّةُ وَالْحَرَكَاتُ",
        icon: "bx-font",
        explanation: "Pelajaran pertama dalam mempelajari bahasa Arab adalah mengenal huruf-huruf dasar (huruf hijaiyah) dan tanda baca (harakat). Huruf hijaiyah merupakan pondasi utama dalam membaca dan menulis bahasa Arab, sama halnya dengan alfabet dalam bahasa Indonesia. Jumlah huruf hijaiyah ada 28 atau 29 jika menghitung hamzah terpisah dari alif.<br><br>Harakat atau tanda baca sangat penting karena bahasa Arab pada asalnya ditulis tanpa huruf vokal. Harakat berfungsi sebagai penentu bunyi vokal pendek, yang terdiri dari tiga jenis utama: Fathah (bunyi 'a'), Kasrah (bunyi 'i'), dan Dhammah (bunyi 'u'). Selain itu, ada juga Sukun yang menandakan huruf mati (tanpa vokal), dan Tasydid/Syaddah yang menandakan huruf ganda atau ditekan.<br><br>Tanpa harakat, pembaca harus mengandalkan ilmu tata bahasa (Nahwu dan Shorof) untuk menebak bunyi akhir dan pola kata. Oleh karena itu, bagi pemula, menguasai harakat dengan tepat adalah kunci utama agar dapat melafalkan kata-kata Arab dengan benar dan tidak salah arti.",
        examples: [
          {ar: "بَ", latin: "ba", id: "Huruf Ba dengan Fathah", highlight: "Fathah"},
          {ar: "بِ", latin: "bi", id: "Huruf Ba dengan Kasrah", highlight: "Kasrah"},
          {ar: "بُ", latin: "bu", id: "Huruf Ba dengan Dhammah", highlight: "Dhammah"}
        ],
        table: {
          headers: ["Harakat", "Bentuk", "Bunyi"],
          rows: [
            ["Fathah", "ـَ", "a"],
            ["Kasrah", "ـِ", "i"],
            ["Dhammah", "ـُ", "u"],
            ["Sukun", "ـْ", "Mati"],
            ["Tasydid", "ـّ", "Ganda"]
          ]
        },
        quiz: [
          {question: "Apa bunyi dari harakat Fathah?", options: ["a", "i", "u", "o"], correct: 0},
          {question: "Tanda baca yang menunjukkan huruf mati atau konsonan murni adalah?", options: ["Dhammah", "Sukun", "Kasrah", "Tasydid"], correct: 1},
          {question: "Harakat yang menghasilkan bunyi 'u' disebut?", options: ["Fathah", "Kasrah", "Dhammah", "Sukun"], correct: 2}
        ]
      },
      {
        id: "chap_2",
        title: "Isim (Kata Benda) - Mudzakkar & Mu'annats",
        titleAr: "الِاسْمُ: اَلْمُذَكَّرُ وَالْمُؤَنَّثُ",
        icon: "bx-user",
        explanation: "Dalam bahasa Arab, Isim (kata benda) tidak hanya mencakup benda mati, tetapi juga manusia, hewan, tempat, waktu, sifat, dan makna abstrak. Isim adalah kata yang tidak terikat oleh waktu, berbeda dengan kata kerja (fi'il).<br><br>Salah satu pembagian Isim yang paling mendasar adalah berdasarkan jenis kelamin, yaitu Mudzakkar (Laki-laki) dan Mu'annats (Perempuan). Mudzakkar adalah isim yang menunjukkan makna laki-laki, baik manusia, hewan, maupun benda mati yang secara tata bahasa dianggap laki-laki. Mu'annats adalah isim yang menunjukkan makna perempuan.<br><br>Tanda utama Isim Mu'annats adalah adanya huruf Ta' Marbuthoh (ة) di akhir kata. Namun, perlu diingat bahwa ada juga isim mu'annats yang tidak memiliki tanda ini (seperti anggota tubuh yang berpasangan: mata, telinga) atau nama perempuan (seperti Zainab). Membedakan mudzakkar dan mu'annats sangat penting karena akan mempengaruhi bentuk kata kerja, kata ganti, dan kata sifat yang mengikutinya dalam suatu kalimat.",
        examples: [
          {ar: "مُسْلِمٌ", latin: "Muslimun", id: "Seorang Muslim (Laki-laki)", highlight: "مُسْلِمٌ"},
          {ar: "مُسْلِمَةٌ", latin: "Muslimatun", id: "Seorang Muslimah (Perempuan)", highlight: "مُسْلِمَةٌ"},
          {ar: "قَلَمٌ", latin: "Qalamun", id: "Pena (Benda Mudzakkar)", highlight: "قَلَمٌ"}
        ],
        table: {
          headers: ["Mudzakkar (Laki-laki)", "Mu'annats (Perempuan)", "Arti"],
          rows: [
            ["طَالِبٌ (Thalibun)", "طَالِبَةٌ (Thalibatun)", "Pelajar"],
            ["مُدَرِّسٌ (Mudarrisun)", "مُدَرِّسَةٌ (Mudarrisatun)", "Guru"],
            ["كِتَابٌ (Kitabun)", "سَيَّارَةٌ (Sayyaratun)", "Buku / Mobil"]
          ]
        },
        quiz: [
          {question: "Kata 'مُدَرِّسَةٌ' (mudarrisatun) termasuk jenis isim apa?", options: ["Mudzakkar", "Mu'annats", "Jamak", "Fi'il"], correct: 1},
          {question: "Tanda umum yang menunjukkan bahwa sebuah kata benda adalah mu'annats adalah?", options: ["Alif Lam", "Tanwin", "Ta' Marbuthoh", "Sukun"], correct: 2},
          {question: "Manakah dari kata berikut yang merupakan isim mudzakkar?", options: ["سَيَّارَةٌ", "طَالِبَةٌ", "مُسْلِمَةٌ", "كِتَابٌ"], correct: 3}
        ]
      },
      {
        id: "chap_3",
        title: "Fi'il Madhi, Mudhari', & Amr (Dasar)",
        titleAr: "الْفِعْلُ: اَلْمَاضِي، وَالْمُضَارِعُ، وَالْأَمْرُ",
        icon: "bx-run",
        explanation: "Fi'il adalah kata kerja, yaitu kata yang menunjukkan suatu kejadian pada waktu tertentu. Dalam bahasa Arab, Fi'il terbagi menjadi tiga jenis berdasarkan waktunya: Fi'il Madhi, Fi'il Mudhari', dan Fi'il Amr.<br><br>1. Fi'il Madhi (Kata Kerja Lampau) menunjukkan tindakan yang sudah terjadi dan selesai di masa lalu. Ciri khas fi'il madhi adalah huruf akhirnya umumnya berharakat fathah (bina' 'ala al-fath).<br>2. Fi'il Mudhari' (Kata Kerja Sekarang/Akan Datang) menunjukkan tindakan yang sedang berlangsung atau akan terjadi. Ciri utamanya adalah diawali oleh salah satu dari empat huruf mudhara'ah, yaitu Alif, Nun, Ya', atau Ta' (dikumpulkan dalam kata 'anaitu' - أَنَيْتُ).<br>3. Fi'il Amr (Kata Kerja Perintah) adalah kata kerja yang digunakan untuk menyuruh, memohon, atau menuntut terjadinya suatu pekerjaan. Fi'il ini biasanya memiliki harakat sukun di huruf terakhirnya untuk bentuk tunggal maskulin.<br><br>Ketiga jenis fi'il ini merupakan dasar dalam menyusun kalimat bahasa Arab, dan penguasaannya mutlak diperlukan.",
        examples: [
          {ar: "كَتَبَ", latin: "Kataba", id: "Dia (laki-laki) telah menulis", highlight: "Fi'il Madhi"},
          {ar: "يَكْتُبُ", latin: "Yaktubu", id: "Dia (laki-laki) sedang/akan menulis", highlight: "Fi'il Mudhari'"},
          {ar: "اُكْتُبْ", latin: "Uktub", id: "Tulislah! (Untuk laki-laki)", highlight: "Fi'il Amr"}
        ],
        table: {
          headers: ["Madhi", "Mudhari'", "Amr", "Arti"],
          rows: [
            ["ذَهَبَ (Zahaba)", "يَذْهَبُ (Yazhabu)", "اِذْهَبْ (Izhab)", "Pergi"],
            ["قَرَأَ (Qara'a)", "يَقْرَأُ (Yaqra'u)", "اِقْرَأْ (Iqra')", "Membaca"],
            ["جَلَسَ (Jalasa)", "يَجْلِسُ (Yajlisu)", "اِجْلِسْ (Ijlis)", "Duduk"]
          ]
        },
        quiz: [
          {question: "Apa fungsi dari Fi'il Madhi?", options: ["Menunjukkan masa depan", "Menunjukkan perintah", "Menunjukkan pekerjaan masa lampau", "Menunjukkan larangan"], correct: 2},
          {question: "Huruf 'ي' (Ya) di awal kata 'يَذْهَبُ' (yazhabu) adalah ciri dari?", options: ["Fi'il Amr", "Fi'il Mudhari'", "Fi'il Madhi", "Isim"], correct: 1},
          {question: "Bentuk Fi'il Amr dari kata kerja 'duduk' adalah?", options: ["جَلَسَ", "يَجْلِسُ", "اِجْلِسْ", "مَجْلِسٌ"], correct: 2}
        ]
      },
      {
        id: "chap_4",
        title: "Wazan & Mauzun (Timbangan Kata)",
        titleAr: "الْوَزْنُ وَالْمَوْزُوْنُ",
        icon: "bx-scale",
        explanation: "Dalam ilmu Shorof (morfologi bahasa Arab), konsep Wazan (الوزن) dan Mauzun (الموزون) sangatlah sentral. Wazan adalah timbangan atau pola baku dasar bagi kata-kata dalam bahasa Arab, yang disimbolkan dengan tiga huruf dasar: Fa' (ف), 'Ain (ع), dan Lam (ل), dibaca Fa'ala (فَعَلَ).<br><br>Mauzun adalah kata nyata yang ditimbang atau dicocokkan dengan Wazan tersebut. Misalnya, kata كَتَبَ (kataba) ditimbang dengan wazan فَعَلَ (fa'ala). Huruf Kaf menempati posisi Fa' fi'il, huruf Ta' menempati posisi 'Ain fi'il, dan huruf Ba' menempati posisi Lam fi'il.<br><br>Dengan mengetahui Wazan, kita dapat memprediksi perubahan bentuk suatu kata (tashrif) dan makna dari bentuk-bentuk yang baru. Sistem ini membuat bahasa Arab sangat teratur dan matematis. Apabila ada huruf tambahan pada kata asli, maka huruf tambahan tersebut juga akan dimasukkan ke dalam wazan pada posisi yang sama. Memahami wazan adalah kunci emas untuk menguasai ribuan kosa kata tanpa harus menghafal semuanya secara terpisah.",
        examples: [
          {ar: "فَعَلَ", latin: "Fa'ala", id: "Timbangan dasar", highlight: "Wazan"},
          {ar: "ضَرَبَ", latin: "Dharaba", id: "Dia telah memukul (mengikuti pola fa'ala)", highlight: "Mauzun"},
          {ar: "فَاعِلٌ / كَاتِبٌ", latin: "Fa'ilun / Katibun", id: "Pola isim fa'il (pelaku) / Penulis", highlight: "Fa'ilun"}
        ],
        table: {
          headers: ["Wazan", "Mauzun", "Posisi Huruf Dasar"],
          rows: [
            ["فَعَلَ", "نَصَرَ", "Fa=ن, Ain=ص, Lam=ر"],
            ["فَعِلَ", "عَلِمَ", "Fa=ع, Ain=ل, Lam=م"],
            ["فَعُلَ", "حَسُنَ", "Fa=ح, Ain=س, Lam=ن"]
          ]
        },
        quiz: [
          {question: "Apa huruf-huruf standar yang digunakan sebagai Wazan?", options: ["ك، ت، ب", "ف، ع، ل", "ن، ص، ر", "ض، ر، ب"], correct: 1},
          {question: "Kata 'عَلِمَ' (alima) mengikuti wazan?", options: ["فَعَلَ (fa'ala)", "فَعُلَ (fa'ula)", "فَعِلَ (fa'ila)", "فَاعَلَ (faa'ala)"], correct: 2},
          {question: "Kata yang dicocokkan dengan timbangan wazan disebut?", options: ["Mazid", "Mauzun", "Mujarrad", "Mu'tal"], correct: 1}
        ]
      },
      {
        id: "chap_5",
        title: "Tashrif Istilahiy & Lughawiy",
        titleAr: "التَّصْرِيْفُ الِاصْطِلَاحِيُّ وَاللُّغَوِيُّ",
        icon: "bx-git-branch",
        explanation: "Tashrif adalah perubahan bentuk kata dari asal asalnya untuk menghasilkan makna-makna yang berbeda. Dalam ilmu Shorof, tashrif terbagi dua jenis utama: Tashrif Istilahiy dan Tashrif Lughawiy.<br><br>1. Tashrif Istilahiy adalah perubahan kata secara horizontal (menyamping) dari satu jenis kata ke jenis kata yang lain. Perubahannya meliputi: Fi'il Madhi, Fi'il Mudhari', Mashdar, Isim Fa'il (Pelaku), Isim Maf'ul (Objek), Fi'il Amr (Perintah), Fi'il Nahi (Larangan), Isim Zaman (Waktu), Isim Makan (Tempat), dan Isim Alat.<br>2. Tashrif Lughawiy adalah perubahan kata secara vertikal ke bawah yang disesuaikan dengan jenis pelaku/kata gantinya (Dhamir), seperti jumlah (tunggal, ganda, jamak) dan jenis kelamin (mudzakkar, mu'annats) serta sudut pandang orang (pertama, kedua, ketiga).<br><br>Menguasai tashrif ini ibarat memiliki mesin pembuat kata; dari satu akar kata (misalnya K-T-B), pelajar bisa membentuk kata 'menulis', 'penulis', 'tulisan', 'meja tulis', dan lain-lain sesuai aturan yang berlaku.",
        examples: [
          {ar: "نَصَرَ - يَنْصُرُ - نَصْرًا", latin: "Nasara - Yanshuru - Nashran", id: "Menolong - Sedang menolong - Pertolongan", highlight: "Istilahiy"},
          {ar: "هُوَ نَصَرَ , هُمَا نَصَرَا , هُمْ نَصَرُوْا", latin: "Huwa nasara, huma nasaraa, hum nasaruu", id: "Dia menolong, Mereka berdua menolong, Mereka (banyak) menolong", highlight: "Lughawiy"},
          {ar: "نَاصِرٌ - مَنْصُوْرٌ", latin: "Naashirun - Manshuurun", id: "Yang menolong - Yang ditolong", highlight: "Isim Fa'il / Maf'ul"}
        ],
        table: {
          headers: ["Jenis Tashrif", "Contoh", "Keterangan"],
          rows: [
            ["Istilahiy", "ضَرَبَ - يَضْرِبُ - ضَرْبًا", "Madhi - Mudhari' - Mashdar"],
            ["Lughawiy Madhi", "كَتَبَ - كَتَبَا - كَتَبُوْا", "Dia (1, 2, Jamak) menulis"],
            ["Lughawiy Mudhari'", "يَكْتُبُ - يَكْتُبَانِ - يَكْتُبُوْنَ", "Dia (1, 2, Jamak) sedang menulis"]
          ]
        },
        quiz: [
          {question: "Perubahan bentuk kata dari Fi'il Madhi menjadi Isim Fa'il disebut tashrif?", options: ["Lughawiy", "Istilahiy", "Nahwu", "I'rab"], correct: 1},
          {question: "Perubahan kata berdasarkan kata ganti (aku, kamu, dia) disebut tashrif?", options: ["Lughawiy", "Istilahiy", "Bina'", "I'rab"], correct: 0},
          {question: "Dari akar kata نَصَرَ (menolong), bentuk isim fa'il (pelaku) nya adalah?", options: ["يَنْصُرُ", "نَصْرًا", "مَنْصُوْرٌ", "نَاصِرٌ"], correct: 3}
        ]
      },
      {
        id: "chap_6",
        title: "Fi'il Mujarrad & Mazid",
        titleAr: "الْفِعْلُ الْمُجَرَّدُ وَالْمَزِيْدُ",
        icon: "bx-plus-circle",
        explanation: "Dalam ilmu Shorof, kata kerja (Fi'il) ditinjau dari jumlah huruf aslinya dan ada tidaknya tambahan, dibagi menjadi dua kategori besar: Fi'il Mujarrad dan Fi'il Mazid.<br><br>Fi'il Mujarrad adalah kata kerja murni, di mana semua huruf penyusunnya adalah huruf asli tanpa tambahan. Fi'il mujarrad yang paling umum adalah Tsulatsy Mujarrad (terdiri dari 3 huruf asli) seperti كَتَبَ (kataba) dan Ruba'iy Mujarrad (terdiri dari 4 huruf asli) seperti دَحْرَجَ (dahraja).<br><br>Fi'il Mazid adalah kata kerja yang pada akar kata aslinya telah diberikan tambahan satu huruf, dua huruf, atau tiga huruf. Penambahan ini tidak terjadi secara sembarangan, melainkan mengikuti wazan-wazan tertentu yang merubah atau menambah makna dari kata dasar tersebut. Misalnya, dari kata dasar عَلِمَ (mengetahui) menjadi عَلَّمَ (mengajar). Huruf tambahan memberikan nuansa makna baru seperti perbuatan dilakukan secara terus-menerus, memosisikan sesuatu, atau saling melakukan (mutawa'ah/musyarakah).",
        examples: [
          {ar: "كَتَبَ", latin: "Kataba", id: "Dia menulis (Tsulatsy Mujarrad - 3 Huruf)", highlight: "Mujarrad"},
          {ar: "أَنْزَلَ", latin: "Anzala", id: "Dia menurunkan (Mazid dengan 1 huruf tambahan hamzah)", highlight: "Mazid 1 huruf"},
          {ar: "اِسْتَغْفَرَ", latin: "Istaghfara", id: "Dia memohon ampun (Mazid 3 huruf: alif, sin, ta)", highlight: "Mazid 3 huruf"}
        ],
        table: {
          headers: ["Jenis Fi'il", "Contoh", "Makna Dasar vs Tambahan"],
          rows: [
            ["Mujarrad 3 Huruf", "عَلِمَ (Alima)", "Mengetahui"],
            ["Mazid 1 Huruf (فَعَّلَ)", "عَلَّمَ (Allama)", "Mengajarkan (transitif)"],
            ["Mazid 3 Huruf (اسْتَفْعَلَ)", "اِسْتَعْلَمَ (Ista'lama)", "Minta diberitahu"]
          ]
        },
        quiz: [
          {question: "Apa yang dimaksud dengan Fi'il Mujarrad?", options: ["Fi'il yang ada tambahannya", "Fi'il murni tanpa huruf tambahan", "Fi'il khusus masa lampau", "Fi'il yang selalu mu'annats"], correct: 1},
          {question: "Kata اِسْتَغْفَرَ (istaghfara) merupakan fi'il tsulatsy mazid dengan berapa huruf tambahan?", options: ["Satu", "Dua", "Tiga", "Empat"], correct: 2},
          {question: "Perubahan makna dari عَلِمَ (tahu) menjadi عَلَّمَ (mengajar) terjadi karena?", options: ["Tashrif Lughawiy", "Tambahan huruf (Mazid)", "I'rab", "Harakat yang salah"], correct: 1}
        ]
      },
      {
        id: "chap_7",
        title: "Fi'il Shahih & Mu'tal",
        titleAr: "الْفِعْلُ الصَّحِيْحُ وَالْمُعْتَلُّ",
        icon: "bx-check-shield",
        explanation: "Berdasarkan keberadaan huruf penyakit (Huruf 'Illat), fi'il dibagi menjadi dua: Fi'il Shahih dan Fi'il Mu'tal. Huruf 'Illat dalam bahasa Arab ada tiga, yaitu Alif (ا), Wawu (و), dan Ya' (ي).<br><br>1. Fi'il Shahih adalah fi'il yang huruf asli pembentuknya terbebas dari huruf 'Illat. Fi'il shahih dibagi lagi menjadi: Salim (bebas dari hamzah dan huruf ganda/tasydid), Mahmuz (terdapat huruf hamzah pada posisi fa', 'ain, atau lam fi'il), dan Mudha'af (huruf 'ain dan lam fi'il-nya sama, sehingga ditasydid/digabung).<br>2. Fi'il Mu'tal adalah fi'il yang salah satu atau lebih dari huruf aslinya berupa huruf 'Illat. Mu'tal dibagi menjadi: Mitsal (huruf 'illat di awal), Ajwaf (huruf 'illat di tengah), dan Naqish (huruf 'illat di akhir). Ada juga Lafif di mana terdapat dua huruf 'illat sekaligus.<br><br>Mengetahui fi'il itu shahih atau mu'tal sangat penting karena huruf 'illat adalah huruf yang lemah, yang sering mengalami perubahan, pergantian, atau penghapusan saat ditashrif untuk memudahkan pengucapan lidah orang Arab (I'lal/Ibdal).",
        examples: [
          {ar: "نَصَرَ", latin: "Nasara", id: "Menolong (Fi'il Shahih Salim)", highlight: "Shahih Salim"},
          {ar: "قَالَ", latin: "Qaala", id: "Berkata (Fi'il Mu'tal Ajwaf - Alif di tengah asal dari Wawu)", highlight: "Mu'tal Ajwaf"},
          {ar: "دَعَا", latin: "Da'aa", id: "Menyeru/Berdoa (Fi'il Mu'tal Naqish - Alif di akhir)", highlight: "Mu'tal Naqish"}
        ],
        table: {
          headers: ["Klasifikasi", "Jenis", "Contoh"],
          rows: [
            ["Shahih", "Salim", "كَتَبَ (Kataba)"],
            ["Shahih", "Mudha'af", "مَدَّ (Madda) - asalnya Madada"],
            ["Mu'tal", "Mitsal", "وَجَدَ (Wajada)"],
            ["Mu'tal", "Ajwaf", "بَاعَ (Baa'a)"]
          ]
        },
        quiz: [
          {question: "Manakah yang merupakan huruf-huruf 'Illat?", options: ["ا, و, ي", "ب, ت, ث", "ص, ض, ط", "ف, ع, ل"], correct: 0},
          {question: "Fi'il yang memiliki huruf 'illat di posisi tengah (seperti قَالَ) disebut?", options: ["Mitsal", "Ajwaf", "Naqish", "Salim"], correct: 1},
          {question: "Fi'il كَتَبَ termasuk dalam kategori?", options: ["Mu'tal Mitsal", "Shahih Mahmuz", "Shahih Salim", "Shahih Mudha'af"], correct: 2}
        ]
      },
      {
        id: "chap_8",
        title: "I'lal & Ibdal",
        titleAr: "الْإِعْلَالُ وَالْإِبْدَالُ",
        icon: "bx-transfer-alt",
        explanation: "I'lal dan Ibdal adalah dua konsep lanjutan dalam ilmu Shorof yang membahas tentang perubahan bunyi dan huruf demi mempermudah dan memperingan pengucapan kata. Lisan bangsa Arab cenderung menghindari susunan huruf atau harakat yang berat diucapkan.<br><br>I'lal (الإعلال) secara khusus berkaitan dengan perubahan yang terjadi pada huruf-huruf 'illat (Alif, Wawu, Ya'). Perubahan ini bisa berupa mengganti huruf 'illat ke huruf 'illat lain, menghapus huruf 'illat, atau memindahkan harakat huruf 'illat ke huruf mati sebelumnya. Contoh klasik adalah kata قَالَ (qaala) yang asalnya adalah قَوَلَ (qawala). Wawu berharakat jatuh setelah fathah, maka wawu diganti menjadi alif.<br><br>Ibdal (الإبدال) memiliki cakupan yang sedikit lebih luas, yaitu pergantian huruf tertentu menjadi huruf lain, dan ini tidak terbatas pada huruf 'illat saja, melainkan huruf-huruf shahih juga, terutama pada pola افتعل. Misalnya kata اصْطَبَرَ (ish-tabara) asalnya adalah اصْتَبَرَ. Huruf Ta' diganti dengan Tha' agar sesuai dan lebih mudah diucapkan setelah huruf Shad. Keduanya merupakan keunikan fonologi bahasa Arab.",
        examples: [
          {ar: "قَوَلَ ⬅ قَالَ", latin: "Qawala -> Qaala", id: "Wawu diganti Alif (I'lal dengan Penggantian)", highlight: "قَالَ"},
          {ar: "يَدْعُوُ ⬅ يَدْعُوْ", latin: "Yad'uwu -> Yad'uu", id: "Menghapus dhammah pada wawu karena berat (I'lal dengan Sukun)", highlight: "يَدْعُوْ"},
          {ar: "اِدْتَعَى ⬅ اِدَّعَى", latin: "Idta'a -> Idda'a", id: "Ta' diganti Dal lalu di-idgham-kan (Ibdal)", highlight: "اِدَّعَى"}
        ],
        table: {
          headers: ["Proses", "Asal Kata", "Menjadi"],
          rows: [
            ["I'lal (Alif)", "بَيَعَ (Baya'a)", "بَاعَ (Baa'a)"],
            ["I'lal (Buang Huruf)", "يَوْجَدُ (Yawjadu)", "يَجِدُ (Yajidu)"],
            ["Ibdal (Ta' ke Tha')", "اِضْتَرَبَ (Idhtraba)", "اِضْطَرَبَ (Idhtharaba)"]
          ]
        },
        quiz: [
          {question: "Kata قَالَ (berkata) asalnya adalah?", options: ["قَوِلَ", "قَوَلَ", "قَيَلَ", "قَوْلٌ"], correct: 1},
          {question: "Proses penggantian huruf tertentu ke huruf lain untuk memudahkan pengucapan disebut?", options: ["I'rab", "Tashrif", "I'lal / Ibdal", "Wazan"], correct: 2},
          {question: "I'lal umumnya terjadi pada huruf-huruf apa saja?", options: ["Huruf Syamsiyah", "Huruf Qamariyah", "Huruf 'Illat (Alif, Wawu, Ya)", "Huruf Halqi"], correct: 2}
        ]
      },
      {
        id: "chap_9",
        title: "Kalimah & Kalam",
        titleAr: "الْكَلِمَةُ وَالْكَلَامُ",
        icon: "bx-conversation",
        explanation: "Memasuki ilmu Nahwu, materi dasar yang pertama diajarkan adalah pengertian Kalimah dan Kalam. Hati-hati, istilah 'Kalimah' dalam tata bahasa Arab (Nahwu) berbeda maknanya dengan 'Kalimat' dalam bahasa Indonesia!<br><br>Kalimah (الكلمة) dalam bahasa Arab berarti satu kata tunggal. Kalimah terbagi menjadi tiga jenis saja: Isim (Kata Benda/Sifat), Fi'il (Kata Kerja), dan Harf (Kata Tugas/Huruf yang memiliki makna). Setiap kata dalam teks bahasa Arab pasti termasuk ke dalam salah satu dari tiga jenis ini.<br><br>Kalam (الكلام) adalah kumpulan kata-kata yang tersusun (murakkab) yang memberikan makna atau faedah yang sempurna (mufid) serta diucapkan secara sengaja dalam bahasa Arab (wadh'i). Singkatnya, Kalam adalah kalimat sempurna (sentence) dalam bahasa Indonesia. Agar menjadi Kalam yang sempurna, minimal harus terdiri dari dua bagian yang saling melengkapi (musnad dan musnad ilaih), misalnya Mubtada dan Khabar (Subjek-Predikat nominal) atau Fi'il dan Fa'il (Kata kerja dan Pelakunya).",
        examples: [
          {ar: "زَيْدٌ", latin: "Zaidun", id: "Zaid (Ini adalah Kalimah/Kata, berjenis Isim)", highlight: "Kalimah"},
          {ar: "قَامَ زَيْدٌ", latin: "Qaama Zaidun", id: "Zaid telah berdiri (Ini adalah Kalam sempurna / Jumlah Fi'liyah)", highlight: "Kalam"},
          {ar: "فِي", latin: "Fii", id: "Di dalam (Ini adalah Kalimah/Kata, berjenis Harf)", highlight: "Harf"}
        ],
        table: {
          headers: ["Istilah Nahwu", "Arti (B. Indonesia)", "Contoh"],
          rows: [
            ["Kalimah", "Kata", "كِتَابٌ (Buku), ذَهَبَ (Pergi)"],
            ["Kalam / Jumlah", "Kalimat Sempurna", "زَيْدٌ قَائِمٌ (Zaid berdiri)"],
            ["Harf", "Kata Tugas / Partikel", "مِنْ (Dari), إِلَى (Ke)"]
          ]
        },
        quiz: [
          {question: "Dalam bahasa Arab, 'Kalimah' berarti?", options: ["Kalimat Sempurna", "Paragraf", "Satu Kata", "Karangan"], correct: 2},
          {question: "Syarat terbentuknya suatu 'Kalam' (kalimat sempurna) adalah harus memberikan?", options: ["Faedah yang sempurna (Mufid)", "Rima yang indah", "Panjang yang cukup", "Isim dan Harf saja"], correct: 0},
          {question: "Mana dari berikut ini yang termasuk jenis kalimah dalam bahasa Arab?", options: ["Isim, Fi'il, Harf", "Mubtada, Khabar", "Fa'il, Maf'ul", "Madhi, Mudhari, Amr"], correct: 0}
        ]
      },
      {
        id: "chap_10",
        title: "I'rab & Bina' (Perubahan Harakat)",
        titleAr: "الْإِعْرَابُ وَالْبِنَاءُ",
        icon: "bx-pencil",
        explanation: "I'rab dan Bina' adalah jantung dari ilmu Nahwu. Keduanya membahas keadaan harakat pada huruf terakhir suatu kata saat ia dirangkai dalam kalimat.<br><br>I'rab (الإعراب) adalah perubahan bunyi atau keadaan harakat di akhir kata yang disebabkan oleh perbedaan 'Amil (agen pengubah) yang masuk mendahuluinya. Misalnya kata زَيْد (Zaid) bisa berubah akhirnya menjadi زَيْدٌ (Zaid-un), زَيْدًا (Zaid-an), atau زَيْدٍ (Zaid-in) tergantung jabatannya dalam kalimat (apakah ia sebagai subjek, objek, atau dimasuki huruf Jar). Kata yang bisa berubah akhirnya ini disebut kata Mu'rob.<br><br>Bina' (البناء) adalah kebalikan dari I'rab. Bina' adalah keadaan akhir suatu kata yang tetap dan tidak pernah berubah harakatnya, bagaimanapun posisi atau jabatannya dalam kalimat. Kata yang harakat akhirnya selalu tetap ini disebut Mabniy. Contohnya kata هٰذَا (Haadza - Ini), harakat akhirnya selalu fathah/sukun, baik posisinya sebagai subjek, objek, maupun lainnya. Seluruh Harf, seluruh Fi'il Madhi, dan beberapa isim (seperti kata ganti) adalah mabniy.",
        examples: [
          {ar: "جَاءَ زَيْدٌ", latin: "Jaa'a Zaidun", id: "Zaid (rafa') datang -> Zaidun", highlight: "زَيْدٌ"},
          {ar: "رَأَيْتُ زَيْدًا", latin: "Ra'aytu Zaidan", id: "Aku melihat Zaid (nashab) -> Zaidan", highlight: "زَيْدًا"},
          {ar: "جَاءَ هٰذَا", latin: "Jaa'a Haadza", id: "Datanglah (orang) ini -> harakat 'haadza' tetap (Mabniy)", highlight: "هٰذَا"}
        ],
        table: {
          headers: ["Istilah", "Pengertian", "Contoh"],
          rows: [
            ["Mu'rob (I'rab)", "Harakat akhir bisa berubah", "مُحَمَّدٌ, مُحَمَّدًا, مُحَمَّدٍ"],
            ["Mabniy (Bina')", "Harakat akhir selalu tetap", "هُوَ (Dia), هٰؤُلَاءِ (Mereka)"],
            ["Amil", "Faktor penyebab perubahan", "Huruf Jar, Amil Nawasikh"]
          ]
        },
        quiz: [
          {question: "Perubahan harakat akhir suatu kata karena jabatannya dalam kalimat disebut?", options: ["I'lal", "Bina'", "I'rab", "Tashrif"], correct: 2},
          {question: "Kata yang keadaan akhirnya tidak pernah berubah bagaimanapun posisinya disebut?", options: ["Mu'rob", "Mabniy", "Marfu'", "Majrur"], correct: 1},
          {question: "Pada kalimat 'رَأَيْتُ مُحَمَّدًا' (Aku melihat Muhammad), harakat akhir kata Muhammad adalah fathatain (an) karena ia dalam keadaan?", options: ["Rafa'", "Nashab", "Jar", "Jazm"], correct: 1}
        ]
      },
      {
        id: "chap_11",
        title: "Marfu'atul Asma' (Rafa')",
        titleAr: "مَرْفُوْعَاتُ الْأَسْمَاءِ",
        icon: "bx-up-arrow-circle",
        explanation: "Marfu'atul Asma' adalah kelompok kata benda (Isim) yang posisinya dalam kalimat menuntut harakat akhirnya berstatus Rafa'. Tanda utama dari keadaan Rafa' adalah harakat Dhammah atau Dhammatain di huruf terakhirnya (walaupun ada tanda pengganti lain untuk jenis kata ganda atau jamak).<br><br>Ada beberapa jabatan utama isim yang membuatnya harus Rafa' (Marfu'), yang paling dasar adalah:<br>1. Fa'il (Pelaku dari kata kerja): Subjek yang melakukan pekerjaan dalam susunan Jumlah Fi'liyah. Contoh: قَامَ زَيْدٌ (Zaid telah berdiri).<br>2. Naibul Fa'il (Pengganti Pelaku): Objek yang menjadi subjek pada kalimat pasif. Contoh: ضُرِبَ زَيْدٌ (Zaid telah dipukul).<br>3. Mubtada' dan Khabar: Subjek dan Predikat dalam susunan Jumlah Ismiyah (kalimat nominal). Contoh: زَيْدٌ قَائِمٌ (Zaid itu berdiri).<br><br>Setiap kali Anda menemukan isim menempati salah satu posisi di atas, Anda harus membaca akhirannya dengan dhammah (atau wakilnya) dan meyakini posisinya sebagai Marfu'.",
        examples: [
          {ar: "قَرَأَ الطَّالِبُ كِتَابًا", latin: "Qara'a at-Thalibu kitaban", id: "Pelajar itu telah membaca buku (Thalibu adalah Fa'il -> Marfu')", highlight: "الطَّالِبُ"},
          {ar: "الْمَسْجِدُ كَبِيْرٌ", latin: "Al-Masjidu kabiirun", id: "Masjid itu besar (Masjidu adalah Mubtada', kabiirun adalah Khabar)", highlight: "الْمَسْجِدُ كَبِيْرٌ"},
          {ar: "يُنْصَرُ الْمَظْلُوْمُ", latin: "Yunsharu al-mazhluumu", id: "Orang yang dizalimi ditolong (Mazhluum adalah Naibul Fa'il)", highlight: "الْمَظْلُوْمُ"}
        ],
        table: {
          headers: ["Jabatan Rafa'", "Fungsi", "Tanda Utama"],
          rows: [
            ["Fa'il", "Subjek Pelaku (aktif)", "Dhammah (ـُ / ـٌ)"],
            ["Mubtada'", "Subjek Kalimat Nominal", "Dhammah"],
            ["Khabar", "Predikat Kalimat Nominal", "Dhammah"]
          ]
        },
        quiz: [
          {question: "Tanda pokok dari I'rab Rafa' pada isim mufrad (tunggal) adalah?", options: ["Fathah", "Kasrah", "Dhammah", "Sukun"], correct: 2},
          {question: "Dalam kalimat 'جَاءَ الْمُدَرِّسُ' (Guru itu telah datang), kata 'الْمُدَرِّسُ' berkedudukan sebagai?", options: ["Maf'ul bih", "Mubtada'", "Fa'il", "Khabar"], correct: 2},
          {question: "Jabatan apa saja yang merupakan bagian dari Marfu'atul Asma?", options: ["Fa'il, Mubtada, Khabar", "Maf'ul bih, Hal, Tamyiz", "Majrur, Mudhaf Ilaih", "Fi'il Madhi, Mudhari, Amr"], correct: 0}
        ]
      },
      {
        id: "chap_12",
        title: "Manshubatul Asma' (Nashab)",
        titleAr: "مَنْصُوْبَاتُ الْأَسْمَاءِ",
        icon: "bx-right-arrow-circle",
        explanation: "Manshubatul Asma' adalah kelompok isim yang harakat akhirnya dituntut untuk berstatus Nashab. Tanda dasar dari status Nashab adalah Fathah atau Fathatain. Kelompok isim manshub ini jumlahnya paling banyak dalam tata bahasa Arab, utamanya menunjukkan keterangan pelengkap (objek atau keadaan).<br><br>Beberapa jabatan isim yang wajib dibaca manshub adalah:<br>1. Maf'ul Bih (Objek Penderita): Sesuatu yang dikenai pekerjaan. Contoh: شَرِبْتُ الْمَاءَ (Aku meminum air). Kata air (Maa-a) adalah objek.<br>2. Maf'ul Fih / Zharaf (Keterangan Waktu/Tempat): Contoh: صُمْتُ يَوْمَ الْخَمِيْسِ (Aku berpuasa pada hari kamis).<br>3. Hal (Keterangan Keadaan): Menjelaskan keadaan pelaku/objek saat perbuatan terjadi. Contoh: جَاءَ زَيْدٌ رَاكِبًا (Zaid datang dengan berkendara).<br>4. Tamyiz (Keterangan Penjelas): Menghilangkan kerancuan benda atau rasio. Contoh: طَابَ مُحَمَّدٌ نَفْسًا (Muhammad baik jiwanya).<br><br>Memahami posisi manshub penting agar kita tidak salah menangkap informasi dari objek atau keterangan pelengkap suatu kalimat.",
        examples: [
          {ar: "أَكَلَ الْوَلَدُ تُفَّاحَةً", latin: "Akala al-waladu tuffaahatan", id: "Anak itu makan apel (Apel adalah Maf'ul Bih / Objek -> Manshub)", highlight: "تُفَّاحَةً"},
          {ar: "قَرَأْتُ الْقُرْآنَ لَيْلًا", latin: "Qara'tu al-Qur'aana lailan", id: "Aku membaca Quran di malam hari (Lailan adalah Keterangan Waktu)", highlight: "لَيْلًا"},
          {ar: "حَضَرَ مُحَمَّدٌ بَاكِيًا", latin: "Hadhara Muhammadun baakiyan", id: "Muhammad hadir sambil menangis (Baakiyan adalah Hal / Keadaan)", highlight: "بَاكِيًا"}
        ],
        table: {
          headers: ["Jabatan Nashab", "Fungsi", "Contoh Tanda"],
          rows: [
            ["Maf'ul Bih", "Objek Penderita", "كِتَابًا (Kitaban)"],
            ["Maf'ul Fih (Zharaf)", "Ket. Tempat / Waktu", "أَمَامَ (Amama - di depan)"],
            ["Hal", "Ket. Keadaan Pelaku", "مُسْرِعًا (Musri'an - bergegas)"]
          ]
        },
        quiz: [
          {question: "Tanda pokok dari I'rab Nashab pada isim mufrad adalah?", options: ["Dhammah", "Kasrah", "Fathah", "Sukun"], correct: 2},
          {question: "Kata benda yang dikenai sasaran perbuatan (Objek Penderita) disebut?", options: ["Fa'il", "Maf'ul Bih", "Mubtada'", "Majrur"], correct: 1},
          {question: "Pada kalimat 'Aku minum kopi', kata 'kopi' secara Nahwu Arab harus berada dalam keadaan?", options: ["Rafa'", "Nashab", "Jar", "Mabniy"], correct: 1}
        ]
      },
      {
        id: "chap_13",
        title: "Majruratul Asma' (Jar)",
        titleAr: "مَجْرُوْرَاتُ الْأَسْمَاءِ",
        icon: "bx-down-arrow-circle",
        explanation: "Majruratul Asma' merupakan kelompok isim yang posisinya membuat harakat akhirnya dituntut berstatus Jar (atau Khafadh). Tanda utama dari I'rab Jar adalah Kasrah atau Kasratain. Keadaan Jar ini adalah tanda eksklusif milik isim; fi'il (kata kerja) sama sekali tidak pernah berstatus Jar.<br><br>Ada tiga penyebab utama mengapa isim menjadi Majrur:<br>1. Majrur karena didahului Huruf Jar. Huruf Jar seperti بِـ (dengan), مِنْ (dari), إِلَى (ke), فِي (di dalam). Contoh: ذَهَبْتُ إِلَى الْمَسْجِدِ (Aku pergi ke masjid). Kata al-masjidi majrur karena didahului ila.<br>2. Majrur karena Idhafah (Penyandaran Kata / Mudhaf Ilaih). Penyandaran ini biasanya menunjukkan kepemilikan. Contoh: كِتَابُ زَيْدٍ (Buku milik Zaid). Kata Zaid menjadi majrur (Zaid-in) sebagai Mudhaf ilaih.<br>3. Majrur karena mengikuti kata sebelumnya yang majrur (Tawabbi'). Misalnya Na'at (sifat) mengikuti benda yang disifati.<br><br>Aturan ini sangat mutlak; jika ada huruf jar, pastikan kata setelahnya berharakat kasrah.",
        examples: [
          {ar: "سَافَرْتُ إِلَى مَكَّةَ", latin: "Saafartu ila Makkata", id: "Aku bepergian ke Makkah (Catatan: Makkah dikecualikan, tandanya fathah karena ghoiru munshorif)", highlight: "إِلَى"},
          {ar: "الْقَلَمُ عَلَى الْمَكْتَبِ", latin: "Al-Qalamu 'ala al-maktabi", id: "Pena itu di atas meja (Al-maktabi majrur dengan kasrah karena 'ala)", highlight: "الْمَكْتَبِ"},
          {ar: "بَابُ الْمَدْرَسَةِ", latin: "Baabu al-madrasati", id: "Pintu sekolah (Al-Madrasati majrur sebagai Mudhaf Ilaih)", highlight: "الْمَدْرَسَةِ"}
        ],
        table: {
          headers: ["Penyebab Jar", "Keterangan", "Contoh"],
          rows: [
            ["Huruf Jar (مِنْ, إِلَى, فِي, عَلَى)", "Masuk sebelum isim", "فِي الْبَيْتِ (Di dalam rumah)"],
            ["Idhafah / Mudhaf Ilaih", "Kata kedua penyandaran", "سَيَّارَةُ الْمُدِيْرِ (Mobil direktur)"],
            ["Tawabbi' (Pengikut)", "Mengikuti kata sblmnya", "بِقَلَمٍ جَدِيْدٍ (Dengan pena baru)"]
          ]
        },
        quiz: [
          {question: "Tanda utama I'rab Jar pada isim biasa adalah harakat?", options: ["Dhammah", "Fathah", "Kasrah", "Sukun"], correct: 2},
          {question: "Kalimat 'بَابُ الْفَصْلِ' (Pintu kelas), kata al-Fashli diakhiri kasrah karena kedudukannya sebagai?", options: ["Mudhaf Ilaih", "Mubtada", "Fa'il", "Maf'ul Bih"], correct: 0},
          {question: "Berikut ini yang termasuk huruf Jar adalah?", options: ["لَمْ، لَنْ، كَيْ", "مِنْ، إِلَى، فِي", "إِنَّ، أَنَّ، لَيْتَ", "كَانَ، صَارَ، لَيْسَ"], correct: 1}
        ]
      },
      {
        id: "chap_14",
        title: "Tawabbi' (Kata Pengikut)",
        titleAr: "التَّوَابِعُ",
        icon: "bx-link",
        explanation: "Tawabbi' (bentuk jamak dari Tabi') bermakna kata pengikut. Dalam Nahwu, Tawabbi' adalah kata-kata yang harakat akhir (I'rab)-nya tidak ditentukan langsung oleh 'Amil yang ada, melainkan sekadar meniru dan mengikuti I'rab dari kata yang ada sebelumnya (yang diikutinya). Jika kata sebelumnya rafa', maka ia ikut rafa', jika nashab ia ikut nashab.<br><br>Ada empat jenis Tawabbi':<br>1. Na'at (Sifat): Kata yang menyifati benda sebelumnya. Contoh: جَاءَ رَجُلٌ عَالِمٌ (Datang seorang pria yang 'alim). 'Alimun adalah sifat, mengikuti rajulun yang rafa'.<br>2. 'Athaf (Kata Hubung/Konjungsi): Kata yang disambungkan dengan huruf athaf seperti وَ (dan). Contoh: جَاءَ زَيْدٌ وَعُمَرُ (Telah datang Zaid dan Umar).<br>3. Taukid (Penegas): Mengulangi kata atau menggunakan kata khusus untuk menegaskan. Contoh: جَاءَ الْمُدَرِّسُ نَفْسُهُ (Guru itu 'sendiri' yang datang).<br>4. Badal (Pengganti): Menyebutkan sinonim atau rincian sebagai pengganti utuh atau sebagian. Contoh: جَاءَ الْأُسْتَاذُ زَيْدٌ (Ustadz, 'yaitu Zaid', telah datang).",
        examples: [
          {ar: "رَأَيْتُ وَلَدًا صَالِحًا", latin: "Ra'aytu waladan shaalihan", id: "Aku melihat anak (laki-laki) yang shalih (Shaalihan adalah Na'at, ikut nashab)", highlight: "صَالِحًا"},
          {ar: "حَضَرَ مُحَمَّدٌ وَخَالِدٌ", latin: "Hadhara Muhammadun wa Khaalidun", id: "Hadir Muhammad dan Khalid (Khalidun athaf ikut Muhammadun yang rafa')", highlight: "وَخَالِدٌ"},
          {ar: "قَرَأْتُ الْكِتَابَ نِصْفَهُ", latin: "Qara'tu al-kitaaba nishfahu", id: "Aku membaca buku (yakni) 'sebagian'nya (Nishfahu adalah Badal dari al-Kitaaba)", highlight: "نِصْفَهُ"}
        ],
        table: {
          headers: ["Jenis Tawabbi'", "Fungsi", "Contoh Aturan"],
          rows: [
            ["Na'at (Sifat)", "Memberi Sifat", "Ikut i'rab, mudzakkar/muannats, nakiroh/makrifah"],
            ["Athaf (Hubung)", "Menyambung dengan وَ / فـ", "Ikut i'rab kata sebelum huruf athaf"],
            ["Badal (Pengganti)", "Merinci atau mengganti", "Ikut i'rab kata pokoknya"]
          ]
        },
        quiz: [
          {question: "Apa fungsi utama dari Tawabbi' dalam I'rab?", options: ["Memiliki I'rab sendiri", "Mengikuti I'rab kata sebelumnya", "Selalu majrur", "Selalu mabniy"], correct: 1},
          {question: "Kata sifat dalam tata bahasa Arab disebut juga sebagai?", options: ["Badal", "Taukid", "Na'at", "Athaf"], correct: 2},
          {question: "Jika kata yang disifati (Man'ut) berharakat fathah (nashab), maka kata sifatnya (Na'at) harus berharakat?", options: ["Dhammah", "Kasrah", "Fathah", "Sukun"], correct: 2}
        ]
      },
      {
        id: "chap_15",
        title: "Amil Nawasikh (Kana, Inna, dll)",
        titleAr: "الْعَوَامِلُ النَّوَاسِخُ",
        icon: "bx-eraser",
        explanation: "Amil Nawasikh adalah 'Amil atau alat pengubah yang masuk ke dalam susunan jumlah Ismiyah (Mubtada' dan Khabar), lalu menghapus atau membatalkan ('nasakh') aturan asalnya yang sama-sama Rafa', dan menggantinya dengan aturan hukum baru. Ada dua kelompok utama: Kana wa Akhawatuha (Kana dan saudari-saudarinya) serta Inna wa Akhawatuha (Inna dan saudari-saudarinya).<br><br>1. Kana wa Akhawatuha (كَانَ، صَارَ، لَيْسَ): Tugasnya adalah Merofa'kan Mubtada (namanya berubah jadi Isim Kana) dan Menashabkan Khabar (namanya jadi Khabar Kana). Asalnya: زَيْدٌ قَائِمٌ (Zaid berdiri). Jika dimasukkan Kana menjadi: كَانَ زَيْدٌ قَائِمًا (Adalah Zaid dalam keadaan berdiri).<br>2. Inna wa Akhawatuha (إِنَّ، أَنَّ، لَكِنَّ، لَعَلَّ، لَيْتَ): Kebalikan dari Kana. Tugasnya Menashabkan Mubtada dan Merofa'kan Khabar. Asalnya: زَيْدٌ قَائِمٌ. Dimasukkan Inna (Sesungguhnya) menjadi: إِنَّ زَيْدًا قَائِمٌ (Sesungguhnya Zaid itu berdiri).<br><br>Keberadaan Amil Nawasikh ini sangat sering dijumpai dalam teks Arab dan Al-Qur'an untuk memberikan makna keadaan, penegasan, penyesalan, atau kepastian.",
        examples: [
          {ar: "كَانَ اللهُ غَفُوْرًا رَحِيْمًا", latin: "Kaana Allahu Ghafuuran Rahiiman", id: "Dan Allah Maha Pengampun lagi Maha Penyayang (Allahu marfu', ghafuuran manshub)", highlight: "كَانَ"},
          {ar: "إِنَّ اللهَ مَعَ الصَّابِرِيْنَ", latin: "Innallaha ma'a as-shaabiriin", id: "Sesungguhnya Allah beserta orang-orang yang sabar (Allaha manshub karena inna)", highlight: "إِنَّ"},
          {ar: "لَيْسَ الْمُسْلِمُ كَاذِبًا", latin: "Laysa al-muslimu kaadziban", id: "Orang muslim itu tidaklah pembohong", highlight: "لَيْسَ"}
        ],
        table: {
          headers: ["Kelompok Amil", "Fungsi/Efek", "Contoh Perubahan"],
          rows: [
            ["كَانَ (Kana/Adalah)", "Isim = Rafa', Khabar = Nashab", "كَانَ زَيْدٌ قَائِمًا"],
            ["إِنَّ (Inna/Sesungguhnya)", "Isim = Nashab, Khabar = Rafa'", "إِنَّ زَيْدًا قَائِمٌ"],
            ["لَيْسَ (Laysa/Bukan)", "Isim = Rafa', Khabar = Nashab", "لَيْسَ الْفَقْرُ عَيْبًا"]
          ]
        },
        quiz: [
          {question: "Apa fungsi amil Inna (إِنَّ) ketika masuk ke mubtada' dan khabar?", options: ["Merafa'kan keduanya", "Menashabkan mubtada dan merafa'kan khabar", "Merafa'kan mubtada dan menashabkan khabar", "Menjarkan keduanya"], correct: 1},
          {question: "Apa fungsi dari amil Kana (كَانَ)?", options: ["Menjarkan khabar", "Merafa'kan isim dan menashabkan khabar", "Menashabkan isim dan khabar", "Membuat isim menjadi mabniy"], correct: 1},
          {question: "Kalimat asal 'مُحَمَّدٌ نَائِمٌ'. Jika diberi kata 'إِنَّ', kalimat yang benar adalah?", options: ["إِنَّ مُحَمَّدٌ نَائِمٌ", "إِنَّ مُحَمَّدًا نَائِمًا", "إِنَّ مُحَمَّدًا نَائِمٌ", "إِنَّ مُحَمَّدٍ نَائِمٌ"], correct: 2}
        ]
      }
    ]
  };
})();
