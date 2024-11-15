import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskToEdit, setTaskToEdit] = useState('');
  const [taskToDelete, setTaskToDelete] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to edit a task based on serial number
  const editTask = () => {
    const index = parseInt(taskToEdit) - 1;
    if (index >= 0 && index < tasks.length) {
      const updatedText = prompt("Enter the new task text:", tasks[index].text);
      if (updatedText) {
        const updatedTasks = tasks.map((task, idx) =>
          idx === index ? { ...task, text: updatedText } : task
        );
        setTasks(updatedTasks);
        setTaskToEdit('');
      }
    } else {
      alert("Invalid serial number for editing!");
    }
  };

  // Function to delete a task based on serial number
  const deleteTask = () => {
    const index = parseInt(taskToDelete) - 1;
    if (index >= 0 && index < tasks.length) {
      const updatedTasks = tasks.filter((_, idx) => idx !== index);
      setTasks(updatedTasks);
      setTaskToDelete('');
    } else {
      alert("Invalid serial number for deletion!");
    }
  };

  // Function to delete all tasks
  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container mt-5 bg-light p-5 rounded shadow-lg">
      <h1 className="text-center mb-4 text-primary">To-Do List App</h1>
      
      {/* Input and Add Task Button */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="btn btn-primary w-full" onClick={addTask}>
          Add Task
        </button>
      </div>
      
      {/* Tasks List */}
      <ul className="list-group mb-4">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center transition duration-500 ease-in-out transform hover:scale-105 ${task.completed ? 'text-decoration-line-through' : ''}`}
          >
            <span><strong>{index + 1}. </strong> {task.text}</span>
          </li>
        ))}
      </ul>

      {/* Edit Task */}
      <div className="mb-4">
        <input
          type="number"
          className="form-control mb-2"
          value={taskToEdit}
          onChange={(e) => setTaskToEdit(e.target.value)}
          placeholder="Enter the serial number to edit"
        />
        <button className="btn btn-warning w-full" onClick={editTask}>
          Edit Task
        </button>
      </div>

      {/* Delete Task */}
      <div className="mb-4">
        <input
          type="number"
          className="form-control mb-2"
          value={taskToDelete}
          onChange={(e) => setTaskToDelete(e.target.value)}
          placeholder="Enter the serial number to delete"
        />
        <button className="btn btn-danger w-full" onClick={deleteTask}>
          Delete Task
        </button>
      </div>

      {/* Delete All Tasks */}
      <div className="text-center">
        <button className="btn btn-dark w-full" onClick={deleteAllTasks}>
          Delete All Tasks
        </button>
      </div>
    </div>
  );
};

export default App;
