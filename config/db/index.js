
import mongoose from 'mongoose';

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Etronics', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('successfully connected');   
    }catch(error){
        console.log('error connecting'); 
    }
};

export default connect;

