import fs from 'fs';

// Fix Footer.jsx - remove unused navigate
let footer = fs.readFileSync('src/components/Footer.jsx', 'utf8');
footer = footer.replace(/function Footer\(\{ navigate = \(\) => \{\} \}\)/, 'function Footer()');
fs.writeFileSync('src/components/Footer.jsx', footer);
console.log('Fixed Footer.jsx');

// Fix Services.jsx - remove unused navigate
let services = fs.readFileSync('src/pages/services/Services.jsx', 'utf8');
services = services.replace(/function Services\(\{ navigate = \(\) => \{\} \}\)/, 'function Services()');
services = services.replace(/const { navigate = \(\) => \{\} \} = props;?/, '');
fs.writeFileSync('src/pages/services/Services.jsx', services);
console.log('Fixed Services.jsx');

// Fix ContactUs.jsx - remove unused navigate
let contactUs = fs.readFileSync('src/pages/contactUs/ContactUs.jsx', 'utf8');
contactUs = contactUs.replace(/function ContactUs\(\{ navigate = \(\) => \{\} \}\)/, 'function ContactUs()');
fs.writeFileSync('src/pages/contactUs/ContactUs.jsx', contactUs);
console.log('Fixed ContactUs.jsx');

console.log('Linting fixes applied!');
