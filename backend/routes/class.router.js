const express = require('express');
const router = express.Router();
const classCtrl = require("../controllers/class.controller");
const auth = require('../middlewares/authentication')

router.get('/subjects',auth,classCtrl.getClassWithDetails);

router.get('/',auth,classCtrl.getClass);

router.get('/:id',auth,classCtrl.getClassById);

router.post('/',auth,classCtrl.addClass);

router.patch("/:id",auth,classCtrl.updateClass);

router.delete("/:id",auth,classCtrl.deleteClass);


module.exports = router;