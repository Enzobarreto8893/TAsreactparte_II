
import React, { useState } from 'react';

function TodoListWithEdit() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  const editarTarea = (index) => {
    setEditIndex(index);
    setEditText(tareas[index]);
  };

  const guardarEdicion = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = editText;
    setTareas(nuevasTareas);
    setEditIndex(null);
    setEditText('');
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
          <li key={index}>
            {editIndex === index ? (
              <>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={() => guardarEdicion(index)}>Guardar</button>
              </>
            ) : (
              <>
                {tarea}
                <button onClick={() => editarTarea(index)}>Editar</button>
              </>
            )}
            <button onClick={() => setTareas(tareas.filter((_, i) => i !== index))}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListWithEdit;
