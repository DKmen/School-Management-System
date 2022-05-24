const Teacher = require('../models/Teacher');
// const Class = require('../models/Class');
const Student = require('../models/Student')
const getError = require("../utils/dbErrorHandle");

async function generateUniqueUserName(proposedName) {
    return Teacher
        .findOne({ UserName: proposedName })
        .then(function (account) {
            if (account) {
                proposedName += Math.floor((Math.random() * 100) + 1);
                return generateUniqueUserName(proposedName); // <== return statement here
            }
            console.log('proposed name is unique' + proposedName);
            return proposedName;
        })
        .catch(function (err) {
            console.error(err);
            throw err;
        });
}

module.exports = {
    
    addTeacher : async (req ,res) => {
        try {

            const {teacherName,Salary,Subjects_Id,password} = req.body;
                        
            // if (Classes_Id.length !== 12 && Classes_Id.length !== 24) {
            //     return res.status(400).json({
            //         error : true,
            //         message : "Class doesn't exist"
            //     })
            // }
                const userName = await generateUniqueUserName(teacherName);

                const teacher = Teacher({
                    studentID : userName,
                    Teacher_Name : teacherName,
                    UserName : userName,
                    Salary : Salary,
                    Subjects_Id : Subjects_Id,
                    password : password,
                })
                
                await teacher.save();
                
                return res.status(200).json({
                    error : false,
                    message : "Teacher Created Successfully",
                    data : teacher
                });

        } catch (error) {
            
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create Teacher."
            })

        }
    },
    getTeachers :async(req,res)=>{
        try{
            const teachers = await Teacher.find({}).populate({path:'Subjects_Id.Subject_Id',
            populate:{
                path:'Class_Id'
            }
        })
            return res.status(200).json({
                error : false,
                data : teachers
            }); 
        }catch(error){
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Error Occurred."
            })
        }
    },

    getTeacherByTeacherID : async (req,res) => {
        try {
            const {UserName} = req.body;
            const teacher = await Teacher.findOne({UserName : UserName}).populate(['Subjects_Id.Subject_Id']);
            if (teacher) {
                return res.status(200).json({
                    error : false,
                    data : teacher
                })
            } else {
                return res.status(400).json({
                    error : true,
                    message : "Student doesn't exist."
                })
            }
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Error Occurred."
            })
        }
    },
    loginTeacher : async(req,res)=>{
        try {
            const teacher = await Teacher.findByCredentials(req.body.UserName, req.body.password)
            if (teacher) {
                const token = await teacher.generateAuthToken()
                return res.status(200).json({
                    error : false,
                    data : teacher,
                    token: token
                })
            } else {
                return res.status(400).json({
                    error : true,
                    message : "username or password is wrong"
                })
            }
        } catch (e) {
            res.status(400).send()
        }
    },

    updateTeacher : async (req, res) => {
        try {
            const {id} = req.params;
            const teacher = await Teacher.findById(id);
            if(teacher){
                console.log(teacher.Teacher_Name)
                const updates = Object.keys(req.body)
                const allowedUpdates = ['Teacher_Name', 'Salary', 'password', 'Subjects_Id']
                const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
                if (!isValidOperation) {
                    return res.status(400).send({ error: 'Invalid updates!' })
                }
                updates.forEach((update) => teacher[update] = req.body[update])
                await teacher.save()
                return res.status(200).json({
                    error : false,
                    message : "Teacher updated successfully.",
                    data : teacher
                })
            }
            else{
                return res.status(400).json({
                    error : true,
                    message : "Teacher doesn't exist"
                })
            }

        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Teacher not updated."
            })
        }
    },

    deleteTeacher : async (req, res) => {
        try {
            const {id} = req.params;
            if (id.length !== 12 && id.length !== 24) {
                return res.status(400).json({
                    error : true,
                    message : "Teacher doesn't exist"
                })
            }
            const teacher = await Teacher.findByIdAndDelete(id);
            if (teacher) {
                return res.status(200).json({
                    error : false,
                    message : "Teacher deleted successfully."
                })
            } else {
                return res.status(400).json({
                    error : true,
                    message : "teacher doesn't exist."
                })
            }
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "teacher not deleted."
            })
        }
    },

    postAttendence : async(req,res)=>{
        try {
            const {classId,subjectID,Attendence} = req.body
            const students = Student.find({class:classId})
            if(!students){
                return res.status(400).json({
                    error: true,
                    message: "please enter valid class"
                })
            }
            else{
                students.map(async(student)=>{
                    let attnd = student.attendence;
                    attnd.push({subjectID:subjectID,present:Attendence[student._id]});
                    await Student.findByIdAndUpdate(student._id,{
                        attendence: attnd
                    })
                })
                return res.status(200).json({
                    error:false,
                    message:"attendence is successfully submitted",
                    data: students
                })
            }
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "can not be able to post Attendence."
            })
            
        }
    }
}