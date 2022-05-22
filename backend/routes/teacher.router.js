const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teacher.controller')
const tauth = require('../middlewares/teacher')
const auth = require('../middlewares/authentication')

router.get('/me',tauth, teacherCtrl.getTeacherProfile);

router.get('/',auth, teacherCtrl.getTeachers);

router.post('/',auth,teacherCtrl.addTeacher);

router.post('/login',teacherCtrl.loginTeacher)

router.post('/logout',teacherCtrl.logoutTeacher)

router.post('/logoutAll',teacherCtrl.logoutTeacherAll)

router.post('/attendence',tauth,teacherCtrl.postAttendence)

router.patch('/:id',auth,teacherCtrl.updateTeacher)

router.delete('/:id',auth,teacherCtrl.deleteTeacher)

module.exports = router;