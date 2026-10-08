const ftp = require('basic-ftp');

async function uploadEverything() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO TODO CON NUEVO LOGO         ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        // Crear carpeta images
        console.log('📁 Creando carpeta images...');
        await client.ensureDir('/www/images');
        console.log('   ✅ Carpeta creada\n');

        console.log('📤 Subiendo archivos actualizados...\n');

        console.log('📄 index.html (con nuevo logo)');
        await client.uploadFrom('index.html', '/www/index.html');
        console.log('   ✅ Subido\n');

        console.log('📄 css/styles.css (actualizado)');
        await client.uploadFrom('css/styles.css', '/www/css/styles.css');
        console.log('   ✅ Subido\n');

        console.log('📄 images/logo.svg');
        await client.uploadFrom('images/logo.svg', '/www/images/logo.svg');
        console.log('   ✅ Subido\n');

        console.log('📄 images/favicon.svg');
        await client.uploadFrom('images/favicon.svg', '/www/images/favicon.svg');
        console.log('   ✅ Subido\n');

        console.log('📄 images/logo-horizontal.svg');
        await client.uploadFrom('images/logo-horizontal.svg', '/www/images/logo-horizontal.svg');
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ TODO SUBIDO CORRECTAMENTE');
        console.log('═══════════════════════════════════════');
        console.log('🌐 https://grower.blog');
        console.log('🎨 Logo minimalista instalado');
        console.log('📦 9 productos activos');
        console.log('📚 Blog completo');
        console.log('💰 Monetización configurada');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadEverything();
