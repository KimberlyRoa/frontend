// src/components/UsuarioList.jsx
import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../services/usuarioService";

/**
 * Componente que muestra la lista de usuarios registrados
 */
function UsuarioList({ actualizar }) {
  const [usuarios, setUsuarios] = useState([]);

  // Cargar usuarios desde el backend
  useEffect(() => {
    cargarUsuarios();
  }, [actualizar]);

  const cargarUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsuarioList;