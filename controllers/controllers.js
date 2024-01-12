const Transaction = require("../model/transaction");
// getting all expenses
exports.getAllTransactions = async (req, res, next) => {
    console.log("getting all")
    Transaction.find().then(transactions => {
        return res.json({
            message: "Here is a list of all todos...",
            expenses: transactions
        });
    }).catch(err => {
        return res.json({
            message: "There is error while fetching all transactions...",
            error: err
        });
    })
};
exports.addTransaction = async (req, res, next) => {
    
    const {text, amount}  = req.body;
    console.log(text, amount);
    if(!text || !amount){
        return res.status(400).json({
            error: "It seems you have send invalid fields to the database",
        });
    }
    if(text === "" || amount === 0 || amount === ""){
        return res.status(400).json({
            error: "It seems you have send invalid fields to the database",
        });
    };
    const transaction = {
        text: text,
        amount: amount,
        type: Number(amount) < 0 ? "EXP" : "INC"
    };
    
    Transaction.create({
        text: transaction.text,
        amount: Number(transaction.amount),
        type:transaction.type
    }).then(transaction => {
        return res.status(201).json({message: "New Transaction has been created", transaction})
    }).catch(err => {
        return res.status(500).json({error: "Internal server error occurred"})
    });

};
exports.deleteTransaction = async (req, res, next) => {
    const id = req.params.id;
    const tranxtion = await Transaction.findById(id);
    if(!tranxtion){
        return res.status(409).json({
            message: "Transaction you are trynna delete is not availble"
        });
    };
    Transaction.findByIdAndDelete(id).then(deleted => {
        return res.status(200).json({
            message: "Transaction is deleted!"
        })
    }).catch(err => {
        return res.status(500).json({error: "Internal server error"})  
    })
};