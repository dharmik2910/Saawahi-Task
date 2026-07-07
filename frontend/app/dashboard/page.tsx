"use client";

import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "@/services/task";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [editId, setEditId] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

async function loadTasks() {
  try {
    const res = await getTasks();
    setTasks(res.data.tasks);
  } catch (error) {
    console.log(error);
  }
}

async function handleEdit(task: Task) {
    setEditId(task.id);
    setTitle(task.title);
    setCompleted(task.completed);
    loadTasks();
  };

  // const handleSaveTask = async () => {
  //   try {
  //     if (editId) {
  //       await updateTask(editId, {
  //         title,
  //         completed,
  //       });
  //     } else {
  //       await createTask({
  //         title,
  //         completed,
  //       });
  //     }

  //     setTitle("");
  //     setCompleted(false);
  //     setEditId("");

  //     loadTasks();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSaveTask = async () => {
  try {
    if (editId) {
      await updateTask(editId, {
        title,
        completed,
      });

      loadTasks();
    } else {
      const res = await createTask({
        title,
        completed,
      });

      setTasks((prev) => [res.data.task, ...prev]);
    }

    setTitle("");
    setCompleted(false);
    setEditId("");
  } catch (error) {
    console.log(error);
  }
};

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-black">Task Dashboard</h1>

        <a href="/login" className="bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </a>
      </div>

      <div className="border p-4 rounded space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded text-black"
        />

        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />

          <span className="text-black">Completed</span>
        </div>

        <button
          onClick={handleSaveTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2 text-black">Title</th>
            <th className="border p-2 text-black">Status</th>
            <th className="border p-2 text-black">Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task: Task) => (
            <tr key={task.id}>
              <td className="border p-2 text-black">{task.title}</td>

              <td className="border p-2 text-black">
                {task.completed ? "Completed" : "Pending"}
              </td>

              <td className="border p-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
