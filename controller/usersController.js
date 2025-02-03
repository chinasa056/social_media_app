
// const { UUID, UUIDV4 } = require("sequelize");
const User = require("../models/userModel")
const {v4:uuidv4} = require("uuid")

exports.register = async (req, res) => {
    try {
        const { fullname, email } = req.body;

        const user = await User.findOne({ where: { email } });

        if (user) {
            return  res.status(401).json({
                message: `User with email ${email} already exists`
            })
        }
        const newUser = await User.create({
            id:uuidv4(),
            fullname,
            email
        });

        res.status(201).json({
            message: "User registration successful",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error:error.message
            
        });
    }
};

exports.getAllUsers = async(req,res) =>{
    try {
        const user = await User.findAll();
        res.status(200).json({
            message:"all users available",
            date:user
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error:console.error()
            
        });
    }
}