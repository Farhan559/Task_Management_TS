// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleSave = () => {
    setCurrentTask(null); // Clear after saving
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm currentTask={currentTask} onSave={handleSave} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
