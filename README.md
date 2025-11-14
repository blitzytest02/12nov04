# Node.js Express Tutorial

Simple tutorial project demonstrating Express.js framework integration.

## Description
This project showcases how to build a basic web server using Express.js with multiple endpoints.

## Prerequisites
- Node.js (v20.x or higher)
- npm (v10.x or higher)

## Installation
```bash
npm install
```

## Usage
```bash
npm start
```

The server will start on http://localhost:3000

## API Endpoints

### GET /
Returns: "Hello world"

Example:
```bash
curl http://localhost:3000/
```

### GET /evening
Returns: "Good evening"

Example:
```bash
curl http://localhost:3000/evening
```

## Project Structure
- `index.js` - Main Express application
- `package.json` - Project dependencies and scripts

## Technologies
- Node.js
- Express.js 4.x