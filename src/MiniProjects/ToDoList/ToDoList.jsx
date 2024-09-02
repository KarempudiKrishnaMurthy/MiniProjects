import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, isCompleted: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex ? { ...task, text: editText } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <div className="todo-list max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <div className="todo-items mt-4">
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
            onEdit={() => editTask(index)}
          />
        ))}
      </div>
      {editIndex !== null && (
        <div className="edit-task mt-4 flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={saveEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
