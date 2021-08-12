const express = require('express');
const http = require('http');
const cors = require('cors');

const itemsController = require('./controllers/items');
const ioItems = require('./socket/ioItems');
const PORT = 3001;

const app = express();
app.use(cors());

const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  }
});

ioItems(io);

app.use('/items', itemsController);

httpServer.listen(PORT, () => console.log(`Ouvindo na porta ${ PORT }`));
