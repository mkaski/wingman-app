import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, JSON.parse(timestamp)));
  socket.emit('subscribeToTimer', 400);
}
export { subscribeToTimer };
