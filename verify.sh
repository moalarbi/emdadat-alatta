#!/bin/bash
set -e

echo "Verifying EMDADAT ALATTA project structure..."
cd "$(dirname "$0")"

# Check required files
files=(
    "package.json"
    "next.config.js"
    "tsconfig.json"
    "tailwind.config.ts"
    "src/app/page.tsx"
    "src/app/layout.tsx"
    "src/app/globals.css"
    "src/data/conversions.ts"
    "src/lib/utils.ts"
)

all_good=true
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ $file"
    else
        echo "✗ $file (missing)"
        all_good=false
    fi
done

if [ "$all_good" = true ]; then
    echo ""
    echo "All required files present!"
    echo ""
    echo "Next steps:"
    echo "1. Run: npm install"
    echo "2. Run: npm run dev"
    echo "3. Open: http://localhost:3000/emdadat-alatta"
else
    echo ""
    echo "Some files are missing!"
    exit 1
fi
