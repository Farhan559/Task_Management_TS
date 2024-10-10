import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/task.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());

//Routes
app.use('/api/tasks', taskRoutes);

// MongoDB Connection

mongoose.connect(process.env.MONGO_URI ||'',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
})
.then(()=>{
    console.log(`Connected to MongoDb`);
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((error)=>{
    console.log('Error connecting to MongoDb',error);
})