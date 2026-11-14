/**
 * ChubbyCuddle — Single Product Landing Page Scripts
 */

(function () {
  "use strict";

  /**
   * ==========================================================
   * KONFIGURASI WHATSAPP RESMI CHUBBYCUDDLE
   * Ganti nomor placeholder di bawah ini dengan nomor resmi
   * format internasional tanpa '+' atau spasi (contoh: 6281234567890)
   * ==========================================================
   */
  const WHATSAPP_NUMBER = "6281510973338";
  const PRODUCT_NAME = "Spet Sugar Glider + Mini Brush Best Seller";

  function buildWhatsAppUrl(source) {
    const text =
      "Halo ChubbyCuddle, saya mau pesan " +
      PRODUCT_NAME +
      " (Rp 55.000). Boleh info total & ongkirnya ke alamat saya?";
    const encoded = encodeURIComponent(text);
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encoded;
  }

  // 1. Pasang link WhatsApp ke seluruh tombol CTA konversi
  function initWhatsAppLinks() {
    const waButtons = document.querySelectorAll(".js-wa-link");
    waButtons.forEach(function (btn) {
      const source = btn.getAttribute("data-wa-source") || "Landing Page";
      btn.setAttribute("href", buildWhatsAppUrl(source));
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    });
  }

  // 2. Efek bayangan header saat halaman di-scroll
  function initStickyHeaderShadow() {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 3. Accordion FAQ yang aksesibel (hanya 1 panel terbuka atau bebas buka-tutup)
  function initFaqAccordion() {
    const triggers = document.querySelectorAll(".faq-trigger");
    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);
        const parentItem = trigger.closest(".faq-item");

        // Tutup FAQ lain agar tampilan tetap rapi
        triggers.forEach(function (otherTrigger) {
          if (otherTrigger !== trigger) {
            otherTrigger.setAttribute("aria-expanded", "false");
            const otherPanel = document.getElementById(
              otherTrigger.getAttribute("aria-controls")
            );
            if (otherPanel) otherPanel.hidden = true;
            const otherItem = otherTrigger.closest(".faq-item");
            if (otherItem) otherItem.classList.remove("is-open");
          }
        });

        // Toggle item yang diklik
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        if (panel) panel.hidden = isExpanded;
        if (parentItem) parentItem.classList.toggle("is-open", !isExpanded);
      });
    });
  }

  // 4. Lightbox Galeri Produk Asli
  function initGalleryLightbox() {
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.getElementById("lightboxClose");
    const triggers = document.querySelectorAll(".showcase-trigger");

    if (!lightbox || !lightboxImg || !lightboxCaption) return;

    let lastFocusedElement = null;

    function openLightbox(src, caption, altText) {
      lastFocusedElement = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = altText || caption;
      lightboxCaption.textContent = caption;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastFocusedElement) lastFocusedElement.focus();
    }

    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const img = btn.querySelector("img");
        // Jangan buka lightbox jika gambar masih placeholder (file belum diunggah)
        if (!img) return;
        const fullSrc = btn.getAttribute("data-full") || img.src;
        const caption = btn.getAttribute("data-caption") || img.alt;
        openLightbox(fullSrc, caption, img.alt);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close-lightbox")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
  }

  // 5. Fallback rapi jika foto produk asli belum dimasukkan ke folder assets/
  function initImageFallback() {
    const productImages = document.querySelectorAll(".product-img");
    productImages.forEach(function (img) {
      img.addEventListener("error", function () {
        const src = img.getAttribute("src") || "assets/foto-produk.jpg";
        const placeholder = document.createElement("div");
        placeholder.className = "img-placeholder-box";
        placeholder.innerHTML =
          "<strong>Slot Foto Produk Asli</strong><span>Letakkan file: " +
          src +
          "</span>";

        const parent = img.parentElement;
        img.replaceWith(placeholder);
        if (parent && parent.classList.contains("showcase-trigger")) {
          parent.style.cursor = "default";
        }
      });
    });
  }

  // 6. Tahun otomatis di footer
  function initFooterYear() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  // Jalankan seluruh modul setelah DOM siap
  document.addEventListener("DOMContentLoaded", function () {
    initWhatsAppLinks();
    initStickyHeaderShadow();
    initFaqAccordion();
    initGalleryLightbox();
    initImageFallback();
    initFooterYear();
  });
})();