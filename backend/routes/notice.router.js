const express = require('express');
const router = express.Router();
const noticeCltr = require('../controllers/notice.controller')
const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher')
const sauth = require('../middlewares/student')

router.get('/', noticeCltr.getallNotices); //get notices by anyone

router.get('/student', sauth, noticeCltr.getallRelevenceNoticesStudent); //get notices by anyone

router.get('/teacher', tauth, noticeCltr.getallNoticesCreatedByHim); //get notices which is created by him (teacher)

router.get('/:id', noticeCltr.getNoticeById); //get notices by anyonezz

router.post('/admin', auth, noticeCltr.addNotice); //create notices by admin

router.post('/teacher', tauth, noticeCltr.addNoticeByTeacher); //create notices by teacher

router.patch('/admin/:id', auth, noticeCltr.updateNoticeByAdmin)

router.patch('/teacher/:id', tauth, noticeCltr.updateNoticeByTeacher)

router.delete('/admin/:id', auth, noticeCltr.deleteNoticeByAdmin)

router.delete('/teacher/:id', tauth, noticeCltr.deleteNoticeByTeacher)

module.exports = router;