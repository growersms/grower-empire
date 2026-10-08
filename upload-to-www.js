const ftp = require('basic-ftp');

async function uploadToWWW() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    
    try {
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   SUBIENDO A CARPETA WWW CORRECTA      ║');
        console.log('╚════════════════════════════════════════╝\n');
        
        console.log('🔌 Conectando...');
        await client.access({
            host: 'groweu.ftp.tb-hosting.com',
            user: 'growerblog@growerblog',
            password: 'Super0nono1318@',
            port: 21
        });
        console.log('✅ Conectado\n');

        // Listar carpetas para confirmar
        console.log('📂 Verificando estructura...');
        const list = await client.list('/');
        const hasWWW = list.some(item => item.name === 'www');
        const hasPublicHTML = list.some(item => item.name === 'public_html');
        
        console.log(`   ${hasWWW ? '✅' : '❌'} Carpeta /www`);
        console.log(`   ${hasPublicHTML ? '✅' : '❌'} Carpeta /public_html\n`);

        const targetPath = hasWWW ? '/www/' : '/public_html/';
        console.log(`🎯 Subiendo a: ${targetPath}\n`);

        console.log('📤 Subiendo archivos...\n');

        console.log('📄 index.html');
        await client.uploadFrom('index.html', `${targetPath}index.html`);
        console.log('   ✅ Subido\n');

        console.log('📄 ads.txt');
        await client.uploadFrom('ads.txt', `${targetPath}ads.txt`);
        console.log('   ✅ Subido\n');

        console.log('═══════════════════════════════════════');
        console.log('✅ SUBIDO A LA CARPETA CORRECTA');
        console.log('═══════════════════════════════════════');
        console.log(`📁 Ruta: ${targetPath}`);
        console.log('🌐 URL: https://grower.blog');
        console.log('═══════════════════════════════════════\n');
        
    } catch (err) {
        console.error('❌ Error:', err.message);
    } finally {
        client.close();
    }
}

uploadToWWW();
