const express = require('express');
const Society = require('../models/Society');
const { auth, adminOnly } = require('../middleware/auth');
const router = express.Router();

// GET all societies (any logged-in user)
router.get('/', auth, async (req, res) => {
  try {
    const societies = await Society.find().sort({ createdAt: -1 });
    res.json(societies);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// POST create society (admin only)
router.post('/', auth, adminOnly, async (req, res) => {
  try {
    const { name, head, contact, logoUrl } = req.body;
    if (!name || !head) return res.status(400).json({ message: 'Name and head are required' });
    const doc = await Society.create({ name, head, contact, logoUrl });
    res.status(201).json(doc);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// PUT update society (admin only)
router.put('/:id', auth, adminOnly, async (req, res) => {
  try {
    const doc = await Society.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// DELETE society (admin only)
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    await Society.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;
