const Notice = require("../models/Notice");
const getError = require("../utils/dbErrorHandle");
const mongoose = require('mongoose');

module.exports = {

    addNotice: async (req, res) => {
        try {

            const { Notice_Title, Notice_Details, Classes_Id } = req.body;
            const Creator_Id = mongoose.Types.ObjectId('6283568102b602f7139d84b8')

            const notice = Notice({
                Notice_Title: Notice_Title,
                Notice_Details: Notice_Details,
                Classes_Id: Classes_Id,
                Creator_Id: Creator_Id
            });
            await notice.save();
            return res.status(200).json({
                error: false,
                message: "Notice Posted."
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not post notice."
            })
        }
    },
    addNoticeByTeacher: async (req, res) => {
        try {

            const { Notice_Title, Notice_Details, Classes_Id } = req.body;
            const Creator_Id = req.teacher._id //should change this 

            const notice = Notice({
                Notice_Title: Notice_Title,
                Notice_Details: Notice_Details,
                Classes_Id: Classes_Id,
                Creator_Id: Creator_Id
            });
            await notice.save();
            return res.status(200).json({
                error: false,
                message: "Notice Posted."
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not post notice."
            })
        }
    },

    getNoticeById: async (req, res) => {
        try {
            const { id } = req.params;
            const notices = await Notice.findById(id).populate(['Classes_Id.Class_Id', 'Creator_Id']);
            return res.status(200).json({
                error: false,
                data: notices
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },

    getallNotices: async (req, res) => {
        try {
            const notices = await Notice.find({}).populate(['Classes_Id.Class_Id', 'Creator_Id']);
            return res.status(200).json({
                error: false,
                data: notices
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },
    getallRelevenceNoticesStudent: async (req, res) => {
        try {
            const classId = req.student.class;
            const notices = await Notice.find({"Classes_Id.Class_Id":classId}).populate(['Classes_Id.Class_Id', 'Creator_Id']);
            return res.status(200).json({
                error: false,
                data: notices
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },
    getallNoticesCreatedByHim: async (req, res) => {
        try {
            const notices = await Notice.find({Creator_Id:req.teacher._id}).populate(['Classes_Id.Class_Id', 'Creator_Id']); //update teacher authentication
            return res.status(200).json({
                error: false,
                data: notices
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not get exams."
            })
        }
    },

    deleteNoticeByAdmin: async (req, res) => {
        try {
            const { id } = req.params;
           const hello =  await Notice.findByIdAndDelete(id);
            return res.status(200).json({
                error: false,
                message: "Notice deleted successfully."
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not delete exams."
            })
        }
    },
    deleteNoticeByTeacher: async (req, res) => {
        try {
            const { id } = req.params;
<<<<<<< HEAD
            const notice = await Notice.findOneAndDelete({_id:id,Creator_Id : req.teacher._id})
            // await Notice.findByIdAndDelete(id); //update with teaher auth
            return req.status(200).json({
                error: false,
                message: "Notice deleted successfully."
            });
=======
           const hello = await Notice.findOneAndDelete({_id:id,Creator_Id: req.teacher._id})
           if(!hello){
               return res.status(400).json({
                   error: true,
                   message: "Notice doesn't exist or you are not creator."
               });
            }
        return res.status(200).json({
            error: false,
            message: "Notice deleted successfully."
        });
>>>>>>> 45886747f2cacb69b6d6a34f71ecf920839cb6f0
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not delete exams."
            })
        }
    },

    updateNoticeByAdmin: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['Notice_Title', 'Notice_Details', 'Classes_Id']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).json({
                error: true,
                message: "updates are not valid"
            })
        }
        try {
            const { id } = req.params;
            const notice = await Notice.findById(id);

            if (!notice) {
                return res.status(400).json({
                    error: true,
                    message: "Notice doesn't exist"
                })
            }

            updates.forEach((update) => notice[update] = req.body[update])
            await notice.save()
            return res.status(200).json({
                error: false,
                message: "Notice updated.",
                data: notice
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not update Notice."
            })
        }
    },
    updateNoticeByTeacher: async (req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['Notice_Title', 'Notice_Details', 'Classes_Id']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).json({
                error: true,
                message: "updates are not valid"
            })
        }
        try {
            const { id } = req.params;
<<<<<<< HEAD
            const notice = await Notice.find({_id:id,Creator_Id:req.teacher._id});
=======
            const notice = await Notice.findOne({_id:id,Creator_Id:req.teacher._id});
>>>>>>> 45886747f2cacb69b6d6a34f71ecf920839cb6f0
            // const notice = await Notice.findById(id);

            if (!notice) {
                return res.status(400).json({
                    error: true,
                    message: "Notice doesn't exist or You are not creator"
                })
            }

            updates.forEach((update) => notice[update] = req.body[update])
<<<<<<< HEAD
            await notice.save()
=======
            const not =await notice.save();
>>>>>>> 45886747f2cacb69b6d6a34f71ecf920839cb6f0
            return res.status(200).json({
                error: false,
                message: "Exam updated.",
                data: notice
            })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message: errMsg.length > 0 ? errMsg : "Could not update Notice."
            })
        }
    }
}