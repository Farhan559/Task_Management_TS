import {Request, Response} from 'express';
import TaskService from '../services/task.service';

class TaskController{
    async getAllTasks(req:Request,res:Response){
        const tasks = await TaskService.getAllTasks();
        res.json(tasks)
    }

    async createTask(req:Request,res:Response){
        const {title,description} = req.body;
        const task = await TaskService.createTask({title,description});
        res.json(task);
    }

    async updateTask(req:Request,res:Response){
        const taskId = req.params.id;
        const {title,description,completed} = req.body;
        const updateTask = await TaskService.updateTask(taskId,{
            title,
            description,
            completed
        });
        res.json(updateTask);
    }
        async deleteTask(req:Request,res:Response){
            const taskId = req.params.id;
            await TaskService.deleteTask(taskId);
            res.json({massage:'Task deleted'});
        }

}

    export default new TaskController();
