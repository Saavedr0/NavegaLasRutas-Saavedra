# NavegaLasRutas – E-commerce React

Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con React, como entrega final del curso.  
La aplicación permite navegar un catálogo de productos, ver el detalle de cada uno, agregarlos a un carrito de compras y finalizar la compra generando una orden almacenada en **Firebase Firestore**.

---

🚀 Tecnologías utilizadas

- React
- React Router DOM
- Context API
- Firebase / Firestore
- JavaScript (ES6+)
- CSS

---

🛍️ Funcionalidades principales

- Listado dinámico de productos desde Firestore
- Filtrado por categorías
- Vista de detalle de producto
- Selección de cantidad con validaciones de stock
- Carrito de compras con estado global (Context)
- Visualización de productos, subtotales y total
- Eliminación de productos y vaciado del carrito
- Proceso de checkout con formulario
- Generación de orden de compra en Firestore
- Visualización del ID de la orden al finalizar la compra
- Navegación SPA sin recargas

---

🔥 Firebase

La aplicación utiliza **Firebase Firestore** como base de datos para:
- Almacenar los productos del catálogo (`products`)
- Registrar las órdenes de compra (`orders`)

---

▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Saavedr0/NavegaLasRutas-Saavedra.git
