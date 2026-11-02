// Componente que muestra una tarea
export function TaskItem({ task, onDelete, onToggle }) {
    return (
        <li className="task-item">
            <label className={task.completed ? "task-completed" : ""}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span>{task.title}</span>
            </label>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
                Eliminar
            </button>
        </li>
    );
}