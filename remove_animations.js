import fs from 'fs';

const files = [
    'src/pages/home/Home.jsx',
    'src/pages/services/Services.jsx',
    'src/pages/contactUs/ContactUs.jsx',
    'src/components/Footer.jsx',
    'src/components/Navbar.jsx',
    'src/components/Content.jsx',
    'src/pages/aboutUs/AboutUs.jsx'
];

const animationRemovals = [
    // Remove animation classes from elements
    [/\s+animate-fade-in-up(\s+|\})/g, '$1'],
    [/\s+animate-fade-in(\s+|\})/g, '$1'],
    [/\s+animate-slide-in-left(\s+|\})/g, '$1'],
    [/\s+animate-slide-in-right(\s+|\})/g, '$1'],
    [/\s+animate-scale-in(\s+|\})/g, '$1'],
    [/\s+animate-bounce-in(\s+|\})/g, '$1'],
    [/\s+animate-mobile-slide(\s+|\})/g, '$1'],
    [/\s+animate-modal-fade-in(\s+|\})/g, '$1'],
    [/\s+animate-modal-bounce(\s+|\})/g, '$1'],
    [/\s+animate-pulse-glow(\s+|\})/g, '$1'],
    [/\s+animate-spin-slow(\s+|\})/g, '$1'],
    [/\s+animate-wiggle(\s+|\})/g, '$1'],
    [/\s+animate-bounce-slow(\s+|\})/g, '$1'],
    [/\s+animate-gradient-x(\s+|\})/g, '$1'],
    [/\s+animation-delay-\d+(\s+|\})/g, '$1'],
    [/\s+animate-backdrop-blur(\s+|\})/g, '$1'],
    // Remove animation delays from inline styles
    [/\s+style=\{\{\s*animationDelay:[^}]*\}\}/g, ''],
    // Simplify transition durations
    [/duration-500/g, 'duration-300'],
    [/duration-300/g, 'duration-300'],
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        animationRemovals.forEach(([pattern, replacement]) => {
            content = content.replace(pattern, replacement);
        });
        
        fs.writeFileSync(file, content);
        console.log(`Cleaned animations: ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});

console.log('\nAnimation cleanup complete!');
