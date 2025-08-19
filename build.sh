#!/bin/bash
set -e

echo "Starting Vercel build process..."

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm ci --production=false

# Fix react-scripts permissions
echo "Fixing react-scripts permissions..."
chmod +x node_modules/.bin/react-scripts

# Build the frontend
echo "Building frontend..."
npm run build

# Move build to expected location
echo "Build completed successfully!"
