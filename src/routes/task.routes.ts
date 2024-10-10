import express, { Router } from 'express';
import taskController from '../controllers/task.controller';

const router = express.Router();

router.get('/',taskController.getAllTasks);
router.post('/',taskController.createTask);
router.put('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);


export default router;