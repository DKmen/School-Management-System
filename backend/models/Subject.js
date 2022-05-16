const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    Subject_Name:{
        type: String,
        required: true,
    }
},{
    timestamps: true
})
subjectSchema.virtual('class', {
    ref: 'Class',
    localField: '_id',
    foreignField: 'Subject_Id'
})
subjectSchema.virtual('teacher', {
    ref: 'Teacher',
    localField: '_id',
    foreignField: 'Subject_Id'
})
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject