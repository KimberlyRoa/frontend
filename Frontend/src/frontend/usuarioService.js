// src/services/usuarioService.js
import axios from "axios";

/**
 * Servicio encargado de comunicarse con el backend
 * usando Axios para realizar peticiones HTTP
 */

const API_URL = "http://localhost:8080/usuarios";

// Obtener lista de usuarios
export const obtenerUsuarios = () => {
  return axios.get(API_URL);
};

// Guardar nuevo usuario
export const guardarUsuario = (usuario) => {
  return axios.post(API_URL, usuario);
};


