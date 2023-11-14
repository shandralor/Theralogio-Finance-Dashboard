import mongoose, { connection } from "mongoose"


export const connectToDb = async () => {

    const connection = {}

    try {
        if (connection.isConnected) return;
        
        const db = await mongoose.connect(process.env("MONGODB_URI"));
        connection.isConnected = db.connection[0].readyState
    }
    catch (error) {
        throw new Error(error)
    }
}