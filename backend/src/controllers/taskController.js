import { getAllTasks, createTask, deleteTask, toggleTaskStatus } from "../models/taskModel.js";

export const getTasks = (req, res) => {
    // 1. Obtener todas las tareas desde el modelo
    const tasks = getAllTasks();

    // 2. Enviar la respuesta HTTP y el contenido JSON
    res.status(200).json(tasks);
};

export const createNewTask = (req, res) => {
    // 1. Almacenar el título del objeto en una variable
    const { title } = req.body;

    // 2. Comprobar el contenido del título
    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            message: "El título es obligatorio"
        });
    }

    // 3. Crear la task
    const newTask = createTask(title);

    // 4. Enviar la respuesta HTTP y el contenido JSON
    res.status(201).json(newTask);
};

export const deleteExistentTask = (req, res) => {
    // 1. Almacenar el id del objeto en una variable
    const { id } = req.params;
    const idParsed = Number(id);

    // 2. Enviar respuesta de error si no cumple las condiciones
    if (Number.isNaN(idParsed) || !Number.isInteger(idParsed) || idParsed <= 0) {
        return res.status(400).json({
            message: "El id debe ser un número entero positivo"
        });
    }

    // 3. Eliminar la tarea
    const isDeleted = deleteTask(idParsed);

    // 4. Si la tarea no existe en el array
    if (!isDeleted) {
        return res.status(404).json({
            message: "No se encontró ninguna tarea con el ID proporcionado"
        });
    }

    // 5. Si la tarea se ha eliminado correctamente
    return res.status(200).json({
        message: "tarea eliminada correctamente"
    })
};

export const toggleExistentTaskStatus = (req, res) => {
    // 1. Almacenar el id del objeto en una variable
    const { id } = req.params;
    const idParsed = Number(id);

    // 2. Enviar respuesta de error si no cumple las condiciones
    if (Number.isNaN(idParsed) || !Number.isInteger(idParsed) || idParsed <= 0) {
        return res.status(400).json({
            message: "El id debe ser un número entero positivo"
        });
    }

    // 3. Modificar el status del la tarea
    const modifiedTask = toggleTaskStatus(idParsed);

    // 4. Si la tarea no existe en el array
    if (modifiedTask === null) {
        return res.status(404).json({
            message: "No se encontró ninguna tarea con el ID proporcionado"
        })
    }

    // 5. Si la tarea se ha modificado correctamente
    return res.status(200).json(modifiedTask);
};