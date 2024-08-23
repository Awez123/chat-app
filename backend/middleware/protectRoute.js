import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const protectRoute=async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            res.status(401).json({message:"jwt not verified"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            res.status(401).json({msg:"decoded not verified"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(401).json({msg:"user not verified"})
        }

        req.user=user
        next();

    } catch (error) {
        console.log(error);
    }
}

export default protectRoute;