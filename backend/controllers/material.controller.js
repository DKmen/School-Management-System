const Material = require('../models/Material');
const getError = require("../utils/dbErrorHandle");
module.exports = {
    
    getMaterial : async (req, res) => {
        try {
            const materials = await Material.find({}).populate(['class', 'subject', 'teacher']);
            return res.status(200).json({
                error : false,
                data : materials
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },
    getRelevenceMaterial : async (req, res) => {
        try {
            const classId = req.student.class
            const materials = await Material.find({class:classId}).populate(['class', 'subject', 'teacher']);
            return res.status(200).json({
                error : false,
                data : materials
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },

    getMaterialByClass : async (req, res) => {
        try {
            const {id} = req.params;
            const materials = await Material.find({class : {_id : id}}).populate(['class', 'subject', 'teacher']);
            return res.status(200).json({
                error : false,
                data : materials
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },

    getMaterialBySubject : async (req, res) => {
        try {
            const {id} = req.params;
            const materials = await Material.find({subject : { _id : id }}).populate(['class', 'subject', 'teacher']);
            return res.status(200).json({
                error : false,
                data : materials
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },

    getMaterialByTeacher : async (req, res) => {
        try {
            const id = req.teacher._id;
            const materials = await Material.find({teacher : id }).populate(['class', 'subject', 'teacher']);
            materials.fileData = undefined;
            return res.status(200).json({
                error : false,
                data : materials
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },
    getMaterialOnly : async (req, res) => {
        try {
            const id = req.params.id;
            const materials = await Material.findOne({_id:id,teacher:req.teacher._id});
            if(!materials){
                return res.status(400).json({
                    error: true,
                    message: "materail not found || You are not creator"
                })
            }
            else{
                res.set('Content-type','application/pdf');
                res.send(materials.fileData);
            }
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get material"
            })
        }
    },

    addMaterial : async (req, res) => {
        try {
            const {classId, subjectId, details, fileName} = req.body;
            const material = Material({
                class : classId,
                subject : subjectId,
                details : details,
                fileName : fileName,
                fileData : req.file.buffer,
                teacher : req.teacher._id
            })

            await material.save();
            return res.status(200).json({
                error : false,
                message : "Material added successfully."
            })
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not add material"
            })
        }
    },

    updateMaterial : async (req, res) => {
        try {
            const {id} = req.params;
            const teacherId = req.teacher._id;
            const {classId, subjectId, details, fileName} = req.body;
            const material = await Material.findOneAndUpdate({_id:id,teacher:teacherId},{class : classId,
                subject : subjectId,
                details : details,
                fileName : fileName,
                fileData : req.file.buffer,
                teacher : teacherId});
            return res.status(200).json({
                error : false,
                message : "Material updated successfully.",
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not updated material"
            })
        }
    },

    deleteMaterial : async (req, res) => {
        try {
            const {id} = req.params;
            const teacherId = req.teacher._id;
            await Material.findOneAndDelete({_id:id,teacher:teacherId})
            return res.status(200).json({
                error : false,
                message : "Material deleted successfully."
            });
        } catch (error) {
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not delete material"
            })
        }
    }
}