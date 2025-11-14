# Node.js Express Tutorial

Simple tutorial project demonstrating Express.js framework integration.

## Description

This project showcases how to build a basic web server using Express.js with multiple endpoints. It serves as an educational resource for developers learning Node.js and Express.js fundamentals.

## Features

- Express.js web framework integration
- Two API endpoints demonstrating routing capabilities
- Clean, tutorial-friendly code structure
- Environment-aware configuration
- Easy setup and deployment

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

Returns a "Hello world" greeting.

**Example:**
```bash
curl http://localhost:3000/
```

**Response:**
```
Hello world
```

### GET /evening

Returns a "Good evening" greeting.

**Example:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

## Project Structure

```
.
├── index.js          - Main Express application entry point
├── package.json      - Project dependencies and scripts
├── .gitignore       - Git exclusion patterns
└── README.md        - Project documentation (this file)
```

## Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js 4.x** - Fast, unopinionated, minimalist web framework

## Development

To run the application in development mode:

```bash
npm run dev
```

## License

ISC