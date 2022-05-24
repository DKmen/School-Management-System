const express = require('express');
const router = express.Router();
const classCtrl = require("../controllers/class.controller");
const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher')

router.get('/', auth, classCtrl.getClass);

router.get('/classes/admin', auth, classCtrl.getClassWithDetails);

router.get('/classes/teacher', tauth, classCtrl.getClassWithDetails);

router.post('/', auth, classCtrl.addClass);

router.patch("/:id", auth, classCtrl.updateClass);

router.delete("/:id", auth, classCtrl.deleteClass);


module.exports = router;