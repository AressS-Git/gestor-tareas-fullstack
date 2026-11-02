import { useState } from "react";

// Componente que muestra el formulario para añadir tareas
export function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Añadir tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Añadir</button>
        </form>
    );
}