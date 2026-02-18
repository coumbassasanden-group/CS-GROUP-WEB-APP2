#!/bin/bash
set -e

PROJECT_DIR="/www/wwwroot/production/group-coumbassa-sanden"

echo "==> Pulling latest changes..."
cd "$PROJECT_DIR"
git pull origin main

echo "==> Installing dependencies..."
npm install

echo "==> Building static site..."
npm run generate

echo "==> Reloading Nginx..."
sudo systemctl reload nginx

echo "==> Deploy complete!"
