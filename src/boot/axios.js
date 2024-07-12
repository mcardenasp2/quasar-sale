// src/boot/axios.js

import axios from "axios";

// Configura la URL base de tu backend Laravel
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// Interceptor para añadir el token CSRF a todas las solicitudes POST
axios.interceptors.request.use((config) => {
  // Accede al token CSRF desde el header de la solicitud
  const csrfToken = document.head.querySelector(
    'meta[name="csrf-token"]'
  ).content;

  console.log("Holaha  ");

  // Añade el token CSRF al header de la solicitud si está disponible
  if (csrfToken) {
    config.headers["X-CSRF-TOKEN"] = csrfToken;
  }

  return config;
});

export default axios;
