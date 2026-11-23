/**
 * ChubbyCuddle static site builder
 * ---------------------------------
 * Membaca data.js lalu membuat:
 *   - index.html                     (beranda, semua produk sudah ada di HTML → terbaca Google)
 *   - produk/<slug>/index.html       (1 halaman per produk)
 *   - kategori/<slug>/index.html     (1 halaman per kategori)
 *   - 404.html, sitemap.xml, favicon.ico
 *   - assets/img/*.webp              (gambar ringan untuk mobile)
 *
 * Jalankan:  npm install   (sekali saja)
 *            npm run build
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const D = require('./data.js');
const GUIDES = fs.existsSync(path.join(__dirname, 'panduan.js')) ? require('./panduan.js') : [];

const ROOT = __dirname;
const SITE = D.siteUrl.replace(/\/$/, '');
const OUT_IMG = 'assets/img';
const ASSET_VERSION = hashFiles(['style.css', 'script.js']);

/* ---------------------------------------------------------- helpers */
function hashFiles(files) {
    const crypto = require('crypto');
    const h = crypto.createHash('md5');
    files.forEach(f => h.update(fs.readFileSync(path.join(ROOT, f))));
    return h.digest('hex').slice(0, 8);
}
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slugify = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\+/g, ' ').replace(/&/g, ' dan ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const priceNum = s => { const d = String(s || '').replace(/[^0-9]/g, ''); return /x/i.test(s) || !d ? 0 : parseInt(d, 10); };
const rupiah = n => 'Rp ' + n.toLocaleString('id-ID');
const plain = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const firstSentence = (s, max = 155) => {
    const t = plain(String(s).split('\n')[0]);
    if (t.length <= max) return t;
    return t.slice(0, max).replace(/\s+\S*$/, '') + '…';
};
// meta description maks ~158 karakter agar tidak terpotong di Google
const metaDesc = (text, suffix = '', max = 158) => {
    const room = max - suffix.length;
    let t = plain(text).replace(/\s+/g, ' ').trim();
    if (t.length > room) t = t.slice(0, room - 1).replace(/\s+\S*$/, '').replace(/[\s.,;:!?–-]+$/, '') + '…';
    return (t + suffix).trim();
};
const abs = p =>SITE + '/' + String(p).replace(/^\//, '');
const waLink = msg => `https://wa.me/${D.whatsappNumber}?text=${encodeURIComponent(msg)}`;
function write(rel, content) {
    const f = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, content);
}

const COLOR_ID = {
    blue: 'Biru', pink: 'Pink', green: 'Hijau', purple: 'Ungu', choco: 'Cokelat', white: 'Putih',
    orange: 'Oranye', black: 'Hitam', yellow: 'Kuning', army: 'Army', 'full pink': 'Full Pink',
    'blue panda': 'Blue Panda', 'pink sugar glider': 'Pink Sugar Glider', red: 'Merah', grey: 'Abu-abu', gray: 'Abu-abu'
};
const COLOR_HEX = {
    Biru: '#93C5FD', Pink: '#F9A8D4', Hijau: '#86EFAC', Ungu: '#C4B5FD', Cokelat: '#B08968', Putih: '#F8FAFC',
    Oranye: '#FDBA74', Hitam: '#334155', Kuning: '#FDE68A', Army: '#7C8B5A', 'Full Pink': '#EC4899',
    'Blue Panda': '#60A5FA', 'Pink Sugar Glider': '#F472B6', Merah: '#F87171', 'Abu-abu': '#CBD5E1'
};
// emoji dekoratif yang disembunyikan di deskripsi halaman produk (📏 🎨 🥤 ✅ tetap tampil sebagai penanda)
const DECOR_EMOJI = /(?:💕|💙|💚|❤️|❤|💛|🖤|🤍|🐿️|🐿|🐶|🐱|🐹|🐾|🚗|📚|✨)️?/gu;

/* ---------------------------------------------------------- normalise data */
const catByKey = {};
D.categories.forEach(c => { catByKey[c.key] = c; });

const usedSlugs = new Set();
const products = D.products.map((p, i) => {
    let slug = p.slug || slugify(p.name);
    while (usedSlugs.has(slug)) slug += '-2';
    usedSlugs.add(slug);
    const imgs = (Array.isArray(p.image) ? p.image : [p.image]).filter(Boolean);
    const images = imgs.map((src, k) => {
        const base = path.basename(src).replace(/\.[a-z]+$/i, '');
        const m = base.match(/\s-\s(.+)$/);
        const rawVariant = m ? m[1].trim() : '';
        const variant = rawVariant ? (COLOR_ID[rawVariant.toLowerCase()] || rawVariant) : '';
        const name = slug + (variant ? '-' + slugify(variant) : (k ? '-' + (k + 1) : ''));
        return { src, name, variant };
    });
    const skuMatch = String(imgs[0] || '').match(/(CC\d{4,})/i);
    const price = priceNum(p.price);
    return {
        ...p, index: i, slug, images, price,
        sku: skuMatch ? skuMatch[1].toUpperCase() : 'CC-' + slug,
        variants: images.filter(im => im.variant).map(im => im.variant),
        url: `/produk/${slug}/`,
        cat: catByKey[p.category] || { key: p.category, label: p.category, slug: slugify(p.category), icon: '🐾' },
        priceText: price > 0 ? rupiah(price) : 'Tanya Admin'
    };
});
const categories = D.categories.filter(c => products.some(p => p.category === c.key));

// urutan default: tersedia dulu, best seller dulu, lalu urutan di data.js
const sortDefault = list => [...list].sort((a, b) =>
    (a.soldOut ? 1 : 0) - (b.soldOut ? 1 : 0) || (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0) || a.index - b.index);

/* ---------------------------------------------------------- images */
const imgMap = {}; // src -> {w400, w800, og, width, height}
const put = (src, res) => { if (res) imgMap[src] = Object.assign(imgMap[src] || {}, res); };
async function needs(out, src) {
    if (!fs.existsSync(out)) return true;
    if (process.env.CI) return false; // di GitHub Actions: hanya buat gambar yang belum ada
    try { return fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs; } catch { return true; }
}
async function optimise(src, name, widths, opts = {}) {
    const srcFile = path.join(ROOT, src);
    if (!fs.existsSync(srcFile)) { console.warn('  ! gambar tidak ditemukan:', src); return null; }
    const meta = await sharp(srcFile).metadata();
    const res = { width: meta.width, height: meta.height };
    for (const w of widths) {
        const rel = `${OUT_IMG}/${name}-${w}.webp`;
        const out = path.join(ROOT, rel);
        if (await needs(out, srcFile)) {
            fs.mkdirSync(path.dirname(out), { recursive: true });
            await sharp(srcFile).rotate().resize({ width: Math.min(w, meta.width), withoutEnlargement: true })
                .webp({ quality: opts.quality || 74, effort: 5 }).toFile(out);
        }
        res['w' + w] = '/' + rel;
    }
    if (opts.og) {
        const rel = `${OUT_IMG}/${name}-og.jpg`;
        const out = path.join(ROOT, rel);
        if (await needs(out, srcFile)) {
            await sharp(srcFile).rotate().resize(1200, 630, { fit: 'cover', position: 'attention' })
                .flatten({ background: '#ffffff' }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
        }
        res.og = '/' + rel;
    }
    // rasio tampilan (untuk width/height di <img>, mencegah layout shift)
    const ratioW = widths[widths.length - 1];
    res.dispW = Math.min(ratioW, meta.width);
    res.dispH = Math.round(res.dispW * meta.height / meta.width);
    return res;
}

async function buildImages() {
    console.log('• Optimasi gambar…');
    for (const p of products) {
        for (const [k, im] of p.images.entries()) {
            put(im.src, await optimise(im.src, im.name, [400, 800], { og: k === 0 }));
        }
    }
    for (const c of categories) {
        if (c.image) put(c.image, await optimise(c.image, 'kategori-' + c.slug, [480, 900], { og: true }));
    }
    put(D.heroImage, await optimise(D.heroImage, 'hero-perlengkapan-sugar-glider', [800, 1400], { og: true, quality: 72 }));
    for (const t of D.testimonials) {
        const arr = Array.isArray(t.image) ? t.image : (t.image ? [t.image] : []);
        for (const [k, src] of arr.entries()) {
            put(src, await optimise(src, 'testimoni-' + slugify(t.name) + '-' + (k + 1), [480, 1000]));
        }
    }
    put(D.logo, await optimise(D.logo, 'logo-chubbycuddle', [96, 192, 512], { quality: 88 }));
    for (const g of GUIDES) {
        if (g.image) put(g.image, await optimise(g.image, 'panduan-' + g.slug, [480, 1000], { og: true }));
    }

    // favicon & apple-touch-icon
    const logoFile = path.join(ROOT, D.logo);
    const touch = path.join(ROOT, 'apple-touch-icon.png');
    if (await needs(touch, logoFile)) {
        await sharp(logoFile).resize(180, 180, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile(touch);
    }
    const ico = path.join(ROOT, 'favicon.ico');
    if (await needs(ico, logoFile)) {
        const png = await sharp(logoFile).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
        const header = Buffer.alloc(22);
        header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
        header.writeUInt8(48, 6); header.writeUInt8(48, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
        header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
        header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
        fs.writeFileSync(ico, Buffer.concat([header, png]));
    }
}

function img(src, { alt, sizes = '(max-width: 600px) 50vw, 300px', small = 'w400', large = 'w800', cls = '', lazy = true, priority = false } = {}) {
    const m = imgMap[src];
    if (!m) return `<img src="/${esc(String(src).replace(/^\//, ''))}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${lazy ? ' loading="lazy"' : ''} decoding="async">`;
    return `<img src="${m[large]}" srcset="${m[small]} ${Math.min(parseInt(small.slice(1)), m.width)}w, ${m[large]} ${Math.min(parseInt(large.slice(1)), m.width)}w" sizes="${sizes}" width="${m.dispW}" height="${m.dispH}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${lazy ? ' loading="lazy"' : ''}${priority ? ' fetchpriority="high"' : ''} decoding="async">`;
}

/* ---------------------------------------------------------- icons (inline SVG) */
const ICON = {
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.86 9.86 0 0 0 12.04 2Zm5.8 14.07c-.24.68-1.42 1.32-1.96 1.37-.5.05-.98.24-3.3-.69-2.79-1.1-4.56-3.95-4.7-4.13-.13-.18-1.12-1.49-1.12-2.85s.71-2.02.97-2.3c.25-.27.55-.34.73-.34h.53c.17 0 .4-.06.62.48.24.56.8 1.94.86 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.11.6-.07.17-.18.7-.81.89-1.09.18-.28.37-.23.62-.14.25.09 1.6.76 1.88.9.27.13.46.2.52.32.07.11.07.66-.17 1.33Z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 6h11v9H3zM14 9h4l3 3v3h-7M7.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3.5 9 2.5 2.5 4.5-5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12ZM8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>',
    box: '<svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18M4 7.5l8 4.5 8-4.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>',
    star: '<svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16"><path fill="currentColor" d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z"/></svg>'
};
const SOCIAL_ICON = {
    instagram: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5.5-9.5h.01"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M14 8.5V7c0-.8.5-1 1-1h2V3h-3c-2.8 0-3.5 2-3.5 3.6v1.9H8V12h2.5v9H14v-9h2.6l.4-3.5h-3Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3.1c-1.5 0-2.9-.4-4-1.2v6.1A5.8 5.8 0 1 1 10.8 9v3.2a2.7 2.7 0 1 0 2.6 2.7V3h3.2Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"/></svg>',
    threads: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M16.5 11.2c-.4-2.4-2-3.6-4.3-3.6-2.6 0-4 1.6-4.2 3.6M19 8.5C17.8 5 15.3 3 12 3 7 3 4 6.5 4 12s3 9 8 9c3.8 0 6.6-2 6.6-5.2 0-2.6-2-4.3-5.6-4.3-2.4 0-4 1-4 2.7 0 1.4 1.2 2.4 2.9 2.4 2.8 0 4-2.1 4-5.6"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3-5.2 3Z"/></svg>'
};
const SOCIAL_LABEL = { instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok', x: 'X (Twitter)', threads: 'Threads', youtube: 'YouTube' };

/* ---------------------------------------------------------- shared layout */
function head({ title, description, canonical, ogImage, ogType = 'website', jsonld = [], extraHead = '', preloadImg = '' }) {
    const pixel = D.metaPixelId ? `
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${D.metaPixelId}');fbq('track','PageView');
</script>
<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${D.metaPixelId}&ev=PageView&noscript=1"></noscript>` : '';
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#2563EB">
<meta property="og:site_name" content="${esc(D.brandName)}">
<meta property="og:locale" content="id_ID">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
${preloadImg}<link rel="stylesheet" href="/style.css?v=${ASSET_VERSION}">
${jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}
${extraHead}${pixel}
</head>`;
}

function header(active = '') {
    const nav = [
        ['/#katalog', 'Katalog', 'katalog'],
        ['/#kategori', 'Kategori', 'kategori'],
        ...(GUIDES.length ? [['/panduan/', 'Panduan', 'panduan']] : []),
        ['/#testimoni', 'Testimoni', 'testimoni'],
        ['/#faq', 'FAQ', 'faq']
    ];
    return `
<div class="announce"><span>Gratis ongkir area tertentu di ${esc(D.city)}</span><span class="announce-sep" aria-hidden="true"></span><span>Pengiriman ke seluruh Indonesia</span></div>
<header class="site-header" id="top">
  <div class="container header-inner">
    <a href="/" class="brand" aria-label="${esc(D.brandName)} — Beranda">
      <img src="${imgMap[D.logo] ? imgMap[D.logo].w96 : '/' + D.logo}" width="44" height="44" alt="Logo ${esc(D.brandName)}">
      <span class="brand-text"><span class="brand-name">${esc(D.brandName)}</span><span class="brand-tag">Sugar glider essentials</span></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Menu utama">
      ${nav.map(([href, label, key]) => `<a href="${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
    <a class="btn btn-dark btn-sm header-wa" href="${waLink(`Hai ${D.brandName}! Saya mau tanya produk.`)}" data-wa="Hai ${esc(D.brandName)}! Saya mau tanya produk." data-track="header" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span><span>Chat</span></a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Buka menu" aria-expanded="false" aria-controls="main-nav">${ICON.menu}</button>
  </div>
</header>`;
}

function footer() {
    return `
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="/" class="brand brand-footer">
        <img src="${imgMap[D.logo] ? imgMap[D.logo].w192 : '/' + D.logo}" width="64" height="64" alt="Logo ${esc(D.brandName)}" loading="lazy">
        <span class="brand-name">${esc(D.brandName)}</span>
      </a>
      <p>Toko online perlengkapan &amp; aksesori sugar glider dari ${esc(D.city)}. ${esc(D.slogan)}</p>
      <div class="social">
        ${Object.entries(D.social).map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener me" aria-label="${D.brandName} di ${SOCIAL_LABEL[k] || k}">${SOCIAL_ICON[k] || k}</a>`).join('\n        ')}
      </div>
    </div>
    <div>
      <h2 class="footer-title">Kategori</h2>
      <ul>${categories.map(c => `<li><a href="/kategori/${c.slug}/">${esc(c.title)}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="footer-title">Belanja</h2>
      <ul>
        <li><a href="/#katalog">Semua Produk</a></li>
        <li><a href="/#cara-pesan">Cara Pesan</a></li>
        <li><a href="/#faq">FAQ &amp; Pengiriman</a></li>
        <li><a href="/#tentang">Tentang ${esc(D.brandName)}</a></li>
      </ul>
    </div>${GUIDES.length ? `
    <div>
      <h2 class="footer-title">Panduan</h2>
      <ul>${GUIDES.map(g => `<li><a href="/panduan/${g.slug}/">${esc(g.metaTitle.replace(/\s*[(:–].*$/, ''))}</a></li>`).join('')}</ul>
    </div>` : ''}
    <div>
      <h2 class="footer-title">Hubungi Kami</h2>
      <ul>
        <li><a href="${waLink(`Hai ${D.brandName}!`)}" data-wa="Hai ${esc(D.brandName)}!" data-track="footer" target="_blank" rel="noopener">WhatsApp: +${D.whatsappNumber.replace(/^62/, '62 ')}</a></li>
        <li>${esc(D.city)}, ${esc(D.region)}</li>
        <li>Kirim ke seluruh Indonesia</li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">© ${new Date().getFullYear()} ${esc(D.brandName)} · ${esc(D.slogan)}</div>
</footer>`;
}

function tail({ floatingWa = true, waMsg } = {}) {
    const msg = waMsg || `Hai ${D.brandName}! Saya butuh bantuan memilih produk.`;
    return `${floatingWa ? `
<a class="wa-float" href="${waLink(msg)}" data-wa="${esc(msg)}" data-track="floating" target="_blank" rel="noopener" aria-label="Chat WhatsApp">${ICON.wa}<span>Tanya admin</span></a>` : ''}
<script>window.CC_WA=${JSON.stringify(D.whatsappNumber)};</script>
<script src="/script.js?v=${ASSET_VERSION}" defer></script>
</body>
</html>
`;
}

/* ---------------------------------------------------------- components */
function productCard(p, { priority = false } = {}) {
    const cover = p.images[0];
    const badge = p.soldOut ? '<span class="badge badge-soldout">Stok habis</span>'
        : p.bestSeller ? '<span class="badge badge-best">Best Seller</span>' : '';
    const swatches = p.variants.length > 1
        ? `<div class="swatches" aria-label="${p.variants.length} pilihan warna">${p.variants.slice(0, 5).map(v => `<span style="background:${COLOR_HEX[v] || '#E2E8F0'}" title="${esc(v)}"></span>`).join('')}<small>${p.variants.length} warna</small></div>` : '';
    return `<article class="card${p.soldOut ? ' is-soldout' : ''}" data-cat="${esc(p.category)}" data-name="${esc(p.name.toLowerCase())}" data-text="${esc(plain(p.description).toLowerCase().slice(0, 400))}" data-price="${p.price}" data-best="${p.bestSeller ? 1 : 0}" data-sold="${p.soldOut ? 1 : 0}" data-order="${p.index}">
  <a href="${p.url}" class="card-media" aria-label="${esc(p.name)}">
    ${img(cover.src, { alt: `${p.name} — ${p.cat.label} ${D.brandName}`, sizes: '(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 270px', lazy: !priority, priority })}
    ${badge}
  </a>
  <div class="card-body">
    <h3 class="card-title"><a href="${p.url}">${esc(p.name)}</a></h3>
    <div class="card-foot">
      <span class="price${p.price ? '' : ' price-ask'}">${esc(p.priceText)}</span>
      ${swatches}
    </div>
  </div>
</article>`;
}

function breadcrumbs(items) {
    return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${items.map((it, i) => i < items.length - 1
        ? `<li><a href="${it.url}">${esc(it.name)}</a></li>`
        : `<li aria-current="page">${esc(it.name)}</li>`).join('')}</ol></nav>`;
}
function breadcrumbLd(items) {
    return { '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE + it.url })) };
}

function trustRow() {
    return `<ul class="trust">
  <li><span class="trust-ic">${ICON.box}</span><div><strong>Dicek sebelum dikirim</strong><span>Setiap pesanan diperiksa dan dikemas rapi.</span></div></li>
  <li><span class="trust-ic">${ICON.truck}</span><div><strong>Seluruh Indonesia</strong><span>Antar di ${esc(D.city)}, JNE &amp; J&amp;T ke luar kota.</span></div></li>
  <li><span class="trust-ic">${ICON.chat}</span><div><strong>Konsultasi gratis</strong><span>Tanya ukuran &amp; kecocokan sebelum beli.</span></div></li>
  <li><span class="trust-ic">${ICON.check}</span><div><strong>Dibantu jika bermasalah</strong><span>Cukup sertakan video unboxing.</span></div></li>
</ul>`;
}
const sectionHead = (label, title, id, extra = '') =>
    `<div class="section-head${extra ? ' row' : ''}"><div><p class="eyebrow">${label}</p><h2 id="${id}">${title}</h2></div>${extra}</div>`;

const ORG_ID = SITE + '/#organization';
const orgLd = {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': ORG_ID,
    name: D.brandName, alternateName: D.alternateNames, url: SITE + '/',
    logo: { '@type': 'ImageObject', url: abs(D.logo), width: 500, height: 500 },
    image: abs(D.logo),
    description: `${D.brandName} adalah toko online perlengkapan dan aksesori sugar glider dari ${D.city}: pet cargo, tas travel, mangkuk makan, botol minum, spet, mainan, dan perlengkapan kandang. Kirim ke seluruh Indonesia.`,
    slogan: D.slogan,
    address: { '@type': 'PostalAddress', addressLocality: D.city, addressRegion: D.region, addressCountry: 'ID' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    contactPoint: { '@type': 'ContactPoint', telephone: '+' + D.whatsappNumber, contactType: 'customer service', availableLanguage: ['Indonesian'] },
    sameAs: Object.values(D.social)
};

/* ---------------------------------------------------------- pages */
function buildHome() {
    const sorted = sortDefault(products);
    const best = sorted.filter(p => p.bestSeller && !p.soldOut).slice(0, 8);
    const hero = imgMap[D.heroImage];
    const minPrice = Math.min(...products.filter(p => p.price > 0).map(p => p.price));

    const jsonld = [
        orgLd,
        { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: D.brandName,
          alternateName: D.alternateNames, inLanguage: 'id-ID', publisher: { '@id': ORG_ID } },
        { '@context': 'https://schema.org', '@type': 'ItemList', name: `Katalog ${D.brandName}`,
          itemListElement: sorted.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + p.url, name: p.name })) },
        { '@context': 'https://schema.org', '@type': 'FAQPage',
          mainEntity: D.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ];

    const testimonials = (D.testimonials || []).map(t => {
        const imgs = Array.isArray(t.image) ? t.image : (t.image ? [t.image] : []);
        const initials = String(t.name || 'P').replace(/^kak\s+/i, '').slice(0, 1).toUpperCase();
        const gallery = imgs.map(s => imgMap[s] ? imgMap[s].w1000 : '/' + s);
        return `<figure class="testi">
  ${imgs.length ? `<button type="button" class="testi-media" data-gallery="${esc(JSON.stringify(gallery))}" aria-label="Lihat ${imgs.length} foto testimoni ${esc(t.name)}">
    ${img(imgs[0], { alt: `Bukti chat testimoni ${t.name}`, small: 'w480', large: 'w1000', sizes: '(max-width: 640px) 80vw, 380px' })}
    <span class="testi-zoom">${ICON.search}${imgs.length > 1 ? `${imgs.length} foto` : 'Lihat'}</span>
  </button>` : ''}
  <div class="testi-body">
    <div class="stars" aria-label="5 dari 5">${ICON.star.repeat(5)}</div>
    ${t.text ? `<blockquote>${esc(t.text)}</blockquote>` : ''}
    <figcaption><span class="avatar">${esc(initials)}</span><span><strong>${esc(t.name)}</strong>${t.product ? `<small>${esc(t.product)}</small>` : ''}</span><span class="verified">${ICON.check}Pembeli</span></figcaption>
  </div>
</figure>`;
    }).join('\n');

    const html = head({
        title: `${D.brandName} — Toko Perlengkapan Sugar Glider ${D.city}`,
        description: metaDesc(`${D.brandName}: pet cargo, tas travel, mangkuk keramik, spet & mainan sugar glider mulai ${rupiah(minPrice)}.`, ` Gratis ongkir area ${D.city}, kirim se-Indonesia.`),
        canonical: SITE + '/',
        ogImage: SITE + hero.og,
        jsonld,
        preloadImg: `<link rel="preload" as="image" href="${hero.w800}" imagesrcset="${hero.w800} 800w, ${hero.w1400} 1400w" imagesizes="(max-width: 900px) 100vw, 640px" fetchpriority="high">\n`
    }) + `
<body class="page-home">
${header()}
<main>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="pill"><span class="pulse" aria-hidden="true"></span>Dikirim dari ${esc(D.city)} ke seluruh Indonesia</p>
        <h1><span class="h1-brand">${esc(D.brandName)}</span>Perlengkapan sugar glider untuk si kecil yang <em>istimewa.</em></h1>
        <p class="hero-sub">Pet cargo, tas travel, mangkuk keramik, dan aksesori pilihan — aman, praktis, dan tampil cantik. Pesan langsung lewat WhatsApp.</p>
        <div class="hero-cta">
          <a href="#katalog" class="btn btn-dark btn-lg">Belanja sekarang ${ICON.arrow}</a>
          <a href="${waLink(`Hai ${D.brandName}! Saya butuh bantuan memilih produk.`)}" data-wa="Hai ${esc(D.brandName)}! Saya butuh bantuan memilih produk." data-track="hero" class="btn btn-outline btn-lg" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Tanya admin</a>
        </div>
        <ul class="hero-points">
          <li>${ICON.box}<span>Dicek sebelum dikirim</span></li>
          <li>${ICON.truck}<span>JNE &amp; J&amp;T Express</span></li>
          <li>${ICON.chat}<span>Konsultasi gratis</span></li>
        </ul>
      </div>
      <div class="hero-visual">
        <div class="hero-img" style="background-image:url('${hero.og}')">
          <img src="${hero.w800}" srcset="${hero.w800} 800w, ${hero.w1400} 1400w" sizes="(max-width: 900px) 100vw, 640px" width="${hero.dispW}" height="${hero.dispH}" alt="Koleksi perlengkapan sugar glider ${esc(D.brandName)}: pet cargo, mangkuk keramik, dan travel carrier" fetchpriority="high" decoding="async">
        </div>
        ${best[0] ? `<a class="hero-chip" href="${best[0].url}">${img(best[0].images[0].src, { alt: '', small: 'w400', large: 'w400', sizes: '56px' })}<span><small>Best Seller</small><strong>${esc(best[0].name)}</strong><em>${esc(best[0].priceText)}</em></span>${ICON.arrow}</a>` : ''}
      </div>
    </div>
  </section>

  <section class="section section-tight" aria-labelledby="best-title">
    <div class="container">
      ${sectionHead('Paling dicari', 'Best Seller', 'best-title', `<a href="#katalog" class="link-more">Lihat semua ${ICON.arrow}</a>`)}
      <div class="rail" tabindex="0" aria-label="Produk best seller">
        ${best.map((p, i) => productCard(p, { priority: i < 2 })).join('\n')}
      </div>
    </div>
  </section>

  <section class="section" id="kategori" aria-labelledby="cat-title">
    <div class="container">
      ${sectionHead('Koleksi', 'Belanja per <em>kategori</em>', 'cat-title')}
      <div class="cat-grid">
        ${categories.map(c => {
            const count = products.filter(p => p.category === c.key).length;
            return `<a class="cat-card" href="/kategori/${c.slug}/">
          ${c.image ? img(c.image, { alt: c.title, small: 'w480', large: 'w900', sizes: '(max-width: 640px) 50vw, 33vw' }) : ''}
          <span class="cat-go" aria-hidden="true">${ICON.arrow}</span>
          <span class="cat-info"><strong>${esc(c.label)}</strong><small>${count} produk</small></span>
        </a>`;
        }).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section section-alt" id="katalog" aria-labelledby="catalog-title">
    <div class="container">
      ${sectionHead('Katalog', `Semua produk ${esc(D.brandName)}`, 'catalog-title')}
      <div class="catalog-tools">
        <label class="search">${ICON.search}<input type="search" id="search" placeholder="Cari produk…" aria-label="Cari produk"></label>
        <select id="sort" aria-label="Urutkan produk">
          <option value="default">Terlaris</option>
          <option value="price-asc">Harga terendah</option>
          <option value="price-desc">Harga tertinggi</option>
          <option value="az">Nama A–Z</option>
        </select>
      </div>
      <div class="chips" role="tablist" aria-label="Filter kategori">
        <button class="chip is-active" data-filter="all" role="tab" aria-selected="true">Semua <span>${products.length}</span></button>
        ${categories.map(c => `<button class="chip" data-filter="${esc(c.key)}" role="tab" aria-selected="false">${esc(c.label)} <span>${products.filter(p => p.category === c.key).length}</span></button>`).join('\n        ')}
      </div>
      <p class="catalog-count" id="catalog-count" aria-live="polite">Menampilkan ${products.length} produk</p>
      <div class="grid" id="product-grid">
        ${sorted.map(p => productCard(p)).join('\n')}
      </div>
      <div class="empty" id="empty" hidden>
        <p>Produk yang kamu cari belum ada di katalog.</p>
        <a class="btn btn-dark" href="${waLink(`Hai ${D.brandName}! Saya cari produk yang tidak ada di katalog.`)}" data-wa="Hai ${esc(D.brandName)}! Saya cari produk yang tidak ada di katalog." data-track="empty_search" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Tanya admin</a>
      </div>
    </div>
  </section>

  <section class="section section-dark" aria-labelledby="why-title">
    <div class="container">
      ${sectionHead(`Kenapa ${esc(D.brandName)}`, 'Belanja tenang, <em>si kecil senang.</em>', 'why-title')}
      ${trustRow()}
    </div>
  </section>

  <section class="section" id="testimoni" aria-labelledby="testi-title"${testimonials ? '' : ' hidden'}>
    <div class="container">
      ${sectionHead('Testimoni', 'Kata para <em>pawparents</em>', 'testi-title')}
      <div class="rail rail-testi">${testimonials}</div>
    </div>
  </section>

  <section class="section section-alt" id="cara-pesan" aria-labelledby="how-title">
    <div class="container">
      ${sectionHead('Cara pesan', 'Empat langkah, <em>tanpa ribet.</em>', 'how-title')}
      <ol class="steps">
        <li><span>01</span><strong>Pilih produk</strong><p>Buka produk dan pilih warna favoritmu.</p></li>
        <li><span>02</span><strong>Chat WhatsApp</strong><p>Tekan tombol pesan — detail produk otomatis terisi.</p></li>
        <li><span>03</span><strong>Konfirmasi &amp; bayar</strong><p>Admin cek stok dan ongkir, lalu kirim instruksi bayar.</p></li>
        <li><span>04</span><strong>Paket dikirim</strong><p>Diantar di ${esc(D.city)} atau via JNE/J&amp;T lengkap dengan resi.</p></li>
      </ol>
      <div class="free-ship">
        <span class="trust-ic">${ICON.truck}</span>
        <div><strong>Gratis ongkir area ${esc(D.city)}</strong><p>${D.freeShippingAreas.map(esc).join(' · ')}. Area sekitar? Tanyakan ke admin.</p></div>
      </div>
    </div>
  </section>

  <section class="section" id="tentang" aria-labelledby="about-title">
    <div class="container about">
      <div class="about-logo"><img src="${imgMap[D.logo].w512}" width="240" height="240" alt="Logo ${esc(D.brandName)}" loading="lazy" decoding="async"></div>
      <div>
        <p class="eyebrow">Tentang kami</p>
        <h2 id="about-title">Tentang ${esc(D.brandName)}</h2>
        <p><strong>${esc(D.brandName)}</strong> (Chubby Cuddle) adalah toko online perlengkapan dan aksesori <strong>sugar glider</strong> dari ${esc(D.city)}, ${esc(D.region)}. Kami menyediakan pet cargo, tas travel, sling bag, mangkuk keramik bersekat, botol minum kandang, spet untuk memberi susu, mainan, dan perlengkapan kebersihan kandang — dipilih supaya aman, praktis, dan tetap cantik dipandang.</p>
        <p>Banyak produk kami juga cocok untuk hamster dan hewan kecil lainnya. Semua pesanan dilayani langsung oleh admin lewat WhatsApp, diantar di area ${esc(D.city)} atau dikirim ke seluruh Indonesia melalui JNE dan J&amp;T Express.</p>
        <p class="slogan">${esc(D.slogan)}</p>
      </div>
    </div>
  </section>

  ${GUIDES.length ? `<section class="section section-alt" id="panduan" aria-labelledby="guides-title">
    <div class="container">
      ${sectionHead('Panduan', 'Baru pelihara? <em>Mulai dari sini.</em>', 'guides-title', `<a class="link-more" href="/panduan/">Semua panduan ${ICON.arrow}</a>`)}
      <div class="guide-grid">${GUIDES.slice(0, 3).map(guideCard).join('\n')}</div>
    </div>
  </section>` : ''}

  <section class="section" id="faq" aria-labelledby="faq-title">
    <div class="container faq-wrap">
      ${sectionHead('FAQ', 'Pertanyaan yang <em>sering diajukan</em>', 'faq-title')}
      <div class="faq">
        ${D.faqs.map(f => `<details><summary>${esc(f.q)}</summary><div class="faq-a">${f.a}</div></details>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section section-tight">
    <div class="container">
      <div class="cta-card">
        <div><p class="eyebrow">Konsultasi gratis</p><h2>Bingung pilih yang pas untuk si kecil?</h2><p>Ceritakan kebutuhan sugar glider kamu — admin bantu rekomendasikan produk yang tepat.</p></div>
        <a class="btn btn-light btn-lg" href="${waLink(`Hai ${D.brandName}! Saya butuh rekomendasi produk untuk sugar glider saya.`)}" data-wa="Hai ${esc(D.brandName)}! Saya butuh rekomendasi produk untuk sugar glider saya." data-track="cta_bottom" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Chat via WhatsApp</a>
      </div>
    </div>
  </section>
</main>
${footer()}
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Foto testimoni" hidden><button type="button" class="lightbox-close" aria-label="Tutup">×</button><div class="lightbox-track" id="lightbox-track"></div><p class="lightbox-count" id="lightbox-count"></p></div>
${tail()}`;
    write('index.html', html);
}

function buildProduct(p) {
    const crumbs = [
        { name: 'Beranda', url: '/' },
        { name: p.cat.label, url: `/kategori/${p.cat.slug}/` },
        { name: p.name, url: p.url }
    ];
    const cover = imgMap[p.images[0].src];
    const orderMsg = v => p.soldOut
        ? `Hai ${D.brandName}! Kapan ${p.name}${v ? ' warna ' + v : ''} restock?`
        : `Hai ${D.brandName}! Saya mau pesan ${p.name}${v ? ' warna ' + v : ''}${p.price ? ' (' + p.priceText + ')' : ''}. Apakah stok masih ready?`;
    const desc = firstSentence(p.description, 150);
    const related = sortDefault(products.filter(o => o !== p && !o.soldOut))
        .sort((a, b) => (b.category === p.category ? 1 : 0) - (a.category === p.category ? 1 : 0)).slice(0, 8);
    const paragraphs = String(p.description).replace(/\\\s/g, ' ').replace(DECOR_EMOJI, '').replace(/[ \t]+([.!])/g, '$1').replace(/\.{2,}/g, '.').replace(/([!?])\./g, '$1').split(/\n\s*\n/).map(par => par.trim()).filter(Boolean)
        .map(par => `<p>${esc(par).replace(/\n/g, '<br>')}</p>`).join('\n');

    const productLd = {
        '@context': 'https://schema.org', '@type': 'Product', '@id': SITE + p.url + '#product',
        name: p.name, sku: p.sku, url: SITE + p.url,
        image: p.images.map(im => imgMap[im.src] ? SITE + imgMap[im.src].w800 : abs(im.src)),
        description: plain(p.description).slice(0, 500),
        category: p.cat.title || p.cat.label,
        brand: { '@type': 'Brand', name: D.brandName },
        ...(p.variants.length ? { color: p.variants.join(', ') } : {}),
        ...(p.price > 0 ? { offers: {
            '@type': 'Offer', url: SITE + p.url, priceCurrency: 'IDR', price: String(p.price),
            availability: p.soldOut ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: { '@id': ORG_ID }
        } } : {})
    };

    const html = head({
        title: `${p.name}${p.price ? ' – ' + p.priceText : ''} | ${D.brandName}`,
        description: metaDesc(plain(p.description.split('\n')[0]).replace(DECOR_EMOJI, ''), ` ${p.price ? p.priceText + ' di' : 'Di'} ${D.brandName}.`),
        canonical: SITE + p.url,
        ogImage: SITE + (cover && cover.og ? cover.og : '/' + p.images[0].src),
        ogType: 'product',
        jsonld: [productLd, breadcrumbLd(crumbs)],
        extraHead: p.price > 0 ? `<meta property="product:price:amount" content="${p.price}">\n<meta property="product:price:currency" content="IDR">\n` : '',
        preloadImg: cover ? `<link rel="preload" as="image" href="${cover.w800}" imagesrcset="${cover.w400} 400w, ${cover.w800} 800w" imagesizes="(max-width: 900px) 100vw, 560px" fetchpriority="high">\n` : ''
    }) + `
<body class="page-product" data-product="${esc(p.name)}" data-category="${esc(p.category)}" data-value="${p.price}">
${header()}
<main class="container">
  ${breadcrumbs(crumbs)}
  <div class="pdp">
    <div class="gallery">
      <div class="gallery-track" id="gallery" tabindex="0" aria-label="Foto produk">
        ${p.images.map((im, k) => `<figure class="gallery-slide" data-variant="${esc(im.variant)}">${img(im.src, { alt: `${p.name}${im.variant ? ' warna ' + im.variant : ''} – ${D.brandName}`, sizes: '(max-width: 900px) 100vw, 560px', lazy: k > 0, priority: k === 0 })}</figure>`).join('\n        ')}
      </div>
      ${p.images.length > 1 ? `<div class="gallery-dots" id="gallery-dots">${p.images.map((_, k) => `<button type="button" aria-label="Foto ${k + 1}"${k === 0 ? ' class="is-active"' : ''}></button>`).join('')}</div>
      <div class="thumbs">${p.images.map((im, k) => `<button type="button" data-go="${k}" aria-label="Lihat foto ${k + 1}${im.variant ? ' ' + esc(im.variant) : ''}"${k === 0 ? ' class="is-active"' : ''}>${img(im.src, { alt: '', small: 'w400', large: 'w400', sizes: '72px' })}</button>`).join('')}</div>` : ''}
      ${p.soldOut ? '<span class="badge badge-soldout badge-lg">Stok habis</span>' : p.bestSeller ? '<span class="badge badge-best badge-lg">Best Seller</span>' : ''}
    </div>
    <div class="pdp-info">
      <a class="pdp-cat" href="/kategori/${p.cat.slug}/">${esc(p.cat.label)}</a>
      <h1>${esc(p.name)}</h1>
      <p class="pdp-price${p.price ? '' : ' price-ask'}">${esc(p.priceText)}</p>
      ${p.variants.length ? `<div class="variants">
        <p class="variants-label">Warna: <strong id="variant-name">${esc(p.variants[0])}</strong></p>
        <div class="variant-list">${p.images.map((im, k) => im.variant ? `<button type="button" class="variant${k === 0 ? ' is-active' : ''}" data-go="${k}" data-variant="${esc(im.variant)}"><span style="background:${COLOR_HEX[im.variant] || '#E2E8F0'}"></span>${esc(im.variant)}</button>` : '').join('')}</div>
      </div>` : ''}
      <div class="pdp-actions">
        <a class="btn btn-dark btn-lg btn-block" id="order-btn" href="${waLink(orderMsg(p.variants[0]))}" data-wa="${esc(orderMsg(p.variants[0]))}" data-wa-base="${esc(orderMsg('{v}'))}" data-track="pdp_order" data-product="${esc(p.name)}" data-value="${p.price}" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> ${p.soldOut ? 'Tanya restock via WhatsApp' : 'Pesan via WhatsApp'}</a>
        <a class="btn btn-outline btn-block" href="${waLink(`Hai ${D.brandName}! Saya mau tanya dulu soal ${p.name}.`)}" data-wa="Hai ${esc(D.brandName)}! Saya mau tanya dulu soal ${esc(p.name)}." data-track="pdp_ask" target="_blank" rel="noopener">Tanya dulu ke admin</a>
      </div>
      <ul class="pdp-perks">
        <li>${ICON.truck} Gratis ongkir area tertentu di ${esc(D.city)} · JNE/J&amp;T ke seluruh Indonesia</li>
        <li>${ICON.box} Produk dicek sebelum dikirim</li>
        <li>${ICON.check} Dibantu jika paket bermasalah (sertakan video unboxing)</li>
      </ul>
      <div class="pdp-desc">
        <h2>Deskripsi Produk</h2>
        ${paragraphs}
      </div>
    </div>
  </div>

  ${related.length ? `<section class="section section-tight" aria-labelledby="rel-title">
    ${sectionHead('Rekomendasi', 'Mungkin kamu <em>juga suka</em>', 'rel-title', `<a class="link-more" href="/kategori/${p.cat.slug}/">${esc(p.cat.label)} ${ICON.arrow}</a>`)}
    <div class="rail">${related.map(o => productCard(o)).join('\n')}</div>
  </section>` : ''}
  ${(() => { const gs = guidesForProduct(p).slice(0, 3); return gs.length ? `<section class="section section-tight" aria-labelledby="guide-title">
    ${sectionHead('Panduan', 'Tips &amp; <em>cara pakai</em>', 'guide-title')}
    <div class="guide-grid">${gs.map(guideCard).join('\n')}</div>
  </section>` : ''; })()}
</main>
<div class="buybar">
  <div><small>${esc(p.name)}</small><strong class="${p.price ? '' : 'price-ask'}">${esc(p.priceText)}</strong></div>
  <a class="btn btn-dark" id="buybar-btn" href="${waLink(orderMsg(p.variants[0]))}" data-wa="${esc(orderMsg(p.variants[0]))}" data-wa-base="${esc(orderMsg('{v}'))}" data-track="buybar_order" data-product="${esc(p.name)}" data-value="${p.price}" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> ${p.soldOut ? 'Tanya restock' : 'Pesan sekarang'}</a>
</div>
${footer()}
${tail({ floatingWa: false })}`;
    write(`produk/${p.slug}/index.html`, html);
}

function buildCategory(c) {
    const list = sortDefault(products.filter(p => p.category === c.key));
    const url = `/kategori/${c.slug}/`;
    const crumbs = [{ name: 'Beranda', url: '/' }, { name: c.label, url }];
    const ci = c.image ? imgMap[c.image] : null;
    const html = head({
        title: `${c.title} | ${D.brandName}`,
        description: metaDesc(c.intro, ` ${list.length} produk di ${D.brandName}.`),
        canonical: SITE + url,
        ogImage: SITE + (ci && ci.og ? ci.og : imgMap[D.heroImage].og),
        jsonld: [
            { '@context': 'https://schema.org', '@type': 'CollectionPage', name: c.title, url: SITE + url, description: c.intro,
              isPartOf: { '@id': SITE + '/#website' },
              mainEntity: { '@type': 'ItemList', itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + p.url, name: p.name })) } },
            breadcrumbLd(crumbs)
        ]
    }) + `
<body class="page-category">
${header('kategori')}
<main>
  <section class="cat-hero">
    <div class="container">
      ${breadcrumbs(crumbs)}
      <p class="eyebrow">Kategori</p>
      <h1>${esc(c.title)}</h1>
      <p>${esc(c.intro)}</p>
      <div class="chips chips-links">
        ${categories.map(o => `<a class="chip${o === c ? ' is-active' : ''}" href="/kategori/${o.slug}/"${o === c ? ' aria-current="page"' : ''}>${esc(o.label)}</a>`).join('\n        ')}
      </div>
    </div>
  </section>
  <section class="section section-tight">
    <div class="container">
      <p class="catalog-count">${list.length} produk</p>
      <div class="grid">${list.map((p, i) => productCard(p, { priority: i < 2 })).join('\n')}</div>
    </div>
  </section>
  ${(() => { const gs = GUIDES.filter(g => guideProducts(g).some(p => p.category === c.key)).slice(0, 3); return gs.length ? `<section class="section section-tight section-alt" aria-labelledby="guide-title">
    <div class="container">
      ${sectionHead('Panduan', 'Sebelum <em>membeli</em>', 'guide-title', `<a class="link-more" href="/panduan/">Semua panduan ${ICON.arrow}</a>`)}
      <div class="guide-grid">${gs.map(guideCard).join('\n')}</div>
    </div>
  </section>` : ''; })()}
  <section class="section section-tight"><div class="container">${trustRow()}</div></section>
</main>
${footer()}
${tail({ waMsg: `Hai ${D.brandName}! Saya mau tanya produk ${c.label}.` })}`;
    write(`kategori/${c.slug}/index.html`, html);
}

/* ---------------------------------------------------------- panduan (artikel SEO) */
const productBySlug = Object.fromEntries(products.map(p => [p.slug, p]));
const guideBySlug = Object.fromEntries(GUIDES.map(g => [g.slug, g]));
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tglIndo = s => { const [y, m, d] = String(s).split('-').map(Number); return `${d} ${BULAN[m - 1]} ${y}`; };

function linkify(html, where) {
    return String(html).replace(/\[\[(produk|kategori|panduan|landing):([^|\]]+)\|([^\]]+)\]\]/g, (_, type, target, text) => {
        let href = '';
        if (type === 'produk') { if (!productBySlug[target]) throw new Error(`${where}: produk "${target}" tidak ada`); href = productBySlug[target].url; }
        if (type === 'kategori') { if (!categories.some(c => c.slug === target)) throw new Error(`${where}: kategori "${target}" tidak ada`); href = `/kategori/${target}/`; }
        if (type === 'panduan') { if (!guideBySlug[target]) throw new Error(`${where}: panduan "${target}" tidak ada`); href = `/panduan/${target}/`; }
        if (type === 'landing') href = target;
        return `<a href="${href}">${text}</a>`;
    });
}
const guideProducts = g => [...new Set([...(g.sections || []).flatMap(s => s.products || []), ...(g.budget || []).map(b => b.slug)])]
    .map(s => { if (!productBySlug[s]) throw new Error(`panduan ${g.slug}: produk "${s}" tidak ada`); return productBySlug[s]; });
const readMinutes = g => Math.max(2, Math.round(plain([g.intro, ...(g.sections || []).map(s => s.html)].join(' ')).split(/\s+/).length / 200));
const guidesForProduct = p => GUIDES.filter(g => guideProducts(g).includes(p));

function guideCard(g) {
    return `<a class="guide-card" href="/panduan/${g.slug}/">
  <span class="guide-media">${g.image ? img(g.image, { alt: g.title, small: 'w480', large: 'w1000', sizes: '(max-width: 640px) 85vw, 380px' }) : ''}</span>
  <span class="guide-body"><small>${readMinutes(g)} menit baca</small><strong>${esc(g.title)}</strong><span class="guide-more">Baca panduan ${ICON.arrow}</span></span>
</a>`;
}

function buildGuide(g) {
    const url = `/panduan/${g.slug}/`;
    const crumbs = [{ name: 'Beranda', url: '/' }, { name: 'Panduan', url: '/panduan/' }, { name: g.metaTitle.replace(/\s*[(:–].*$/, ''), url }];
    const cover = g.image ? imgMap[g.image] : null;
    const sections = g.sections || [];
    const ids = sections.map(s => slugify(s.h2.replace(/^\d+\.\s*/, '')));
    const budgetItems = (g.budget || []).map(b => ({ ...b, p: productBySlug[b.slug] })).filter(b => b.p && b.p.price);
    const budgetTotal = budgetItems.reduce((n, b) => n + b.p.price, 0);
    const budgetMsg = `Hai ${D.brandName}! Saya mau pesan paket perlengkapan awal:\n${budgetItems.map(b => `- ${b.p.name} (${b.p.priceText})`).join('\n')}\nTotal ${rupiah(budgetTotal)}. Apakah semua ready?`;
    const others = GUIDES.filter(o => o !== g).slice(0, 3);
    const toc = [...sections.map((s, i) => [ids[i], s.h2]), ...(budgetItems.length ? [['estimasi-budget', 'Estimasi budget']] : []), ...((g.faqs || []).length ? [['faq', 'Pertanyaan umum']] : [])];

    const html = head({
        title: `${g.metaTitle} | ${D.brandName}`.length <= 70 ? `${g.metaTitle} | ${D.brandName}` : g.metaTitle,
        description: metaDesc(g.description),
        canonical: SITE + url,
        ogImage: SITE + (cover && cover.og ? cover.og : imgMap[D.heroImage].og),
        ogType: 'article',
        jsonld: [
            { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description,
              image: cover ? [SITE + (cover.og || cover.w1000)] : undefined,
              datePublished: g.published, dateModified: g.updated || g.published, inLanguage: 'id-ID',
              author: { '@type': 'Organization', name: D.brandName, url: SITE + '/' }, publisher: { '@id': ORG_ID },
              mainEntityOfPage: SITE + url, about: g.keyword },
            ...((g.faqs || []).length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage',
              mainEntity: g.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : []),
            breadcrumbLd(crumbs)
        ]
    }) + `
<body class="page-guide">
${header('panduan')}
<main>
  <article>
    <header class="guide-hero">
      <div class="container guide-narrow">
        ${breadcrumbs(crumbs)}
        <p class="eyebrow">Panduan</p>
        <h1>${esc(g.title)}</h1>
        <p class="guide-lead">${esc(g.intro)}</p>
        <p class="guide-meta"><span>Oleh Tim ${esc(D.brandName)}</span><span>Diperbarui ${tglIndo(g.updated || g.published)}</span><span>${readMinutes(g)} menit baca</span></p>
      </div>
      ${cover ? `<div class="container guide-cover">${img(g.image, { alt: g.title, small: 'w480', large: 'w1000', sizes: '(max-width: 960px) 100vw, 1000px', lazy: false, priority: true })}</div>` : ''}
    </header>

    <div class="container guide-layout">
      <aside class="toc" aria-label="Daftar isi">
        <details open><summary>Daftar isi</summary>
          <ol>${toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}</ol>
        </details>
      </aside>
      <div class="prose">
        ${sections.map((s, i) => {
            const prods = (s.products || []).map(slug => productBySlug[slug]).filter(Boolean);
            return `<section id="${ids[i]}">
          <h2>${esc(s.h2)}</h2>
          ${linkify(s.html, `panduan ${g.slug}`)}
          ${prods.length ? `<div class="inline-products"><p class="inline-label">Produk terkait</p><div class="rail rail-sm">${prods.map(p => productCard(p)).join('\n')}</div></div>` : ''}
        </section>`;
        }).join('\n        ')}

        ${budgetItems.length ? `<section id="estimasi-budget">
          <h2>Estimasi budget perlengkapan awal</h2>
          <p>Perkiraan biaya perlengkapan dasar (di luar kandang dan makanan) berdasarkan harga di ${esc(D.brandName)} saat artikel ini diperbarui:</p>
          <div class="budget">
            <table>
              <thead><tr><th>Perlengkapan</th><th>Harga</th></tr></thead>
              <tbody>${budgetItems.map(b => `<tr><td><a href="${b.p.url}">${esc(b.p.name)}</a><small>${esc(b.note || '')}</small></td><td>${esc(b.p.priceText)}</td></tr>`).join('')}</tbody>
              <tfoot><tr><td>Total</td><td>${rupiah(budgetTotal)}</td></tr></tfoot>
            </table>
            <a class="btn btn-dark btn-lg btn-block" href="${waLink(budgetMsg)}" data-wa="${esc(budgetMsg)}" data-track="guide_bundle" data-product="Paket ${esc(g.keyword)}" data-value="${budgetTotal}" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Pesan paket ini via WhatsApp</a>
            <p class="budget-note">Harga dapat berubah sewaktu-waktu. Admin akan mengonfirmasi stok dan ongkir sebelum pembayaran.</p>
          </div>
        </section>` : ''}

        ${(g.faqs || []).length ? `<section id="faq">
          <h2>Pertanyaan umum</h2>
          <div class="faq">${g.faqs.map(f => `<details><summary>${esc(f.q)}</summary><div class="faq-a"><p>${esc(f.a)}</p></div></details>`).join('')}</div>
        </section>` : ''}

        <p class="disclaimer">Artikel ini bersifat informasi umum. Untuk kondisi kesehatan, pengobatan, atau kebutuhan nutrisi khusus, selalu konsultasikan dengan dokter hewan eksotik.</p>
      </div>
    </div>
  </article>

  <section class="section section-tight">
    <div class="container">
      <div class="cta-card">
        <div><p class="eyebrow">Butuh bantuan memilih?</p><h2>Tanya admin, gratis.</h2><p>Ceritakan kebutuhan si kecil — kami bantu rekomendasikan perlengkapan yang pas.</p></div>
        <a class="btn btn-light btn-lg" href="${waLink(`Hai ${D.brandName}! Saya baru baca panduan "${g.metaTitle}" dan mau tanya produk.`)}" data-wa="Hai ${esc(D.brandName)}! Saya baru baca panduan &quot;${esc(g.metaTitle)}&quot; dan mau tanya produk." data-track="guide_cta" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Chat via WhatsApp</a>
      </div>
    </div>
  </section>

  ${others.length ? `<section class="section section-alt section-tight" aria-labelledby="more-guides">
    <div class="container">
      ${sectionHead('Baca juga', 'Panduan <em>lainnya</em>', 'more-guides', `<a class="link-more" href="/panduan/">Semua panduan ${ICON.arrow}</a>`)}
      <div class="guide-grid">${others.map(guideCard).join('\n')}</div>
    </div>
  </section>` : ''}
</main>
${footer()}
${tail({ waMsg: `Hai ${D.brandName}! Saya mau tanya soal ${g.keyword}.` })}`;
    write(`panduan/${g.slug}/index.html`, html);
}

function buildGuideIndex() {
    if (!GUIDES.length) return;
    const url = '/panduan/';
    const crumbs = [{ name: 'Beranda', url: '/' }, { name: 'Panduan', url }];
    const html = head({
        title: `Panduan Merawat Sugar Glider & Hewan Kecil | ${D.brandName}`,
        description: metaDesc(`Kumpulan panduan dari ${D.brandName}: perlengkapan sugar glider untuk pemula, cara merawat, makanan, cara memberi susu, memilih pet cargo, dan perlengkapan hamster.`),
        canonical: SITE + url,
        ogImage: SITE + imgMap[D.heroImage].og,
        jsonld: [
            { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Panduan ' + D.brandName, url: SITE + url,
              isPartOf: { '@id': SITE + '/#website' },
              mainEntity: { '@type': 'ItemList', itemListElement: GUIDES.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/panduan/${g.slug}/`, name: g.title })) } },
            breadcrumbLd(crumbs)
        ]
    }) + `
<body class="page-category">
${header('panduan')}
<main>
  <section class="cat-hero">
    <div class="container">
      ${breadcrumbs(crumbs)}
      <p class="eyebrow">Panduan</p>
      <h1>Panduan merawat <em>sugar glider</em> &amp; hewan kecil</h1>
      <p>Tips praktis dari tim ${esc(D.brandName)} — dari perlengkapan untuk pemula, makanan, cara memberi susu, sampai memilih pet cargo yang aman.</p>
    </div>
  </section>
  <section class="section section-tight">
    <div class="container"><div class="guide-grid">${GUIDES.map(guideCard).join('\n')}</div></div>
  </section>
</main>
${footer()}
${tail()}`;
    write('panduan/index.html', html);
}

function build404() {
    const html = head({
        title: `Halaman tidak ditemukan | ${D.brandName}`,
        description: `Halaman yang kamu cari tidak ada. Lihat katalog perlengkapan sugar glider ${D.brandName}.`,
        canonical: SITE + '/404.html',
        ogImage: SITE + imgMap[D.heroImage].og
    }).replace('index, follow, max-image-preview:large', 'noindex') + `
<body>
${header()}
<main class="container notfound">
  <img src="${imgMap[D.logo].w192}" width="120" height="120" alt="">
  <h1>Ups, halaman tidak ditemukan</h1>
  <p>Mungkin produknya sudah pindah alamat. Yuk lihat katalog terbaru kami.</p>
  <div class="hero-cta"><a class="btn btn-dark btn-lg" href="/#katalog">Lihat katalog</a>
  <a class="btn btn-outline btn-lg" href="${waLink(`Hai ${D.brandName}!`)}" data-wa="Hai ${esc(D.brandName)}!" data-track="404" target="_blank" rel="noopener"><span class="wa-glyph">${ICON.wa}</span> Tanya admin</a></div>
</main>
${footer()}
${tail()}`;
    write('404.html', html);
}

function buildSitemap() {
    const urls = ['/', ...categories.map(c => `/kategori/${c.slug}/`), ...(GUIDES.length ? ['/panduan/', ...GUIDES.map(g => `/panduan/${g.slug}/`)] : []), ...sortDefault(products).map(p => p.url)];
    // landing page lain di repo (folder berisi index.html, mis. /spet-mini-brush/)
    fs.readdirSync(ROOT, { withFileTypes: true })
        .filter(d => d.isDirectory() && !['produk', 'kategori', 'panduan', 'assets', 'node_modules', '.git', '.github'].includes(d.name) && !d.name.startsWith('.'))
        .filter(d => fs.existsSync(path.join(ROOT, d.name, 'index.html')))
        .forEach(d => urls.push(`/${d.name}/`));
    const imgsFor = u => {
        const p = products.find(x => x.url === u);
        if (!p) return '';
        return p.images.map(im => imgMap[im.src] ? `\n    <image:image><image:loc>${SITE}${imgMap[im.src].w800}</image:loc></image:image>` : '').join('');
    };
    write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(u => `  <url>\n    <loc>${SITE}${u}</loc>${imgsFor(u)}\n  </url>`).join('\n')}
</urlset>
`);
    write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
}

/* ---------------------------------------------------------- feed produk
 * feed.xml = format RSS 2.0 + namespace g: (Google Merchant Center).
 * Format yang sama juga diterima Meta Commerce Manager (katalog iklan FB/IG).
 * - Produk tanpa harga ("Tanya Admin") tidak dimasukkan (Google wajib ada harga).
 * - Produk dengan beberapa warna -> 1 item per warna, dikelompokkan dengan item_group_id.
 */
const GOOGLE_CATEGORY = 'Animals & Pet Supplies > Pet Supplies > Small Animal Supplies';
function buildFeed() {
    const x = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
    const imgUrl = src => SITE + '/' + String(src).replace(/^\//, '').split('/').map(encodeURIComponent).join('/');
    const descOf = p => plain(String(p.description).replace(/\\\s/g, ' ').replace(DECOR_EMOJI, '')).replace(/\s+/g, ' ').trim().slice(0, 4900);
    const items = [];
    for (const p of sortDefault(products)) {
        if (!p.price) continue;
        const base = {
            title: p.name, description: descOf(p), product_type: `Sugar Glider & Hewan Kecil > ${p.cat.label}`,
            price: `${p.price}.00 IDR`, availability: p.soldOut ? 'out_of_stock' : 'in_stock',
            brand: D.brandName, mpn: p.sku
        };
        const variants = p.images.filter(im => im.variant);
        if (variants.length > 1) {
            variants.forEach(v => items.push({
                ...base, id: `${p.sku}-${slugify(v.variant)}`.toUpperCase(), item_group_id: p.sku,
                title: `${p.name} - ${v.variant}`, color: v.variant,
                link: `${SITE}${p.url}?warna=${encodeURIComponent(v.variant)}`,
                image: imgUrl(v.src), extra: p.images.filter(o => o !== v).slice(0, 10).map(o => imgUrl(o.src))
            }));
        } else {
            items.push({ ...base, id: p.sku, link: SITE + p.url, image: imgUrl(p.images[0].src),
                extra: p.images.slice(1, 11).map(o => imgUrl(o.src)), color: variants[0] ? variants[0].variant : '' });
        }
    }
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
<title>${x(D.brandName)} — Katalog Produk</title>
<link>${SITE}/</link>
<description>${x(`Perlengkapan sugar glider & hewan kecil dari ${D.brandName}, ${D.city}.`)}</description>
${items.map(i => `<item>
  <g:id>${x(i.id)}</g:id>
  <g:title>${x(i.title)}</g:title>
  <g:description>${x(i.description)}</g:description>
  <g:link>${x(i.link)}</g:link>
  <g:image_link>${x(i.image)}</g:image_link>
${i.extra.map(e => `  <g:additional_image_link>${x(e)}</g:additional_image_link>\n`).join('')}  <g:availability>${i.availability}</g:availability>
  <g:price>${i.price}</g:price>
  <g:condition>new</g:condition>
  <g:brand>${x(i.brand)}</g:brand>
  <g:mpn>${x(i.mpn)}</g:mpn>
  <g:identifier_exists>no</g:identifier_exists>
  <g:google_product_category>${x(GOOGLE_CATEGORY)}</g:google_product_category>
  <g:product_type>${x(i.product_type)}</g:product_type>
${i.item_group_id ? `  <g:item_group_id>${x(i.item_group_id)}</g:item_group_id>\n` : ''}${i.color ? `  <g:color>${x(i.color)}</g:color>\n` : ''}</item>`).join('\n')}
</channel>
</rss>
`;
    write('feed.xml', xml);
    return items.length;
}

function cleanStale() {
    // hapus halaman produk/kategori yang sudah tidak ada di data.js
    for (const [dir, valid] of [['produk', products.map(p => p.slug)], ['kategori', categories.map(c => c.slug)], ['panduan', ['index.html', ...GUIDES.map(g => g.slug)]]]) {
        const d = path.join(ROOT, dir);
        if (!fs.existsSync(d)) continue;
        for (const e of fs.readdirSync(d)) if (!valid.includes(e)) fs.rmSync(path.join(d, e), { recursive: true, force: true });
    }
}

(async () => {
    await buildImages();
    console.log('• Membuat halaman…');
    cleanStale();
    buildHome();
    products.forEach(buildProduct);
    categories.forEach(buildCategory);
    GUIDES.forEach(buildGuide);
    buildGuideIndex();
    build404();
    buildSitemap();
    const feedCount = buildFeed();
    console.log(`✓ Selesai: 1 beranda, ${products.length} produk, ${categories.length} kategori, ${GUIDES.length} panduan, sitemap.xml, feed.xml (${feedCount} item)`);
})().catch(e => { console.error(e); process.exit(1); });
