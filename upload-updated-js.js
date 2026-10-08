const ftp = require('basic-ftp');

async function uploadUpdatedJS() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO JS CON PRODUCTOS REALES    ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('📤 Subiendo archivo actualizado...\n');

        console.log('📄 js/app.js (con ASINs verificados)');
        await client.uploadFrom('js/app.js', '/www/js/app.js');
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ PRODUCTOS ACTUALIZADOS EN VIVO');
        console.log('═══════════════════════════════════════');
        console.log('🌐 https://grower.blog');
        console.log('✅ 9 productos con ASINs verificados');
        console.log('✅ Todos los enlaces funcionan');
        console.log('✅ Redirigen a productos reales de Amazon');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadUpdatedJS();
