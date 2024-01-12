const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["INC", "EXP"]
  },
 
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
