/* eslint-disable @typescript-eslint/no-require-imports */

const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  // Corporate Logos
  { url: 'https://codicetech.com/wp-content/uploads/2024/04/CODICE-Resized-New.png', dir: 'brand', name: 'codice-logo-full.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2024/04/CODICE-Logo-Resized-New.png', dir: 'brand', name: 'codice-logo-mark.png' },

  // Product Logos
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/celercase-1-Edited-640x489@2x.png', dir: 'products', name: 'permione-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/celermed-1-Edited-640x489@2x.png', dir: 'products', name: 'fortimind-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2024/07/CelerKost-4-Edited-640x489@2x.png', dir: 'products', name: 'celerkost-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/CodicePay-1-Edited-640x489@2x.png', dir: 'products', name: 'codicepay-logo.png' },

  // Leadership Headshots
  { url: 'https://codicetech.com/wp-content/uploads/2024/04/Emmash-Sudusinghe-1.png', dir: 'team', name: 'emmash-sudusinghe.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2024/04/Maneul.png', dir: 'team', name: 'manuel.png' },

  // Client & Partner Logos
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DGS-Logo.png', dir: 'clients', name: 'dgs-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DCPS-Logo.png', dir: 'clients', name: 'dcps-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DHS-Logo.png', dir: 'clients', name: 'dhs-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/OCTO-Logo.png', dir: 'clients', name: 'octo-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DC-Water-Logo.png', dir: 'clients', name: 'dc-water-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DHCF-Logo.png', dir: 'clients', name: 'dhcf-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/OAG-Logo.png', dir: 'clients', name: 'oag-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DOB-Logo.png', dir: 'clients', name: 'dob-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/DDOT-Logo.png', dir: 'clients', name: 'ddot-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/Geographic-Solutions-logo.png', dir: 'clients', name: 'geographic-solutions-logo.png' },
  { url: 'https://codicetech.com/wp-content/uploads/2026/03/Public-Consulting-Group-Logo.png', dir: 'clients', name: 'pcg-logo.png' },
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  const baseDir = path.join(__dirname, '..', 'public', 'images');
  
  for (const asset of assets) {
    const dirPath = path.join(baseDir, asset.dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const dest = path.join(dirPath, asset.name);
    console.log(`Downloading ${asset.url} to ${dest}...`);
    try {
      await download(encodeURI(asset.url), dest);
      console.log(`Successfully downloaded ${asset.name}`);
    } catch (err) {
      console.error(`Error downloading ${asset.name}: ${err.message}`);
    }
  }
}

run();
