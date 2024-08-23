import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import  GenerateTokenAndSetCook from "../utils/generateTokens.js";
import generateTokenAndSetCook from "../utils/generateTokens.js";


export const login =async (req,res)=>{
    try {
        const {userName,password} = req.body;
        const user =await User.findOne({userName});
        const isPassCorr =await bcrypt.compare(password,user?.password || "");
        
        if(!user || !isPassCorr){
            return res.status(401).json({error : "invalid user name or pass"});
        }


        generateTokenAndSetCook(user._id,res);

        res.status(200).json({
            _id : user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        })

    } catch (error) {
        console.log("err from the login part"+error);
    }
}

export const logout =async (req,res)=>{
    try {
        res.status(201).json({message:"logged out succesfully"})
        res.cookie("jwt","",{maxAge:0
        })
    } catch (error) {
        console.log(error);
    }
}

export const signup =async (req,res)=>{
    try {
        const { fullName,userName,password,confirmPassword,gender}=req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error:"pass not match"})
        };
        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({error:"user alredy exist"})
        }

        const boyPP = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlPP = `https://avatar.iran.liara.run/public/girl?username=${userName}`


        const salt = await bcrypt.genSalt(10);
        const hashPas = await bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,
            userName,
            password : hashPas,
            gender,
            profilePic: gender === "male" ? boyPP :girlPP
        })

        await newUser.save();
        GenerateTokenAndSetCook(newUser._id,res);


        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic,
            hashPas,
        })


    } catch (error) {
        console.log(error);
    }
}