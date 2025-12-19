import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
    'src/pages/home/Home.jsx',
    'src/pages/aboutUs/AboutUs.jsx',
    'src/pages/services/Services.jsx',
    'src/pages/contactUs/ContactUs.jsx'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);

    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    let cleaned = [];
    let inConflict = false;
    let keepHead = true;

    for (const line of lines) {
        if (line.startsWith('<<<<<<< HEAD')) {
            inConflict = true;
            keepHead = true;
        } else if (line.startsWith('=======')) {
            keepHead = false;
        } else if (line.startsWith('>>>>>>> ')) {
            inConflict = false;
            keepHead = true;
        } else if (!inConflict) {
            cleaned.push(line);
        } else if (keepHead) {
            cleaned.push(line);
        }
    }

    fs.writeFileSync(filePath, cleaned.join('\n'), 'utf-8');
    console.log(`Cleaned: ${file}`);
});

console.log('Done!');
