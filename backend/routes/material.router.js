const express = require('express');
const materialCtrl = require("../controllers/material.controller");
const router = express.Router();
// const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher')
const sauth = require('../middlewares/student')

router.get('/', materialCtrl.getMaterial);

router.get('/student', sauth,materialCtrl.getRelevenceMaterial);

router.get('/class/:id', materialCtrl.getMaterialByClass);

router.get('/subject/:id', materialCtrl.getMaterialBySubject);

router.get('/teacher/:id', tauth,materialCtrl.getMaterialByTeacher);

router.post('/',tauth,materialCtrl.addMaterial);

router.patch('/:id', tauth,materialCtrl.updateMaterial);

router.delete('/:id', tauth,materialCtrl.deleteMaterial);

module.exports = router;