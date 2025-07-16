import React from 'react';
import { TaskItemProps } from '../../types';

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className="border p-3 rounded mb-3 shadow">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as any)}
        className="mt-2 border p-1"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button
        className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
