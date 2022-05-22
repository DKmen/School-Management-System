const Student = require('../models/Student');
const Class = require("../models/Class");
// const { parse } = require('dotenv');
// const { compareSync } = require('bcrypt');

module.exports = async (classId) => {
    const classe = await Class.findById(classId)
    const stdData = classe.Std_Name.split("_");
    const stdClass = parseInt(stdData[0]);
    const stdDivison = stdData[1];
    const students = await Student.find({ class : { _id : classId } });
    const totalStudentsInClass = students.length;
    const admissionYear = parseInt(new Date().getFullYear().toString())- 2000 - stdClass;
    // const admissionYear = new Date().getFullYear() - 2000 - stdClass;
    return admissionYear+stdDivison+(totalStudentsInClass+1);
    // const student = await Student.find({class : {_id : classId}}).sort('-studentID').limit(1);
    // let totalStudentsInClass = await Student.find({ class : { _id : classId } });
    // const stdNo = await Class.findOne({ _id : classId});
    // let rollNo = totalStudentsInClass.length;
    // let currentMonth = new Date().getMonth();
    // let admissionYear = new Date().getFullYear() - 2000 - stdNo.Std_Name.slice(0,2)
    // console.log("addminssion year is ",admissionYear)
    // if (currentMonth <= 5 && currentMonth>=0) admissionYear-=1;
    
    // if (student.length == 0) {
    //     //no student in class
    //     if ((rollNo + 1).toString().length == 1)  rollNo = "00"+(rollNo+1);
    //     if ((rollNo + 1).toString().length == 2)  rollNo = "0"+(rollNo+1);
    //     let generatedID = admissionYear + stdNo.Std_Name.slice(2,3) + rollNo;
    //     return generatedID;
    // } else {
    //     let lastNumber = student[0].studentID.slice(3,6);
    //     let newSequence = (parseInt(lastNumber)+1).toString();
    //     if (newSequence.length == 1)  newSequence = "00"+newSequence;
    //     if (newSequence.length == 2)  rollNo = "0"+newSequence;
    //     let generatedID = admissionYear + stdNo.Std_Name.slice(2,3) + newSequence
    //     return generatedID;
    // }

}