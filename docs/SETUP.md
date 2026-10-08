# 🚀 Guía de Instalación - Padel Empire

## Requisitos Previos

- Cuenta de Google AdSense aprobada
- Cuenta de Amazon Associates activa
- Hosting web con soporte FTP (opcional)
- Cuenta de GitHub (para GitHub Pages)

## Método 1: GitHub Pages (Gratuito)

### Paso 1: Fork el Repositorio

1. Ve a: https://github.com/growersms/grower-empire
2. Haz clic en **Fork** (arriba a la derecha)
3. Espera a que se complete el fork

### Paso 2: Configurar tus IDs

1. En tu fork, edita `index.html`
2. Busca y reemplaza:
   - `ca-pub-4289075916414050` → Tu Google AdSense Publisher ID
   - `padelempire-21` → Tu Amazon Associate Tag

3. Edita `ads.txt`:
   - Reemplaza el Publisher ID con el tuyo

### Paso 3: Activar GitHub Pages

1. Ve a **Settings** en tu repositorio
2. Clic en **Pages** (menú lateral izquierdo)
3. En **Source**, selecciona: `main` branch
4. Haz clic en **Save**
5. Espera 2-3 minutos

🎉 ¡Tu sitio estará en: `https://tu-usuario.github.io/grower-empire`!

## Método 2: Hosting Propio (FTP)

### Requisitos
- Hosting con FTP activo
- Dominio configurado

### Instalación Manual

1. **Descarga el proyecto**:
```bash
git clone https://github.com/growersms/grower-empire.git
cd grower-empire
```

2. **Configura tus IDs** (como en Método 1)

3. **Sube vía FTP**:
   - Conecta a tu hosting con FileZilla
   - Sube TODOS los archivos a `/public_html/`
   - Verifica que `ads.txt` esté en la raíz

### Instalación con Script (Node.js)

```bash
# Instalar dependencias
npm install basic-ftp

# Crear archivo de configuración
cat > ftp-config.json << EOF
{
  "host": "tu-servidor-ftp.com",
  "user": "tu_usuario",
  "password": "tu_password",
  "remotePath": "/public_html/"
}
EOF

# Ejecutar subida automática
node upload-auto.js
```

## Método 3: cPanel

1. Comprime el proyecto en ZIP
2. Accede a tu cPanel
3. Ve a **File Manager**
4. Navega a `/public_html/`
5. Haz clic en **Upload**
6. Sube el ZIP
7. Haz clic derecho → **Extract**
8. Mueve los archivos a la raíz de `/public_html/`

## Verificación Post-Instalación

### 1. Verificar el Sitio
```bash
curl -I https://tu-dominio.com
# Debe responder: HTTP/1.1 200 OK
```

### 2. Verificar ads.txt
Visita: `https://tu-dominio.com/ads.txt`
Debe mostrar:
```
google.com, pub-TU-ID-AQUI, DIRECT, f08c47fec0942fa0
```

### 3. Verificar AdSense
- Abre el sitio en navegador
- Inspecciona el código (F12)
- Busca `adsbygoogle`
- No debe haber errores en consola

### 4. Verificar Enlaces de Amazon
- Haz clic en "Ver Oferta"
- La URL debe contener `?tag=tu-tag-21`
- Debe redirigir a Amazon

## Configuración de Dominio Personalizado (GitHub Pages)

1. Ve a **Settings** → **Pages**
2. En **Custom domain**, escribe: `tu-dominio.com`
3. Haz clic en **Save**
4. En tu proveedor de DNS, añade:

```
CNAME Record:
Name: www
Value: tu-usuario.github.io

A Records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

5. Espera 24-48 horas para propagación DNS

## Solución de Problemas

### El sitio no carga
- Verifica que `index.html` esté en la raíz
- Revisa permisos de archivos (644 para archivos, 755 para carpetas)
- Limpia caché del navegador

### AdSense no muestra anuncios
- Espera 24-48 horas después de la primera subida
- Verifica que tu cuenta esté aprobada
- Confirma que `ads.txt` sea accesible

### Enlaces de Amazon no funcionan
- Verifica que tu tag sea correcto
- Confirma que los IDs de productos existan
- Usa `rel="nofollow noopener"` en los enlaces

### Error 404 en GitHub Pages
- Asegúrate de que el branch sea `main`
- Verifica que `index.html` esté en la raíz
- Espera 5 minutos y recarga

## Próximos Pasos

✅ [Optimiza la Monetización](MONETIZATION.md)
✅ [Mejora el SEO](SEO.md)
✅ [Añade más productos](../README.md#contribuir)

---

**¿Problemas?** Abre un [Issue](https://github.com/growersms/grower-empire/issues)