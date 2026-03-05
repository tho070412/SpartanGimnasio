Spartan Gym - Frontend React

Aportaciones:
Julian Molina:aporto en los documentos Card.jsx, Caards.jsx, Footer.jsx  utilizando los metodos enseñados en clase para reutilización de elementos.

Juan Jose Molina: aporto en los documentos Layout.jsx, Navbar.jsx, Home.jsx utilizando importaciones returns para la reutilización de elementos.

Thomas Rodriguez: aporto en los documentos App.jsx, main.jsx y en el css utilizando clases para definir en el css y donde tambien se utilizo la importacion del react y tambien otras funciones para renderizar la app.



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
