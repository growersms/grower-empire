const ftp = require('basic-ftp');
const fs = require('fs');

async function uploadAllImages() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO TODAS LAS IMÁGENES          ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('📤 Subiendo imágenes PNG/JPEG...\n');

        const images = [
            'logo.png',
            'logo-512.png',
            'logo-256.png',
            'logo.jpg',
            'favicon.png',
            'favicon-16x16.png',
            'favicon-32x32.png',
            'apple-touch-icon.png',
            'logo-horizontal.png',
            'logo-horizontal.jpg'
        ];

        for (const img of images) {
            console.log(`📄 ${img}`);
            await client.uploadFrom(`images/${img}`, `/www/images/${img}`);
            console.log('   ✅ Subido\n');
        }

        console.log('═══════════════════════════════════════');
        console.log('✅ TODAS LAS IMÁGENES SUBIDAS');
        console.log('═══════════════════════════════════════');
        console.log('🌐 https://grower.blog');
        console.log('🎨 10 archivos de imágenes subidos');
        console.log('📦 SVG, PNG y JPEG disponibles');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadAllImages();
