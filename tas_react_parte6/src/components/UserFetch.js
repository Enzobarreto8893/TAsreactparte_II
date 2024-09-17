
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserFetch() {
  const [usuarios, setUsuarios] = useState([]); // Inicializamos como un array vacío
  const [loading, setLoading] = useState(true); // Estado para mostrar un mensaje de carga

  useEffect(() => {
    // Realizamos la solicitud para obtener todos los usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsuarios(response.data); // Guardamos los usuarios en el estado
        setLoading(false); // Cambiamos el estado de carga
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Cambiamos el estado de carga en caso de error
      });
  }, []); // El segundo argumento vacío indica que este efecto solo se ejecutará una vez, cuando el componente se monte

  return (
    <div>
      <h1>Usuarios</h1>
      {loading ? (
        <p>Cargando...</p> // Mostrar mensaje de carga mientras esperamos los datos
      ) : (
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.name} - {u.email} {/* Mostramos el nombre y el correo de cada usuario */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserFetch;
