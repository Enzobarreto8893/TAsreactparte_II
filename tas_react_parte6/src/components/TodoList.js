
import React, { useState } from 'react';

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
