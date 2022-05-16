const { pad } = require('lodash');
const mongoose = require('mongoose');
const Class = require('./Class.js');

const studentSchema = mongoose.Schema({
    studentID : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    studentName : {
        type : String
    },
    fatherName : {
        type : String
    },
    address : {
        houseNo : {
            type : String
        },
        location : {
            type : String
        },
        landmark : {
            type : String
        },
        city : {
            type : String
        },
        state : {
            type : String
        },
        pincode : {
            type : String
        }
    },
    phoneNumber : {
        type : String
    },
    password : {
        type : String
    },
    attendence : [
        {
            subjectID : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Subject"
            }
        }
    ],
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class"
    },
    pendingFees : {
        type : Number
    }
});

studentSchema.methods = {
    calculateFees : function (paidFees) {
        this.pendingFees = Class.feesPerStudent - paidFees;
    }
}

const Student = mongoose.model('Student', studentSchema);

module.exports = Student