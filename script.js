/** 
 * ==========================================
 * 1. KONFIGURASI UTAMA (SILAKAN DIUBAH)
 * ==========================================
 */
const config = {
    brandName: "ChubbyCuddle",
    tagline: "Segala Kebutuhan Sugar Glider Anda",
    logoUrl: "assets/nobglogo.png", // Ganti dengan URL/Path logo asli
    whatsappNumber: "6281510973338", // Format: 62 tanpa spasi/plus
    
    slides: [
        {
            title: "Perlengkapan & Aksesori Terbaik Sugar Glider",
            desc: "Dari tempat tidur hangat, pet cargo, hingga alat makan praktis. Temukan semua peralatan untuk kebahagiaan si kecil di sini.",
            btnText: "Mulai Belanja",
            actionTarget: "#catalog",
            image: "assets/banner1.jpg" 
        },
        {
            title: "Jalan-Jalan Aman & Tampil Gaya",
            desc: "Bawa anabul bepergian dengan nyaman. Temukan koleksi Pet Cargo pastel dan Bonding Pouch andalan kami!",
            btnText: "Lihat Travel Gear",
            actionTarget: "cat-Travel and carrier",
            image: "assets/banner2.jpg" 
        },
        {
            title: "Peralatan Makan & Minum Praktis",
            desc: "Bikin waktu makan lebih mudah dengan spet corong halus, mangkuk keramik anti-tumpah, dan botol minum berkualitas.",
            btnText: "Cek Alat Makan",
            actionTarget: "cat-Feeding Supplies",
            image: "assets/banner3.jpg" 
        },
        {
            title: "Tempat Istirahat Paling Nyaman",
            desc: "Temukan tempat tidur hangat dan nyaman untuk sugar glider Anda.",
            btnText: "Lihat Tempat Tidur",
            actionTarget: "cat-Housing and cleaning",
            image: "/assets/banner4.jpg" 
        },
        {
            title: "Aktif Bermain & Terawat Rapi",
            desc: "Jaga si kecil tetap lincah dan bersih dengan mainan panjat interaktif dan perlengkapan gunting kuku yang aman.",
            btnText: "Eksplor Peralatan",
            actionTarget: "cat-Grooming and toys",
            image: "assets/banner5.jpg" 
        }
    ],
    
    // Nama kategori versi tampilan (kunci harus sama dengan nama di "categories" & produk)
    categoryLabels: {
        "Feeding Supplies": "Makan & Minum",
        "Travel and carrier": "Travel & Carrier",
        "food and nutrition": "Makanan & Nutrisi",
        "Grooming and toys": "Mainan & Grooming",
        "Housing and cleaning": "Kandang & Kebersihan",
        "Merchandise": "Merchandise"
    },

    categories: [
        "Feeding Supplies",
        "Travel and carrier",
        "food and nutrition",
        "Grooming and toys",
        "Housing and cleaning",
        "Merchandise"
    ],
    
    // ==========================================
    // TESTIMONI (bisa pakai gambar)
    // Cara menambah: simpan gambar di folder assets/ lalu tambahkan satu baris di bawah.
    // - image   : satu gambar ("assets/a.jpg") ATAU beberapa gambar (["assets/a.jpg", "assets/b.jpg"]) (opsional)
    // - text    : kutipan singkat (opsional, boleh kosong jika gambar sudah jelas)
    // - name    : nama pembeli (boleh disamarkan, mis. "Kak Sarah, Pekanbaru")
    // - product : produk yang dibeli (opsional)
    // Jika daftar ini kosong, bagian testimoni otomatis disembunyikan.
    // Hanya masukkan testimoni ASLI dari pembeli.
    // ==========================================
    testimonials: [
        { image: "assets/testimo1.jpeg", name: "Kak DANA", product: "Aero View Travel Backpack", text: "recomended kak!" },
        { image: ["assets/testimo2.jpeg", "assets/testimo2.1.jpeg"], name: "Kak LIA", product: "Spet Sugar Glider & Explorer Cruiser Wheel", text: "Barangnya bagus!" },
        { image: ["assets/testimo3.jpeg"], name: "Kak RARA", product: "Aeropod Travel Carrier Pastel, Watermelon Bowl & Pena Manik", text: "Ci Barangnya Bagus, Aku suka Ci" },
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

    products: [
        { name: "Spet Sugar Glider", price: "Rp 50.000", bestSeller: true, description: "Spet ini memiliki ujung corong halus yang pas di mulut mungil hewan seperti sugar glider atau hewan kecil lainnya, memungkinkan kontrol aliran cairan secara presisi agar hewan tidak mudah tersedak. Produk ini sudah termasuk sikat mini untuk membersihkan sisa endapan susu di bagian dalam corong yang sempit yang tidak dapat digapai oleh sikat biasa. Terdapat skala ukur untuk memudahkan porsi asupan yang dibutuhkan anabul.", category: "Feeding Supplies", image: "assets/CC120001.jpg" },
        { name: "Pet Cargo Paw Pastel Kotak", price: "Rp 140.000", bestSeller: true, description: "Pet cargo praktis untuk perjalanan anabul yang aman dan nyaman! Dilengkapi tutup transparan untuk memantau anabul, ventilasi udara, alas plastik agar tetap bersih dan kering, serta botol minum mini 60 ml. Memiliki pegangan nyaman dan kunci bermotif paw yang lucu. \n\n 📏 Ukuran: 18,4 × 16,3 × 17 cm \n 🎨 Warna: Biru, Cokelat, Hijau, Pink, dan Ungu \n\n Cocok untuk perjalanan singkat bersama anabul kesayangan! 🐶🐱💕", category: "Travel and carrier", image: ["assets/CC120002 - Blue.jpg", "assets/CC120002 - Choco.jpg", "assets/CC120002 - Green.jpg", "assets/CC120002 - Pink.jpg", "assets/CC120002 - Purple.jpg"] },
        { name: "Aeropod Travel Carrier Pastel", price: "Rp 267.000", bestSeller: true, description: "Bawa anabul jalan-jalan makin praktis dan modis! Dilengkapi tutup transparan untuk memantau anabul, ventilasi udara, alas plastik agar tetap bersih dan kering, serta botol minum mini 60 ml. Tersedia hand grip dan tali selempang yang bisa dilepas-pasang serta diatur panjangnya. Dilengkapi kunci agar anabul tetap aman saat dibawa bepergian. \n\n 📏 Dimensi: Diameter 18 cm × Tinggi 20 cm \n 🎨 Warna: Biru, Pink, dan Ungu \n\n Cocok untuk menemani perjalanan singkat bersama anabul kesayangan! 🐶🐱💕.", category: "Travel and carrier", image: ["assets/CC120003 - Blue.jpg", "assets/CC120003 - Pink.jpg", "assets/CC120003 - Purple.jpg"] },
        { name: "Pet Cargo Kotak Pastel", price: "Rp 80.000", bestSeller: false, description: "Pet cargo praktis dan aman untuk membawa anabul bepergian, mudik, maupun jalan-jalan! Dilengkapi bukaan atas (top loading) agar mudah memantau dan mengambil anabul, alas plastik untuk menjaga bulu tetap bersih dan kering, serta wadah makan dan botol minum mini 60 ml. Memiliki pegangan nyaman dengan warna senada.\n\n 📏 Dimensi: 20 × 18 × 16 cm \n 🎨 Warna: Biru, Hijau, dan Pink \n\n Praktis dibawa, nyaman untuk anabul kesayangan! 🐱💕.", category: "Travel and carrier", image: ["assets/CC120004 - Blue.jpg", "assets/CC120004 - Green.jpg", "assets/CC120004 - Pink.jpg"] },
        { name: "Explorer Cruiser Wheel", price: "Rp 171.000", bestSeller: false, description: "Mainan unik yang menggabungkan jogging wheel dan mobil tarik bergaya off-road mini! 🐾 Sugar glider, hamster, dan hewan kecil lainnya bisa berlari di roda transparan, sementara Anda dapat menarik mobilnya menggunakan tali braided yang stylish. Desain menarik dengan sirkulasi udara yang baik, cocok untuk menemani waktu bermain sekaligus membuat konten lucu anabul.\n\n 📏 Dimensi: 32 × 16 × 19 cm \n🎨 Warna: Biru, Pink, dan Putih \n\n Bermain jadi lebih seru, aktif, dan menggemaskan! 💕🚗 .", category: "Grooming and toys", image: ["assets/CC120005 - Blue.jpg", "assets/CC120005 - Pink.jpg", "assets/CC120005 - White.jpg"] },
        { name: "Pet Cage Trolley", price: "Rp 253.000", bestSeller: false, description: "Capek mengangkat kandang anabul saat membersihkan atau memindahkan posisi? 🐹✨ Pet Cage Trolley hadir sebagai solusi praktis! \n\n ✅ Roda putar yang lancar untuk memudahkan perpindahan\n ✅ Dilengkapi rem pengunci agar lebih stabil saat diam \n ✅ Penyangga di setiap sudut untuk menjaga posisi kandang \n ✅ Rangka besi kokoh dan minimalis \n ✅ Membantu meminimalkan risiko goresan pada lantai \n\n\ 📏 Ukuran: 61 × 42 × 5 cm \n\n Bikin perawatan kandang lebih praktis, mudah, dan nyaman tanpa ribet angkat-angkat lagi! 💙.", category: "Grooming and toys", image: ["assets/CC120006.jpg", "assets/CC120006-2.jpg"] },
        { name: "Pet Cargo Ufo Pod Stainless", price: "Rp 202.000", bestSeller: true, description: "Pet cargo bulat yang praktis untuk membawa sugar glider, hamster, dan hewan kecil lainnya bepergian! Dilengkapi alas jaring besi agar kotoran jatuh ke dasar, ventilasi udara untuk sirkulasi yang baik, serta botol minum mini 60 ml dan handle grip yang nyaman dibawa. Desain open-front memudahkan akses anabul saat perjalanan ke taman, gathering, maupun dokter hewan.\n\n 📏 Dimensi: Diameter 18,6 cm × Tinggi 16 cm \n 🎨 Warna: Army, Biru, Pink, dan Oranye \n\n Praktis dibawa, nyaman untuk menemani petualangan anabul! 💕.", category: "Travel and carrier", image: ["assets/CC120007 - Army.jpg", "assets/CC120007 - Blue.jpg", "assets/CC120007 - Orange.jpg", "assets/CC120007 - Pink.jpg"]},
        { name: "Sugar Glider Trinket Holder", price: "Rp xx.xxx", bestSeller: false, soldOut: true, description: "Bikin meja lebih rapi dan estetik dengan pajangan sugar glider yang multifungsi! Bagian ekornya cocok untuk menggantung cincin dan gelang, sementara bagian perutnya bisa digunakan untuk menyimpan kunci, koin, permen, dan aksesori kecil lainnya.\n\n 🎨 Warna: Putih (Albino), Abu-abu (Classic Grey), dan Biru. \n\n Lucu, unik, dan praktis untuk mempercantik meja sekaligus menyimpan barang-barang kecil kesayanganmu! 💙.", category: "Grooming and toys", image: "https://images.unsplash.com/photo-1548249081-649f1833503a?auto=format&fit=crop&w=400&q=80" },
        { name: "Glove Pouch Grooming 2-in-1", price: "Rp 335.000", bestSeller: false, description: "Memotong kuku anabul jadi lebih praktis dengan sarung tangan berbahan plush yang lembut dan tebal, dilengkapi desain wajah sugar glider yang menggemaskan. Membantu melindungi tangan dari cakaran dan gigitan saat grooming. Bisa juga digunakan sebagai sleeping pouch yang hangat dan nyaman di dalam kandang. \n\n 🎨 Warna: Pink dan Oranye. \n\n Satu produk dengan dua fungsi: membantu perawatan sekaligus menjadi tempat tidur nyaman untuk sugar glider kesayangan! 💕", category: "Grooming and toys", image: ["assets/CC120009 - Orange.jpg", "assets/CC120009 - Pink.jpg"] },
        { name: "Mini Sweeper Set (Sapu + Sekop Mini)", price: "Rp 23.000", bestSeller: true, description: "Bersihkan sisa makanan dan remah-remah di sekitar kandang sugar glider dengan lebih praktis! Dilengkapi sikat berbulu rapat dan lembut untuk menyapu kotoran kecil serta sekop mini bergagang panjang yang memudahkan menjangkau sudut sempit.\n\n 🤍 Warna: Putih dengan aksen gagang kekuningan.\n\n Praktis, minimalis, dan estetik untuk menjaga area kandang anabul tetap bersih setiap hari! 🐿️✨.", category: "Housing and cleaning", image: ["assets/CC120010.jpg"] },
        { name: "Aero View Travel Backpack", price: "Rp 429.000", bestSeller: true, description: "Ajak anabul bepergian dengan lebih praktis dan stylish! Tas bergaya astronot ini dilengkapi panel depan transparan untuk memantau hewan, tangkringan tali warna-warni, serta dua mangkuk stainless steel untuk makanan dan minuman. Memiliki lantai jaring besi agar kotoran jatuh ke tatakan bawah sehingga lebih mudah dibersihkan, serta handle pegangan yang nyaman.\n\n 📏 Dimensi: 30 × 21 × 32 cm \n 🎨 Warna: Army Green, Pink, Purple, dan Black. \n\n Cocok untuk menemani petualangan sugar glider, burung, dan hewan kecil lainnya! 🐿️💕.", category: "Travel and carrier", image: ["assets/CC120011 - Army.jpg","assets/CC120011 - Black.jpg", "assets/CC120011 - Pink.jpg", "assets/CC120011 - Purple.jpg"] },
        { name: "Alas Besi 2-in-1", price: "Rp 79.000", bestSeller: false, description: "Alas jaring besi multifungsi untuk travel carrier maupun kandang anabul! Desain jaring berongga membantu kotoran jatuh ke bawah agar kaki tetap bersih dan kering. Bisa juga dikreasikan menjadi pijakan atau ayunan untuk sugar glider dan burung dengan tambahan pengait atau rantai.\n\n ✨ Keunggulan: \n\n Material besi kokoh.\n Membantu menjaga kebersihan alas carrier.\n Multifungsi untuk pijakan atau ayunan kandang.\n\n Praktis, awet, dan cocok untuk melengkapi perlengkapan anabul kesayangan! 🐿️💕.", category: "Grooming and toys", image: ["assets/CC120012.jpg"] },
        { name: "Mini Brush", price: "Rp 5.000", bestSeller: true, description: "Sudah punya spet sugar glider tetapi susah membersihkan kerak susu di corongnya? Sikat mini ini solusinya! Sikat ini dapat menjangkau area yang tidak dapat dijangkau oleh sikat lainnya. Sehingga anda tidak perlu khawatir anabul anda akan menelan sisa-sisa makanan yang tidak dapat dibersihkan sebelumnya..", category: "Housing and cleaning", image: "assets/CC120013.jpg" },
        { name: "Swing for Photoshoot", price: "Rp 135.000", bestSeller: false, soldOut: true, description: "Stok sedang kosong. Tanya admin untuk estimasi restock.", category: "Grooming and toys", image: "assets/CC120014.jpg" },
        { name: "Cherry Bowl", price: "Rp 58.000", bestSeller: false, description: "Bikin waktu makan anabul makin lucu dengan mangkuk berbentuk buah cherry yang aesthetic! Dilengkapi 2 sekat untuk menyajikan susu di satu sisi dan buah atau sayuran favorit anabul di sisi lainnya.\n\n 📏 Dimensi: 12,4 × 8 × 3,3 cm \n 🎨 Warna: Pink, Ungu, dan Kuning. \n\n Lucu, unik, dan praktis untuk menemani waktu makan sugar glider kesayangan! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120015 - Pink.jpg", "assets/CC120015 - Purple.jpg", "assets/CC120015 - Yellow.jpg"] },
        { name: "Watermelon Bowl", price: "Rp 81.000", bestSeller: true, description: "Bikin waktu makan anabul makin menarik dengan mangkuk berbentuk semangka yang unik dan berwarna cerah! Dilengkapi 2 sekat untuk memisahkan susu, buah, atau sayuran favorit anabul agar lebih praktis saat menyajikan makanan.\n\n 📏 Dimensi: Panjang 11 cm × Tinggi 2,3 cm \n 🎨 Warna: Merah, Kuning, Oranye, dan Putih. \n\n Lucu, colorful, dan cocok untuk melengkapi perlengkapan makan sugar glider kesayangan! 🐿️💕.", category: "Feeding Supplies", image: ["assets/CC120016.jpg"] },
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

/** 
 * ==========================================
 * 2. STATE APLIKASI
 * ==========================================
 */
let currentSlide = 0;
let slideInterval;
let activeCategory = 'All';
let searchQuery = '';
let currentSort = 'default';
let currentPage = 1;
let itemsPerPage = 10;
let filteredProducts = [];


/** 
 * ==========================================
 * 2b. HELPER: TRACKING, WA LINK, HARGA
 * ==========================================
 */
function trackEvent(name, params) {
    try { if (typeof fbq === 'function') fbq('track', name, params || {}); } catch (e) {}
}

function catLabel(cat) {
    return (config.categoryLabels && config.categoryLabels[cat]) || cat;
}

// Harga "Rp 50.000" -> 50000 ; "Rp xx.xxx" / "TANYA ADMIN" -> 0
function priceToNumber(str) {
    if (!str) return 0;
    const digits = String(str).replace(/[^0-9]/g, '');
    return /x/i.test(str) || !digits ? 0 : parseInt(digits, 10);
}

function displayPrice(p) {
    return priceToNumber(p.price) > 0 ? p.price : 'Tanya Admin';
}

function shortDesc(p) {
    const first = p.description.split('\n')[0].replace(/\s+/g, ' ').trim();
    if (first.length <= 90) return first;
    return first.substring(0, 90).replace(/\s+\S*$/, '') + '...';
}

// Mengetahui pelanggan datang dari iklan mana (untuk dicatat di chat WA)
function getAdSource() {
    const p = new URLSearchParams(location.search);
    const src = p.get('utm_source') || (p.get('fbclid') ? 'facebook' : '') || (p.get('ttclid') ? 'tiktok' : '') || (p.get('gclid') ? 'google' : '');
    const camp = p.get('utm_campaign');
    return src ? src + (camp ? '/' + camp : '') : '';
}

function buildWaLink(msg) {
    const src = getAdSource();
    const text = src ? `${msg}\n\n(Info: dari iklan ${src})` : msg;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// JSON-LD produk dibuat otomatis dari katalog
function injectJsonLd() {
    const el = document.getElementById('jsonld-products');
    if (!el) return;
    const items = config.products
        .filter(p => priceToNumber(p.price) > 0)
        .map((p, i) => {
            const img = Array.isArray(p.image) ? p.image[0] : p.image;
            return {
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                    "@type": "Product",
                    "name": p.name,
                    "image": new URL(img, location.origin + '/').href,
                    "description": p.description.replace(/\s+/g, ' ').trim().substring(0, 300),
                    "category": catLabel(p.category),
                    "brand": { "@type": "Brand", "name": config.brandName },
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "IDR",
                        "price": String(priceToNumber(p.price)),
                        "availability": p.soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
                        "url": location.origin + '/#catalog'
                    }
                }
            };
        });
    el.textContent = JSON.stringify({ "@context": "https://schema.org/", "@type": "ItemList", "itemListElement": items });
}


/** 
 * ==========================================
 * 2c. TESTIMONI
 * ==========================================
 */
function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function renderTestimonials() {
    const section = document.getElementById('testimonials');
    const grid = document.getElementById('testimonial-grid');
    const list = config.testimonials || [];
    if (!section || !grid) return;
    if (list.length === 0) { section.style.display = 'none'; return; }

    grid.innerHTML = list.map(t => {
        const imgs = Array.isArray(t.image) ? t.image : (t.image ? [t.image] : []);
        const img = imgs.length
            ? `<div class="testi-photos count-${Math.min(imgs.length, 3)}">${imgs.map((src, i) => `<img class="testi-photo" src="${escapeHtml(src)}" alt="Testimoni ${escapeHtml(t.name)} ${i + 1}" loading="lazy" data-full="${escapeHtml(src)}">`).join('')}</div>`
            : '';
        const hint = imgs.length ? '<div class="testi-zoom-hint">Ketuk gambar untuk memperbesar</div>' : '';
        const text = t.text ? `<p class="testi-text">"${escapeHtml(t.text)}"</p>` : '';
        const product = t.product ? `<div class="testi-product">Membeli: ${escapeHtml(t.product)}</div>` : '';
        return `
            <div class="testimonial-card">
                ${img}
                <div class="stars">⭐⭐⭐⭐⭐</div>
                ${text}
                ${product}
                ${hint}
                <div class="testi-user">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(t.name || 'P')}&background=2563EB&color=fff" alt="">
                    <div class="user-info">
                        <h4>${escapeHtml(t.name)}</h4>
                        <span>Pembeli ChubbyCuddle</span>
                    </div>
                </div>
            </div>`;
    }).join('');

    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.testi-photo');
        if (!img) return;
        lbImg.src = img.dataset.full;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    const closeLb = () => { lb.classList.remove('active'); document.body.style.overflow = 'auto'; };
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('active')) closeLb(); });
}


/** 
 * ==========================================
 * 2d. FAQ & PRODUK TERKAIT
 * ==========================================
 */
function renderFaq() {
    const list = document.getElementById('faq-list');
    if (!list || !config.faqs || !config.faqs.length) return;
    list.innerHTML = config.faqs.map((f, i) => `
        <details class="faq-item">
            <summary>${i + 1}. ${f.q}</summary>
            <div class="faq-answer">${f.a}</div>
        </details>`).join('');
    // Hanya satu jawaban terbuka dalam satu waktu
    list.addEventListener('toggle', (e) => {
        if (e.target.open) list.querySelectorAll('details[open]').forEach(d => { if (d !== e.target) d.open = false; });
    }, true);
}

function renderRelatedProducts(currentIndex) {
    const box = document.getElementById('modal-related');
    if (!box) return;
    const cur = config.products[currentIndex];
    const eligible = config.products
        .map((p, i) => i)
        .filter(i => i !== currentIndex && !config.products[i].soldOut && priceToNumber(config.products[i].price) > 0 && config.products[i].category !== 'Merchandise');
    const best = (a, b) => (config.products[b].bestSeller ? 1 : 0) - (config.products[a].bestSeller ? 1 : 0);
    const same = eligible.filter(i => config.products[i].category === cur.category).sort(best);
    const others = eligible.filter(i => config.products[i].category !== cur.category && config.products[i].bestSeller);
    const picks = [...same, ...others].slice(0, 3);
    if (!picks.length) { box.innerHTML = ''; return; }
    box.innerHTML = `<h4>Produk Terkait</h4><div class="related-grid">` + picks.map(i => {
        const p = config.products[i];
        const img = Array.isArray(p.image) ? p.image[0] : p.image;
        return `<div class="related-card" onclick="openModal(${i}); document.getElementById('modal-content').scrollTop = 0;">
            <img src="${img}" alt="${p.name}" loading="lazy">
            <div class="r-name">${p.name}</div>
            <div class="r-price">${p.price}</div>
        </div>`;
    }).join('') + `</div>`;
}

/** 
 * ==========================================
 * 3. FUNGSI INISIALISASI
 * ==========================================
 */
function initApp() {
    document.title = `${config.brandName} - ${config.tagline}`;
    document.getElementById('header-logo').src = config.logoUrl;
    document.getElementById('header-brand-name').textContent = config.brandName;
    document.getElementById('header-tagline').textContent = config.tagline;
    document.getElementById('footer-logo').src = config.logoUrl;
    document.getElementById('footer-brand-name').textContent = config.brandName;
    document.getElementById('footer-tagline').textContent = config.tagline;
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    
    const helpMsg = 'Hai ChubbyCuddle! Saya butuh bantuan untuk memilih beberapa produk.';
    const helpLink = buildWaLink(helpMsg);
    ['wa-cta-btn', 'footer-wa-link', 'topbar-wa', 'wa-float', 'faq-wa-btn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = helpLink;
    });

    // Catat klik WhatsApp sebagai event "Contact" di Meta Pixel (untuk optimasi iklan)
    document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="https://wa.me/"]');
    if (a) {
        const info = { content_name: a.dataset.track || a.id || 'whatsapp' };
        trackEvent('Lead', info);
        trackEvent('Contact', info);
    }
    });

    injectJsonLd();
    renderTestimonials();
    renderFaq();
    setupHamburger();
    initCarousel();
    renderCategories();
    setupCatalogControls();
    setupModalEvents();
    
    filterAndSortProducts();
}

/** 
 * ==========================================
 * 4. LOGIKA CAROUSEL
 * ==========================================
 */
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    
    config.slides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = 'carousel-slide';
        slideEl.innerHTML = `
            <img src="${slide.image}" ${index > 0 ? 'loading="lazy"' : ''} alt="${slide.title}" onerror="this.src='https://ui-avatars.com/api/?name=${slide.title}&background=2563EB&color=fff&size=800'">
            <div class="carousel-overlay">
                <div class="carousel-content">
                    <h2>${slide.title}</h2>
                    <p>${slide.desc}</p>
                    <button class="btn-primary" onclick="handleSlideAction('${slide.actionTarget}')">${slide.btnText}</button>
                </div>
            </div>
        `;
        track.appendChild(slideEl);

        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    document.getElementById('btn-prev').addEventListener('click', () => { prevSlide(); resetInterval(); });
    document.getElementById('btn-next').addEventListener('click', () => { nextSlide(); resetInterval(); });

    const container = document.getElementById('carousel');
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', () => startInterval());

    let startX = 0;
    let endX = 0;
    container.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, {passive: true});
    container.addEventListener('touchend', e => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
        startInterval();
    }, {passive: true});

    function handleSwipe() {
        if (startX - endX > 50) nextSlide();
        if (endX - startX > 50) prevSlide();
    }

    startInterval();
}

function updateCarouselView() {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.dot');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % config.slides.length;
    updateCarouselView();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + config.slides.length) % config.slides.length;
    updateCarouselView();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselView();
    resetInterval();
}

function startInterval() {
    slideInterval = setInterval(nextSlide, 4500);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

function handleSlideAction(action) {
    if (action.startsWith('cat-')) {
        const category = action.replace('cat-', '');
        setActiveCategory(category);
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    } else {
        document.querySelector(action).scrollIntoView({ behavior: 'smooth' });
    }
}

/** 
 * ==========================================
 * 5. LOGIKA KATEGORI
 * ==========================================
 */
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    const footerList = document.getElementById('footer-categories');
    
    grid.innerHTML = `
        <div class="category-card active" id="cat-card-All" onclick="setActiveCategory('All')">
            <div class="category-icon">&#128062;</div>
            <h3>Semua Produk</h3>
        </div>
    `;
    
    const icons = ['&#127869;', '&#128092;', '&#127823;', '&#127919;', '&#127968;', '&#127873;'];

    config.categories.forEach((cat, index) => {
        // Sembunyikan kategori yang belum punya produk
        if (!config.products.some(p => p.category === cat)) return;
        grid.innerHTML += `
            <div class="category-card" id="cat-card-${index}" onclick="setActiveCategory('${cat}')">
                <div class="category-icon">${icons[index] || '&#128062;'}</div>
                <h3>${catLabel(cat)}</h3>
            </div>
        `;
        footerList.innerHTML += `<li><a href="javascript:void(0)" onclick="setActiveCategory('${cat}'); document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });">${catLabel(cat)}</a></li>`;
    });
}

function setActiveCategory(category) {
    activeCategory = category;
    currentPage = 1; 
    
    document.querySelectorAll('.category-card').forEach(card => card.classList.remove('active'));
    if(category === 'All') {
        document.getElementById('cat-card-All').classList.add('active');
    } else {
        const index = config.categories.indexOf(category);
        const el = document.getElementById(`cat-card-${index}`);
        if (el) el.classList.add('active');
    }
    
    filterAndSortProducts();
}

/** 
 * ==========================================
 * 6. LOGIKA KATALOG & FILTER
 * ==========================================
 */
function setupCatalogControls() {
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        currentPage = 1;
        filterAndSortProducts();
    });

    document.getElementById('sort-select').addEventListener('change', (e) => {
        currentSort = e.target.value;
        currentPage = 1;
        filterAndSortProducts();
    });

    document.getElementById('btn-page-prev').addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; filterAndSortProducts(); }
    });
    
    document.getElementById('btn-page-next').addEventListener('click', () => {
        const maxPage = Math.ceil(filteredProducts.length / itemsPerPage);
        if (currentPage < maxPage) { currentPage++; filterAndSortProducts(); }
    });

    document.getElementById('btn-clear-filters').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        searchQuery = '';
        setActiveCategory('All');
    });
}

function filterAndSortProducts() {
    filteredProducts = config.products.filter(p => {
        const matchCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
        return matchCategory && matchSearch;
    });

    const soldRank = p => (p.soldOut ? 1 : 0);
    const byDefault = (a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    let cmp;
    if (currentSort === 'az') cmp = (a, b) => a.name.localeCompare(b.name);
    else if (currentSort === 'za') cmp = (a, b) => b.name.localeCompare(a.name);
    else if (currentSort === 'price-asc') cmp = (a, b) => (priceToNumber(a.price) || Infinity) - (priceToNumber(b.price) || Infinity);
    else if (currentSort === 'price-desc') cmp = (a, b) => (priceToNumber(b.price) || -1) - (priceToNumber(a.price) || -1);
    else cmp = byDefault; // default: best seller dulu
    // Produk habis selalu di belakang
    filteredProducts.sort((a, b) => soldRank(a) - soldRank(b) || cmp(a, b));

    renderCatalog();
}

function renderCatalog() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const pagination = document.getElementById('pagination');
    const info = document.getElementById('catalog-info');
    
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.style.display = 'none';
        pagination.style.display = 'none';
        emptyState.style.display = 'block';
        info.textContent = 'Menampilkan 0 produk';
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    pagination.style.display = 'flex';

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredProducts.slice(startIndex, endIndex);

    info.textContent = `Menampilkan ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} dari ${filteredProducts.length} produk`;
    
    const pageNumbersContainer = document.getElementById('page-numbers');
    if (pageNumbersContainer) {
        pageNumbersContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.onclick = () => {
                currentPage = i;
                filterAndSortProducts();
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            pageNumbersContainer.appendChild(btn);
        }
    }
    document.getElementById('btn-page-prev').disabled = currentPage === 1;
    document.getElementById('btn-page-next').disabled = currentPage === totalPages;

    paginatedItems.forEach((product, idx) => {
        const absoluteIndex = startIndex + idx + 1;
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let coverImg = Array.isArray(product.image) ? product.image[0] : product.image;
        
        if (product.soldOut) card.classList.add('sold-out');
        const badgeHTML = product.soldOut
            ? `<div style="position:absolute; top:10px; right:10px; background-color:#64748B; color:white; font-size:0.7rem; font-weight:bold; padding:4px 10px; border-radius:12px; z-index:2;">Stok Habis</div>`
            : (product.bestSeller ? `<div style="position:absolute; top:10px; right:10px; background-color:#EF4444; color:white; font-size:0.7rem; font-weight:bold; padding:4px 10px; border-radius:12px; z-index:2; box-shadow:0 2px 4px rgba(0,0,0,0.2);">Best Seller 🔥</div>` : '');
        const hasPrice = priceToNumber(product.price) > 0;
        const priceHTML = `<div class="${hasPrice ? '' : 'price-ask'}" style="color:var(--primary-blue); font-size:1.1rem; font-weight:700; margin-bottom:0.5rem;">${displayPrice(product)}</div>`;
        const orderMsg = product.soldOut
            ? `Hai ChubbyCuddle! Kapan ${product.name} restock?`
            : `Hai ChubbyCuddle! Saya mau pesan ${product.name}${hasPrice ? ' (' + product.price + ')' : ''}. Apakah stok masih ready?`;
        const orderLabel = product.soldOut ? 'Tanya Restock' : (hasPrice ? 'Pesan via WA' : 'Tanya Harga');

        card.innerHTML = `
            <div class="product-number">${absoluteIndex}</div>
            ${badgeHTML}
            <div class="product-img-wrapper">
                <img src="${coverImg}" alt="${product.name}" loading="lazy" decoding="async" onerror="this.src='https://placehold.co/400x400/EFF6FF/2563EB?text=ChubbyCuddle'">
            </div>
            <div class="product-content">
                <div class="product-category">${catLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                ${priceHTML}
                <p class="product-desc">${shortDesc(product)}</p>
                <div class="product-actions">
                    <a class="btn-wa-small" href="${buildWaLink(orderMsg)}" target="_blank" rel="noopener" data-track="card_order">${orderLabel}</a>
                    <button class="btn-outline" onclick="openModal(${config.products.indexOf(product)})">Lihat Detail</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/** 
 * ==========================================
 * 7. LOGIKA MODAL
 * ==========================================
 */
const modal = document.getElementById('product-modal');

let currentModalImageIndex = 0;
let currentModalImages = [];

function openModal(originalIndex) {
    const product = config.products[originalIndex];
    
    currentModalImages = Array.isArray(product.image) ? product.image : [product.image];
    currentModalImageIndex = 0;
    
    const modalImgContainer = document.querySelector('.modal-img');
    document.getElementById('modal-image').src = currentModalImages[0];
    
    const oldBtns = modalImgContainer.querySelectorAll('.modal-img-btn, .modal-img-dots');
    oldBtns.forEach(btn => btn.remove());

    if (currentModalImages.length > 1) {
        modalImgContainer.innerHTML += `
            <button class="modal-img-btn prev" onclick="changeModalImage(-1)" style="position:absolute; top:50%; left:10px; transform:translateY(-50%); z-index:10; border:none; background:rgba(255,255,255,0.7); color:#0F172A; border-radius:50%; width:30px; height:30px; cursor:pointer; display:flex; align-items:center; justify-content:center;">&#10094;</button>
            <button class="modal-img-btn next" onclick="changeModalImage(1)" style="position:absolute; top:50%; right:10px; transform:translateY(-50%); z-index:10; border:none; background:rgba(255,255,255,0.7); color:#0F172A; border-radius:50%; width:30px; height:30px; cursor:pointer; display:flex; align-items:center; justify-content:center;">&#10095;</button>
            <div class="modal-img-dots" id="modal-img-dots" style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; gap:5px; z-index:10;"></div>
        `;
        updateModalDots();
    }
    
    const modalBadge = product.bestSeller ? `<span class="modal-badge">Best Seller 🔥</span>` : '';
    const modalPrice = `<div style="font-size:1.4rem; font-weight:bold; color:var(--primary-blue); margin-bottom:1rem;">${displayPrice(product)}</div>`;

    document.getElementById('modal-category').textContent = catLabel(product.category);
    document.getElementById('modal-title').innerHTML = `${product.name} ${modalBadge}`;
    document.getElementById('modal-desc').innerHTML = modalPrice + product.description.replace(/\n/g, '<br>');
    
    const hasPrice = priceToNumber(product.price) > 0;
    const waMsg = product.soldOut
        ? `Hai ChubbyCuddle! Kapan ${product.name} restock?`
        : `Hai ChubbyCuddle! Saya mau pesan ${product.name}${hasPrice ? ' (' + product.price + ')' : ''}. Apakah stok masih ready?`;
    const waBtn = document.getElementById('modal-wa-btn');
    waBtn.href = buildWaLink(waMsg);
    waBtn.innerHTML = product.soldOut ? '&#9993; Tanya Restock via WhatsApp' : '&#9993; Pesan via WhatsApp';
    renderRelatedProducts(originalIndex);

    // Event Meta Pixel: pengunjung melihat detail produk
    trackEvent('ViewContent', {
        content_name: product.name,
        content_category: product.category,
        content_type: 'product',
        value: priceToNumber(product.price),
        currency: 'IDR'
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function changeModalImage(direction) {
    currentModalImageIndex += direction;
    if (currentModalImageIndex >= currentModalImages.length) currentModalImageIndex = 0;
    if (currentModalImageIndex < 0) currentModalImageIndex = currentModalImages.length - 1;
    
    document.getElementById('modal-image').src = currentModalImages[currentModalImageIndex];
    updateModalDots();
}

function updateModalDots() {
    const dotsContainer = document.getElementById('modal-img-dots');
    if (dotsContainer) {
        let dotsHtml = '';
        for (let i = 0; i < currentModalImages.length; i++) {
            const dotColor = i === currentModalImageIndex ? 'var(--primary-blue)' : 'rgba(255,255,255,0.5)';
            const transform = i === currentModalImageIndex ? 'scale(1.2)' : 'scale(1)';
            dotsHtml += `<div onclick="goToModalImage(${i})" style="width:8px; height:8px; border-radius:50%; background-color:${dotColor}; transform:${transform}; cursor:pointer; transition:0.3s;"></div>`;
        }
        dotsContainer.innerHTML = dotsHtml;
    }
}

function goToModalImage(index) {
    currentModalImageIndex = index;
    document.getElementById('modal-image').src = currentModalImages[currentModalImageIndex];
    updateModalDots();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function setupModalEvents() {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); 
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/** 
 * ==========================================
 * 8. UTILS (Mobile Menu)
 * ==========================================
 */
function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}

window.addEventListener('DOMContentLoaded', initApp);