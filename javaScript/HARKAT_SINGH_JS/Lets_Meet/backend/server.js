import app from './app.js';  // Import the app from app.js
import dotenv from "dotenv";
dotenv.config();
import { socketServer } from './socketServer.js';


const PORT = process.env.PORT || 3000;

socketServer.registerSocketServer()


// Store the server instance
const server = app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});

// Handle SIGINT for graceful shutdown
process.on('SIGINT', () => {
   console.log('Shutting down server...');
   server.close(() => process.exit(0));
});
