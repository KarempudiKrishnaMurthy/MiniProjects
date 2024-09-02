import React from 'react';

export default function ToDoItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-item flex items-center justify-between p-2 border-b border-gray-300 bg-white rounded-md shadow-sm hover:bg-gray-50">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={onToggle}
          className="mr-2"
        />
        <span
          onClick={onToggle}
          className={`flex-1 cursor-pointer ${task.isCompleted ? 'line-through text-gray-500' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
