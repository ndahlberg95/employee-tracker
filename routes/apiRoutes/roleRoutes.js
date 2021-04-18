const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all roles
router.get('/roles', (req, res) => {
  const sql = `SELECT * FROM roles`; //displays title, role_id, department_id, and salary

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

module.exports = router;
