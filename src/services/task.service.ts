import TaskModel from "../models/task.model";

class TaskService{
    async getAllTasks(){
        return await TaskModel.find();
    }

    async createTask(data:{title:string; description:string}){
        return await TaskModel.create(data);
    }

    async updateTask(id:string,data:{title: string; description: string; completed: boolean}){
        return await TaskModel.findByIdAndUpdate(id,data,{new:true});

    }

    async deleteTask(id:string){
        return await TaskModel.findByIdAndDelete(id);
    }

}

export default new TaskService();