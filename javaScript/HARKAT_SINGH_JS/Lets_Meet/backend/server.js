import app from './app.js'; // Import the app from app.js
import dotenv from "dotenv";
dotenv.config();
import { socketServer } from './socketServer.js'; // Import the socketServer function

const PORT = process.env.PORT || 3000;

// Start the HTTP server
const server = app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});

// Pass the server instance to socketServer
socketServer(server);

// Handle SIGINT for graceful shutdown
process.on('SIGINT', () => {
   console.log('Shutting down server...');
   server.close(() => process.exit(0));
});
