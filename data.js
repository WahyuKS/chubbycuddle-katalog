/**
 * ==========================================================
 *  DATA WEBSITE CHUBBYCUDDLE — FILE INI YANG ANDA EDIT
 * ==========================================================
 *  Setelah mengubah file ini, jalankan:   npm run build
 *  (atau cukup push ke GitHub — GitHub Actions akan build otomatis)
 *
 *  Build akan membuat ulang: index.html, halaman produk (/produk/...),
 *  halaman kategori (/kategori/...), sitemap.xml, dan gambar WebP ringan.
 * ==========================================================
 */
const CC_DATA = {
    siteUrl: "https://chubbycuddle.my.id",
    brandName: "ChubbyCuddle",
    alternateNames: ["Chubby Cuddle", "ChubbyCuddle Batam", "Chubby Cuddle Batam"],
    tagline: "Everything Your Sugar Glider Needs",
    slogan: "Little Things, Happier Pets.",
    city: "Batam",
    region: "Kepulauan Riau",
    whatsappNumber: "6281510973338", // Format: 62 tanpa spasi/plus
    metaPixelId: "1639967454264233",
    logo: "assets/nobglogo.png",
    heroImage: "assets/banner1.jpg",

    social: {
        instagram: "https://www.instagram.com/chubbycuddle.batam/",
        facebook: "https://www.facebook.com/ChubbyCuddle",
        tiktok: "https://www.tiktok.com/@chubbycuddlebatam",
        x: "https://x.com/chubbycuddleba",
        threads: "https://www.threads.com/@chubbycuddle.batam",
        youtube: "https://www.youtube.com/@ChubbyCuddleBatam"
    },

    freeShippingAreas: ["Lubuk Baja", "Nagoya", "Batu Selicin", "Kampung Pelita", "Tanjung Uma", "Batu Ampar", "Bengkong", "Batam Kota"],

    // ==========================================
    // KATEGORI
    // - key   : harus sama persis dengan "category" di produk
    // - slug  : alamat halaman, mis. /kategori/travel-carrier/  (JANGAN diubah setelah live)
    // - title : judul halaman kategori (H1 & judul Google)
    // - intro : paragraf pembuka halaman kategori (bagus untuk SEO)
    // Kategori tanpa produk otomatis disembunyikan.
    // ==========================================
    categories: [
        { key: "Travel and carrier", label: "Travel & Carrier", icon: "🎒", slug: "pet-cargo-travel-carrier", image: "assets/banner2.jpg",
          title: "Pet Cargo & Tas Travel Sugar Glider dan Hamster",
          intro: "Koleksi pet cargo, travel carrier, sling bag, dan backpack untuk membawa sugar glider, hamster, dan hewan kecil lainnya bepergian dengan aman. Semua dilengkapi ventilasi udara, dan sebagian besar sudah termasuk botol minum mini 60 ml — cocok untuk jalan-jalan, gathering, mudik, maupun ke dokter hewan." },
        { key: "Feeding Supplies", label: "Makan & Minum", icon: "🍽️", slug: "tempat-makan-minum", image: "assets/banner3.jpg",
          title: "Tempat Makan, Botol Minum & Spet Sugar Glider",
          intro: "Mangkuk keramik bersekat bentuk buah yang lucu, botol minum kandang 60 ml, dan spet sugar glider dengan garis takaran untuk memberi susu atau vitamin. Bikin waktu makan anabul lebih rapi, higienis, dan menggemaskan." },
        { key: "Grooming and toys", label: "Mainan & Grooming", icon: "🎡", slug: "mainan-grooming", image: "assets/banner5.jpg",
          title: "Mainan & Perlengkapan Grooming Sugar Glider",
          intro: "Mainan interaktif seperti jogging wheel, alas besi multifungsi, troli kandang, hingga glove pouch untuk memotong kuku dengan aman. Jaga sugar glider tetap aktif, sehat, dan terawat." },
        { key: "Housing and cleaning", label: "Kandang & Kebersihan", icon: "🏠", slug: "kandang-kebersihan", image: "assets/banner4.jpg",
          title: "Perlengkapan Kandang & Kebersihan Sugar Glider",
          intro: "Sapu dan sekop mini, sikat pembersih spet, dan perlengkapan kecil lain untuk menjaga kandang sugar glider tetap bersih setiap hari tanpa repot." },
        { key: "food and nutrition", label: "Makanan & Nutrisi", icon: "🍎", slug: "makanan-nutrisi", image: "assets/banner3.jpg",
          title: "Makanan & Nutrisi Sugar Glider",
          intro: "Makanan dan nutrisi pendukung untuk sugar glider." },
        { key: "Merchandise", label: "Merchandise", icon: "🎁", slug: "merchandise-manik", image: "assets/Penakmanik.jpeg",
          title: "Merchandise Manik Handmade",
          intro: "Pena, cermin, dan sisir dengan hiasan manik-manik handmade. Desainnya unik dan limited — cocok untuk hadiah atau mempercantik meja kamu." }
    ],

    // ==========================================
    // TESTIMONI — hanya masukkan testimoni ASLI dari pembeli.
    // image: satu gambar ATAU beberapa gambar dalam [ ]
    // ==========================================
    testimonials: [
        { image: "assets/testimo1.jpeg", name: "Kak DANA", product: "Aero View Travel Backpack", text: "recomended kak!" },
        { image: ["assets/testimo2.jpeg", "assets/testimo2.1.jpeg"], name: "Kak LIA", product: "Spet Sugar Glider & Explorer Cruiser Wheel", text: "Barangnya bagus!" },
        { image: ["assets/testimo3.jpeg"], name: "Kak RARA", product: "Aeropod Travel Carrier Pastel, Fruit Bowl Keramik 4 motif & Pena Manik", text: "Ci Barangnya Bagus, Aku suka Ci" },
    ],

    // ==========================================
    // FAQ (jawaban boleh memakai HTML: <strong>, <ul>, <ol>)
    // ==========================================
    faqs: [
        { q: "Apakah ChubbyCuddle melayani pengiriman ke seluruh Indonesia?",
          a: "<p>Ya! Kami melayani pengiriman ke berbagai wilayah Indonesia. Untuk pengiriman ke luar Batam, pesanan akan dikirim melalui ekspedisi <strong>JNE atau J&amp;T Express</strong>, sesuai jangkauan dan ketentuan ekspedisi yang berlaku.</p>" },
        { q: "Apakah tersedia gratis ongkir di Batam?",
          a: "<p>Tentu! Kami menyediakan fasilitas <strong>FREE ONGKIR untuk area tertentu di Batam</strong>.</p><p>Area layanan gratis ongkir meliputi:</p><ul><li>Lubuk Baja</li><li>Nagoya</li><li>Nagoya &amp; Batu Selicin</li><li>Kampung Pelita</li><li>Lubuk Baja Kota</li><li>Tanjung Uma</li><li>Batu Ampar</li><li>Bengkong</li><li>Batam Kota</li></ul><p>Untuk lokasi di sekitar area tersebut, silakan hubungi tim ChubbyCuddle untuk memastikan jangkauan pengiriman gratis ongkir.</p>" },
        { q: "Apakah bisa mengirim ke luar area gratis ongkir?",
          a: "<p>Bisa! Kami tetap melayani pengiriman ke wilayah Batam lainnya. Biaya dan ketentuan pengiriman akan diinformasikan terlebih dahulu melalui WhatsApp.</p>" },
        { q: "Berapa lama proses pengiriman?",
          a: "<p>Untuk pengiriman dalam Batam, waktu pengantaran akan disesuaikan dengan jadwal pengiriman dan lokasi penerima.</p><p>Untuk luar Batam, estimasi waktu mengikuti layanan JNE atau J&amp;T yang dipilih. Nomor resi akan diberikan setelah pesanan diserahkan kepada pihak ekspedisi.</p>" },
        { q: "Apakah produk diperiksa sebelum dikirim?",
          a: "<p>Ya! Kami berusaha memastikan setiap produk dalam kondisi baik sebelum dikemas dan dikirimkan kepada pelanggan.</p><p>Kami juga menyarankan pelanggan memeriksa kondisi paket segera setelah diterima.</p>" },
        { q: "Apakah barang yang sudah dibeli bisa dikembalikan?",
          a: "<p>Kami mengutamakan kepuasan pelanggan. Namun, produk yang sudah diterima dalam kondisi baik, sesuai pesanan, dan tanpa kerusakan tidak dapat dikembalikan atau ditukar karena alasan berubah pikiran.</p><p>Apabila terdapat kerusakan akibat proses pengiriman atau produk tidak sesuai pesanan, silakan segera hubungi kami dengan menyertakan foto dan video unboxing agar dapat kami periksa lebih lanjut.</p>" },
        { q: "Bagaimana jika barang rusak saat diterima?",
          a: "<p>Jangan khawatir! Jika paket diterima dalam kondisi rusak, segera dokumentasikan kondisi paket dan produk, kemudian hubungi tim ChubbyCuddle.</p><p>Kami akan membantu memeriksa kendala tersebut dan mencari solusi sesuai kondisi serta ketentuan yang berlaku.</p>" },
        { q: "Apakah produk ChubbyCuddle hanya untuk sugar glider?",
          a: "<p>Tidak semuanya! Beberapa perlengkapan kami juga dapat digunakan untuk hewan kecil lainnya, tergantung fungsi, ukuran, dan kebutuhan masing-masing hewan.</p><p>Silakan tanyakan kepada kami jika Anda ragu mengenai kecocokan suatu produk.</p>" },
        { q: "Bagaimana cara memesan produk?",
          a: "<p>Sangat mudah!</p><ol><li>Pilih produk yang Anda inginkan di website ChubbyCuddle.</li><li>Hubungi kami melalui WhatsApp.</li><li>Konfirmasikan produk, jumlah, dan alamat pengiriman.</li><li>Lakukan pembayaran sesuai instruksi.</li><li>Pesanan akan diproses dan dikirimkan kepada Anda.</li></ol>" },
        { q: "Apakah saya bisa bertanya sebelum membeli?",
          a: "<p>Tentu saja! Kami senang membantu Anda memilih perlengkapan yang sesuai dengan kebutuhan anabul kesayangan.</p><p>Hubungi kami melalui WhatsApp untuk mendapatkan informasi produk, ketersediaan stok, rekomendasi, dan informasi pengiriman.</p>" },
        { q: "Bagaimana cara mengetahui stok produk?",
          a: "<p>Ketersediaan produk dapat berubah sewaktu-waktu. Untuk memastikan produk masih tersedia, silakan hubungi kami melalui WhatsApp sebelum melakukan pemesanan.</p>" },
        { q: "Apakah ChubbyCuddle menerima pertanyaan atau konsultasi produk?",
          a: "<p>Tentu! Kami percaya setiap hewan kecil memiliki kebutuhan yang berbeda. Jangan ragu untuk menghubungi kami jika membutuhkan informasi lebih lanjut mengenai fungsi, ukuran, atau cara penggunaan produk.</p>" },
        { q: "Apakah harga yang tertera sudah termasuk ongkir?",
          a: "<p>Harga produk yang ditampilkan belum termasuk biaya pengiriman, kecuali terdapat informasi promo gratis ongkir. Untuk area free ongkir Batam, silakan konfirmasikan lokasi Anda kepada tim kami.</p>" },
        { q: "Apakah produk selalu ready stock?",
          a: "<p>Kami berusaha menyediakan produk pilihan untuk kebutuhan hewan kesayangan Anda. Namun, stok dapat berubah sewaktu-waktu. Hubungi kami untuk memastikan ketersediaan sebelum memesan.</p>" },
        { q: "Apakah pesanan bisa dibatalkan?",
          a: "<p>Pembatalan pesanan hanya dapat dilakukan sebelum pesanan diproses atau dikirimkan, dengan persetujuan dari pihak ChubbyCuddle.</p>" },
        { q: "Bagaimana jika paket terlambat sampai?",
          a: "<p>Untuk pengiriman melalui JNE dan J&amp;T, estimasi pengiriman mengikuti kebijakan ekspedisi. Jika mengalami keterlambatan, Anda dapat menghubungi kami agar kami membantu mengecek status pengiriman.</p>" },
        { q: "Apakah tersedia promo atau penawaran khusus?",
          a: "<p>Tentu! ChubbyCuddle dapat menghadirkan promo produk, penawaran bundling, dan program gratis ongkir pada periode tertentu. Ikuti media sosial kami agar tidak ketinggalan informasi terbaru.</p>" },
        { q: "Apakah bisa membeli beberapa produk sekaligus?",
          a: "<p>Tentu! Anda dapat menggabungkan beberapa produk dalam satu pesanan. Kami juga dapat membantu merekomendasikan kombinasi perlengkapan yang sesuai dengan kebutuhan sugar glider dan hewan kecil lainnya.</p>" }
    ],

    // ==========================================
    // PRODUK
    // - name, price ("Rp 50.000" / "TANYA ADMIN"), category, description, image
    // - image: satu gambar atau beberapa dalam [ ]. Nama file "KODE - Warna.jpg"
    //          otomatis jadi pilihan warna (mis. "CC120002 - Blue.jpg" -> Biru).
    // - bestSeller: true  -> badge Best Seller & tampil paling atas
    // - soldOut: true     -> badge Stok Habis & tombol "Tanya Restock"
    // - slug (opsional)   -> alamat halaman produk. Jika kosong dibuat dari nama.
    //                        Setelah live, JANGAN ganti nama/slug produk (link lama jadi 404).
    // ==========================================
    products: [
        { name: "Spet Sugar Glider", price: "Rp 50.000", bestSeller: true, description: "Spet ini memiliki ujung corong halus yang pas di mulut mungil hewan seperti sugar glider atau hewan kecil lainnya, memungkinkan kontrol aliran cairan secara presisi agar hewan tidak mudah tersedak. Produk ini sudah termasuk sikat mini untuk membersihkan sisa endapan susu di bagian dalam corong yang sempit yang tidak dapat digapai oleh sikat biasa. Terdapat skala ukur untuk memudahkan porsi asupan yang dibutuhkan anabul.", category: "Feeding Supplies", image: "assets/CC120001.jpg" },
        { name: "Pet Cargo Paw Pastel Kotak", price: "Rp 140.000", bestSeller: true, description: "Pet cargo praktis untuk perjalanan anabul yang aman dan nyaman! Dilengkapi tutup transparan untuk memantau anabul, ventilasi udara, alas plastik agar tetap bersih dan kering, serta botol minum mini 60 ml. Memiliki pegangan nyaman dan kunci bermotif paw yang lucu. \n\n 📏 Ukuran: 18,4 × 16,3 × 17 cm \n 🎨 Warna: Biru, Cokelat, Hijau, Pink, dan Ungu \n\n Cocok untuk perjalanan singkat bersama anabul kesayangan! 🐶🐱💕", category: "Travel and carrier", image: ["assets/CC120002 - Blue.jpg", "assets/CC120002 - Choco.jpg", "assets/CC120002 - Green.jpg", "assets/CC120002 - Pink.jpg", "assets/CC120002 - Purple.jpg"] },
        { name: "Aeropod Travel Carrier Pastel", price: "Rp 267.000", bestSeller: true, description: "Bawa anabul jalan-jalan makin praktis dan modis! Dilengkapi tutup transparan untuk memantau anabul, ventilasi udara, alas plastik agar tetap bersih dan kering, serta botol minum mini 60 ml. Tersedia hand grip dan tali selempang yang bisa dilepas-pasang serta diatur panjangnya. Dilengkapi kunci agar anabul tetap aman saat dibawa bepergian. \n\n 📏 Dimensi: Diameter 18 cm × Tinggi 20 cm \n 🎨 Warna: Biru, Pink, dan Ungu \n\n Cocok untuk menemani perjalanan singkat bersama anabul kesayangan! 🐶🐱💕.", category: "Travel and carrier", image: ["assets/CC120003 - Blue.jpg", "assets/CC120003 - Pink.jpg", "assets/CC120003 - Purple.jpg"] },
        { name: "Pet Cargo Kotak Pastel", price: "Rp 80.000", bestSeller: false, description: "Pet cargo praktis dan aman untuk membawa anabul bepergian, mudik, maupun jalan-jalan! Dilengkapi bukaan atas (top loading) agar mudah memantau dan mengambil anabul, alas plastik untuk menjaga bulu tetap bersih dan kering, serta wadah makan dan botol minum mini 60 ml. Memiliki pegangan nyaman dengan warna senada.\n\n 📏 Dimensi: 20 × 18 × 16 cm \n 🎨 Warna: Biru, Hijau, dan Pink \n\n Praktis dibawa, nyaman untuk anabul kesayangan! 🐱💕.", category: "Travel and carrier", image: ["assets/CC120004 - Blue.jpg", "assets/CC120004 - Green.jpg", "assets/CC120004 - Pink.jpg"] },
        { name: "Explorer Cruiser Wheel", price: "Rp 171.000", bestSeller: false, description: "Mainan unik yang menggabungkan jogging wheel dan mobil tarik bergaya off-road mini! 🐾 Sugar glider, hamster, dan hewan kecil lainnya bisa berlari di roda transparan, sementara Anda dapat menarik mobilnya menggunakan tali braided yang stylish. Desain menarik dengan sirkulasi udara yang baik, cocok untuk menemani waktu bermain sekaligus membuat konten lucu anabul.\n\n 📏 Dimensi: 32 × 16 × 19 cm \n🎨 Warna: Biru, Pink, dan Putih \n\n Bermain jadi lebih seru, aktif, dan menggemaskan! 💕🚗 .", category: "Grooming and toys", image: ["assets/CC120005 - Blue.jpg", "assets/CC120005 - Pink.jpg", "assets/CC120005 - White.jpg"] },
        { name: "Pet Cage Trolley", price: "Rp 253.000", bestSeller: false, description: "Capek mengangkat kandang anabul saat membersihkan atau memindahkan posisi? 🐹✨ Pet Cage Trolley hadir sebagai solusi praktis! \n\n ✅ Roda putar yang lancar untuk memudahkan perpindahan\n ✅ Dilengkapi rem pengunci agar lebih stabil saat diam \n ✅ Penyangga di setiap sudut untuk menjaga posisi kandang \n ✅ Rangka besi kokoh dan minimalis \n ✅ Membantu meminimalkan risiko goresan pada lantai \n\n\ 📏 Ukuran: 61 × 42 × 5 cm \n\n Bikin perawatan kandang lebih praktis, mudah, dan nyaman tanpa ribet angkat-angkat lagi! 💙.", category: "Grooming and toys", image: ["assets/CC120006.jpg", "assets/CC120006-2.jpg"] },
        { name: "Pet Cargo Ufo Pod Stainless", price: "Rp 202.000", bestSeller: true, description: "Pet cargo bulat yang praktis untuk membawa sugar glider, hamster, dan hewan kecil lainnya bepergian! Dilengkapi alas jaring besi agar kotoran jatuh ke dasar, ventilasi udara untuk sirkulasi yang baik, serta botol minum mini 60 ml dan handle grip yang nyaman dibawa. Desain open-front memudahkan akses anabul saat perjalanan ke taman, gathering, maupun dokter hewan.\n\n 📏 Dimensi: Diameter 18,6 cm × Tinggi 16 cm \n 🎨 Warna: Army, Biru, Pink, dan Oranye \n\n Praktis dibawa, nyaman untuk menemani petualangan anabul! 💕.", category: "Travel and carrier", image: ["assets/CC120007 - Army.jpg", "assets/CC120007 - Blue.jpg", "assets/CC120007 - Orange.jpg", "assets/CC120007 - Pink.jpg"]},
        { name: "Sugar Glider Trinket Holder", price: "Rp xx.xxx", bestSeller: false, soldOut: true, description: "Bikin meja lebih rapi dan estetik dengan pajangan sugar glider yang multifungsi! Bagian ekornya cocok untuk menggantung cincin dan gelang, sementara bagian perutnya bisa digunakan untuk menyimpan kunci, koin, permen, dan aksesori kecil lainnya.\n\n 🎨 Warna: Putih (Albino), Abu-abu (Classic Grey), dan Biru. \n\n Lucu, unik, dan praktis untuk mempercantik meja sekaligus menyimpan barang-barang kecil kesayanganmu! 💙.", category: "Grooming and toys", image: "assets/nobglogo.png" },
        { name: "Glove Pouch Grooming 2-in-1", price: "Rp 335.000", bestSeller: false, description: "Memotong kuku anabul jadi lebih praktis dengan sarung tangan berbahan plush yang lembut dan tebal, dilengkapi desain wajah sugar glider yang menggemaskan. Membantu melindungi tangan dari cakaran dan gigitan saat grooming. Bisa juga digunakan sebagai sleeping pouch yang hangat dan nyaman di dalam kandang. \n\n 🎨 Warna: Pink dan Oranye. \n\n Satu produk dengan dua fungsi: membantu perawatan sekaligus menjadi tempat tidur nyaman untuk sugar glider kesayangan! 💕", category: "Grooming and toys", image: ["assets/CC120009 - Orange.jpg", "assets/CC120009 - Pink.jpg"] },
        { name: "Mini Sweeper Set (Sapu + Sekop Mini)", price: "Rp 23.000", bestSeller: true, description: "Bersihkan sisa makanan dan remah-remah di sekitar kandang sugar glider dengan lebih praktis! Dilengkapi sikat berbulu rapat dan lembut untuk menyapu kotoran kecil serta sekop mini bergagang panjang yang memudahkan menjangkau sudut sempit.\n\n 🤍 Warna: Putih dengan aksen gagang kekuningan.\n\n Praktis, minimalis, dan estetik untuk menjaga area kandang anabul tetap bersih setiap hari! 🐿️✨.", category: "Housing and cleaning", image: ["assets/CC120010.jpg"] },
        { name: "Aero View Travel Backpack", price: "Rp 429.000", bestSeller: true, description: "Ajak anabul bepergian dengan lebih praktis dan stylish! Tas bergaya astronot ini dilengkapi panel depan transparan untuk memantau hewan, tangkringan tali warna-warni, serta dua mangkuk stainless steel untuk makanan dan minuman. Memiliki lantai jaring besi agar kotoran jatuh ke tatakan bawah sehingga lebih mudah dibersihkan, serta handle pegangan yang nyaman.\n\n 📏 Dimensi: 30 × 21 × 32 cm \n 🎨 Warna: Army Green, Pink, Purple, dan Black. \n\n Cocok untuk menemani petualangan sugar glider, burung, dan hewan kecil lainnya! 🐿️💕.", category: "Travel and carrier", image: ["assets/CC120011 - Army.jpg","assets/CC120011 - Black.jpg", "assets/CC120011 - Pink.jpg", "assets/CC120011 - Purple.jpg"] },
        { name: "Alas Besi 2-in-1", price: "Rp 79.000", bestSeller: false, description: "Alas jaring besi multifungsi untuk travel carrier maupun kandang anabul! Desain jaring berongga membantu kotoran jatuh ke bawah agar kaki tetap bersih dan kering. Bisa juga dikreasikan menjadi pijakan atau ayunan untuk sugar glider dan burung dengan tambahan pengait atau rantai.\n\n ✨ Keunggulan: \n\n Material besi kokoh.\n Membantu menjaga kebersihan alas carrier.\n Multifungsi untuk pijakan atau ayunan kandang.\n\n Praktis, awet, dan cocok untuk melengkapi perlengkapan anabul kesayangan! 🐿️💕.", category: "Grooming and toys", image: ["assets/CC120012.jpg"] },
        { name: "Mini Brush", price: "Rp 5.000", bestSeller: true, description: "Sudah punya spet sugar glider tetapi susah membersihkan kerak susu di corongnya? Sikat mini ini solusinya! Sikat ini dapat menjangkau area yang tidak dapat dijangkau oleh sikat lainnya. Sehingga anda tidak perlu khawatir anabul anda akan menelan sisa-sisa makanan yang tidak dapat dibersihkan sebelumnya..", category: "Housing and cleaning", image: "assets/CC120013.jpg" },
        { name: "Swing for Photoshoot", price: "Rp 135.000", bestSeller: false, soldOut: true, description: "Stok sedang kosong. Tanya admin untuk estimasi restock.", category: "Grooming and toys", image: "assets/CC120014.jpg" },
        { name: "Cherry Bowl", price: "Rp 58.000", bestSeller: false, description: "Bikin waktu makan anabul makin lucu dengan mangkuk berbentuk buah cherry yang aesthetic! Dilengkapi 2 sekat untuk menyajikan susu di satu sisi dan buah atau sayuran favorit anabul di sisi lainnya.\n\n 📏 Dimensi: 12,4 × 8 × 3,3 cm \n 🎨 Warna: Pink, Ungu, dan Kuning. \n\n Lucu, unik, dan praktis untuk menemani waktu makan sugar glider kesayangan! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120015 - Pink.jpg", "assets/CC120015 - Purple.jpg", "assets/CC120015 - Yellow.jpg"] },
        { name: "Fruit Bowl Keramik 4 motif", price: "Rp 81.000", bestSeller: true, description: "Bikin waktu makan anabul makin menarik dengan mangkuk berbentuk semangka yang unik dan berwarna cerah! Dilengkapi 2 sekat untuk memisahkan susu, buah, atau sayuran favorit anabul agar lebih praktis saat menyajikan makanan.harga per pcs, pilih motif via WA\n\n 📏 Dimensi: Panjang 11 cm × Tinggi 2,3 cm \n 🎨 Warna: Merah, Kuning, Oranye, dan Putih. \n\n Lucu, colorful, dan cocok untuk melengkapi perlengkapan makan sugar glider kesayangan! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120016.jpg"] },
        { name: "Apple in Center Bowl", price: "Rp 93.000", bestSeller: false, description: "Bikin waktu makan sugar glider makin unik dengan mangkuk apel berwarna pastel yang menggemaskan! Memiliki desain apel di bagian tengah yang memungkinkan susu mengalir cantik ke dasar mangkuk, menciptakan tampilan seperti air mancur mini yang estetik dan menarik untuk direkam.\n\n 📏 Dimensi: Diameter 9,8 cm × Tinggi 2,5 cm \n 🎨 Warna: Pink Pastel dan Blue Pastel.\n\n Desain glossy, lucu, dan unik untuk pengalaman makan anabul yang lebih menyenangkan! 🐿️💕.", category: "Feeding Supplies", image: "assets/CC120017.jpg" },
        { name: "Banana Trio Bowl", price: "Rp 72.000", bestSeller: false, description: "Sajikan menu anabul lebih rapi dengan mangkuk berbentuk pisang yang super gemas! Dilengkapi 3 sekat terpisah untuk menyajikan makanan utama, camilan, dan minuman tanpa tercampur. Warna kuning cerah dengan finishing glossy membuat tempat makan ini makin menarik dan estetik.\n\n 📏 Dimensi: 12 × 5 × 2,5 cm \n\n Praktis untuk menyajikan menu ala bento mini agar waktu makan sugar glider makin seru! 🐿️💛.", category: "Feeding Supplies", image: "assets/CC120018.jpg" },
        { name: "Slice of Apple Bowl", price: "Rp 72.000", bestSeller: false, description: "Mangkuk berbentuk irisan apel dengan warna merah cerah dan detail biji yang menggemaskan! Dilengkapi 2 sekat terpisah untuk menyajikan bubur, buah potong, atau makanan favorit anabul tanpa tercampur.\n\n 📏 Dimensi: 9,8 × 8,5 × 3 cm \n\n Lucu, praktis, dan estetik untuk melengkapi waktu makan sugar glider kesayangan! 🐿️❤️.", category: "Feeding Supplies", image: "assets/CC120019.jpg" },
        { name: "Jacuzzi Bowl", price: "Rp 72.000", bestSeller: false, description: "Bikin sugar glider makin nyaman dengan mangkuk unik berbentuk jacuzzi mini! Memiliki motif keramik putih, pinggiran biru, dan bagian dalam hijau cerah yang fresh. Desainnya yang datar dan multifungsi cocok untuk tempat makan, area bermain, atau spot rebahan santai favorit anabul.\n\n 📏 Dimensi: 9,5 × 8,2 × 2,5 cm\n\nUnik, estetik, dan bikin kandang anabul makin menggemaskan! 🐿️💚.", category: "Feeding Supplies", image: "assets/CC120020.jpg" },
        { name: "Breeze Sling Bag", price: "Rp 347.000", bestSeller: true, description: "Ajak sugar glider jalan-jalan dengan lebih nyaman menggunakan Breeze Sling Bag yang super gemas! Dilengkapi ventilasi jaring besi yang kokoh dan lubang udara tambahan di bagian samping untuk membantu sirkulasi udara tetap lancar. Praktis dibawa dan cocok menemani anabul saat bepergian.\n\n 📏 Dimensi: 14 × 11 × 16 cm \n 🎨 Motif: Blue Panda dan Pink Sugar Glider. \n\n Kecil, lucu, dan praktis untuk menemani petualangan bersama anabul kesayangan! 🐿️💕.", category: "Travel and carrier", image: ["assets/CC120021 - Blue Panda.jpg", "assets/CC120021 - Pink Sugar Glider.jpg"] },
        { name: "Character Backpack", price: "Rp 272.000", bestSeller: false, description: "Fans Studio Ghibli wajib punya! 🖤🤍 Tas ransel mini dengan motif Makkuro Kurosuke alias Susuwatari yang ikonik, cocok untuk menemani sugar glider kesayangan saat hangout. Dilengkapi ring lubang udara di bagian samping untuk membantu sirkulasi udara selama perjalanan.\n\n 📏 Dimensi: 20 × 9 × 21 cm \n 🎨 Warna: Hitam-Putih. \n\n Desain unik, compact, dan estetik untuk pawparents pecinta Ghibli! 🐿️✨.", category: "Travel and carrier", image: "assets/CC120022.jpg" },
        { name: "Love Bird Bowl", price: "Rp 75.000", bestSeller: false, description: "Bikin waktu makan sugar glider makin menggemaskan dengan mangkuk berbentuk burung yang unik dan cute! Ukurannya pas untuk porsi makan harian sugar glider maupun hewan mungil lainnya. Cocok untuk melengkapi tema kandang agar makin cantik dan estetik.\n\n📏 Dimensi: 6,7 × 7,2 × 5,5 cm\n 🎨 Warna: Pink, Hijau, Kuning, Biru, dan Full Pink Glossy. \n\n Lucu, praktis, dan bikin kandang anabul makin colorful! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120023 - Blue.jpg", "assets/CC120023 - Full Pink.jpg", "assets/CC120023 - Green.jpg", "assets/CC120023 - Purple.jpg", "assets/CC120023 - Yellow.jpg"] },
        { name: "Pet Cargo Ufo Pod Plastic", price: "Rp 155.000", bestSeller: true, description: "Bawa anabul bepergian dengan lebih praktis dan nyaman! Pet cargo bulat ini dilengkapi alas jaring plastik agar kotoran dan sisa makanan jatuh ke dasar, ventilasi udara di bagian atas, serta desain open-front yang memudahkan akses anabul. Sudah termasuk botol minum mini 60 ml dan handle grip yang nyaman untuk dibawa.\n\n 📏 Dimensi: Diameter 18,6 cm × Tinggi 16 cm \n 🎨 Warna: Army, Biru, Pink, dan Oranye. \n\n Cocok untuk jalan-jalan, gathering, maupun perjalanan ke dokter hewan bersama sugar glider kesayangan! 🐿️💕.", category: "Travel and carrier", image: ["assets/CC120024 - Army.jpg", "assets/CC120024 - Blue.jpg", "assets/CC120024 - Orange.jpg", "assets/CC120024 - Pink.jpg"] },
        { name: "Cage Water Bottle Stainless", price: "Rp 19.000", bestSeller: true, description: "Botol minum praktis untuk kandang maupun pet carrier anabul! Dilengkapi ujung pipa stainless steel yang kokoh dan lebih tahan terhadap gigitan. Cocok sebagai botol minum harian atau pengganti botol bawaan carrier yang rusak maupun hilang.\n\n 🥤 Kapasitas: 60 ml \n 🎨 Warna Klip: Biru, Putih, Pink, Hijau, dan Kuning.\n\n Mungil, praktis, dan colorful untuk menemani perjalanan sugar glider kesayangan! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120025.jpg"] },
        { name: "Cage Water Bottle Plastic", price: "Rp 15.000", bestSeller: false, description: "Lengkapi kandang anabul dengan botol minum mungil yang praktis dan estetik! Memiliki kapasitas 60 ml, cocok untuk kebutuhan minum sugar glider kesayangan. Dilengkapi pengait yang mudah dipasang pada jeruji kandang tanpa memakan banyak tempat.\n\n 🥤 Kapasitas: 60 ml \n 🎨 Warna Klip: Pink dan Biru Pastel.\n\n Minimalis, praktis, dan manis untuk melengkapi perlengkapan kandang anabul! 🐿️💕.", category: "Feeding Supplies", image: "assets/CC120026.jpg" },
        { name: "Spet Sugar Glider + Mini Brush", price: "Rp 55.000", bestSeller: true, description: "Memberi susu, makanan cair, atau vitamin untuk sugar glider jadi lebih praktis! Dilengkapi garis takaran volume yang jelas agar pemberian lebih presisi, serta sikat pembersih mini untuk membantu membersihkan sisa susu dan kerak di ujung corong spet.\n\n ✨ Keunggulan: \n\n Garis takaran mudah dibaca. \n Sikat mini untuk membersihkan celah sempit. \n Cocok untuk membantu pemberian susu dan vitamin pada joey maupun sugar glider dewasa.\n\n Praktis digunakan dan mudah dibersihkan untuk perawatan anabul kesayangan! 🐿️💕.", category: "Feeding Supplies", image: "assets/CC120027.jpg" },
        { name: "Pena manik", price: "TANYA ADMIN", bestSeller: false, description: "Bikin aktivitas menulis, journaling, dan nugas makin seru dengan pulpen gemas yang penuh gaya! Dihiasi manik-manik cantik atau figur mini yang lucu di bagian atas, cocok jadi moodbooster di meja belajar maupun meja kerja.\n\n ✨ Desain unik, estetik, dan mudah dikenali agar nggak tertukar dengan pulpen teman.\n\n Teman menulis yang lucu untuk menemani setiap ide kreatifmu! 💕📚.", category: "Merchandise", image: "assets/Penakmanik.jpeg" },
        { name: "Kaca bulat manik", price: "TANYA ADMIN", bestSeller: false, description: "Kaca Berbentuk Bulat Biar touch-up makin semangat dan mood selalu bagus, kamu wajib punya cermin gemas yang satu ini. Pegangannya dirangkai dari manik-manik lucu yang limited edition karena nggak bakal ada yang nyamain cerminmu.", category: "Merchandise", image: "assets/Kacabulat.jpeg" },
        { name: "Kaca love manik", price: "TANYA ADMIN", bestSeller: false, description: "Kaca Berbentuk Love Biar touch-up makin semangat dan mood selalu bagus, kamu wajib punya cermin gemas yang satu ini. Pegangannya dirangkai dari manik-manik lucu yang limited edition karena nggak bakal ada yang nyamain cerminmu.", category: "Merchandise", image: "assets/Kacalove.jpeg" },
        { name: "Sisir tebal manik", price: "TANYA ADMIN", bestSeller: false, description: "Bosan dengan model pegangan sisir yang gitu-gitu aja? Biar mood ngerapiin rambut makin naik, kamu wajib punya sisir gemas yang satu ini. Pegangannya dirangkai dari manik-manik cantik yang bisa limited edition. Dan sisirmu benar-benar eksklusif dan nggak ada kembarannya. Meja rias auto makin aesthetic.", category: "Merchandise", image: "assets/Sisirmanik.jpeg" }  
    ]
};

if (typeof module !== 'undefined') module.exports = CC_DATA;
