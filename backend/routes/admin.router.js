const express = require('express');
const router = express.Router();
const adminCltr = require('../controllers/admin.controller')

router.post('/login', adminCltr.loginAdmin);

module.exports = router;