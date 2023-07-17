
import mongoose from 'mongoose';

async function connect() {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log(`connect to database: ${conn.connection.host}`);   
    }catch(error){
        console.log('error connecting'); 
    }
};

export default connect;

