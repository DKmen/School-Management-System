const express = require('express');
const router = express.Router();
const resultCtrl = require('../controllers/result.controller');
const auth = require('../middlewares/authentication')
const sauth = require('../middlewares/student')

router.get("/", resultCtrl.getResults);

router.get("/exam/:id", resultCtrl.getResultByExamId);

router.get("/student/:id", resultCtrl.getResultByStudentId);

router.post("/", resultCtrl.addResult);

router.patch("/:id", resultCtrl.updateResult);

router.delete("/:id", resultCtrl.deleteResult);

module.exports = router