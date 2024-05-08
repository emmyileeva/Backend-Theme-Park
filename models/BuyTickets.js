
const mongoose = require('mongoose');

const buyTicketsSchema = new mongoose.Schema({
  ticketType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  purchaseDate: {
    type: Date,
    default: Date.now
  }
});

const BuyTickets = mongoose.model('BuyTickets', buyTicketsSchema);

module.exports = BuyTickets;
