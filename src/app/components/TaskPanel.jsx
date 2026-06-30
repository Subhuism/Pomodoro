"use client";
import { Trash2, Circle , CircleCheckBig } from "lucide-react";
import { useState, useEffect } from "react";

import React from 'react'

const TaskPanel = () => {

    useEffect(() => {
        const savedTasks =
            localStorage.getItem("tasks");

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (!newTask.trim()) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: newTask,
                completed: false,
            },
        ]);

        setNewTask("");
    }

    function toggleTask(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed,
                    }
                    : task
            )
        );
    }

    function deleteTask(id) {
        setTasks(
            tasks.filter(
                (task) => task.id !== id
            )
        );
    }

    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);



  return (
    <div className="brutal-card p-6 h-full flex flex-col ">

        <h3 className="text-2xl font-black mb-4">
        TODAY'S MISSION
      </h3>
    <div className="flex-1 max-h-37 overflow-y-auto items-start">

      

      <div className="space-y-3 ">
        {tasks.length === 0 && (<p className="text-gray-500">No missions yet.</p>)}
        {tasks.map((task) => (
            <div
                key={task.id} className="flex gap-2 cursor-pointer border border-gray-200 border-padding p-2 rounded-md">
                <span onClick={() => toggleTask(task.id)}>{task.completed ? <CircleCheckBig /> : <Circle />}</span>
                <span className={task.completed? "line-through": ""}>{task.text}</span>
                <button onClick={() => deleteTask(task.id)} className="px-2 font-bold justify-between items-center ml-auto "><Trash2 /></button>
            </div>))}
      </div>
      </div>
      <div className="">
      <input type="text" placeholder="Add a mission..." value={newTask} onChange={(e)=> setNewTask(e.target.value)} className="w-full border-4 border-black p-3 mb-4 mt-4 outline-none" onKeyDown={(e) =>{if (e.key === 'Enter') {addTask();}}} />
      <button
        className=" w-full border-4 border-black bg-yellow-400 py-3 font-bold max-h-90 overflow-y-auto" onClick={addTask} >+ ADD TASK </button>
    </div>
    </div>
  )
}

export default TaskPanel;
