import jwt from 'jsonwebtoken';

const verifyTokenSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;

  if (!token) {
    const socketError = new Error('Authentication token is missing.');
    return next(socketError);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded; // Attach the decoded user to the socket object
    next();
  } catch (error) {
    const socketError = new Error('Invalid or expired token.');
    return next(socketError);
  }
};
export default verifyTokenSocket;