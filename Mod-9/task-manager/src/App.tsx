import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { Task, TaskStatus } from './types';


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }>({});

  useEffect(() => {
    // Simulate fetching tasks from API or storage
    const fetchTasks = async () => {
      const initialTasks: Task[] = [
        {
          title: 'Task 1',
          description: 'Description 1',
          status: 'pending',
          priority: 'low',
          dueDate: '2025-06-20',
        },
        {
          title: 'Task 2',
          description: 'Description 2',
          status: 'in-progress',
          priority: 'medium',
          dueDate: '2025-06-21',
        },
        {
          title: 'Task 3',
          description: 'Description 3',
          status: 'completed',
          priority: 'high',
          dueDate: '2025-06-22',
        },
      ];
      setTasks(initialTasks);
    };
    fetchTasks();
  }, []);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = !filters.status || task.status === filters.status;
    const matchesPriority = !filters.priority || task.priority === filters.priority;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
};
