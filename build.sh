#!/bin/bash
echo "Starting build process..."

# Install dependencies for backend
echo "Installing backend dependencies..."
cd backend && npm install

# Install dependencies for frontend
echo "Installing frontend dependencies..."
cd ../frontend && npm install

# Fix permissions for react-scripts
echo "Fixing permissions for react-scripts..."
chmod +x node_modules/.bin/react-scripts

# Build the frontend
echo "Building frontend..."
npm run build

# Move build to backend public folder
echo "Moving build to backend public folder..."
cd ..
mv -f frontend/build backend/src/public

echo "Build completed successfully!"
