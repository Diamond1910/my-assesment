import React, { useState } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Morning Prayer", completed: false },
        { id: 2, text: "Exercise", completed: false },
        { id: 3, text: "Prepare For Work", completed: false },
    ]);

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                          className="mr-2"
                        />
                        <span className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
                            {task.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

    );


};

export default TaskList;