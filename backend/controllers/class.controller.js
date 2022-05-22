const Student = require('../models/Student');
const Subject = require('../models/Subject')
const Teacher = require('../models/Teacher')
const Class = require('../models/Class');
const getError = require("../utils/dbErrorHandle");

module.exports = {

    getClass : async (req, res) => {
        try {
            const classes = await Class.find({});
                return res.status(200).json({
                    error : false,
                    data : classes
                })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    getClassWithDetails : async (req,res) => {
        let detailClass = [];
        try {
            const classes = await Class.find({});
            await classes.map(async (cls) => {
                const students = await Student.find({class : {_id : cls._id}}).populate('class');
                const totalTeachers = await Teacher.find({'Classes_Id.Class_Id':cls._id})
                const subjects = await Subject.find({Class_Id:cls._id})
                await detailClass.push({STD : cls.Std_Name,totalStudents : students.length,totalTeachers: totalTeachers.length,Fees_Per_Student: cls.Fees_Per_Student,totalSubjects:subjects.length});
            })
            setTimeout(() => {
                return res.status(200).json({
                    error : false,
                    data : detailClass
                })
            },2800) 
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },

    addClass : async (req, res) => {
        try {
            
            const {stdName,feesPerStudent} = req.body;
            const newClass = Class({
                Std_Name : stdName,
                Fees_Per_Student : feesPerStudent,
            });
            
            await newClass.save();
            
            return res.status(200).json({
                error : false,
                message : "Class created successfully",
                data : newClass
            });

        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },

    updateClass : async (req, res) => {
        try {
            const {id} = req.params;
            const {Fees_Per_Student,Std_Name} = req.body;
            // const oldClass = await Class.findOne({_id : id});
            // let oldFees = oldClass.Fees_Per_Student;
            const updatedClass = await Class.findByIdAndUpdate(id,{
                Std_Name:Std_Name,
                Fees_Per_Student : Fees_Per_Student,
            });
            return res.status(201).json({
                error : false,
                message : "Class updated successfully"
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    },
    deleteClass : async (req, res) => {
        try {
            const {id} = req.params;
            const updatedClass = await Class.findByIdAndDelete(id);
            return res.status(201).json({
                error : false,
                message : "Class deleted successfully"
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create class."
            })
        }
    }

}

//