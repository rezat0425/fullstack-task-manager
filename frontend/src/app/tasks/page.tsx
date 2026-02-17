"use client";

import { useState, SubmitEvent } from "react";

interface Task {
  id: number;
  title?: string;
  status?: string;
}

export default function TasksPage() {
  // اینجا بعداً useState ها و فانکشن‌هاتو اضافه می‌کنی
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");

  function handleAdd(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
      if (!newTitle.trim()) return; // اگر خالی بود، هیچ کاری نکن

    const newTask: Task = {
      id: Date.now(),
      title: newTitle,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
    setNewTitle("");
  }

  function toggleStatus(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "todo" ? "done" : "todo" }
          : task,
      ),
    );
  }

  // function toggleStatus(id: number) {
  //   tasks.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, status: task.status === "todo" ? "done" : "todo" };
  //     } else return task;
  //   });
  // }
  function handleDelete(id: number) {
    const notRemovedTask = tasks.filter((task) => task.id !== id);
    setTasks(notRemovedTask);
  }
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-6 space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-slate-800">Tasks</h1>
          <span className="text-xs text-slate-500">
            Simple task manager (local state)
          </span>
        </header>

        {/* فرم اضافه کردن تسک */}
        <form onSubmit={handleAdd} className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="New task..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* لیست تسک‌ها */}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50"
            >
              <span
                className={
                  "text-sm " +
                  (task.status === "done"
                    ? "line-through text-slate-400"
                    : "text-slate-800")
                }
              >
                {task.title}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => toggleStatus(task.id)}
                  className="text-xs px-2 py-1 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  {task.status === "todo" ? "Mark done" : "Mark todo"}
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(task.id)}
                  className="text-xs px-2 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="text-xs text-slate-400 text-center py-4">
              No tasks yet. Add your first one!
            </li>
          )}
        </ul>
      </div>
    </main>
  );
}
