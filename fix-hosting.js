const ftp = require('basic-ftp');

async function fixHosting() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   LIMPIANDO Y CORRIGIENDO HOSTING      ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        console.log('🗑️  Limpiando public_html...\n');

        try {
            await client.remove('/public_html/index.html');
            console.log('   ✅ Eliminado /public_html/index.html');
        } catch(e) { console.log('   ⚠️  index.html no existe en public_html'); }

        try {
            await client.remove('/public_html/ads.txt');
            console.log('   ✅ Eliminado /public_html/ads.txt');
        } catch(e) { console.log('   ⚠️  ads.txt no existe en public_html'); }

        try {
            await client.remove('/public_html/README.md');
            console.log('   ✅ Eliminado /public_html/README.md');
        } catch(e) { console.log('   ⚠️  README.md no existe en public_html'); }

        console.log('\n📤 Subiendo todo a /www/...\n');

        console.log('📄 index.html');
        await client.uploadFrom('index.html', '/www/index.html');
        console.log('   ✅ Subido a /www/\n');

        console.log('📄 ads.txt');
        await client.uploadFrom('ads.txt', '/www/ads.txt');
        console.log('   ✅ Subido a /www/\n');

        console.log('📄 README.md');
        await client.uploadFrom('README.md', '/www/README.md');
        console.log('   ✅ Subido a /www/\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ HOSTING CORREGIDO');
        console.log('═══════════════════════════════════════');
        console.log('🗑️  public_html: LIMPIO');
        console.log('📁 /www/: ACTUALIZADO');
        console.log('🌐 https://grower.blog → /www/');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

fixHosting();
