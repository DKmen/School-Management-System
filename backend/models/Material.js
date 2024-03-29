const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : [true, "Class is required"]
    },
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject",
        required : [true, "Subject is required"]
    },
    details : {
        type : String
    },
    fileName : {
        type : String,
        required : [true, "File name is required"]
    },
    fileData : {
        type : Buffer,
        required : [true, "File data is required"]
    },
    teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher",
        required : [true, "Teacher is required"]
    }
});

const Material = mongoose.model('Material',materialSchema);

module.exports = Material