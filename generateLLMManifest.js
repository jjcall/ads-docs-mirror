const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'jjcall';
const GITHUB_REPO = 'ads-docs-mirror';
const BRANCH = 'main'; // or 'main', 'trunk', etc.

const DOCS_DIR = path.join(__dirname, 'docs');
const OUT_FILE = path.join(__dirname, 'llms.txt');

(async () => {
  const files = fs.readdirSync(DOCS_DIR)
    .filter(file => file.endsWith('.md'));

  const urls = files.map(file =>
    `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${BRANCH}/docs/${file}`
  );

  fs.writeFileSync(OUT_FILE, urls.join('\n') + '\n');
  console.log(`✅ llms.txt generated with ${files.length} entries.`);
})();