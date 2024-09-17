
import React, { useState, useEffect } from 'react';

function ContadorConTitulo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador > 0 ? contador - 1 : 0)}>
        Decrementar
      </button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export default ContadorConTitulo;
