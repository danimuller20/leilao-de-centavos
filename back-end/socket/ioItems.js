const itemModels = require('../models/item');

function ioItems(io) {
  io.on('connection', (socket) => {
    socket.on('receiveBid', async (id) => {
      await itemModels.increaseById(id)
      const bidProduct = await itemModels.getById(item.id);

      if (bidProduct.price >= 100) {
        return io.emit('closeOffer', bidProduct);
      }

      io.emit('bidReceived', bidProduct);
    })
  })
};

module.exports = ioItems;
