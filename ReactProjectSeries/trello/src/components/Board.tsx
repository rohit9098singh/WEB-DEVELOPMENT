"use client"
import { CircleUser } from 'lucide-react';
import React, { useState } from 'react';

type Tasks = {
    [key: string]: string[]; // Example task columns: { "To Do": [...tasks], "In Progress": [...tasks], "Done": [...tasks] }
};

const Board = () => {
    const [tasks, setTasks] = useState<Tasks>({
        "To Do": ["Task 1", "Task 2"],
        "In Progress": ["Task 3"],
        "Done": []
    });

    const [draggedTask, setDraggedTask] = useState<{ task: string; column: keyof Tasks } | null>(null);

    // Handle the start of dragging a task
    const onDragStart = (task: string, column: keyof Tasks) => {
        setDraggedTask({ task, column });
    };

    // Handle when a task is dropped into a column
    const onDrop = (column: keyof Tasks) => {
        if (!draggedTask) return; // No task is being dragged

        const { task, column: sourceColumn } = draggedTask;

        // Remove task from source column
        const sourceTasks = [...tasks[sourceColumn]];
        const taskIndex = sourceTasks.indexOf(task);
        sourceTasks.splice(taskIndex, 1);

        // Add task to destination column
        const destinationTasks = [...tasks[column]];
        destinationTasks.push(task);

        // Update the state with the new task arrangement
        setTasks({
            ...tasks,
            [sourceColumn]: sourceTasks,
            [column]: destinationTasks,
        });

        // Clear the dragged task state
        setDraggedTask(null);
    };

    return (
        <div className="relative min-h-screen ">
            {/* Task Summarizing Section */}
            <div className="flex items-center justify-center p-4">
                <div className="bg-white shadow-xl flex items-center gap-2 rounded-md p-2">
                    <CircleUser size={44} className="text-[#0055D1]" />
                    <p className="font-semibold text-sm italic text-center">
                        GPT is summarizing your tasks for the day...
                    </p>
                </div>
            </div>
            <div className="p-5 bg-gradient-to-br from-pink-400 to-blue-500 filter blur-3xl -z-50 absolute top-0 left-0 w-full h-full"></div>
            <div className="relative z-20">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Task Manager</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {Object.keys(tasks).map((column) => (
                        <div
                            key={column}
                            className="bg-white rounded-lg shadow-lg p-4 min-h-[400px] "
                            onDragOver={(e) => e.preventDefault()} // Allow drop
                            onDrop={() => onDrop(column as keyof Tasks)} // Handle drop
                        >
                            <h2 className="text-lg font-bold text-gray-700 border-b pb-2 mb-4 text-center">
                                {column.replace(/([A-Z])/g, " $1")}
                            </h2>
                            {tasks[column as keyof Tasks].map((task, index) => (
                                <div
                                    key={index}
                                    draggable
                                    onDragStart={() => onDragStart(task, column as keyof Tasks)} // Handle drag start
                                    className="bg-blue-100 text-blue-950 border border-blue-200 p-3 rounded-lg shadow-md mb-2 cursor-pointer"
                                >
                                    {task}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
