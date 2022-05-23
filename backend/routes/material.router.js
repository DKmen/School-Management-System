const express = require('express');
const materialCtrl = require("../controllers/material.controller");
const router = express.Router();
// const auth = require('../middlewares/authentication')
const tauth = require('../middlewares/teacher')
const sauth = require('../middlewares/student')
const multer = require('multer');
const upload = multer({
     fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(pdf)$/)){
            return cb(new Error('please upload pdf file'))
        }
        cb(undefined,true);
     }
});
router.get('/', materialCtrl.getMaterial);

router.get('/file/:id',tauth,materialCtrl.getMaterialOnly);

router.get('/student', sauth,materialCtrl.getRelevenceMaterial);

router.get('/class/:id', materialCtrl.getMaterialByClass);

router.get('/subject/:id', materialCtrl.getMaterialBySubject);

router.get('/teacher', tauth,materialCtrl.getMaterialByTeacher);

router.post('/',tauth,upload.single('file'),materialCtrl.addMaterial);

router.patch('/:id', tauth,upload.single('file'),materialCtrl.updateMaterial);

router.delete('/:id', tauth,materialCtrl.deleteMaterial);

module.exports = router;