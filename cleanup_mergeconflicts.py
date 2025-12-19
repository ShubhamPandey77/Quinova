import os
import re

files_to_clean = [
    "src/pages/home/Home.jsx",
    "src/pages/aboutUs/AboutUs.jsx",
    "src/pages/services/Services.jsx",
    "src/pages/contactUs/ContactUs.jsx"
]

for file_path in files_to_clean:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    cleaned_lines = []
    in_conflict = False
    keep_head = True

    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            keep_head = True
        elif line.startswith('======='):
            keep_head = False
        elif line.startswith('>>>>>>> '):
            in_conflict = False
            keep_head = True
        elif not in_conflict:
            cleaned_lines.append(line)
        elif keep_head:
            cleaned_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(cleaned_lines)

    print(f"Cleaned: {file_path}")

print("Done!")
