import {useEffect} from "react";
import {useState} from "react";
import {getTasks, createTask, deleteTask, toggleTaskStatus} from "../services/taskService.js";
import { TaskItem } from "../components/TaskItem.jsx";
import { TaskForm } from "../components/TaskForm.jsx";

// Página para mostrar la tabla
export function TasksPage() {
    // Estado para la lista de tareas, carga y errores
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTasks()
            .then((data) => {
                setTasks(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Error al cargar las tareas del servidor");
                setLoading(false);
            });
    }, []);

    // Función para enviar tarea al backend mediante formulario
    async function handleAddTask(title) {

        // 1. Enviar la nueva tarea al backend y esperar la respuesta
        const newTask = await createTask(title);

        // 2. Añadir la nueva tarea a la lista actual de tareas
        setTasks([...tasks, newTask]);
    }

    // Función para eliminar las tareas en formato lista
    async function handleDelete(id) {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Función para actualizar el estado de una tarea
    async function handleToggle(id) {
        const toggledTask = await toggleTaskStatus(id);
        setTasks(tasks.map((task) => task.id === id ? toggledTask : task));
    }

    // Mostrar mensaje mientras se cargan las tareas o si hay error
    if (loading) {
        return <p>Cargando tareas...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Devolver las tareas en formato lista
    return <div>
        <h1> Gestor de Tareas </h1>
        <TaskForm onAddTask={handleAddTask} />
        <ul>
            {
                tasks.map((task) => (<TaskItem
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onToggle={handleToggle}/>))
            }
        </ul>
    </div>
}