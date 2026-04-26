"""Strip ALL inline <nav> from remaining pages. Broader pattern matching."""
import os, re

SRC = os.path.join(os.path.dirname(__file__), '..', 'src', 'app')
SKIP_DIRS = {'(dashboard)', '(admin)', 'auth', 'api', 'node_modules', '.next'}
NAV_RE = re.compile(r'(\s*<nav\b[^>]*>.*?</nav>\s*)', re.DOTALL)

count = 0
for root, dirs, files in os.walk(SRC):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for f in files:
        if not f.endswith('.tsx'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        
        original = content
        for m in NAV_RE.finditer(content):
            nav = m.group(1)
            # Remove any nav that has AIBJJ branding OR signup links  
            if ('BJJ' in nav or 'signup' in nav or 'Start Free' in nav or 
                'Get Started' in nav or 'font-black' in nav or 'Academies' in nav):
                content = content.replace(nav, '\n')
        
        if content != original:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(content)
            count += 1
            print(f"Fixed: {os.path.relpath(path, SRC)}")

print(f"\nTotal: {count}")
