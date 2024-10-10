import mongoose,{Document} from "mongoose";
import { title } from "process";

interface Task extends Document{
    title:string,
    description:string,
    completed:boolean,
    createdAt:Date;
}

const TaskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    completed:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
});



const TaskModel = mongoose.model<Task>('Task',TaskSchema);

export default TaskModel;