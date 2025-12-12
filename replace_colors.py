import os

files = [
    'src/pages/home/Home.jsx',
    'src/pages/services/Services.jsx',
    'src/pages/contactUs/ContactUs.jsx',
    'src/components/Footer.jsx',
    'src/components/Content.jsx'
]

replacements = [
    ('from-emerald-600', 'from-blue-600'),
    ('to-emerald-600', 'to-blue-600'),
    ('from-emerald-500', 'from-blue-500'),
    ('emerald-600', 'blue-600'),
    ('emerald-500', 'blue-500'),
    ('emerald-50', 'blue-50'),
    ('emerald-100', 'blue-100'),
    ('emerald-700', 'blue-700'),
    ('teal-600', 'indigo-600'),
    ('teal-50', 'indigo-50'),
    ('teal-500', 'indigo-500'),
    ('green-600', 'indigo-600'),
    ('green-500', 'indigo-500'),
    ('cyan-600', 'indigo-700'),
    ('lime-500', 'blue-400'),
    ('#10b981', '#2563eb'),
    ('#14b8a6', '#4f46e5'),
    ('#d1fae5', '#bfdbfe'),
    ('rgba(16, 185, 129', 'rgba(37, 99, 235'),
    ('rgba(20, 184, 166', 'rgba(79, 70, 229'),
    ('rgba(5, 150, 105', 'rgba(29, 78, 216'),
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
        
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated: {file}")
