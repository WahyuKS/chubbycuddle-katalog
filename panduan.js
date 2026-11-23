/**
 * ==========================================================
 *  ARTIKEL PANDUAN (untuk keyword umum di Google)
 * ==========================================================
 *  Setiap artikel jadi halaman /panduan/<slug>/ dan otomatis
 *  menampilkan produk terkait (biar pembaca bisa langsung beli).
 *
 *  Penulisan di "html":
 *   [[produk:slug-produk|teks link]]      -> link ke halaman produk
 *   [[kategori:slug-kategori|teks link]]  -> link ke halaman kategori
 *   [[panduan:slug-panduan|teks link]]    -> link ke artikel lain
 *  Slug produk = alamat di /produk/<slug>/ (lihat folder produk/).
 *
 *  Setelah mengubah file ini, jalankan: npm run build (atau push saja).
 * ==========================================================
 */
const PANDUAN = [
  {
    slug: "perlengkapan-sugar-glider",
    keyword: "perlengkapan sugar glider",
    title: "Perlengkapan Sugar Glider untuk Pemula: Checklist Lengkap + Estimasi Budget",
    metaTitle: "Perlengkapan Sugar Glider untuk Pemula (Checklist + Harga)",
    description: "Checklist perlengkapan sugar glider untuk pemula: kandang, tempat makan, botol minum, spet, pet cargo, mainan, dan estimasi budget. Lengkap dengan tips memilih.",
    image: "assets/banner1.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Baru mau pelihara sugar glider atau baru saja adopsi? Supaya si kecil langsung nyaman dan kamu tidak bolak-balik belanja, berikut checklist perlengkapan sugar glider yang paling penting — mulai dari yang wajib ada di hari pertama sampai yang bikin perawatan harian jauh lebih praktis.",
    sections: [
      {
        h2: "1. Kandang yang tinggi dan aman",
        html: "<p>Sugar glider adalah hewan pemanjat dan peluncur, jadi kandang yang <strong>tinggi</strong> lebih penting daripada kandang yang lebar. Pilih kandang dengan jarak jeruji rapat (sekitar 1–1,3 cm) supaya kepala atau badan si kecil tidak bisa terselip, pintu yang bisa dikunci, dan nampan bawah yang mudah dilepas untuk dibersihkan.</p><p>Letakkan kandang di ruangan yang tidak terkena sinar matahari langsung atau hembusan AC. Kalau kandangmu berat dan sering dipindah saat dibersihkan, [[produk:pet-cage-trolley|Pet Cage Trolley]] dengan roda dan rem pengunci akan sangat membantu.</p>",
        products: ["pet-cage-trolley", "mini-sweeper-set-sapu-sekop-mini"]
      },
      {
        h2: "2. Tempat makan dan botol minum",
        html: "<p>Sediakan minimal <strong>dua mangkuk</strong>: satu untuk makanan utama dan satu untuk buah atau protein. Mangkuk keramik lebih berat sehingga tidak mudah terbalik, dan mangkuk bersekat seperti [[produk:cherry-bowl|Cherry Bowl]] atau [[produk:banana-trio-bowl|Banana Trio Bowl]] membantu menyajikan beberapa menu tanpa tercampur.</p><p>Untuk air minum, botol gantung jauh lebih higienis daripada mangkuk air karena tidak terkena kotoran. [[produk:cage-water-bottle-stainless|Botol minum dengan ujung stainless]] lebih tahan gigitan. Ganti airnya setiap hari.</p>",
        products: ["cherry-bowl", "banana-trio-bowl", "fruit-bowl-keramik-4-motif", "cage-water-bottle-stainless"]
      },
      {
        h2: "3. Spet untuk susu, vitamin, dan obat",
        html: "<p>Spet (syringe feeder) hampir pasti kamu butuhkan — untuk memberi susu pada joey, vitamin, obat dari dokter hewan, atau makanan cair saat si kecil sedang kurang nafsu makan. Pilih spet dengan <strong>ujung corong halus</strong> dan <strong>garis takaran</strong> yang jelas supaya porsinya tepat.</p><p>Yang sering terlupa: corong spet sempit dan mudah berkerak sisa susu. Karena itu kami menyarankan [[produk:spet-sugar-glider-mini-brush|Spet + Mini Brush]] — sikat mininya bisa menjangkau bagian dalam corong. Cara pakainya kami bahas di [[panduan:cara-memberi-susu-sugar-glider|panduan memberi susu sugar glider]].</p>",
        products: ["spet-sugar-glider-mini-brush", "spet-sugar-glider", "mini-brush"]
      },
      {
        h2: "4. Pet cargo atau tas travel",
        html: "<p>Pet cargo wajib dimiliki sejak hari pertama — untuk perjalanan pulang setelah adopsi, ke dokter hewan, atau saat kandang dibersihkan. Pastikan ada <strong>ventilasi yang cukup</strong>, kunci yang aman, dan alas yang memisahkan kotoran dari kaki. Untuk perjalanan singkat, [[produk:pet-cargo-kotak-pastel|Pet Cargo Kotak Pastel]] sudah cukup; untuk jalan-jalan yang lebih sering, [[produk:pet-cargo-ufo-pod-stainless|UFO Pod]] atau [[produk:aero-view-travel-backpack|travel backpack]] lebih nyaman.</p><p>Tips memilihnya ada di [[panduan:pet-cargo-sugar-glider|panduan memilih pet cargo sugar glider]].</p>",
        products: ["pet-cargo-kotak-pastel", "pet-cargo-ufo-pod-stainless", "aeropod-travel-carrier-pastel", "breeze-sling-bag"]
      },
      {
        h2: "5. Mainan dan perlengkapan grooming",
        html: "<p>Sugar glider sangat aktif di malam hari. Tanpa mainan, mereka mudah stres dan bosan. Roda lari (jogging wheel) dengan <strong>permukaan rata tanpa celah</strong> adalah mainan paling penting karena aman untuk ekor dan kaki. Tambahkan pijakan, ayunan, atau tali panjat agar kandang lebih seru.</p><p>Untuk memotong kuku, [[produk:glove-pouch-grooming-2-in-1|Glove Pouch Grooming]] membantu melindungi tangan dari cakaran dan sekaligus bisa dipakai sebagai kantong tidur.</p>",
        products: ["explorer-cruiser-wheel", "glove-pouch-grooming-2-in-1", "alas-besi-2-in-1"]
      },
      {
        h2: "6. Perlengkapan kebersihan",
        html: "<p>Kandang yang bersih mengurangi bau dan risiko penyakit. Bersihkan sisa makanan setiap hari dan cuci nampan secara rutin. Sapu dan sekop mini seperti [[produk:mini-sweeper-set-sapu-sekop-mini|Mini Sweeper Set]] sangat membantu menjangkau sudut kandang yang sempit.</p>",
        products: []
      }
    ],
    budget: [
      { slug: "pet-cargo-kotak-pastel", note: "Pet cargo untuk perjalanan & saat bersih-bersih kandang" },
      { slug: "cherry-bowl", note: "Mangkuk makan bersekat" },
      { slug: "fruit-bowl-keramik-4-motif", note: "Mangkuk buah / protein" },
      { slug: "cage-water-bottle-stainless", note: "Botol minum kandang" },
      { slug: "spet-sugar-glider-mini-brush", note: "Spet + sikat pembersih" },
      { slug: "mini-sweeper-set-sapu-sekop-mini", note: "Sapu & sekop kandang" }
    ],
    faqs: [
      { q: "Apa saja perlengkapan sugar glider yang wajib untuk pemula?", a: "Kandang yang tinggi dan aman, minimal dua mangkuk makan, botol minum gantung, pet cargo, spet untuk susu/vitamin, roda lari dengan permukaan rata, kantong tidur (pouch), dan perlengkapan kebersihan kandang." },
      { q: "Berapa budget awal perlengkapan sugar glider?", a: "Di luar kandang, perlengkapan dasar seperti pet cargo, mangkuk, botol minum, spet, dan alat kebersihan bisa dimulai dari sekitar Rp 300 ribuan di ChubbyCuddle. Lihat tabel estimasi budget di artikel ini." },
      { q: "Apakah perlengkapan sugar glider bisa dipakai untuk hamster?", a: "Banyak yang bisa, misalnya pet cargo, mangkuk keramik, botol minum, dan spet. Pastikan ukurannya sesuai dengan jenis dan ukuran hewanmu. Tanyakan ke admin jika ragu." }
    ]
  },

  {
    slug: "cara-merawat-sugar-glider",
    keyword: "cara merawat sugar glider",
    title: "Cara Merawat Sugar Glider untuk Pemula: 9 Hal yang Wajib Kamu Tahu",
    metaTitle: "Cara Merawat Sugar Glider untuk Pemula (Panduan Lengkap)",
    description: "Panduan cara merawat sugar glider untuk pemula: kandang, makanan, suhu, bonding, kebersihan, mainan, sampai tanda sugar glider sakit. Mudah dipraktikkan di rumah.",
    image: "assets/banner5.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Sugar glider memang menggemaskan, tapi kebutuhannya berbeda dari kucing atau hamster. Mereka hewan sosial, aktif di malam hari, dan butuh pola makan yang seimbang. Berikut cara merawat sugar glider yang perlu kamu pahami sejak awal.",
    sections: [
      {
        h2: "1. Pahami sifat sugar glider",
        html: "<p>Sugar glider adalah hewan <strong>nokturnal</strong> — tidur di siang hari dan aktif di malam hari. Mereka juga hewan <strong>sosial</strong> yang di alam hidup berkelompok, sehingga banyak pemelihara menyarankan memelihara minimal sepasang. Jika hanya satu, kamu perlu meluangkan lebih banyak waktu untuk menemaninya setiap hari.</p>"
      },
      {
        h2: "2. Siapkan kandang yang tepat",
        html: "<p>Kandang sebaiknya tinggi (karena mereka suka memanjat), berjeruji rapat, dan berisi kantong tidur, tempat makan, botol minum, serta mainan. Letakkan di area yang tenang dan tidak terkena matahari langsung. Checklist lengkapnya ada di [[panduan:perlengkapan-sugar-glider|panduan perlengkapan sugar glider]].</p>",
        products: ["pet-cage-trolley", "alas-besi-2-in-1"]
      },
      {
        h2: "3. Jaga suhu ruangan",
        html: "<p>Sugar glider tidak tahan suhu terlalu dingin. Hindari meletakkan kandang tepat di bawah hembusan AC. Sediakan kantong tidur agar mereka bisa menghangatkan diri, terutama saat malam atau musim hujan.</p>"
      },
      {
        h2: "4. Beri makanan yang seimbang",
        html: "<p>Pola makan yang tidak seimbang adalah penyebab masalah kesehatan yang paling sering, misalnya kekurangan kalsium. Kombinasikan makanan utama, buah dan sayur segar, serta sumber protein. Daftar makanan yang aman dan yang harus dihindari ada di [[panduan:makanan-sugar-glider|panduan makanan sugar glider]].</p><p>Sajikan di mangkuk yang berat dan mudah dicuci, dan ganti air minum setiap hari.</p>",
        products: ["slice-of-apple-bowl", "love-bird-bowl", "cage-water-bottle-plastic"]
      },
      {
        h2: "5. Bangun bonding pelan-pelan",
        html: "<p>Bonding adalah proses membangun kepercayaan. Biarkan sugar glider mengenali bau kamu — misalnya dengan menaruh kain yang pernah kamu pakai di kandang, atau membawanya dalam pouch selama beberapa saat setiap hari. Bicara dengan suara lembut, beri camilan dari tangan, dan jangan memaksa jika ia masih takut.</p>",
        products: ["glove-pouch-grooming-2-in-1"]
      },
      {
        h2: "6. Sediakan mainan dan waktu bermain",
        html: "<p>Sugar glider yang bosan bisa stres. Roda lari dengan permukaan rata, tali panjat, ayunan, dan mainan yang bisa diganti-ganti posisinya membuat mereka tetap aktif. Waktu bermain di luar kandang juga penting — pastikan ruangan aman (jendela tertutup, tidak ada kabel atau celah sempit).</p>",
        products: ["explorer-cruiser-wheel"]
      },
      {
        h2: "7. Jaga kebersihan kandang",
        html: "<p>Buang sisa makanan setiap hari agar tidak membusuk, bersihkan nampan secara rutin, dan cuci mangkuk serta botol minum. Kebersihan yang baik membantu mengurangi bau dan mencegah penyakit.</p>",
        products: ["mini-sweeper-set-sapu-sekop-mini"]
      },
      {
        h2: "8. Potong kuku secara berkala",
        html: "<p>Kuku sugar glider tajam dan bisa melukai kulit. Potong ujungnya secara hati-hati — gunakan bantuan pouch atau sarung tangan grooming agar si kecil tetap tenang dan tanganmu terlindungi. Jika belum berani, minta bantuan dokter hewan.</p>"
      },
      {
        h2: "9. Kenali tanda sugar glider sakit",
        html: "<p>Segera bawa ke <strong>dokter hewan eksotik</strong> jika sugar glider tampak lemas, tidak mau makan, berat badan turun, kotorannya tidak normal, atau kaki belakangnya terlihat lemah. Saat membawanya, gunakan pet cargo berventilasi baik — tipsnya ada di [[panduan:pet-cargo-sugar-glider|panduan pet cargo sugar glider]].</p>",
        products: ["pet-cargo-ufo-pod-plastic", "pet-cargo-kotak-pastel"]
      }
    ],
    faqs: [
      { q: "Apakah sugar glider cocok untuk pemula?", a: "Bisa, asalkan kamu siap dengan kebutuhannya: aktif di malam hari, butuh teman atau waktu interaksi setiap hari, dan pola makan yang seimbang. Persiapkan perlengkapannya sebelum adopsi." },
      { q: "Berapa kali sugar glider diberi makan?", a: "Umumnya sugar glider diberi makan sekali sehari di sore atau malam hari saat mereka mulai aktif. Sesuaikan porsi dengan usia dan kondisi tubuh, dan konsultasikan dengan dokter hewan bila perlu." },
      { q: "Apakah sugar glider harus dipelihara berpasangan?", a: "Sugar glider adalah hewan sosial, sehingga banyak pemelihara menyarankan minimal sepasang. Jika memelihara satu ekor, luangkan lebih banyak waktu untuk berinteraksi setiap hari." }
    ]
  },

  {
    slug: "makanan-sugar-glider",
    keyword: "makanan sugar glider",
    title: "Makanan Sugar Glider: Yang Aman, Yang Harus Dihindari, dan Cara Menyajikannya",
    metaTitle: "Makanan Sugar Glider: Daftar Aman & yang Harus Dihindari",
    description: "Sugar glider makan apa? Daftar makanan sugar glider yang aman, makanan yang berbahaya, contoh menu harian, dan tips menyajikan agar si kecil sehat dan tidak pilih-pilih.",
    image: "assets/banner3.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Di alam, sugar glider memakan getah pohon, nektar, serbuk sari, dan serangga. Di rumah, kita perlu meniru keseimbangan itu dengan makanan yang tepat. Berikut daftar makanan sugar glider yang umum direkomendasikan, yang sebaiknya dihindari, dan cara menyajikannya.",
    sections: [
      {
        h2: "Komposisi makanan yang seimbang",
        html: "<p>Secara umum, menu harian sugar glider terdiri dari tiga bagian:</p><ul><li><strong>Makanan utama</strong> — pakan khusus sugar glider atau resep diet seimbang yang direkomendasikan dokter hewan.</li><li><strong>Buah dan sayur segar</strong> — dicuci bersih dan dipotong kecil.</li><li><strong>Protein</strong> — misalnya serangga (jangkrik, ulat hongkong secukupnya), telur rebus, atau ayam rebus tanpa bumbu.</li></ul><p>Kalsium sangat penting. Kekurangan kalsium bisa menyebabkan masalah tulang dan kaki belakang yang lemah, jadi tanyakan ke dokter hewan apakah si kecil butuh suplemen.</p>"
      },
      {
        h2: "Buah dan sayur yang umum diberikan",
        html: "<p>Beberapa yang umum diberikan dalam porsi kecil: apel (tanpa biji), pir, pepaya, melon, semangka, mangga, pisang (secukupnya), blueberry, wortel, ubi rebus, dan sayuran hijau. Variasikan setiap hari agar nutrisinya lengkap dan si kecil tidak bosan.</p>"
      },
      {
        h2: "Makanan yang harus dihindari",
        html: "<ul><li>Cokelat, kopi, teh, dan minuman berkafein</li><li>Bawang merah, bawang putih, dan makanan berbumbu</li><li>Susu sapi dan produk olahan susu (sugar glider sulit mencerna laktosa)</li><li>Makanan manis, gorengan, dan makanan olahan manusia</li><li>Biji buah (misalnya biji apel) dan buah yang belum dicuci bersih</li><li>Makanan basi atau sisa makanan yang sudah lama di kandang</li></ul><p>Jika ragu suatu makanan aman atau tidak, sebaiknya jangan diberikan dulu dan tanyakan ke dokter hewan eksotik.</p>"
      },
      {
        h2: "Cara menyajikan supaya rapi dan higienis",
        html: "<p>Sajikan makanan di sore atau malam hari, saat sugar glider mulai aktif. Gunakan mangkuk bersekat agar buah, protein, dan makanan utama tidak tercampur — si kecil juga jadi lebih mudah memilih. Mangkuk keramik seperti [[produk:banana-trio-bowl|Banana Trio Bowl]] (3 sekat) atau [[produk:cherry-bowl|Cherry Bowl]] (2 sekat) berat sehingga tidak mudah terbalik.</p><p>Buang sisa makanan keesokan paginya, cuci mangkuk, dan ganti air minum di [[produk:cage-water-bottle-stainless|botol gantung]] setiap hari.</p>",
        products: ["banana-trio-bowl", "cherry-bowl", "apple-in-center-bowl", "jacuzzi-bowl", "cage-water-bottle-stainless"]
      },
      {
        h2: "Vitamin dan makanan cair",
        html: "<p>Saat sugar glider sakit, baru pulih, atau sedang dalam masa pertumbuhan, dokter hewan mungkin menyarankan vitamin atau makanan cair. Berikan pelan-pelan dengan spet bertakaran agar porsinya tepat dan tidak tersedak. Lihat [[panduan:cara-memberi-susu-sugar-glider|cara memberi susu dan vitamin dengan spet]].</p>",
        products: ["spet-sugar-glider-mini-brush", "spet-sugar-glider"]
      }
    ],
    faqs: [
      { q: "Sugar glider makan apa saja?", a: "Sugar glider membutuhkan kombinasi makanan utama yang seimbang, buah dan sayur segar, serta protein seperti serangga atau telur rebus. Kalsium juga penting untuk kesehatan tulangnya." },
      { q: "Apakah sugar glider boleh minum susu sapi?", a: "Sebaiknya tidak. Sugar glider sulit mencerna laktosa pada susu sapi. Untuk joey atau kebutuhan khusus, gunakan susu pengganti khusus hewan sesuai saran dokter hewan." },
      { q: "Buah apa yang tidak boleh untuk sugar glider?", a: "Hindari biji buah (misalnya biji apel), buah yang tidak dicuci bersih, dan buah dalam kaleng atau bergula. Berikan buah dalam porsi kecil dan bervariasi." }
    ]
  },

  {
    slug: "cara-memberi-susu-sugar-glider",
    keyword: "cara memberi susu sugar glider",
    title: "Cara Memberi Susu Sugar Glider dengan Spet (Joey & Dewasa) yang Aman",
    metaTitle: "Cara Memberi Susu Sugar Glider dengan Spet yang Aman",
    description: "Langkah aman memberi susu, vitamin, atau makanan cair ke sugar glider dan joey dengan spet: posisi, takaran, kecepatan, dan cara membersihkan spet agar tidak berkerak.",
    image: "assets/CC120027.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Memberi susu atau vitamin dengan spet terlihat sederhana, tapi kalau terlalu cepat sugar glider bisa tersedak. Berikut langkah-langkah yang aman, baik untuk joey (bayi sugar glider) maupun sugar glider dewasa.",
    sections: [
      {
        h2: "Kapan sugar glider perlu diberi susu dengan spet?",
        html: "<ul><li><strong>Joey yatim atau ditolak induknya</strong> — membutuhkan susu pengganti khusus hewan secara rutin.</li><li><strong>Sugar glider sakit atau baru pulih</strong> — sering diberi makanan cair, vitamin, atau obat dari dokter hewan.</li><li><strong>Membangun bonding</strong> — beberapa pemilik memberi camilan cair sedikit-sedikit dari spet.</li></ul><p><strong>Jangan memberi susu sapi biasa.</strong> Gunakan susu pengganti (milk replacer) yang sesuai, dan untuk joey selalu ikuti petunjuk dokter hewan mengenai jenis, takaran, dan jadwalnya.</p>"
      },
      {
        h2: "Langkah memberi susu dengan spet",
        html: "<ol><li><strong>Cuci tangan dan spet</strong> sebelum digunakan.</li><li><strong>Siapkan susu hangat-hangat kuku</strong> — cek di pergelangan tangan, jangan sampai panas.</li><li><strong>Isi spet sesuai takaran</strong>. Garis takaran membantu kamu mencatat berapa banyak yang sudah diminum.</li><li><strong>Pegang sugar glider dalam posisi tegak</strong> atau sedikit condong ke depan, dibungkus kain/pouch agar tenang. Jangan beri susu saat ia telentang.</li><li><strong>Teteskan sedikit demi sedikit</strong> di ujung mulutnya dan biarkan ia menjilat sendiri. Jangan menyemprot.</li><li><strong>Beri jeda</strong>. Jika susu keluar dari hidung atau ia tampak kesulitan bernapas, hentikan segera dan hubungi dokter hewan.</li><li><strong>Bersihkan mulut dan bulunya</strong> dengan kain lembut yang sedikit lembap setelah selesai.</li></ol>",
        products: ["spet-sugar-glider-mini-brush", "spet-sugar-glider"]
      },
      {
        h2: "Kenapa ujung corong spet penting?",
        html: "<p>Mulut sugar glider sangat kecil. Spet dengan <strong>ujung corong halus</strong> membuat aliran cairan lebih mudah dikontrol dibanding pipet atau spet biasa, sehingga risiko tersedak lebih kecil. Garis takaran juga membantu kamu menjaga porsi tetap konsisten setiap hari.</p><p>Ingin lihat detail spetnya? Kunjungi [[landing:/spet-mini-brush/|halaman Spet + Mini Brush]].</p>"
      },
      {
        h2: "Cara membersihkan spet agar tidak berkerak",
        html: "<p>Sisa susu yang mengering di dalam corong bisa menjadi tempat berkembangnya bakteri. Setelah dipakai:</p><ol><li>Bilas spet dengan air hangat, tarik dan dorong pendorongnya beberapa kali.</li><li>Gosok bagian dalam corong dengan [[produk:mini-brush|sikat mini]] — sikat biasa tidak bisa menjangkau bagian ini.</li><li>Cuci dengan sabun yang aman, bilas sampai bersih, lalu keringkan dengan posisi terbuka.</li></ol>",
        products: ["mini-brush"]
      }
    ],
    faqs: [
      { q: "Susu apa yang aman untuk sugar glider?", a: "Gunakan susu pengganti (milk replacer) khusus hewan sesuai saran dokter hewan. Hindari susu sapi biasa karena sugar glider sulit mencerna laktosa." },
      { q: "Bagaimana agar sugar glider tidak tersedak saat diberi susu?", a: "Pegang dalam posisi tegak, teteskan sedikit demi sedikit di ujung mulutnya, beri jeda, dan jangan pernah menyemprot. Spet dengan ujung corong halus membantu mengontrol aliran." },
      { q: "Berapa banyak susu untuk joey sugar glider?", a: "Takaran dan jadwal tergantung usia dan berat joey. Ikuti petunjuk dokter hewan, dan gunakan spet bertakaran agar jumlahnya bisa dicatat dengan tepat." }
    ]
  },

  {
    slug: "pet-cargo-sugar-glider",
    keyword: "pet cargo sugar glider",
    title: "Cara Memilih Pet Cargo Sugar Glider & Tips Membawanya Bepergian",
    metaTitle: "Pet Cargo Sugar Glider: Cara Memilih & Tips Bepergian",
    description: "Tips memilih pet cargo, travel carrier, dan tas sugar glider yang aman: ventilasi, ukuran, alas, kunci. Plus cara membawa sugar glider bepergian agar tidak stres.",
    image: "assets/banner2.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Ke dokter hewan, gathering komunitas, mudik, atau sekadar jalan-jalan — pet cargo yang tepat membuat perjalanan sugar glider jauh lebih aman dan tenang. Berikut cara memilih pet cargo sugar glider dan tips membawanya bepergian.",
    sections: [
      {
        h2: "5 hal yang perlu diperhatikan saat memilih pet cargo",
        html: "<ol><li><strong>Ventilasi</strong> — lubang udara di beberapa sisi agar sirkulasi udara lancar.</li><li><strong>Kunci yang aman</strong> — sugar glider pintar mencari celah. Pastikan pintu atau tutup terkunci rapat.</li><li><strong>Alas terpisah</strong> — alas jaring membuat kotoran jatuh ke bawah sehingga kaki dan bulu tetap bersih.</li><li><strong>Botol minum</strong> — untuk perjalanan lebih lama, pilih carrier yang menyediakan botol minum.</li><li><strong>Mudah dibersihkan dan dibawa</strong> — pegangan yang nyaman atau tali selempang memudahkan perjalanan.</li></ol>"
      },
      {
        h2: "Jenis pet cargo dan kapan dipakai",
        html: "<p><strong>Pet cargo kotak</strong> cocok untuk perjalanan singkat dan saat kandang sedang dibersihkan — misalnya [[produk:pet-cargo-kotak-pastel|Pet Cargo Kotak Pastel]] atau [[produk:pet-cargo-paw-pastel-kotak|Paw Pastel]].</p><p><strong>Pet cargo bulat (UFO Pod)</strong> dengan alas jaring dan desain open-front cocok untuk ke dokter hewan dan gathering — pilih versi [[produk:pet-cargo-ufo-pod-stainless|stainless]] atau [[produk:pet-cargo-ufo-pod-plastic|plastik]].</p><p><strong>Tas travel dan sling bag</strong> paling nyaman untuk jalan-jalan sambil tetap bisa memantau si kecil, seperti [[produk:aero-view-travel-backpack|Aero View Travel Backpack]] dan [[produk:breeze-sling-bag|Breeze Sling Bag]].</p>",
        products: ["pet-cargo-kotak-pastel", "pet-cargo-paw-pastel-kotak", "pet-cargo-ufo-pod-stainless", "pet-cargo-ufo-pod-plastic", "aeropod-travel-carrier-pastel", "aero-view-travel-backpack", "breeze-sling-bag", "character-backpack"]
      },
      {
        h2: "Tips membawa sugar glider bepergian",
        html: "<ul><li><strong>Biasakan dulu di rumah</strong>: masukkan pouch atau kain dengan baumu ke dalam carrier beberapa hari sebelumnya.</li><li><strong>Hindari panas</strong>: jangan biarkan carrier terkena matahari langsung, dan jangan pernah meninggalkan sugar glider di mobil yang diparkir.</li><li><strong>Bawa air dan camilan</strong>, terutama untuk perjalanan lebih dari beberapa jam.</li><li><strong>Tutup sebagian carrier</strong> dengan kain tipis jika si kecil terlihat stres karena keramaian.</li><li><strong>Cek kunci</strong> setiap kali membuka dan menutup carrier.</li></ul>"
      }
    ],
    faqs: [
      { q: "Pet cargo apa yang bagus untuk sugar glider?", a: "Pilih pet cargo dengan ventilasi cukup, kunci aman, alas jaring untuk memisahkan kotoran, dan botol minum untuk perjalanan lebih lama. Untuk perjalanan singkat pet cargo kotak sudah cukup; untuk jalan-jalan, tas travel atau sling bag lebih nyaman." },
      { q: "Apakah pet cargo sugar glider bisa dipakai untuk hamster?", a: "Bisa. Pet cargo di ChubbyCuddle juga cocok untuk hamster dan hewan kecil lainnya, selama ukurannya sesuai." },
      { q: "Berapa lama sugar glider boleh berada di pet cargo?", a: "Untuk perjalanan singkat tidak masalah. Untuk perjalanan panjang, sediakan air minum, pouch, dan beri istirahat. Hindari panas dan jangan tinggalkan di dalam kendaraan." }
    ]
  },

  {
    slug: "perlengkapan-hamster",
    keyword: "perlengkapan hamster",
    title: "Perlengkapan Hamster untuk Pemula: Pet Cargo, Tempat Makan, Botol Minum & Mainan",
    metaTitle: "Perlengkapan Hamster untuk Pemula: Daftar Lengkap",
    description: "Daftar perlengkapan hamster untuk pemula: kandang, pet cargo, tempat makan keramik, botol minum, roda lari, dan alat kebersihan. Tips memilih yang aman dan awet.",
    image: "assets/CC120024 - Pink.jpg",
    published: "2026-11-23",
    updated: "2026-11-23",
    intro: "Banyak perlengkapan hewan kecil di ChubbyCuddle yang juga cocok untuk hamster. Berikut daftar perlengkapan hamster yang perlu disiapkan pemula, plus tips memilihnya.",
    sections: [
      {
        h2: "Kandang dan alas",
        html: "<p>Hamster butuh kandang dengan <strong>luas lantai yang cukup</strong> dan alas (bedding) yang tebal untuk menggali. Hindari alas berbahan kapas yang berserat panjang. Kalau kandangmu sering dipindah saat dibersihkan, [[produk:pet-cage-trolley|Pet Cage Trolley]] memudahkan tanpa perlu mengangkat.</p>",
        products: ["pet-cage-trolley"]
      },
      {
        h2: "Tempat makan dan botol minum",
        html: "<p>Mangkuk keramik lebih berat sehingga tidak mudah digeser atau digigit. Pilih ukuran kecil dan dangkal agar hamster mudah menjangkau makanannya. Untuk air, botol gantung lebih bersih daripada mangkuk air — [[produk:cage-water-bottle-stainless|botol dengan ujung stainless]] lebih tahan gigitan.</p>",
        products: ["love-bird-bowl", "slice-of-apple-bowl", "jacuzzi-bowl", "cage-water-bottle-stainless", "cage-water-bottle-plastic"]
      },
      {
        h2: "Pet cargo untuk ke dokter hewan atau saat bersih-bersih",
        html: "<p>Pet cargo memudahkan saat membawa hamster ke dokter hewan atau saat kandang sedang dibersihkan. Pilih yang memiliki ventilasi, kunci aman, dan alas yang mudah dibersihkan.</p>",
        products: ["pet-cargo-kotak-pastel", "pet-cargo-ufo-pod-plastic", "pet-cargo-paw-pastel-kotak"]
      },
      {
        h2: "Roda lari dan mainan",
        html: "<p>Hamster butuh banyak bergerak. Gunakan roda lari dengan <strong>permukaan rata</strong> (tanpa jeruji) dan ukuran yang sesuai jenis hamster — hamster yang lebih besar seperti syrian membutuhkan roda yang lebih besar agar punggungnya tidak melengkung. [[produk:explorer-cruiser-wheel|Explorer Cruiser Wheel]] juga bisa ditarik seperti mobil-mobilan untuk waktu bermain yang seru.</p>",
        products: ["explorer-cruiser-wheel"]
      },
      {
        h2: "Alat kebersihan",
        html: "<p>Bersihkan sisa makanan dan kotoran secara rutin. Sapu dan sekop mini sangat praktis untuk sudut kandang yang sempit.</p>",
        products: ["mini-sweeper-set-sapu-sekop-mini"]
      }
    ],
    faqs: [
      { q: "Apa saja perlengkapan hamster yang wajib?", a: "Kandang dengan alas tebal, tempat makan, botol minum, rumah persembunyian, roda lari berpermukaan rata, pet cargo, dan alat kebersihan." },
      { q: "Apakah tempat makan keramik bagus untuk hamster?", a: "Ya. Mangkuk keramik lebih berat sehingga tidak mudah terbalik atau digigit, serta mudah dicuci." },
      { q: "Apakah ChubbyCuddle mengirim perlengkapan hamster ke luar Batam?", a: "Ya, ChubbyCuddle mengirim ke seluruh Indonesia melalui JNE dan J&T Express, dengan gratis ongkir untuk area tertentu di Batam." }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = PANDUAN;
