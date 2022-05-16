const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    materialID : {
        type : String,
        unique : true,
        required : true
    },
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class"
    },
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject"
    },
    details : {
        type : String
    },
    fileName : {
        type : String
    },
    fileData : {
        type : String
    },
    teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    }
});

const Material = mongoose.model('Material',materialSchema);

module.exports = Material