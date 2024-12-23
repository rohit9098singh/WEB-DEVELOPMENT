import authSocket from './middlewares/authSocket.js';

const socketServer = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // Middleware for authenticating socket connections
  io.use((socket, next) => {
    authSocket(socket, next);
  });

  // Handle connections
  io.on('connection', (socket) => {
    console.log('User connected:', socket.user);
    console.log("user id", socket.id);
    
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.user);
    });

    // Additional socket events can go here
  });

  setInterval(() => {
    // emit online user 
  }, 1000 * 8);
};

// Use `export` instead of `module.exports`
export { socketServer };
