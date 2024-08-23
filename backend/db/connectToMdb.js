import mongoose from 'mongoose';

const connectToMongoDB= async ()=>{
    try {
        console.log("connected to mongo db");
        await mongoose.connect(process.env.MONGO_DB_URI,)
    } catch (error) {
        console.log("error in mongo connection");
    }
}

export default connectToMongoDB
