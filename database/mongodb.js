import mongoose from 'mongoose';
import { MONGO_URI, NODE_ENV } from '../config/env.js';

if(!MONGO_URI){
    throw new Error('Mongo URI is missing');
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('Connected to database in ' + NODE_ENV + ' mode');
    }catch (error){
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
}

export default connectToDatabase;