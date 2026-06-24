const express = require('express');
const Complaint = require('../models/Complaint');
const { auth, adminOnly } = require('../middleware/auth');
const router = express.Router();

// GET all complaints (admin only)
router.get('/', auth, adminOnly, async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// POST submit complaint (any logged-in user)
router.post('/', auth, async (req, res) => {
  try {
    const { name, hostel, room, message } = req.body;
    if (!name || !hostel || !room || !message) return res.status(400).json({ message: 'All fields required' });
    const user = `${name.trim()} (${hostel.trim()}, Room ${room.trim()})`;
    const doc = await Complaint.create({ user, message });
    res.status(201).json(doc);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// DELETE complaint (admin only)
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;
