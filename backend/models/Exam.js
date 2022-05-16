const mongoose = require('mongoose');

const examSchema = mongoose.Schema({
    ExamID : {
        type : String,
        required : true
    },
    teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher",
        required : true
    },
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endtDate : {
        type : Date,
        required : true
    },
    exams : [
        {
            startTime : {
                type : String,
                required : true
            },
            endTime : {
                type : String,
                required : true
            },
            date : {
                type : Date,
                required : true
            },
            subject : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Subject"
            }
        }
    ]
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam