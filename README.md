# ChubbyCuddle — Website Katalog

Website: https://chubbycuddle.my.id (GitHub Pages)

## Cara update produk / harga / FAQ / testimoni

1. Edit **`data.js`** saja (produk, harga, kategori, FAQ, testimoni, nomor WA, link sosmed).
   Foto baru taruh di folder `assets/`.
2. Push ke GitHub. **GitHub Actions otomatis menjalankan build** dan meng-commit hasilnya
   (tunggu ±1–2 menit, lihat tab *Actions*). Setelah itu jalankan `git pull` sebelum edit lagi.

Atau build di komputer sendiri (butuh Node.js):

```bash
npm install      # sekali saja
npm run build    # buat ulang semua halaman
```

> Jangan edit `index.html`, folder `produk/`, `kategori/`, `sitemap.xml`, atau `assets/img/`
> secara manual — semuanya dibuat ulang oleh `build.js`.

## Artikel panduan (SEO keyword umum)

Artikel ada di **`panduan.js`** dan jadi halaman `/panduan/<slug>/`. Setiap artikel menargetkan satu keyword
(mis. "perlengkapan sugar glider", "makanan sugar glider") dan otomatis menampilkan produk terkait.
Untuk menambah artikel, salin satu blok artikel di `panduan.js`, ganti isinya, lalu push.
Link di dalam teks: `[[produk:slug|teks]]`, `[[kategori:slug|teks]]`, `[[panduan:slug|teks]]`.

## Struktur

| File / folder | Isi |
|---|---|
| `data.js` | **Semua konten produk** (yang Anda edit) |
| `panduan.js` | Artikel panduan / blog SEO |
| `panduan/<slug>/` | Halaman artikel (hasil build) |
| `build.js` | Generator halaman statis + optimasi gambar (WebP) |
| `style.css` / `script.js` | Tampilan & interaksi (filter, galeri, link WA, Meta Pixel) |
| `index.html` | Beranda (hasil build) |
| `produk/<nama-produk>/` | 1 halaman per produk (hasil build) |
| `kategori/<kategori>/` | 1 halaman per kategori (hasil build) |
| `spet-mini-brush/` | Landing page iklan Spet (tidak diubah oleh build) |

## Tips
- **Nama file foto** `KODE - Warna.jpg` (mis. `CC120002 - Blue.jpg`) otomatis jadi pilihan warna di halaman produk.
- **Jangan ganti nama/slug produk** yang sudah live — alamat halamannya ikut berubah dan link lama jadi 404.
  Kalau perlu ganti nama tampilan, isi `slug: "slug-lama"` di produk tersebut.
- Link iklan bisa langsung ke halaman produk, mis. `https://chubbycuddle.my.id/produk/spet-sugar-glider/?utm_source=facebook&utm_campaign=spet`.
  Sumber iklan otomatis tercatat di pesan WhatsApp pembeli.
- Event Meta Pixel: `PageView`, `ViewContent` (buka halaman produk), `Lead` + `Contact` (klik tombol WA), `Search`.

## Setelah deploy (SEO)
1. Google Search Console → Sitemaps → kirim `https://chubbycuddle.my.id/sitemap.xml`.
2. URL Inspection → `https://chubbycuddle.my.id/` → *Request Indexing*.
3. Buat / lengkapi **Google Business Profile** "ChubbyCuddle" (Batam) dan cantumkan website ini.
4. Pasang link `https://chubbycuddle.my.id` di bio Instagram, TikTok, Facebook, YouTube, X, Threads.
