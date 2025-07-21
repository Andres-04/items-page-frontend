# Frontend Items Page

Este proyecto es un **frontend construido con Next.js**, utilizando **TailwindCSS** y **Shadcn/UI** para estilos y componentes.  
Permite visualizar productos y sus reseñas de forma simple y rápida.

---

## Instalación de dependencias  

Asegúrate de tener instalado **Node.js** (versión recomendada 20.x o superior).  

* Instala las dependencias:  
```bash
npm install
```

---

## Iniciar el proyecto  

### Modo desarrollo:
```bash
npm run dev
```
Abre el navegador en [http://localhost:3000](http://localhost:3000)  

---

## Vista de Productos

Para ver la página de detalle de producto debes acceder a la siguiente ruta:  

```
http://localhost:3000/products/[id]
```

### IDs disponibles para prueba:  
- `ML0001`
- `ML0002`

### Ejemplos:
```
http://localhost:3000/products/ML0001
http://localhost:3000/products/ML0002
```

---

## Comandos útiles  

| Acción             | Comando        |
|--------------------|----------------|
| Iniciar dev        | `npm run dev`  |
| Correr tests       | `npm run test` |
| Generar build prod | `npm run build`|

---

## Estructura del proyecto

```
/src
  /components     -> Componentes reutilizables
  /pages          -> Páginas de la app, incluyendo /products/[id]
  /styles         -> Archivos de estilos globales
  /lib            -> Utilidades compartidas
/tests            -> Pruebas unitarias
```

---
