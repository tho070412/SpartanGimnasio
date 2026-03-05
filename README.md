Spartan Gym - Frontend React

Aportaciones:
JULIAN MOLINA:aporto en los documentos Card.jsx, Caards.jsx, Footer.jsx  utilizando los metodos enseñados en clase para reutilización de elementos.

La creación de componentes reutilizables mediante el uso de props.

El renderizado dinámico de información.

La correcta exportación e importación de componentes.

La organización estructurada dentro de la carpeta components.

JUAN JOSE MOLINA: aporto en los documentos Layout.jsx, Navbar.jsx, Home.jsx utilizando importaciones returns para la reutilización de elementos.

La correcta utilización de import para reutilizar componentes.

El uso de return() en componentes funcionales.

La estructuración general de la página.

La separación de responsabilidades.

THOMAS RODRIGUEZ: aporto en los documentos App.jsx, main.jsx y en el css utilizando clases para definir en el css y donde tambien se utilizo la importacion del react y tambien otras funciones para renderizar la app.

La importación de React y otras dependencias necesarias.

La estructuración del componente principal.

La definición de clases CSS para el diseño visual.



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
