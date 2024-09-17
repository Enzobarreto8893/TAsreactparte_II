
import React from 'react';
import TodoList from './components/TodoList';
import TodoListWithDelete from './components/TodoLIstconDelete';
import TodoListWithEdit from './components/TodoListconEdit';
import ContadorConTitulo from './components/ContadorConTitulo';
import UserFetch from './components/UserFetch';
import Temporizador from './components/Temporizador';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Realizo TAs 6 a la TAs 11</h1>

      <h2>TA 6: Lista de Tareas</h2>
      <TodoList />

      <h2>TA 7: Lista con Eliminar</h2>
      <TodoListWithDelete />

      <h2>TA 8: Lista con Editar</h2>
      <TodoListWithEdit />

      <h2>TA 9: Contador con Título</h2>
      <ContadorConTitulo />

      <h2>TA 10: Fetch de Usuario</h2>
      <UserFetch />

      <h2>TA 11: Temporizador</h2>
      <Temporizador />
    </div>
  );
}

export default App;
