 Aplicación web desarrollada con **React + Vite** que representa la página principal de un gimnasio, construida de forma modular siguiendo buenas prácticas de organización y escalabilidad.

---

##  Aportaciones del Equipo

### Julian Molina
**Archivos:** `Card.jsx`, `Cards.jsx`, `Footer.jsx`

- Creación de componentes reutilizables mediante el uso de **props**
- Renderizado dinámico de información
- Correcta exportación e importación de componentes
- Organización estructurada dentro de la carpeta `components`

---

### Juan José Molina
**Archivos:** `Layout.jsx`, `Navbar.jsx`, `Home.jsx`

- Correcta utilización de `import` para reutilizar componentes
- Uso de `return()` en componentes funcionales
- Estructuración general de la página
- Separación de responsabilidades

---

### Thomas Rodríguez
**Archivos:** `App.jsx`, `main.jsx`, archivos CSS

- Importación de React y otras dependencias necesarias
- Estructuración del componente principal
- Definición de clases CSS para el diseño visual
- Configuración del punto de entrada y renderizado de la app

---

##  Descripción

**Spartan Gym** es una aplicación web desarrollada con React y Vite que representa la página principal de un gimnasio.  
El proyecto está estructurado de manera modular siguiendo buenas prácticas de organización y escalabilidad.

---

##  Tecnologías Utilizadas

| Tecnología | Versión |
|------------|---------|
| React      | 18      |
| Vite       | —       |
| JavaScript | ES6+    |
| CSS3       | —       |
| HTML5      | —       |

---

## Estructura del Proyecto

```
src/
│
├── assets/        → Estilos y recursos
├── components/    → Componentes reutilizables
├── pages/         → Vistas principales
├── helpers/       → Funciones auxiliares
├── services/      → Conexión futura con backend
├── router/        → Configuración futura de rutas
│
├── App.jsx        → Componente principal
└── main.jsx       → Punto de entrada
```

---

##  Arquitectura

El proyecto está organizado bajo el principio de **separación de responsabilidades**:

- **`Layout`** — Maneja la estructura general (Header, Main y Footer)
- **`Navbar`** y **`Footer`** — Componentes reutilizables de navegación y pie de página
- **`Card`** — Componente dinámico que recibe y renderiza datos mediante props
- **`Home`** — Vista principal del sitio

Esta arquitectura permite que la aplicación sea **escalable y mantenible** a medida que el proyecto crece.
