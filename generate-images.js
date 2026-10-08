const sharp = require('sharp');
const fs = require('fs');

async function generateImages() {
    console.log('\n🎨 Generando imágenes PNG y JPEG...\n');

    try {
        // Logo principal - PNG en varios tamaños
        console.log('📄 Generando logo.png (1024x1024)...');
        await sharp('images/logo.svg')
            .resize(1024, 1024)
            .png()
            .toFile('images/logo.png');
        console.log('   ✅ logo.png creado\n');

        console.log('📄 Generando logo-512.png (512x512)...');
        await sharp('images/logo.svg')
            .resize(512, 512)
            .png()
            .toFile('images/logo-512.png');
        console.log('   ✅ logo-512.png creado\n');

        console.log('📄 Generando logo-256.png (256x256)...');
        await sharp('images/logo.svg')
            .resize(256, 256)
            .png()
            .toFile('images/logo-256.png');
        console.log('   ✅ logo-256.png creado\n');

        // Logo JPEG
        console.log('📄 Generando logo.jpg (1024x1024)...');
        await sharp('images/logo.svg')
            .resize(1024, 1024)
            .jpeg({ quality: 95 })
            .toFile('images/logo.jpg');
        console.log('   ✅ logo.jpg creado\n');

        // Favicon PNG
        console.log('📄 Generando favicon.png (32x32)...');
        await sharp('images/favicon.svg')
            .resize(32, 32)
            .png()
            .toFile('images/favicon.png');
        console.log('   ✅ favicon.png creado\n');

        console.log('📄 Generando favicon-16x16.png...');
        await sharp('images/favicon.svg')
            .resize(16, 16)
            .png()
            .toFile('images/favicon-16x16.png');
        console.log('   ✅ favicon-16x16.png creado\n');

        console.log('📄 Generando favicon-32x32.png...');
        await sharp('images/favicon.svg')
            .resize(32, 32)
            .png()
            .toFile('images/favicon-32x32.png');
        console.log('   ✅ favicon-32x32.png creado\n');

        console.log('📄 Generando apple-touch-icon.png (180x180)...');
        await sharp('images/favicon.svg')
            .resize(180, 180)
            .png()
            .toFile('images/apple-touch-icon.png');
        console.log('   ✅ apple-touch-icon.png creado\n');

        // Logo horizontal PNG
        console.log('📄 Generando logo-horizontal.png (1200x300)...');
        await sharp('images/logo-horizontal.svg')
            .resize(1200, 300)
            .png()
            .toFile('images/logo-horizontal.png');
        console.log('   ✅ logo-horizontal.png creado\n');

        // Logo horizontal JPEG
        console.log('📄 Generando logo-horizontal.jpg (1200x300)...');
        await sharp('images/logo-horizontal.svg')
            .resize(1200, 300)
            .jpeg({ quality: 95 })
            .toFile('images/logo-horizontal.jpg');
        console.log('   ✅ logo-horizontal.jpg creado\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ TODAS LAS IMÁGENES GENERADAS');
        console.log('═══════════════════════════════════════');
        console.log('📁 Archivos creados en /images/:');
        console.log('   • logo.png (1024x1024)');
        console.log('   • logo-512.png (512x512)');
        console.log('   • logo-256.png (256x256)');
        console.log('   • logo.jpg (1024x1024)');
        console.log('   • favicon.png (32x32)');
        console.log('   • favicon-16x16.png');
        console.log('   • favicon-32x32.png');
        console.log('   • apple-touch-icon.png (180x180)');
        console.log('   • logo-horizontal.png (1200x300)');
        console.log('   • logo-horizontal.jpg (1200x300)');
        console.log('═══════════════════════════════════════\n');

    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

generateImages();
