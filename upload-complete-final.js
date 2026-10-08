const ftp = require('basic-ftp');

async function uploadComplete() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO WEB COMPLETA Y PROFESIONAL  ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('📤 Subiendo archivos...\n');

        console.log('📄 index.html (Web completa con blog)');
        await client.uploadFrom('index.html', '/www/index.html');
        console.log('   ✅ Subido\n');

        console.log('📄 ads.txt');
        await client.uploadFrom('ads.txt', '/www/ads.txt');
        console.log('   ✅ Subido\n');

        // Crear carpetas
        console.log('📁 Creando carpetas...');
        await client.ensureDir('/www/css');
        await client.ensureDir('/www/js');
        console.log('   ✅ Carpetas creadas\n');

        console.log('📄 css/styles.css');
        await client.uploadFrom('css/styles.css', '/www/css/styles.css');
        console.log('   ✅ Subido\n');

        console.log('📄 js/app.js (9 productos + Blog)');
        await client.uploadFrom('js/app.js', '/www/js/app.js');
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ WEB COMPLETA SUBIDA');
        console.log('═══════════════════════════════════════');
        console.log('🌐 URL: https://grower.blog');
        console.log('📦 9 Productos con reviews');
        console.log('📚 Sección de Blog completa');
        console.log('💰 AdSense integrado');
        console.log('🔗 Amazon Associates activo');
        console.log('📱 100% Responsive');
        console.log('⚡ Optimizado para conversión');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadComplete();
