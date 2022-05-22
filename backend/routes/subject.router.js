const express = require('express');
const router = express.Router();
const subctrl = require("../controllers/subject.controller");
const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher');

router.get('/', auth, subctrl.getSubject);

router.get('/class', tauth, subctrl.getSubject);

router.get('/class/:id', tauth, subctrl.getSubjectById);

router.get('/details', auth, subctrl.getSubjectWithDetails)

router.post('/', auth, subctrl.addSubject);

router.patch('/:id', auth, subctrl.updateSubject)

router.delete('/:id', auth, subctrl.deleteSubject)

module.exports = router;