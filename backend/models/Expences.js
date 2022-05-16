const mongoose = require('mongoose')

const expencesSchema = new mongoose.Schema({
    date:{
        type: Date,
        default: Date.now,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    amount:{
        type:Number,
        required: true,
    },
    income:{
        type: Boolean,
        required: true,
        default: false
    },
    expense:{
        type: Boolean,
        required: true,
        default: true
    }
},{
    timestamps: true
})
const Expences = mongoose.model('Expences', expencesSchema);

module.exports = Expences