/** 
         * ==========================================
         * 1. KONFIGURASI UTAMA (SILAKAN DIUBAH)
         * ==========================================
         */
        const config = {
            brandName: "ChubbyCuddle",
            tagline: "Segala Kebutuhan Sugar Glider Anda",
            logoUrl: "assets/logo.jpg", // Ganti dengan URL/Path logo asli
            whatsappNumber: "6281234567890", // Format: 62 tanpa spasi/plus
            
            slides: [
                {
                    title: "Everything Your Sugar Glider Needs",
                    desc: "Discover thoughtfully selected essentials for your little companion, all in one place.",
                    btnText: "Explore Collection",
                    actionTarget: "#catalog",
                    image: "https://images.unsplash.com/photo-1548249081-649f1833503a?auto=format&fit=crop&w=1200&q=80" // Placeholder
                },
                {
                    title: "Make Every Feeding Special",
                    desc: "Explore feeding essentials designed to make daily care easier and more enjoyable.",
                    btnText: "Explore Feeding",
                    actionTarget: "cat-Feeding Supplies",
                    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80" // Placeholder
                },
                {
                    title: "Little Adventures, Big Comfort",
                    desc: "Discover travel carriers and accessories for your sugar glider’s adventures.",
                    btnText: "Explore Travel Gear",
                    actionTarget: "cat-Travel and carrier",
                    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80" // Placeholder
                },
                {
                    title: "Good Nutrition, Happy Companions",
                    desc: "Browse food and nutrition essentials for your sugar glider’s daily needs.",
                    btnText: "Explore Nutrition",
                    actionTarget: "cat-food and nutrition",
                    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?auto=format&fit=crop&w=1200&q=80" // Placeholder
                },
                {
                    title: "A Little More Joy Every Day",
                    desc: "Find toys, grooming essentials, cozy accessories, and more for your little friend.",
                    btnText: "Discover More",
                    actionTarget: "#catalog",
                    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=80" // Placeholder
                }
            ],
            
            categories: [
                "Feeding Supplies",
                "Travel and carrier",
                "food and nutrition",
                "Grooming and toys",
                "Housing and cleaning",
                "Merchandise"
            ],
            
            products: [
                { name: "Spet Sugar Glider", description: "Spet ini memiliki ujung corong halus yang pas di mulut mungil hewan seperti sugar glider atau hewan kecil lainnya, memungkinkan kontrol aliran cairan secara presisi agar hewan tidak mudah tersedak. Produk ini sudah termasuk sikat mini untuk membersihkan sisa endapan susu di bagian dalam corong yang sempit yang tidak dapat digapai oleh sikat biasa. Terdapat skala ukur untuk memudahkan porsi asupan yang dibutuhkan anabul.", category: "Feeding Supplies", image: "assets/CC120001.jpg" },
                { name: "Pet Cargo Paw Pastel Kotak", description: "Pet cargo praktis untuk perjalanan anabul yang aman dan nyaman! Dilengkapi tutup transparan untuk memantau anabul, ventilasi udara, alas plastik agar tetap bersih dan kering, serta botol minum mini 60 ml. Memiliki pegangan nyaman dan kunci bermotif paw yang lucu. \n\n 📏 Ukuran: 18,4 × 16,3 × 17 cm \n 🎨 Warna: Biru, Cokelat, Hijau, Pink, dan Ungu \n\n Cocok untuk perjalanan singkat bersama anabul kesayangan! 🐶🐱💕", category: "Feeding Supplies", image: "assets/CC120002 - Blue.jpg" },
                { name: "Breathable Travel Carrier", description: "Comfortable and secure mesh carrier for safe travels.", category: "Travel and carrier", image: "https://images.unsplash.com/photo-1548249081-649f1833503a?auto=format&fit=crop&w=400&q=80" },
                { name: "Bonding Pouch Sling", description: "Soft fleece sling to carry your glider comfortably while bonding.", category: "Travel and carrier", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80" },
                { name: "Premium Glider Diet Mix", description: "Complete nutrition mix specially formulated for adult sugar gliders.", category: "food and nutrition", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=400&q=80" },
                { name: "Calcium Supplement", description: "Essential calcium powder to sprinkle on fresh fruits.", category: "food and nutrition", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80" },
                { name: "Climbing Rope Toy", description: "Durable cotton rope for climbing and exercise.", category: "Grooming and toys", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?auto=format&fit=crop&w=400&q=80" },
                { name: "Nail Trimmer Set", description: "Safe and precise trimmers for keeping glider nails well-groomed.", category: "Grooming and toys", image: "https://images.unsplash.com/photo-1548249081-649f1833503a?auto=format&fit=crop&w=400&q=80" },
                { name: "Cozy Sleep Pouch", description: "Warm, double-layered fleece sleeping pouch. Can hold 2-3 gliders.", category: "Housing and cleaning", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80" },
                { name: "Cage Cleaner Spray", description: "Pet-safe enzymatic cleaner for maintaining a fresh habitat.", category: "Housing and cleaning", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=400&q=80" },
                { name: "ChubbyCuddle Mug", description: "Start your morning with our signature cute glider mug.", category: "Merchandise", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80" },
                { name: "Glider Mom Tote Bag", description: "Eco-friendly canvas tote bag with an adorable print.", category: "Merchandise", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?auto=format&fit=crop&w=400&q=80" },
                { name: "Nectar Supplement", description: "Sweet nectar replacement to balance your glider's diet.", category: "food and nutrition", image: "https://images.unsplash.com/photo-1548249081-649f1833503a?auto=format&fit=crop&w=400&q=80" },
                { name: "Foraging Wheel", description: "Interactive puzzle toy to hide treats and stimulate natural foraging.", category: "Grooming and toys", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80" },
                { name: "Large Wire Habitat", description: "Spacious multi-level cage for climbing and jumping.", category: "Housing and cleaning", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=400&q=80" }
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
         * 3. FUNGSI INISIALISASI
         * ==========================================
         */
        function initApp() {
            // Setup Identity
            document.title = `${config.brandName} - ${config.tagline}`;
            document.getElementById('header-logo').src = config.logoUrl;
            document.getElementById('header-brand-name').textContent = config.brandName;
            document.getElementById('header-tagline').textContent = config.tagline;
            document.getElementById('footer-logo').src = config.logoUrl;
            document.getElementById('footer-brand-name').textContent = config.brandName;
            document.getElementById('footer-tagline').textContent = config.tagline;
            document.getElementById('copyright-year').textContent = new Date().getFullYear();
            
            // Setup WA Links
            const waBaseUrl = `https://wa.me/${config.whatsappNumber}`;
            document.getElementById('wa-cta-btn').href = `${waBaseUrl}?text=${encodeURIComponent('Hi ChubbyCuddle! I need help choosing some products.')}`;
            document.getElementById('footer-wa-link').href = `${waBaseUrl}?text=${encodeURIComponent('Hi ChubbyCuddle!')}`;

            // Initialize Components
            setupHamburger();
            initCarousel();
            renderCategories();
            setupCatalogControls();
            setupModalEvents();
            
            // Initial Render
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
            
            // Create Slides
            config.slides.forEach((slide, index) => {
                const slideEl = document.createElement('div');
                slideEl.className = 'carousel-slide';
                slideEl.innerHTML = `
                    <img src="${slide.image}" alt="${slide.title}" onerror="this.src='https://ui-avatars.com/api/?name=${slide.title}&background=2563EB&color=fff&size=800'">
                    <div class="carousel-overlay">
                        <div class="carousel-content">
                            <h2>${slide.title}</h2>
                            <p>${slide.desc}</p>
                            <button class="btn-primary" onclick="handleSlideAction('${slide.actionTarget}')">${slide.btnText}</button>
                        </div>
                    </div>
                `;
                track.appendChild(slideEl);

                // Create Dots
                const dot = document.createElement('div');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(index);
                dotsContainer.appendChild(dot);
            });

            // Event Listeners for Arrows
            document.getElementById('btn-prev').addEventListener('click', () => { prevSlide(); resetInterval(); });
            document.getElementById('btn-next').addEventListener('click', () => { nextSlide(); resetInterval(); });

            // Hover Pause
            const container = document.getElementById('carousel');
            container.addEventListener('mouseenter', () => clearInterval(slideInterval));
            container.addEventListener('mouseleave', () => startInterval());

            // Touch Swipe Support
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
            
            // All Products Option
            grid.innerHTML = `
                <div class="category-card active" id="cat-card-All" onclick="setActiveCategory('All')">
                    <div class="category-icon">&#128062;</div>
                    <h3>Semua Produk</h3>
                </div>
            `;
            
            const icons = ['&#127869;', '&#128092;', '&#127823;', '&#127919;', '&#127968;', '&#127873;'];

            config.categories.forEach((cat, index) => {
                // Main Grid
                grid.innerHTML += `
                    <div class="category-card" id="cat-card-${index}" onclick="setActiveCategory('${cat}')">
                        <div class="category-icon">${icons[index] || '&#128062;'}</div>
                        <h3>${cat}</h3>
                    </div>
                `;
                // Footer
                footerList.innerHTML += `<li><a href="javascript:void(0)" onclick="setActiveCategory('${cat}'); document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });">${cat}</a></li>`;
            });
        }

        function setActiveCategory(category) {
            activeCategory = category;
            currentPage = 1; // reset page
            
            // Update UI Active State
            document.querySelectorAll('.category-card').forEach(card => card.classList.remove('active'));
            if(category === 'All') {
                document.getElementById('cat-card-All').classList.add('active');
            } else {
                const index = config.categories.indexOf(category);
                if(index > -1) document.getElementById(`cat-card-${index}`).classList.add('active');
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
            // 1. Filter Category & Search
            filteredProducts = config.products.filter(p => {
                const matchCategory = activeCategory === 'All' || p.category === activeCategory;
                const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
                return matchCategory && matchSearch;
            });

            // 2. Sort
            if (currentSort === 'az') {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (currentSort === 'za') {
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            }

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
                info.textContent = 'Lihat 0 products';
                return;
            }
            
            grid.style.display = 'grid';
            emptyState.style.display = 'none';
            pagination.style.display = 'flex';

            // Pagination Logic
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
            if (currentPage > totalPages) currentPage = totalPages;
            
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedItems = filteredProducts.slice(startIndex, endIndex);

            // Render Info
            info.textContent = `Lihat ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} products`;
            
            // Render Update Pagination Buttons
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

            // Render Cards
            paginatedItems.forEach((product, idx) => {
                const absoluteIndex = startIndex + idx + 1; // Nomor urut otomatis
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-number">${absoluteIndex}</div>
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/EFF6FF/2563EB?text=ChubbyCuddle'">
                    </div>
                    <div class="product-content">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-desc">${product.description.substring(0, 60)}${product.description.length > 60 ? '...' : ''}</p>
                        <button class="btn-outline" onclick="openModal(${config.products.indexOf(product)})">Lihat Detail</button>
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

        function openModal(originalIndex) {
            const product = config.products[originalIndex];
            
            document.getElementById('modal-image').src = product.image;
            document.getElementById('modal-category').textContent = product.category;
            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-desc').innerHTML = product.description.replace(/\n/g, '<br>');
            
            const waMsg = `Hi ChubbyCuddle! I would like to know more about ${product.name}.`;
            document.getElementById('modal-wa-btn').href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function setupModalEvents() {
            document.getElementById('modal-close').addEventListener('click', closeModal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(); // Click outside
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

            // Close menu on link click
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => navLinks.classList.remove('active'));
            });
        }

        // Jalankan aplikasi
        window.addEventListener('DOMContentLoaded', initApp);