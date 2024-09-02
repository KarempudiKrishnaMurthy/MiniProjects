import React, { useState } from 'react';

export default function ToDoForm({ addTask }) {
  const [inputval, setInputval] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputval.trim()) {
      addTask(inputval);
      setInputval("");
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
          placeholder="Add a Task"
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
