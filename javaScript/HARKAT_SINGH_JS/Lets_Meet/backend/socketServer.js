import { Server } from 'socket.io'; // Import the Socket.IO Server class
import authSocket from './middlewares/authSocket.js'; // Middleware for authentication

const socketServer = (server) => {
  // Create a new Socket.IO instance using the imported Server class
  const io = new Server(server, {
    cors: {
      origin: '*', // Allow all origins
      methods: ['GET', 'POST'], // Allow GET and POST methods
    },
  });

  // Middleware for authenticating socket connections
  io.use((socket, next) => {
    authSocket(socket, next); // Use the custom authentication middleware
  });

  // Handle connections
  io.on('connection', (socket) => {
    console.log('User connected:', socket.user);
    console.log('Socket ID:', socket.id);

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.user);
    });

    // Additional socket events can go here
  });

  // Example: Emit events at regular intervals (e.g., online users)
  setInterval(() => {
    // Replace with actual implementation to emit online users or other periodic events
    io.emit('onlineUsers', { message: 'Broadcasting online users' });
  }, 1000 * 8); // Every 8 seconds
};

// Export the function as a named export
export { socketServer };
