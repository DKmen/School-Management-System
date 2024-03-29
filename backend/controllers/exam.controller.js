const Exam = require("../models/Exam");
const getError = require("../utils/dbErrorHandle");
const mongoose = require('mongoose');
const Teacher = require("../models/Teacher");
const Class = require("../models/Class");
const Subject = require("../models/Subject");

module.exports = {

    addExamTeacher: async (req, res) => {
        try {
            const teacherId = req.teacher._id;
            const {
                classId,
                startDate,
                endDate,
                exams
            } = req.body;
            let sd = new Date(startDate);
            let ed = new Date(endDate);
            if (sd.getTime() > ed.getTime()) {
                return res.status(400).json({
                    error: true,
                    message: "Please enter proper dates."
                })
            }

            const exam = Exam({
                teacher: teacherId,
                class: classId,
                startDate: startDate,
                endDate: endDate,
                exams: exams
            });
            await exam.save();
            const teacher = await Teacher.findById(exam.teacher);
            return res.status(200).json({
                error: false,
                message: {
                    ...exam,
                    teacher: teacher
                }
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not schedule exam."
            })
        }
    },
    addExamAdmin: async (req, res) => {
        try {
            const teacherId = mongoose.Types.ObjectId('6283568102b602f7139d84b8');
            const {
                classId,
                startDate,
                endDate,
                exams
            } = req.body;
            let sd = new Date(startDate);
            let ed = new Date(endDate);
            if (sd.getTime() > ed.getTime()) {
                return res.status(400).json({
                    error: true,
                    message: "Please enter proper dates."
                })
            }

            const exam = Exam({
                teacher: teacherId,
                class: classId,
                startDate: startDate,
                endDate: endDate,
                exams: exams
            });
            await exam.save();
            return res.status(200).json({
                error: false,
                message: "Exam scheduled."
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not schedule exam."
            })
        }
    },

    getExamById: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const exam = await Exam.findById(id).populate(['teacher', 'subject']);
            return res.status(200).json({
                error: false,
                data: exam
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },

    getAllExams: async (req, res) => {
        try {
            const exams = await Exam.find();
            const finalResult = [];
            exams.map(async (item, index) => {
                const teacher = await Teacher.findById(item.teacher);
                const classes = await Class.findById(item.class);
                const sub = [];
                item.exams.map(async (data, inx) => {
                    const subject = await Subject.findById(data.subject);
                    sub.push({
                        ...data._doc,
                        subject: subject.Subject_Name
                    });
                    if (inx === (item.exams.length - 1)) finalResult.push({
                        ...item._doc,
                        teacher: teacher.Teacher_Name,
                        class: classes.Std_Name,
                        exams: sub
                    });
                    if ((exams.length - 1) === index) {
                        res.status(200).json({
                            error: false,
                            data: finalResult
                        });
                    }
                });
                return item;
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },
    getRelevenceExams: async (req, res) => {
        try {
            const classid = req.student.class;
            const exams = await Exam.find({
                class: classid
            }).populate(['teacher', 'subject']);
            return res.status(200).json({
                error: false,
                data: exams
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },

    getExamsByClass: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const exams = await Exam.find({
                class: {
                    _id: id
                }
            }).populate(['teacher', 'subject']);
            return res.status(200).json({
                error: false,
                data: exams
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },

    deleteExam: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const exams = await Exam.findByIdAndDelete(id);
            return res.status(200).json({
                error: false,
                message: "Exam deleted successfully."
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not delete exams."
            })
        }
    },
    deleteExamByTeacher: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const teacherid = req.teacher._id;
            const exams = await Exam.findOneAndDelete({
                _id: id,
                teacher: teacherid
            });
            return res.status(200).json({
                error: false,
                message: "Exam deleted successfully."
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not delete exams."
            })
        }
    },

    updateExamByAdmin: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            const teacherId = mongoose.Types.ObjectId('6283568102b602f7139d84b8');
            const {
                classId,
                startDate,
                endDate,
                exams
            } = req.body;
            let sd = new Date(startDate);
            let ed = new Date(endDate);
            if (sd.getTime() > ed.getTime()) {
                return res.status(400).json({
                    error: true,
                    message: "Please enter proper dates."
                })
            }

            const exam = await Exam.findByIdAndUpdate(id, {
                teacher: teacherId,
                class: classId,
                startDate: startDate,
                endDate: endDate,
                exams: exams
            });
            return res.status(200).json({
                error: false,
                message: "Exam updated.",
                data: exam
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not update exam."
            })
        }
    },
    updateExamByTeacher: async (req, res) => {
        const teacherId = req.teacher._id;
        try {
            const {
                id
            } = req.params;
            const {
                classId,
                startDate,
                endDate,
                exams
            } = req.body;
            let sd = new Date(startDate);
            let ed = new Date(endDate);
            if (sd.getTime() > ed.getTime()) {
                return res.status(400).json({
                    error: true,
                    message: "Please enter proper dates."
                })
            }
            const exam = await Exam.findOneAndUpdate({
                _id: id,
                teacher: teacherId
            }, {
                teacher: teacherId,
                class: classId,
                startDate: startDate,
                endDate: endDate,
                exams: exams
            })
            return res.status(200).json({
                error: false,
                message: "Exam updated.",
                data: exam
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not update exam."
            })
        }
    }
}