import Converstation from "../models/conversation.model.js";
import Messages from "../models/message.model.js";



export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Converstation.findOne({
            participants:{$all :[senderId,receiverId]},
        })

        if(!conversation){
            conversation = await Converstation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Messages({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            console.log("msg created");
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error);
    }
}

export const getMessage = async (req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Converstation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages")

        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log(error);
    }
}