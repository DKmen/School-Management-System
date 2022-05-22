const express = require('express');
const router = express.Router();
const studentCtrl = require("../controllers/student.controller");
const sauth = require('../middlewares/student')
const auth = require('../middlewares/authentication')

router.get('/',auth ,studentCtrl.getStudentsByClass);

router.get('/stdid',auth, studentCtrl.getStudentByStudentID);

router.get('/getAttendence',sauth,studentCtrl.getAttendence)

router.post('/', auth,studentCtrl.addStudent);

router.post('/login',studentCtrl.loginStudent)

router.patch('/:id',auth,studentCtrl.updateStudent);

router.delete('/:id',auth,studentCtrl.deleteStudent);

router.post('/fees',auth,studentCtrl.payFees);

module.exports = router;