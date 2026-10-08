# 🎨 Guía de Marca - Padel Empire

## Identidad Visual

### Logo Principal

El logo de Padel Empire combina modernidad, deporte y profesionalismo.

**Elementos del logo:**
- 🎾 **Raqueta estilizada**: Representa el pádel de forma minimalista
- 🔵 **Gradiente azul**: Transmite confianza, profesionalismo y tecnología
- 🟡 **Pelota naranja**: Añade energía y dinamismo
- **Tipografía bold**: Transmite autoridad y liderazgo

### Colores de Marca

#### Colores Principales

```css
--primary: #0EA5E9     /* Azul cielo - Confianza, tecnología */
--secondary: #F59E0B   /* Naranja - Energía, acción */
--dark: #0F172A        /* Azul oscuro - Profesionalismo */
```

#### Colores de Apoyo

```css
--light: #F8FAFC       /* Blanco roto - Limpieza */
--text: #1E293B        /* Gris oscuro - Legibilidad */
--border: #E2E8F0      /* Gris claro - Separación */
--success: #10B981     /* Verde - Éxito, confirmación */
--danger: #EF4444      /* Rojo - Urgencia, ofertas */
```

#### Gradientes

```css
/* Gradiente principal */
linear-gradient(135deg, #0EA5E9 0%, #1E40AF 100%)

/* Gradiente secundario */
linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)

/* Gradiente texto */
linear-gradient(135deg, #38BDF8, #F59E0B)
```

### Tipografía

#### Fuente Principal: Poppins

```css
font-family: 'Poppins', sans-serif;
```

**Pesos utilizados:**
- Light (300): Textos secundarios
- Regular (400): Cuerpo de texto
- SemiBold (600): Destacados, navegación
- Bold (700): Subtítulos
- Black (900): Títulos principales

#### Jerarquía Tipográfica

```css
/* H1 - Hero */
font-size: clamp(2.5rem, 6vw, 4rem);
font-weight: 900;
line-height: 1.1;

/* H2 - Secciones */
font-size: clamp(2rem, 4vw, 3rem);
font-weight: 900;

/* H3 - Cards */
font-size: 1.25rem;
font-weight: 700;

/* Body */
font-size: 1rem;
font-weight: 400;
line-height: 1.6;
```

## Uso del Logo

### Espaciado Mínimo

- Mantener un espacio libre equivalente al alto de la letra "P" alrededor del logo
- No colocar elementos a menos de este espacio

### Tamaños Mínimos

- **Digital**: 32px de altura
- **Impreso**: 15mm de altura

### Fondos Permitidos

✅ **Sobre fondos claros**: Logo en colores originales
✅ **Sobre fondos oscuros**: Logo en blanco
✅ **Sobre imágenes**: Logo con fondo semitransparente

❌ **No permitido:**
- Cambiar los colores del logo
- Distorsionar las proporciones
- Añadir efectos o sombras no autorizadas
- Rotar el logo

## Elementos de Diseño

### Iconografía

Usar Font Awesome 6.5 para iconos:

```html
<i class="fas fa-fire"></i>        <!-- Ofertas hot -->
<i class="fas fa-rocket"></i>      <!-- Acción principal -->
<i class="fas fa-star"></i>        <!-- Reviews -->
<i class="fas fa-shield-alt"></i>  <!-- Confianza -->
<i class="fas fa-check"></i>       <!-- Confirmación -->
```

**Estilo:**
- Tamaño: 1.5rem - 3rem
- Color: Usar colores de marca
- Siempre acompañados de texto descriptivo

### Botones

#### Botón Primario (CTA)
```css
background: linear-gradient(135deg, #0EA5E9, #3B82F6);
color: white;
padding: 1rem 2rem;
border-radius: 50px;
font-weight: 600;
```

**Uso:** Acciones principales (Ver oferta, Comprar, Suscribirse)

#### Botón Secundario
```css
background: rgba(255,255,255,0.2);
color: white;
border: 2px solid white;
```

**Uso:** Acciones secundarias en hero

#### Botón Outline
```css
background: transparent;
color: #0EA5E9;
border: 2px solid #0EA5E9;
```

**Uso:** Acciones terciarias (Ver más, Leer artículo)

### Cards

```css
background: white;
border-radius: 20px;
box-shadow: 0 4px 20px rgba(0,0,0,0.1);
transition: transform 0.3s, box-shadow 0.3s;
```

**Hover effect:**
```css
transform: translateY(-10px);
box-shadow: 0 10px 40px rgba(0,0,0,0.2);
```

### Badges

```css
background: linear-gradient(135deg, #0EA5E9, #F59E0B);
color: white;
padding: 0.5rem 1.5rem;
border-radius: 50px;
font-weight: 700;
font-size: 0.85rem;
```

## Fotografía y Estilo Visual

### Estilo de Imágenes

- **Fotografías reales** de palas y pádel
- **Iluminación brillante** y profesional
- **Fondos limpios** (blanco o gris claro)
- **Alta resolución** (mínimo 1200px de ancho)

### Paleta de Colores en Imágenes

- Predominancia de azules y naranjas
- Fondos neutros para destacar el producto
- Uso de gradientes sutiles

### Iconos Emoji (Temporal)

Mientras no hay fotografías:
```
🎾 - Palas principales
⚡ - Potencia/velocidad
🔥 - Ofertas hot
⭐ - Destacados
💎 - Premium
👑 - Profesional
```

## Aplicaciones de Marca

### Redes Sociales

#### Instagram (@padelempire)
- **Posts**: 1080x1080px
- **Stories**: 1080x1920px
- **Estilo**: Minimalista, con gradientes de marca

#### Facebook (Padel Empire)
- **Cover**: 820x312px
- **Profile**: 180x180px
- **Contenido**: Mix de reviews y ofertas

#### Twitter (@padelempire)
- **Header**: 1500x500px
- **Profile**: 400x400px
- **Contenido**: Tips rápidos y ofertas flash

#### YouTube
- **Banner**: 2560x1440px
- **Thumbnail**: 1280x720px
- **Estilo**: Bold, llamativo, con ratings

### Email Marketing

#### Header
- Altura: 80px
- Logo centrado
- Fondo: Gradiente de marca

#### Cuerpo
- Ancho máximo: 600px
- Tipografía: Poppins
- Botones con border-radius: 50px

#### Footer
- Fondo: #0F172A
- Texto: Blanco
- Links de redes sociales

### Presentaciones

#### Portada
- Logo grande centrado
- Gradiente de fondo
- Tagline: "Tu Referencia en Pádel"

#### Slides
- Fondo blanco o gris claro
- Títulos en azul (#0EA5E9)
- Imágenes con border-radius

## Tono de Voz

### Personalidad de Marca

- **Experto pero accesible**: Profesional sin ser intimidante
- **Honesto y directo**: Sin exageraciones
- **Apasionado**: Amor por el pádel
- **Útil**: Siempre aporta valor

### Estilo de Escritura

✅ **Hacer:**
- Usar "tú" (cercano)
- Ser específico con datos
- Incluir emojis con moderación
- Explicar términos técnicos

❌ **Evitar:**
- Jerga innecesaria
- Promesas exageradas
- Tono corporativo frío
- Lenguaje complicado

### Ejemplos

**Título de producto:**
❌ "Pala Bullpadel Vertex 03"
✅ "Bullpadel Vertex 03 CTR: La Pala Más Vendida de 2024"

**Descripción:**
❌ "Producto de calidad superior"
✅ "Control absoluto y máxima potencia. Perfecta para jugadores avanzados."

**CTA:**
❌ "Haz click aquí"
✅ "Ver Oferta en Amazon"

## Checklist de Marca

### Al crear contenido nuevo:

- [ ] ¿Usa los colores de marca?
- [ ] ¿La tipografía es Poppins?
- [ ] ¿El tono de voz es consistente?
- [ ] ¿Los botones tienen border-radius: 50px?
- [ ] ¿Las cards tienen sombra y efecto hover?
- [ ] ¿Los iconos son de Font Awesome?
- [ ] ¿El logo tiene espacio suficiente?
- [ ] ¿Es responsive?

## Archivos de Marca

### Logos
- `/images/logo.svg` - Logo principal circular
- `/images/logo-horizontal.svg` - Logo horizontal
- `/images/favicon.svg` - Favicon 32x32

### Recursos Adicionales
- Paleta de colores CSS
- Tipografía Poppins (Google Fonts)
- Iconos Font Awesome 6.5

## Contacto

Para consultas sobre uso de marca:
- Email: growerblog@growerblog
- GitHub: @growersms

---

**Versión:** 1.0
**Última actualización:** Enero 2024
**Creado por:** Grower