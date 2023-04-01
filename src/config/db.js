import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export default {
    async init() {
        let dbType = process.env.DATABASE_DIALECT;
        console.log("Initializing database connection", dbType);
        
        if (dbType === "mongo") {
            console.log("Connecting to MongoDB");
            mongoose.connect(process.env.DATABASE_URL);
            const connection = await mongoose.connection;

            connection.on('error', (err)=>{
                console.log('connection error: ', err)
            }); 
            connection.on('disconnected', ()=>{
                console.log('disconnected from MongoDB')
            });
            connection.once('open', async ()=>{
                console.log('*** connected to MongoDB')
                // if (process.env.NODE_ENV === "development") {
                //     const collections = await connection.db.listCollections().toArray();

                //     collections
                //         .map(collections => collections.name)
                //         .forEach(async (collectionName) => {
                //             connection.db.dropCollection(collectionName);
                //         });
                // }
            });
            
        }
    }
}