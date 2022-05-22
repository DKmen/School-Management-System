const Finance = require('../models/Finance')
// const Teacher = require('../models/Teacher')
// const auth = require('../middleware/auth')
// const Student = require('../models/Student');
// const Class = require('../models/Class');
const getError = require("../utils/dbErrorHandle");

module.exports = {

    getFinancess : async (req, res) => {
        try {
            const finance = await Finance.find({});
                return res.status(200).json({
                    error : false,
                    data : finance
                })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get Finance."
            })
        }
    },
    getFinancessById : async (req, res) => {
        try {
            const {id} = req.params;
            const finance = await Finance.findById(id);
                return res.status(200).json({
                    error : false,
                    data : finance
                })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get Finance."
            })
        }
    },
    getFinanceTotal : async(req,res) =>{
        try {
            let totalIncom = 0;
            let totalExpence = 0;
            let total = 0;
            const finance = await Finance.find({});
            const ais = await finance.map(async(fin)=>{
                if(fin.income){
                    totalIncom += fin.amount;
                }
                else{
                    totalExpence += fin.amount;
                }
            })
            total = totalIncom-totalExpence;
                return res.status(200).json({
                    error : false,
                    data : [
                        {
                            "income":totalIncom
                        },
                        {
                            "expence":totalExpence
                        },
                        {
                            "total":total
                        }]
                })
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not get total Finance."
            })
        }
    },
    addFinance : async (req, res) => {
        try {
            let income = false
            let expense = true
            const {date,description,amount,finance} = req.body;
            if(finance){
                income = true;
                expense = false
            }
            else if(!finance){
                income = false;
                expense = true
            }
            else{
                return res.status(200).json({
                    error : true,
                    message : "please enter input correctly"
                })
            }
            const finances = Finance({
                date : date,
                description : description,
                amount : amount,
                income : income,
                expense : expense
            });
            
            await finances.save()
            
            return res.status(200).json({
                error : false,
                message : "Finance created successfully",
                data : finances
            });

        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not create Finance."
            })
        }
    },
    updateFinance : async (req, res) => {
        try {
            const {id} = req.params;
            let income = false
            let expense = true
            const {date,description,amount,finance} = req.body;
            if(finance==='income'){
                income = true;
                expense = false
            }
            else if(finance==='expense'){
                income = false;
                expense = true
            }
            else{
                return res.status(200).json({
                    error : true,
                    message : "please enter input correctly"
                })
            }
            const updatedFinance = await Finance.findByIdAndUpdate(id,{
                date : date,
                description : description,
                amount : amount,
                income : income,
                expense : expense
            });
            return res.status(201).json({
                error : false,
                message : "Finances updated successfully",
                data : updatedFinance
            });
        } catch (error) {
            let errMsg = getError(error)
            return res.status(400).json({
                error: true,
                message:  errMsg.length > 0 ? errMsg : "Could not update Finance."
            })
        }
    }

}

//