// src/components/TaskForm.js
import React, { useState } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ currentTask, onSave }) => {
  const [task, setTask] = useState(
    currentTask || { title: '', description: '', completed: false }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task._id) {
      await updateTask(task._id, task);
    } else {
      await createTask(task);
    }
    onSave();  // Callback after save
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>
          Completed
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
        </label>
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
