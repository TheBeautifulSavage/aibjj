"""Strip inline <nav> elements from all public page.tsx files."""
import os, re

SRC = os.path.join(os.path.dirname(__file__), '..', 'src', 'app')
SKIP_DIRS = {'(dashboard)', '(admin)', 'auth', 'api', 'node_modules', '.next'}

NAV_RE = re.compile(r'(\s*<nav\b[^>]*>.*?</nav>\s*)', re.DOTALL)

count = 0
for root, dirs, files in os.walk(SRC):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        if f != 'page.tsx':
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        original = content
        for m in NAV_RE.finditer(content):
            nav_block = m.group(1)
            if 'signup' in nav_block and ('BJJ' in nav_block or 'font-black' in nav_block):
                content = content.replace(nav_block, '\n')
        
        if content != original:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            count += 1

print(f"Stripped inline navs from {count} files")
