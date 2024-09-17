import React, { useState } from 'react';

function App() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto); // Alterna entre verdadero y falso
  };

  return (
    <div>
      <button onClick={toggleTexto}>
        {mostrarTexto ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {mostrarTexto && <p>Este es el texto que aparece o desaparece</p>}
    </div>
  );
}

export default App;
