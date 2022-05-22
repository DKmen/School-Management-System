const express = require('express');
const router = express.Router();
const subctrl = require("../controllers/subject.controller");
const auth = require('../middlewares/authentication')
router.get('/', auth,subctrl.getSubject);

router.get('/details',auth,subctrl.getSubjectWithDetails)

router.get('/:id',auth,subctrl.getSubjectById)

router.post('/', auth,subctrl.addSubject);

router.patch('/:id',auth,subctrl.updateSubject)

router.delete('/:id',auth,subctrl.deleteSubject)

module.exports = router;