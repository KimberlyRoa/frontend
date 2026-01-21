// src/App.jsx
import { useState } from "react";
import UsuarioForm from "./components/UsuarioForm";
import UsuarioList from "./components/UsuarioList";

/**
 * Componente principal de la aplicación
 */
function App() {
  const [actualizar, setActualizar] = useState(false);

  // Función para refrescar la lista cuando se crea un usuario
  const refrescarLista = () => {
    setActualizar(!actualizar);
  };

  return (
    <div>
      <h1>Sistema de Gestión de Usuarios</h1>
      <UsuarioForm onUsuarioCreado={refrescarLista} />
      <UsuarioList actualizar={actualizar} />
    </div>
  );
}

export default App;