const Subject = require('../models/Subject')
const Teacher = require('../models/Teacher')
const Class = require('../models/Class');
const getError = require("../utils/dbErrorHandle");

module.exports = {

    getSubjectById: async (req, res) => {
        try {
            const subjects = await Subject.find({ Class_Id: req.params.id }).populate('Class_Id');
            return res.status(200).json({
                error: false,
                data: subjects
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    getSubject: async (req, res) => {
        try {
            const subjects = await Subject.find({}).populate('Class_Id');;
            return res.status(200).json({
                error: false,
                data: subjects
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    getSubjectWithDetails: async (req, res) => {
        let detailSubject = [];
        try {
            const subject = await Subject.find({}).populate('Class_Id');
            console.log("this is detailsubject ", detailSubject)
            await subject.map(async (sub) => {
                const currId = sub._id;
                const classes = sub.Class_Id
                const teachers = await Teacher.find({ 'Subjects_Id.Subject_Id': currId })
                await detailSubject.push({ subName: sub.Subject_Name, classes: classes, teachers: teachers })
            })
            setTimeout(() => {
                return res.status(200).json({
                    error: false,
                    data: detailSubject
                })
            }, 40)
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    addSubject: async (req, res) => {
        try {
            const { subName, Class_Id } = req.body;
            const newSubject = Subject({
                Subject_Name: subName,
                Class_Id: Class_Id
            });

            await newSubject.save()

            return res.status(200).json({
                error: false,
                message: "Subject created successfully",
                data: newSubject
            });

        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not create subject."
            })
        }
    },

    updateSubject: async (req, res) => {
        try {
            const { id } = req.params;
            const { Subject_Name, Class_Id } = req.body;
            const updatedClass = await Subject.findByIdAndUpdate(id, {
                Subject_Name: Subject_Name,
                Class_Id: Class_Id
            });
            return res.status(201).json({
                error: false,
                message: "Class updated successfully",
                data: updatedClass
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    deleteSubject: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedClass = await Subject.findByIdAndDelete(id);
            return res.status(201).json({
                error: false,
                message: "Class deleted successfully",
                data: updatedClass
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not delete class."
            })
        }
    }

}

//