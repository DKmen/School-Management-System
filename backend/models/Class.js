const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    Std_Name: {
        type: String,
        unique: true,
        required: true,
    },
    Fees_Per_Student: {
        type: Number,
        required: true,
    },
    Subjects_Id: [{
        Subject_Id:{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'Subject'
        }
    }],
}, {
    timestamps: true
})

classSchema.virtual('teacher', {
    ref: 'Teacher',
    localField: '_id',
    foreignField: 'Class_Id'
})
classSchema.virtual('notice', {
    ref: 'Notice',
    localField: '_id',
    foreignField: 'Class_Id'
})

const Class = mongoose.model('Class', classSchema);

module.exports = Class