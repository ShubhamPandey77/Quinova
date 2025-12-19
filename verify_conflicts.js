import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function searchForConflictMarkers(dir) {
    const files = fs.readdirSync(dir, { recursive: true });
    let found = false;

    files.forEach(file => {
        if (file.endsWith('.jsx') || file.endsWith('.js')) {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath, 'utf-8');

            if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>> ') || content.includes('=======')) {
                console.log('Found conflict marker in:', filePath);
                found = true;
            }
        }
    });

    if (!found) {
        console.log('✓ No merge conflict markers found!');
    }
}

searchForConflictMarkers(path.join(__dirname, 'src'));
