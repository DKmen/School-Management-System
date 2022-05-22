const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    exam : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Exam",
        required : [true, "Exam ID is required"]
    },
    student : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : [true, "Student ID is required"]
    },
    exams: [
        {
            subject : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Subject",
                required : [true, "Subject is required"]
            },
            marks : {
                type : Number,
                required : [true, "Marks is required"]
            }
        }
    ]
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result