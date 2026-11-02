// Almacén de tareas en un array de objetos
const tasks = [
    { id: 1, title: "Comprar el pan", completed: false },
    { id: 2, title: "Hacer la compra", completed: true },
    { id: 3, title: "Llamar al médico", completed: false },
    { id: 4, title: "Estudiar para el examen", completed: true },
    { id: 5, title: "Limpiar la casa", completed: false }
]

// Función para obtener todas las tareas
export const getAllTasks = () => { return tasks; };

// Función para crear una nueva tarea
export const createTask = (title) =>  {
    // 1. Creación de la nueva tarea
    const newTask = {
        id: tasks[tasks.length - 1].id + 1,
        title,
        completed: false
    }

    // 2. Añadir la tarea al array
    tasks.push(newTask);

    // 3. Devolver la nueva tarea
    return newTask;
};

// Función para eliminar una tarea
export const deleteTask = (id) => {
    // 1. Encontrar la posición de la tarea a eliminar en el array de tareas
    const index = tasks.findIndex(task => task.id === id)

    // 2. Eliminar la tarea y devolver true
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }

    // 3. Devolver false porque la tarea no existía en el array de tareas
    return false;
};

// Función para actualizar una tarea
export const toggleTaskStatus = (id) => {
    // 1. Encontrar  la tarea en el array
    const task = tasks.find(task => task.id === id)

    // 2.  Comprobar si existe dicha tarea
    if (!task) {
        return null;
    }

    // 3. Modificar el estado
    task.completed = !task.completed;

    // 4. Devolver el objeto
    return task;
};