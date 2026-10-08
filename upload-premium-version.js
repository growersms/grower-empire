const ftp = require('basic-ftp');

async function uploadPremiumVersion() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO VERSIÓN PREMIUM             ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('📤 Subiendo versión premium...\n');

        console.log('📄 index.html (con categorías)');
        await client.uploadFrom('index.html', '/www/index.html');
        console.log('   ✅ Subido\n');

        console.log('📄 css/styles.css (con widgets)');
        await client.uploadFrom('css/styles.css', '/www/css/styles.css');
        console.log('   ✅ Subido\n');

        console.log('📄 js/app.js (24 productos + widgets)');
        await client.uploadFrom('js/app.js', '/www/js/app.js');
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ VERSIÓN PREMIUM SUBIDA');
        console.log('═══════════════════════════════════════');
        console.log('🌐 https://grower.blog');
        console.log('📦 24 productos (20 palas + 4 accesorios)');
        console.log('🎯 4 categorías por nivel');
        console.log('📚 8 artículos de blog');
        console.log('🎁 Widgets de productos en blog');
        console.log('⭐ Productos relacionados en cada entrada');
        console.log('💰 AdSense + Amazon optimizado');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadPremiumVersion();
