Spartan Gym - Frontend React

Descripción

Spartan Gym es una aplicación web desarrollada con React y Vite que representa la página principal de un gimnasio.  
El proyecto está estructurado de manera modular siguiendo buenas prácticas de organización y escalabilidad.

---

Tecnologías utilizadas

- React 18
- Vite
- JavaScript
- CSS3
- HTML5

Estructura del Proyecto

src/
│
├── assets/ → Estilos y recursos
├── components/ → Componentes reutilizables
├── pages/ → Vistas principales
├── helpers/ → Funciones auxiliares
├── services/ → Conexión futura con backend
├── router/ → Configuración futura de rutas
│
├── App.jsx → Componente principal
└── main.jsx → Punto de entrada

---

Arquitectura

El proyecto está organizado bajo el principio de separación de responsabilidades:

- Layout maneja la estructura general (Header, Main y Footer).
- Navbar y Footer son componentes reutilizables.
- Card es un componente dinámico que recibe props.
- Home es la vista principal del sitio.

Esto permite que la aplicación sea escalable y mantenible.

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>