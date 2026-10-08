const ftp = require('basic-ftp');

async function uploadComplete() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO PROYECTO MEJORADO           ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando a grower.blog...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('📤 Subiendo archivos mejorados...\n');

        console.log('📄 index.html (diseño mejorado)');
        await client.uploadFrom('index.html', '/public_html/index.html');
        console.log('   ✅ Subido\n');

        console.log('📄 ads.txt');
        await client.uploadFrom('ads.txt', '/public_html/ads.txt');
        console.log('   ✅ Subido\n');

        console.log('📄 README.md');
        await client.uploadFrom('README.md', '/public_html/README.md');
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ PROYECTO MEJORADO SUBIDO');
        console.log('═══════════════════════════════════════');
        console.log('🌐 URL: https://grower.blog');
        console.log('💰 AdSense: ca-pub-4289075916414050');
        console.log('💰 Amazon: padelempire-21');
        console.log('🎨 Diseño: Mejorado y moderno');
        console.log('📱 Responsive: 100%');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadComplete();
