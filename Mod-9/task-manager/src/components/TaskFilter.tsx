import React from 'react';
import { TaskFilterProps, TaskStatus } from '../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value || undefined });
  };

  return (
    <div className="flex gap-4 mb-4">
      <select name="status" onChange={handleFilterChange} className="border p-2">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" onChange={handleFilterChange} className="border p-2">
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default TaskFilter;