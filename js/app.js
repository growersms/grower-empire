// Configuración
const AMAZON_TAG = 'padelempire-21';

// Productos
const products = [
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
        reviews: 342
    },
    {
        id: 2,
        title: "NOX AT10 Luxury Genius",
        description: "La pala del número 1 del mundo Agustín Tapia. Máximo rendimiento y tecnología de vanguardia.",
        price: 224.99,
        oldPrice: 299.99,
        discount: 25,
        amazonId: "B0D3N7P9R5",
        icon: "⚡",
        level: "profesional",
        rating: 4.8,
        reviews: 287
    },
    {
        id: 3,
        title: "Adidas Metalbone HRD+ 3.2",
        description: "Innovación y diseño únicos. La elección de Ale Galán. Potencia extrema con control mejorado.",
        price: 199.00,
        oldPrice: 269.00,
        discount: 26,
        amazonId: "B0CYK4N2P8",
        icon: "🔥",
        level: "avanzado",
        rating: 4.7,
        reviews: 219
    },
    {
        id: 4,
        title: "Head Flash Pro",
        description: "Mejor relación calidad-precio del mercado. Ideal para jugadores intermedios que buscan evolucionar.",
        price: 89.95,
        oldPrice: 129.95,
        discount: 31,
        amazonId: "B0D1M5N7Q2",
        icon: "💫",
        level: "intermedio",
        rating: 4.6,
        reviews: 456
    },
    {
        id: 5,
        title: "Siux Electra ST3",
        description: "Tecnología española de vanguardia. Balance perfecto entre potencia y control.",
        price: 159.00,
        oldPrice: 219.00,
        discount: 27,
        amazonId: "B0D4P9R6T8",
        icon: "⭐",
        level: "avanzado",
        rating: 4.5,
        reviews: 178
    },
    {
        id: 6,
        title: "Dunlop Inferno Graphene",
        description: "Perfecta para principiantes. Ligera, manejable y muy duradera. Excelente para aprender.",
        price: 59.95,
        oldPrice: 89.95,
        discount: 33,
        amazonId: "B0D2N6P8R4",
        icon: "🌟",
        level: "principiante",
        rating: 4.4,
        reviews: 523
    },
    {
        id: 7,
        title: "Wilson Bela Pro V2",
        description: "La pala de Fernando Belasteguín. Leyenda del pádel con tecnología de última generación.",
        price: 209.00,
        oldPrice: 279.00,
        discount: 25,
        amazonId: "B0D5Q1S3U9",
        icon: "👑",
        level: "profesional",
        rating: 4.8,
        reviews: 198
    },
    {
        id: 8,
        title: "Babolat Technical Viper",
        description: "Forma diamante para máxima potencia. Perfecta para jugadores de ataque agresivos.",
        price: 179.00,
        oldPrice: 239.00,
        discount: 25,
        amazonId: "B0D6R2T4V0",
        icon: "⚔️",
        level: "avanzado",
        rating: 4.6,
        reviews: 234
    },
    {
        id: 9,
        title: "Starvie Metheora Warrior",
        description: "Una de las palas más versátiles. Ideal para todo tipo de jugadores intermedios.",
        price: 139.00,
        oldPrice: 189.00,
        discount: 26,
        amazonId: "B0D7S3U5W1",
        icon: "💎",
        level: "intermedio",
        rating: 4.5,
        reviews: 312
    }
];

// Artículos del Blog
const blogPosts = [
    {
        id: 1,
        title: "Cómo Elegir tu Primera Pala de Pádel",
        excerpt: "Guía completa para principiantes. Todo lo que necesitas saber antes de comprar tu primera pala.",
        icon: "📚",
        date: "15 Ene 2024",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Palas de Control vs Potencia: ¿Cuál Necesitas?",
        excerpt: "Descubre qué tipo de pala se adapta mejor a tu estilo de juego y nivel.",
        icon: "⚖️",
        date: "12 Ene 2024",
        readTime: "6 min"
    },
    {
        id: 3,
        title: "Top 5 Errores al Comprar una Pala",
        excerpt: "Evita estos errores comunes y ahorra dinero en tu próxima compra.",
        icon: "⚠️",
        date: "10 Ene 2024",
        readTime: "5 min"
    },
    {
        id: 4,
        title: "Mantenimiento: Cómo Cuidar tu Pala",
        excerpt: "Consejos profesionales para alargar la vida útil de tu pala de pádel.",
        icon: "🔧",
        date: "8 Ene 2024",
        readTime: "7 min"
    },
    {
        id: 5,
        title: "Materiales: Carbono, Fibra y Más",
        excerpt: "Entiende las diferencias entre materiales y cómo afectan tu juego.",
        icon: "🧪",
        date: "5 Ene 2024",
        readTime: "10 min"
    },
    {
        id: 6,
        title: "Análisis: Palas WPT 2024",
        excerpt: "Las palas que usan los profesionales del World Padel Tour este año.",
        icon: "🏆",
        date: "3 Ene 2024",
        readTime: "12 min"
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
        ? products
        : products.filter(p => p.level === filterLevel);

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

// Renderizar blog
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

// Filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            // Añadir active al clickeado
            btn.classList.add('active');

            // Filtrar productos
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

        // Cerrar al hacer click en un link
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

            // Aquí puedes integrar con tu servicio de email marketing
            alert(`¡Gracias por suscribirte! Te enviaremos las mejores ofertas a ${email}`);
            form.reset();
        });
    }
}

// Inicializar todo cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
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
});