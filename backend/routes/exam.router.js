const express = require('express');
const examCtrl = require("../controllers/exam.controller");
const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher')
const sauth = require('../middlewares/student')
const router = express.Router();

router.get('/student',sauth,examCtrl.getRelevenceExams);

router.get('/teacher',tauth,examCtrl.getCreatedExamsByTeacher);

router.get('/',auth,examCtrl.getAllExams);

router.get('/:id', examCtrl.getExamById);

router.get('/class/:id', examCtrl.getExamsByClass);

router.post('/teacher', tauth,examCtrl.addExamTeacher);

router.post('/admin', auth,examCtrl.addExamAdmin);

router.patch('/admin/:id',auth,examCtrl.updateExamByAdmin);

router.patch('/teacher/:id', tauth,examCtrl.updateExamByTeacher);

router.delete('/admin/:id',auth,examCtrl.deleteExam);

router.delete('/teacher/:id', tauth,examCtrl.deleteExamByTeacher);

module.exports = router;