import fs from 'fs';

let content = fs.readFileSync('src/app/services/[slug]/page.tsx', 'utf8');
content = content.replace(/\s*image:\s*".*?",\n/g, '\n');
fs.writeFileSync('src/app/services/[slug]/page.tsx', content);

let content2 = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');
content2 = content2.replace(/\s*image:\s*".*?",\n/g, '\n');
fs.writeFileSync('src/components/ServicesSection.tsx', content2);

let content3 = fs.readFileSync('src/components/ui/feature-section-with-grid.tsx', 'utf8');
content3 = content3.replace(/\s*image:\s*".*?",\n/g, '\n');
fs.writeFileSync('src/components/ui/feature-section-with-grid.tsx', content3);

console.log("Images removed from objects");
