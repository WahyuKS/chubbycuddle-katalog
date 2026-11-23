/**
 * ChubbyCuddle — interaksi halaman (filter katalog, galeri produk, link WhatsApp, Meta Pixel).
 * Konten produk TIDAK diatur di sini — edit data.js lalu jalankan `npm run build`.
 */
(function () {
    'use strict';
    var WA = window.CC_WA || '6281510973338';

    /* ---------- Meta Pixel ---------- */
    function track(name, params) {
        try { if (typeof fbq === 'function') fbq('track', name, params || {}); } catch (e) {}
    }

    /* ---------- Sumber iklan (disimpan selama sesi, ikut ke pesan WA) ---------- */
    function adSource() {
        var src = '';
        try {
            var p = new URLSearchParams(location.search);
            var s = p.get('utm_source') || (p.get('fbclid') ? 'facebook' : '') || (p.get('ttclid') ? 'tiktok' : '') || (p.get('gclid') ? 'google' : '');
            var c = p.get('utm_campaign');
            if (s) {
                src = s + (c ? '/' + c : '');
                try { sessionStorage.setItem('cc_src', src); } catch (e) {}
            } else {
                try { src = sessionStorage.getItem('cc_src') || ''; } catch (e) {}
            }
        } catch (e) {}
        return src;
    }
    var SRC = adSource();
    function waHref(msg) {
        var label = /^google_shopping/.test(SRC) ? 'Google Shopping' : 'iklan ' + SRC;
        var text = SRC ? msg + '\n\n(Info: dari ' + label + ')' : msg;
        return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text);
    }
    function refreshWaLinks(root) {
        (root || document).querySelectorAll('a[data-wa]').forEach(function (a) { a.href = waHref(a.getAttribute('data-wa')); });
    }
    if (SRC) refreshWaLinks();

    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href^="https://wa.me/"]');
        if (!a) return;
        var info = { content_name: a.getAttribute('data-product') || a.getAttribute('data-track') || 'whatsapp' };
        var v = parseInt(a.getAttribute('data-value') || '0', 10);
        if (v > 0) { info.value = v; info.currency = 'IDR'; }
        track('Lead', info);
        track('Contact', info);
    });

    /* ---------- Menu mobile ---------- */
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('main-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
        });
    }

    /* ---------- Katalog: filter, cari, urutkan ---------- */
    var grid = document.getElementById('product-grid');
    if (grid) {
        var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
        var search = document.getElementById('search');
        var sort = document.getElementById('sort');
        var chips = document.querySelectorAll('.chips [data-filter]');
        var countEl = document.getElementById('catalog-count');
        var empty = document.getElementById('empty');
        var state = { cat: 'all', q: '', sort: 'default' };

        var apply = function () {
            var q = state.q.trim().toLowerCase();
            var shown = 0;
            cards.forEach(function (c) {
                var ok = (state.cat === 'all' || c.dataset.cat === state.cat) &&
                    (!q || c.dataset.name.indexOf(q) > -1 || c.dataset.text.indexOf(q) > -1);
                c.hidden = !ok;
                if (ok) shown++;
            });
            var num = function (c, k) { return parseInt(c.dataset[k], 10) || 0; };
            var cmp = {
                'default': function (a, b) { return num(b, 'best') - num(a, 'best') || num(a, 'order') - num(b, 'order'); },
                'price-asc': function (a, b) { return (num(a, 'price') || 1e12) - (num(b, 'price') || 1e12); },
                'price-desc': function (a, b) { return num(b, 'price') - num(a, 'price'); },
                'az': function (a, b) { return a.dataset.name.localeCompare(b.dataset.name); }
            }[state.sort];
            cards.slice().sort(function (a, b) { return num(a, 'sold') - num(b, 'sold') || cmp(a, b); })
                .forEach(function (c) { grid.appendChild(c); });
            countEl.textContent = 'Menampilkan ' + shown + ' produk';
            empty.hidden = shown > 0;
        };

        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                chips.forEach(function (c) { c.classList.remove('is-active'); c.setAttribute('aria-selected', 'false'); });
                chip.classList.add('is-active');
                chip.setAttribute('aria-selected', 'true');
                state.cat = chip.getAttribute('data-filter');
                apply();
                chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
            });
        });
        var t;
        search.addEventListener('input', function () {
            clearTimeout(t);
            t = setTimeout(function () {
                state.q = search.value;
                apply();
                if (state.q.length > 2) track('Search', { search_string: state.q });
            }, 180);
        });
        sort.addEventListener('change', function () { state.sort = sort.value; apply(); });
    }

    /* ---------- Lightbox testimoni ---------- */
    var lb = document.getElementById('lightbox');
    if (lb) {
        var track = document.getElementById('lightbox-track');
        var counter = document.getElementById('lightbox-count');
        var total = 0;
        var close = function () { lb.hidden = true; track.innerHTML = ''; document.body.classList.remove('no-scroll'); };
        var updateCount = function () {
            if (total < 2) { counter.textContent = ''; return; }
            counter.textContent = (Math.round(track.scrollLeft / track.clientWidth) + 1) + ' / ' + total;
        };
        document.addEventListener('click', function (e) {
            var b = e.target.closest && e.target.closest('.testi-media');
            if (!b) return;
            var list = [];
            try { list = JSON.parse(b.getAttribute('data-gallery')) || []; } catch (err) {}
            total = list.length;
            track.innerHTML = list.map(function (src, i) {
                return '<figure><img src="' + src + '" alt="Foto testimoni ' + (i + 1) + '"></figure>';
            }).join('');
            lb.hidden = false;
            track.scrollLeft = 0;
            updateCount();
            document.body.classList.add('no-scroll');
        });
        track.addEventListener('scroll', updateCount, { passive: true });
        lb.addEventListener('click', function (e) { if (e.target.tagName !== 'IMG') close(); });
        document.addEventListener('keydown', function (e) {
            if (lb.hidden) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
            if (e.key === 'ArrowLeft') track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
        });
    }

    /* ---------- Animasi halus saat elemen masuk layar ---------- */
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        document.querySelectorAll('.section .section-head, .cat-card, .trust, .steps, .free-ship, .about, .cta-card, .testi')
            .forEach(function (el) {
                if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('reveal'); io.observe(el); }
            });
    }

    /* ---------- Halaman produk: galeri + pilihan warna ---------- */
    var gallery = document.getElementById('gallery');
    if (gallery) {
        var slides = gallery.querySelectorAll('.gallery-slide');
        var dots = document.querySelectorAll('#gallery-dots button');
        var thumbs = document.querySelectorAll('.thumbs [data-go]');
        var variants = document.querySelectorAll('.variant[data-go]');
        var variantName = document.getElementById('variant-name');
        var orderBtns = document.querySelectorAll('[data-wa-base]');

        var goTo = function (i) { gallery.scrollTo({ left: slides[i].offsetLeft - gallery.offsetLeft, behavior: 'smooth' }); };
        var setActive = function (i) {
            [dots, thumbs].forEach(function (list) {
                list.forEach(function (el, k) { el.classList.toggle('is-active', k === i); });
            });
            var v = slides[i] && slides[i].getAttribute('data-variant');
            if (v) {
                variants.forEach(function (el) { el.classList.toggle('is-active', el.getAttribute('data-variant') === v); });
                if (variantName) variantName.textContent = v;
                orderBtns.forEach(function (b) {
                    var msg = b.getAttribute('data-wa-base').replace('{v}', v);
                    b.setAttribute('data-wa', msg);
                    b.href = waHref(msg);
                });
            }
        };
        var raf;
        gallery.addEventListener('scroll', function () {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(function () {
                setActive(Math.round(gallery.scrollLeft / gallery.clientWidth));
            });
        }, { passive: true });
        dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
        document.querySelectorAll('[data-go]').forEach(function (b) {
            b.addEventListener('click', function () { goTo(parseInt(b.getAttribute('data-go'), 10)); });
        });

        // Pilih warna otomatis dari link (?warna=Hijau) — dipakai feed Google/Meta
        try {
            var want = (new URLSearchParams(location.search).get('warna') || '').toLowerCase();
            if (want) {
                for (var k = 0; k < slides.length; k++) {
                    if ((slides[k].getAttribute('data-variant') || '').toLowerCase() === want) {
                        var idx = k;
                        var jump = function () { gallery.scrollLeft = slides[idx].offsetLeft - gallery.offsetLeft; setActive(idx); };
                        jump();
                        window.addEventListener('load', jump);
                        break;
                    }
                }
            }
        } catch (e) {}

        var body = document.body;
        var value = parseInt(body.getAttribute('data-value') || '0', 10);
        track('ViewContent', {
            content_name: body.getAttribute('data-product'),
            content_category: body.getAttribute('data-category'),
            content_type: 'product',
            value: value,
            currency: 'IDR'
        });
    }
})();
