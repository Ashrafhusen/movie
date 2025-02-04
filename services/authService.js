const User = require ('../models/User')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')


const token = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET , { expiresIn :'7d'
    });


}


exports.signup = async (name , email , password) => {
    const userExists = await User.findOne({email});
    if  (userExists) throw new Error ("User Already Exists")

        const user = await User.create({name , email , password});
        return { message : "User registerd Succesfully"}
};


exports.login = async(email , password) => {
    const user = await User.findOne({email});

    if(!user || !(await bcrypt.compare(password , user.password))) {
        throw new Error ('Invalid Creddentials');
    }

    return { token : token(user._id) , user};
}