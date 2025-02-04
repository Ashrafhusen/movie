const authService = require('../services/authService')

exports.signup = async(req , res) => {
    try {
        const {name , email , password } = req.body;
        const response = await authService.signup(name , email , password);
        res.status(201).json(response);
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
}


exports.login = async (req , res) => {
    try {
        const {email , password } = req.body;
        const response = await authService.login(email , password);
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

