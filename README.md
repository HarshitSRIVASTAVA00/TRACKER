# Real-Time Device Tracker 🚀

A real-time location tracking web application built with Node.js, Express, Socket.io, and Leaflet.js, inspired by live-tracking features used in delivery applications.

## Features
* **Live Geolocation Tracking:** Utilizes the HTML5 Geolocation API (`watchPosition`) to continuously monitor and transmit device coordinates with high accuracy.
* **Real-Time Communication:** Powered by Socket.io for low-latency bidirectional event broadcasting.
* **Interactive Mapping:** Renders dynamic maps and open-source tile layers using Leaflet.js and OpenStreetMap.
* **Multi-User Support:** Automatically creates, updates, and removes independent markers for multiple clients or browser tabs simultaneously.
* **Disconnection Cleanup:** Cleanly purges markers from the map view when a user closes their connection.

## Tech Stack
* **Backend:** Node.js, Express, Socket.io, HTTP module
* **Frontend:** HTML5, CSS3, Vanilla JavaScript, EJS (Embedded JavaScript templates)
* **Library/CDNs:** Leaflet.js

## Available NPM Commands
* **Start Server:** Runs the application in production mode using `node app.js`.
  ```bash
  npm start

## Project Directory Structure
```text
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   └── index.ejs
├── app.js
├── package-lock.json
└── package.json
