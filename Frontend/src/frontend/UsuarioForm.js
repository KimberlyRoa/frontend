// src/components/UsuarioForm.jsx
import { useState } from "react";
import { guardarUsuario } from "../services/usuarioService";

/**
 * Componente que permite registrar un nuevo usuario
 */
function UsuarioForm({ onUsuarioCreado }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Maneja el envío del formulario
  const manejarSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { nombre, correo };

    try {
      await guardarUsuario(nuevoUsuario);
      onUsuarioCreado(); // Actualiza la lista
      setNombre("");
      setCorreo("");
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>Registrar Usuario</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  );
}

export default UsuarioForm;