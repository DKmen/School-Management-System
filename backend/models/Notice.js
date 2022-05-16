const mongoose = require('mongoose')

const noticeSchema = new mongoose.Schema({
    Notice_Title: {
        type: String,
        required: true,
    },
    Notice_Details: {
        type: String,
        required: true,
    },
    Creator_Id: 
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    },
    Classes_Id: [
        {
            Class_Id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Class'
            }
        }],
}, {
    timestamps: true
})

noticeSchema.methods.addClass(classid) = async function(){
    const notice = this
    notice.Classes_Id = notice.Classes_Id.concat({classid});
    await notice.save()
    return classid
}
const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice