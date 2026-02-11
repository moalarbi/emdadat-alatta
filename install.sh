#!/bin/bash
set -e

echo "Installing dependencies for EMDADAT ALATTA..."
cd "$(dirname "$0")"

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "Dependencies already installed."
    exit 0
fi

# Install dependencies
echo "Running npm install..."
npm install --legacy-peer-deps

echo "Installation complete!"
echo ""
echo "To start development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
