// Función para obtener las tareas del backend
export async function getTasks() {
     const prom = await fetch (`http://localhost:5001/api/tasks`);
     const data = await prom.json();
     return data;
}

// Función para crear tareas
export async function createTask(title) {
     const prom = await fetch (`http://localhost:5001/api/tasks`, {
          method: "POST",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify({
               title
          })
     });
     const data = await prom.json();
     return data;
}

// Función para eliminar tareas
export async function deleteTask(id) {
     const prom = await fetch(`http://localhost:5001/api/tasks/${id}`, {
          method: "DELETE",
     });
     const data = await prom.json();
     return data;
}

// Función para editar tareas
export async function toggleTaskStatus(id) {
     const prom = await fetch (`http://localhost:5001/api/tasks/${id}`, {
          method: "PATCH",
     });
     const data = await prom.json();
     return data;
}