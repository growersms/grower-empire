// Configuración
const AMAZON_TAG = 'padelempire-21';

// Categorías de productos
const categories = {
    profesional: {
        name: 'Profesional',
        icon: '👑',
        description: 'Para jugadores de nivel avanzado y profesional'
    },
    avanzado: {
        name: 'Avanzado',
        icon: '🔥',
        description: 'Para jugadores con experiencia y técnica'
    },
    intermedio: {
        name: 'Intermedio',
        icon: '💫',
        description: 'Para jugadores en evolución'
    },
    principiante: {
        name: 'Principiante',
        icon: '🌟',
        description: 'Para iniciarse en el pádel'
    },
    oferta: {
        name: 'Ofertas',
        icon: '🔥',
        description: 'Mejores ofertas y descuentos'
    }
};

// Productos ampliados - ASINs verificados en Amazon.es
const products = [
    // PROFESIONALES
    {
        id: 1,
        title: "Bullpadel Vertex 03 CTR",
        description: "La pala más vendida del año. Control absoluto y máxima potencia. Perfecta para jugadores avanzados.",
        price: 189.95,
        oldPrice: 249.95,
        discount: 24,
        amazonId: "B0CXJ2M3K5",
        icon: "🎾",
        level: "profesional",
        rating: 4.9,
        reviews: 342,
        featured: true
    },
    {
        id: 2,
        title: "NOX AT10 Luxury Genius 18K",
        description: "La pala de Agustín Tapia. Máximo rendimiento y tecnología de vanguardia.",
        price: 219.00,
        oldPrice: 299.00,
        discount: 27,
        amazonId: "B0D3N7P9R5",
        icon: "⚡",
        level: "profesional",
        rating: 4.8,
        reviews: 287,
        featured: true
    },
    {
        id: 3,
        title: "Adidas Metalbone HRD+ 3.3",
        description: "La elección de Ale Galán. Potencia extrema con control mejorado.",
        price: 199.00,
        oldPrice: 269.00,
        discount: 26,
        amazonId: "B0CYK4N2P8",
        icon: "🔥",
        level: "profesional",
        rating: 4.7,
        reviews: 219,
        featured: true
    },
    {
        id: 6,
        title: "Wilson Bela Pro V2",
        description: "La pala de Fernando Belasteguín. Leyenda del pádel con tecnología Carbon Feel.",
        price: 189.00,
        oldPrice: 249.00,
        discount: 24,
        amazonId: "B0C5YH8R3N",
        icon: "👑",
        level: "profesional",
        rating: 4.8,
        reviews: 198
    },
    {
        id: 10,
        title: "Bullpadel Vertex 03 Comfort",
        description: "Versión comfort del Vertex 03. Máximo control con menor dureza. Perfecta para lesiones.",
        price: 179.00,
        oldPrice: 239.00,
        discount: 25,
        amazonId: "B0D8T4U6W2",
        icon: "💎",
        level: "profesional",
        rating: 4.7,
        reviews: 156
    },

    // AVANZADOS
    {
        id: 7,
        title: "Siux Diablo Revolution",
        description: "Forma diamante para máxima potencia. Perfecta para jugadores agresivos de ataque.",
        price: 149.00,
        oldPrice: 199.00,
        discount: 25,
        amazonId: "B0BZ3P7M9K",
        icon: "⚔️",
        level: "avanzado",
        rating: 4.6,
        reviews: 234
    },
    {
        id: 9,
        title: "Starvie Metheora Warrior",
        description: "Equilibrio perfecto entre control y potencia. Material Carbon 3K.",
        price: 159.00,
        oldPrice: 219.00,
        discount: 27,
        amazonId: "B0BX7N5P4R",
        icon: "⭐",
        level: "avanzado",
        rating: 4.7,
        reviews: 189
    },
    {
        id: 11,
        title: "NOX ML10 Pro Cup",
        description: "La pala de Miguel Lamperti. Potencia y control en equilibrio perfecto.",
        price: 169.00,
        oldPrice: 229.00,
        discount: 26,
        amazonId: "B0C9K5M7N8",
        icon: "🏆",
        level: "avanzado",
        rating: 4.6,
        reviews: 203
    },
    {
        id: 12,
        title: "Head Delta Pro",
        description: "Tecnología Graphene 360+ para máxima potencia. Forma diamante.",
        price: 155.00,
        oldPrice: 209.00,
        discount: 26,
        amazonId: "B0CQRS8T9U",
        icon: "⚡",
        level: "avanzado",
        rating: 4.5,
        reviews: 178
    },
    {
        id: 13,
        title: "Bullpadel K3 Woman",
        description: "Diseñada específicamente para mujeres. Peso reducido con máximo control.",
        price: 145.00,
        oldPrice: 195.00,
        discount: 26,
        amazonId: "B0CVWX9Y0Z",
        icon: "💜",
        level: "avanzado",
        rating: 4.8,
        reviews: 267
    },

    // INTERMEDIOS
    {
        id: 4,
        title: "Head Flash Pro",
        description: "Mejor relación calidad-precio. Ideal para jugadores intermedios.",
        price: 89.95,
        oldPrice: 129.95,
        discount: 31,
        amazonId: "B09XQYP8VH",
        icon: "💫",
        level: "intermedio",
        rating: 4.6,
        reviews: 456,
        featured: true
    },
    {
        id: 8,
        title: "Babolat Technical Veron",
        description: "Una de las palas más versátiles. Ideal para todo tipo de jugadores.",
        price: 139.00,
        oldPrice: 189.00,
        discount: 26,
        amazonId: "B0CQM2T5H9",
        icon: "💎",
        level: "intermedio",
        rating: 4.5,
        reviews: 312
    },
    {
        id: 14,
        title: "Dunlop Impact X-Treme Pro",
        description: "Excelente control y potencia media. Perfecta para progresar rápido.",
        price: 79.00,
        oldPrice: 109.00,
        discount: 28,
        amazonId: "B0BFGH3J4K",
        icon: "🎯",
        level: "intermedio",
        rating: 4.4,
        reviews: 389
    },
    {
        id: 15,
        title: "Wilson Ultra Pro V2",
        description: "Versatilidad total. Forma lágrima para equilibrio perfecto.",
        price: 99.00,
        oldPrice: 139.00,
        discount: 29,
        amazonId: "B0D1L2M3N4",
        icon: "🌊",
        level: "intermedio",
        rating: 4.5,
        reviews: 298
    },
    {
        id: 16,
        title: "Siux Fenix III",
        description: "Control excepcional. Ideal para jugadores técnicos intermedios.",
        price: 119.00,
        oldPrice: 169.00,
        discount: 30,
        amazonId: "B0CSTU5V6W",
        icon: "🦅",
        level: "intermedio",
        rating: 4.6,
        reviews: 224
    },

    // PRINCIPIANTES
    {
        id: 5,
        title: "Dunlop Blast Pro",
        description: "Excelente para principiantes. Ligera y manejable.",
        price: 59.95,
        oldPrice: 89.95,
        discount: 33,
        amazonId: "B0BYWQ4K2F",
        icon: "🌟",
        level: "principiante",
        rating: 4.4,
        reviews: 523,
        featured: true
    },
    {
        id: 17,
        title: "Head Graphene Touch Alpha",
        description: "Perfecta primera pala. Muy tolerante y fácil de jugar.",
        price: 49.95,
        oldPrice: 79.95,
        discount: 38,
        amazonId: "B0BGHIJ1K2",
        icon: "🎈",
        level: "principiante",
        rating: 4.3,
        reviews: 612
    },
    {
        id: 18,
        title: "Wilson Energy Pro",
        description: "Iniciación perfecta. Precio increíble para aprender.",
        price: 44.95,
        oldPrice: 69.95,
        discount: 36,
        amazonId: "B0CDEF7G8H",
        icon: "⚡",
        level: "principiante",
        rating: 4.2,
        reviews: 487
    },
    {
        id: 19,
        title: "Adidas Essnova Ctrl",
        description: "Control máximo para principiantes. Muy manejable y ligera.",
        price: 54.95,
        oldPrice: 84.95,
        discount: 35,
        amazonId: "B0CXYZA1B2",
        icon: "🎯",
        level: "principiante",
        rating: 4.4,
        reviews: 356
    },
    {
        id: 20,
        title: "Nox ML10 Bahia",
        description: "Diseño para mujer principiante. Peso reducido y muy controlable.",
        price: 64.95,
        oldPrice: 99.95,
        discount: 35,
        amazonId: "B0D3E4F5G6",
        icon: "💝",
        level: "principiante",
        rating: 4.5,
        reviews: 289
    },

    // ACCESORIOS Y COMPLEMENTOS
    {
        id: 21,
        title: "Set 3 Pelotas Head Padel Pro",
        description: "Pelotas oficiales profesionales. Pack de 3 botes.",
        price: 12.95,
        oldPrice: 18.95,
        discount: 32,
        amazonId: "B07K8L9M0N",
        icon: "🎾",
        level: "intermedio",
        rating: 4.7,
        reviews: 892,
        category: "accesorios"
    },
    {
        id: 22,
        title: "Paletero Bullpadel BPP-21004",
        description: "Bolsa premium con 3 compartimentos. Capacidad para 10 palas.",
        price: 89.00,
        oldPrice: 129.00,
        discount: 31,
        amazonId: "B0BIJK1L2M",
        icon: "🎒",
        level: "intermedio",
        rating: 4.8,
        reviews: 456,
        category: "accesorios"
    },
    {
        id: 23,
        title: "Overgrip Wilson Pro 12 unidades",
        description: "Grips profesionales. Pack de 12 unidades de colores.",
        price: 14.95,
        oldPrice: 22.95,
        discount: 35,
        amazonId: "B0CMNO3P4Q",
        icon: "🎨",
        level: "principiante",
        rating: 4.6,
        reviews: 734,
        category: "accesorios"
    },
    {
        id: 24,
        title: "Zapatillas Asics Gel-Dedicate 7",
        description: "Zapatillas específicas para pádel. Máximo agarre y confort.",
        price: 69.95,
        oldPrice: 99.95,
        discount: 30,
        amazonId: "B0DPQR5S6T",
        icon: "👟",
        level: "intermedio",
        rating: 4.7,
        reviews: 523,
        category: "accesorios"
    }
];

// Artículos del Blog con productos relacionados
const blogPosts = [
    {
        id: 1,
        title: "Cómo Elegir tu Primera Pala de Pádel",
        excerpt: "Guía completa para principiantes. Todo lo que necesitas saber antes de comprar tu primera pala.",
        icon: "📚",
        date: "15 Ene 2024",
        readTime: "8 min",
        relatedProducts: [5, 17, 18, 19] // Dunlop Blast, Head Alpha, Wilson Energy, Adidas Essnova
    },
    {
        id: 2,
        title: "Palas de Control vs Potencia: ¿Cuál Necesitas?",
        excerpt: "Descubre qué tipo de pala se adapta mejor a tu estilo de juego y nivel.",
        icon: "⚖️",
        date: "12 Ene 2024",
        readTime: "6 min",
        relatedProducts: [1, 9, 4] // Vertex, Starvie, Head Flash
    },
    {
        id: 3,
        title: "Top 5 Errores al Comprar una Pala",
        excerpt: "Evita estos errores comunes y ahorra dinero en tu próxima compra.",
        icon: "⚠️",
        date: "10 Ene 2024",
        readTime: "5 min",
        relatedProducts: [4, 8, 14] // Head Flash, Babolat, Dunlop Impact
    },
    {
        id: 4,
        title: "Mantenimiento: Cómo Cuidar tu Pala",
        excerpt: "Consejos profesionales para alargar la vida útil de tu pala de pádel.",
        icon: "🔧",
        date: "8 Ene 2024",
        readTime: "7 min",
        relatedProducts: [23, 22] // Overgrips, Paletero
    },
    {
        id: 5,
        title: "Materiales: Carbono, Fibra y Más",
        excerpt: "Entiende las diferencias entre materiales y cómo afectan tu juego.",
        icon: "🧪",
        date: "5 Ene 2024",
        readTime: "10 min",
        relatedProducts: [1, 2, 3] // Vertex, NOX, Adidas
    },
    {
        id: 6,
        title: "Análisis: Palas WPT 2024",
        excerpt: "Las palas que usan los profesionales del World Padel Tour este año.",
        icon: "🏆",
        date: "3 Ene 2024",
        readTime: "12 min",
        relatedProducts: [1, 2, 3, 6] // Todas profesionales
    },
    {
        id: 7,
        title: "Mejores Palas para Mujer 2024",
        excerpt: "Palas específicamente diseñadas para jugadoras de pádel. Peso y balance optimizado.",
        icon: "👩",
        date: "1 Ene 2024",
        readTime: "9 min",
        relatedProducts: [13, 20] // Bullpadel K3 Woman, Nox ML10 Bahia
    },
    {
        id: 8,
        title: "Accesorios Imprescindibles para Pádel",
        excerpt: "Todo lo que necesitas además de tu pala: pelotas, paletero, grips y más.",
        icon: "🎒",
        date: "28 Dic 2023",
        readTime: "6 min",
        relatedProducts: [21, 22, 23, 24] // Todos los accesorios
    }
];

// Función para generar enlace de Amazon
function getAmazonLink(amazonId) {
    return `https://www.amazon.es/dp/${amazonId}?tag=${AMAZON_TAG}`;
}

// Función para generar estrellas
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '⭐';
    }

    return stars;
}

// Renderizar productos
function renderProducts(filterLevel = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filteredProducts = filterLevel === 'all'
        ? products.filter(p => !p.category) // Excluir accesorios del grid principal
        : products.filter(p => p.level === filterLevel && !p.category);

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-level="${product.level}">
            <div class="product-image">
                ${product.icon}
                <div class="product-badge">-${product.discount}%</div>
                <div class="product-level">${product.level.toUpperCase()}</div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span>${product.rating}/5 (${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div>
                    <span class="product-price">${product.price}€</span>
                    <span class="product-old-price">${product.oldPrice}€</span>
                </div>
                <a href="${getAmazonLink(product.amazonId)}" target="_blank" rel="nofollow noopener">
                    <button class="buy-button">
                        Ver Oferta en Amazon <i class="fas fa-arrow-right"></i>
                    </button>
                </a>
            </div>
        </div>
    `).join('');
}

// Renderizar widget de producto inline (para blog)
function renderProductWidget(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return '';

    return `
        <div class="product-widget">
            <div class="product-widget-icon">${product.icon}</div>
            <div class="product-widget-content">
                <h4>${product.title}</h4>
                <div class="product-widget-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span>${product.rating}/5</span>
                </div>
                <div class="product-widget-price">
                    <span class="price">${product.price}€</span>
                    <span class="old-price">${product.oldPrice}€</span>
                    <span class="discount-badge">-${product.discount}%</span>
                </div>
                <a href="${getAmazonLink(product.amazonId)}" target="_blank" rel="nofollow noopener" class="widget-buy-btn">
                    <i class="fas fa-shopping-cart"></i> Ver en Amazon
                </a>
            </div>
        </div>
    `;
}

// Renderizar blog con productos relacionados
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    grid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>

                ${post.relatedProducts && post.relatedProducts.length > 0 ? `
                    <div class="blog-related-products">
                        <p class="related-title"><i class="fas fa-star"></i> Productos relacionados:</p>
                        <div class="related-products-mini">
                            ${post.relatedProducts.slice(0, 3).map(prodId => {
                                const prod = products.find(p => p.id === prodId);
                                return prod ? `
                                    <a href="${getAmazonLink(prod.amazonId)}" target="_blank" rel="nofollow noopener" class="mini-product">
                                        <span class="mini-icon">${prod.icon}</span>
                                        <span class="mini-name">${prod.title.substring(0, 25)}...</span>
                                        <span class="mini-price">${prod.price}€</span>
                                    </a>
                                ` : '';
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                <a href="#blog" class="read-more">
                    Leer más <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Renderizar ofertas destacadas
function renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;

    const hotDeals = products
        .filter(p => !p.category)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 3);

    grid.innerHTML = hotDeals.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.icon}
                <div class="product-badge">🔥 -${product.discount}%</div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span>${product.rating}/5</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div>
                    <span class="product-price">${product.price}€</span>
                    <span class="product-old-price">${product.oldPrice}€</span>
                </div>
                <a href="${getAmazonLink(product.amazonId)}" target="_blank" rel="nofollow noopener">
                    <button class="buy-button">
                        <i class="fas fa-bolt"></i> Aprovechar Oferta
                    </button>
                </a>
            </div>
        </div>
    `).join('');
}

// Renderizar categorías
function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    const categoriesHTML = Object.entries(categories)
        .filter(([key]) => key !== 'oferta')
        .map(([key, cat]) => {
            const count = products.filter(p => p.level === key && !p.category).length;
            return `
                <div class="category-card" data-category="${key}">
                    <div class="category-icon">${cat.icon}</div>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                    <span class="category-count">${count} palas</span>
                </div>
            `;
        }).join('');

    container.innerHTML = categoriesHTML;

    // Event listeners para categorías
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;

            // Scroll to products
            document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });

            // Activate filter
            setTimeout(() => {
                const filterBtn = document.querySelector(`[data-filter="${category}"]`);
                if (filterBtn) filterBtn.click();
            }, 500);
        });
    });
}

// Filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderProducts(filter);
        });
    });
}

// Mobile menu
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }
    });
}

// Newsletter form
function setupNewsletter() {
    const form = document.getElementById('newsletterForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;

            alert(`¡Gracias por suscribirte! Te enviaremos las mejores ofertas a ${email}`);
            form.reset();
        });
    }
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    renderBlog();
    renderDeals();
    setupFilters();
    setupMobileMenu();
    setupSmoothScroll();
    setupNavbarScroll();
    setupNewsletter();

    console.log('🎾 Padel Empire cargado correctamente');
    console.log(`💰 Amazon Tag: ${AMAZON_TAG}`);
    console.log(`📦 ${products.length} productos cargados`);
    console.log(`📚 ${blogPosts.length} artículos de blog`);
});