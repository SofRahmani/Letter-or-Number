const fs = require('fs');
const path = require('path');

function generateRobots() {
  const robotsContent = `
  User-agent: *
  Disallow: /secret-page
  `;

  fs.writeFileSync(path.resolve('./public/robots.txt'), robotsContent);
}

generateRobots();