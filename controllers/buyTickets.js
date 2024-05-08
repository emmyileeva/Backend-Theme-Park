
const BuyTickets = require('../models/BuyTickets');


exports.purchaseTickets = async (req, res) => {
  try {
    const { tickets, totalPrice } = req.body;
    
    
    await Promise.all(tickets.map(async ticket => {
      const newTicketPurchase = new BuyTickets({
        ticketType: ticket.type,
        quantity: ticket.quantity,
        totalPrice: ticket.price * ticket.quantity
      });
      await newTicketPurchase.save();
    }));

   
    res.status(201).json({ message: 'Tickets purchased successfully' });
  } catch (error) {
    console.error('Error purchasing tickets:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
