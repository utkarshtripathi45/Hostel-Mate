const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user:      { type: String, required: true },  // "Name (Hostel, Room X)"
  message:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Complaint', complaintSchema);
