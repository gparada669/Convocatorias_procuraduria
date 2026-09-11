const https = require('https');
const fs = require('fs');
const path = require('path');

const fetchPage = (page, size = 100) => {
  return new Promise((resolve, reject) => {
    const url = `https://meritoconstruyendoexcelencia.com.co/inscripciones/publico-c/convocatorias?soloActivas=false&page=${page}&size=${size}&idCondicionExcluir=SOLO_DISCAPACITADOS`;
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

(async () => {
  console.log('🌐 Conectando a la API oficial de la PGN Colombia...');
  let apiItems = [];
  let page = 0;
  
  while (true) {
    try {
      const response = await fetchPage(page, 100);
      const items = response.convocatorias || [];
      const total = response.totalElementos || 318;
      
      if (items.length === 0) break;
      apiItems = apiItems.concat(items);
      console.log(`  📥 Cargadas ${apiItems.length} de ${total} convocatorias desde el servidor...`);
      
      if (apiItems.length >= total) break;
      page++;
    } catch (err) {
      console.error('❌ Error consultando la API:', err.message);
      break;
    }
  }

  if (apiItems.length > 0) {
    const jsonPath = path.join(__dirname, 'convocatorias.json');
    let existingData = [];
    if (fs.existsSync(jsonPath)) {
      try {
        existingData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      } catch (e) {}
    }

    const richMap = {};
    existingData.forEach(item => {
      const code = item.codigo || item.codigoConvocatoria;
      if (code) richMap[String(code).trim()] = item;
    });

    const updatedData = apiItems.map(apiItem => {
      const code = String(apiItem.codigoConvocatoria || apiItem.codigo || '').trim();
      const base = richMap[code] || apiItem;
      return {
        ...base,
        codigo: code,
        codigoConvocatoria: code,
        plazas: apiItem.numeroPlazas !== undefined ? apiItem.numeroPlazas : (base.plazas || 0),
        numeroPlazas: apiItem.numeroPlazas !== undefined ? apiItem.numeroPlazas : (base.numeroPlazas || 0),
        inscritos: apiItem.totalInscritos !== undefined ? apiItem.totalInscritos : (base.inscritos || 0),
        totalInscritos: apiItem.totalInscritos !== undefined ? apiItem.totalInscritos : (base.totalInscritos || 0),
        salario: apiItem.salario || base.salario || 0
      };
    });

    fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2), 'utf-8');
    console.log(`💾 Respaldo guardado en: convocatorias.json (${updatedData.length} ítems)`);

    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
      let htmlContent = fs.readFileSync(indexPath, 'utf-8');
      const newJsonString = JSON.stringify(updatedData);
      htmlContent = htmlContent.replace(
        /<script id="data" type="application\/json">.*?<\/script>/s,
        `<script id="data" type="application/json">${newJsonString}</script>`
      );
      fs.writeFileSync(indexPath, htmlContent, 'utf-8');
      console.log(`🎉 ¡ÉXITO TOTAL! index.html fue actualizado con las ${updatedData.length} convocatorias.`);
    }
  }
})();
