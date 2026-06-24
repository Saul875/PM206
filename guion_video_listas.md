# Guión de Video: FlatList y SectionList en React Native

Este guión está diseñado para un grupo de **3 integrantes**, explicando desde cero cómo construir y entender dos archivos: `FlatListScreen.js` y `SectionListScreen.js`.

*   **Duración estimada:** 5 a 7 minutos.
*   **Formato visual sugerido:** Captura de pantalla compartida del editor de código (VS Code) a la izquierda y el simulador/teléfono a la derecha mostrando la app en tiempo real.

---

## Tabla de División del Guión

| Escena / Parte | Integrante a cargo | Tema principal |
| :--- | :--- | :--- |
| **Parte 1: Lógica FlatList** | **Integrante 1** | Intro general, imports, estado de datos (`elementos`) y función para eliminar ítems en `FlatListScreen.js`. |
| **Parte 2: UI FlatList y Datos SectionList** | **Integrante 2** | Renderizado del componente `<FlatList>`. Cambio de archivo y explicación de la estructura de datos para `SectionListScreen.js`. |
| **Parte 3: UI SectionList y Cierre** | **Integrante 3** | Renderizado de `<SectionList>` (ítems y cabeceras), breve mención de estilos y despedida. |

---

## Guión Detallado Paso a Paso

### Parte 1: Introducción y Lógica de FlatList
**Responsable:** Integrante 1

| Audio / Diálogo (Lo que se dice) | Video (Lo que se muestra) |
| :--- | :--- |
| *"¡Hola a todos! En este video vamos a explicar cómo implementar dos de las listas más importantes en React Native: `FlatList` y `SectionList`. Comenzaremos analizando la pantalla plana, en el archivo `FlatListScreen.js`."* | Pantalla de inicio con el simulador corriendo al lado del editor de código en `FlatListScreen.js`. |
| *"En la zona 1 de importaciones, traemos los componentes básicos como `View`, `Text`, `Button` y por supuesto `FlatList`, además del hook `useState` de React para manejar la interactividad."* | El cursor selecciona las líneas 1 a 4. |
| *"En la zona principal, declaramos nuestro estado `elementos`. Es un arreglo de objetos, donde cada uno tiene un `id` único y un `nombre`. También creamos la función `eliminarElemento`, la cual recibe un `id` y usa el método `filter` de JavaScript para actualizar el estado, quitando el elemento seleccionado de la lista."* | Se selecciona desde la línea 10 (el estado) hasta la línea 20 (la función `eliminarElemento`). |

---

### Parte 2: Renderizado de FlatList y Transición a SectionList
**Responsable:** Integrante 2

| Audio / Diálogo (Lo que se dice) | Video (Lo que se muestra) |
| :--- | :--- |
| *"Gracias. Ahora pasamos a la interfaz. Dentro del `return`, renderizamos nuestro componente `<FlatList>`. Le pasamos el arreglo que creamos a la propiedad `data`, y en `keyExtractor` le indicamos que utilice el `id` de cada objeto como clave única."* | El cursor selecciona las líneas 26 a 28 de `FlatListScreen.js`. |
| *"En la propiedad `renderItem`, construimos visualmente cada fila: mostramos el nombre del elemento en un `<Text>` y agregamos un botón 'Eliminar' que ejecuta nuestra función `eliminarElemento`. Pueden ver en el simulador cómo, al presionar el botón, el ítem desaparece en tiempo real."* | Selecciona las líneas 29 a 34. En el simulador, se hace clic en un botón "Eliminar" y se ve cómo el elemento desaparece. |
| *"Ahora, cambiemos al archivo `SectionListScreen.js`. A diferencia de una lista plana, aquí necesitamos agrupar datos por categorías. Por eso, nuestro estado `secciones` es diferente: es un arreglo donde cada objeto tiene un `tituloCategoria` (como Refrescos o Jugos) y un sub-arreglo llamado `data` con los elementos correspondientes."* | Se cambia la pestaña en el editor a `SectionListScreen.js` y se selecciona el estado `secciones` (líneas 9 a 18). |

---

### Parte 3: Renderizado de SectionList y Cierre
**Responsable:** Integrante 3

| Audio / Diálogo (Lo que se dice) | Video (Lo que se muestra) |
| :--- | :--- |
| *"Gracias. Para mostrar estos datos agrupados en la interfaz utilizamos el componente `<SectionList>`. Aquí la propiedad principal cambia de `data` a `sections`, donde pasamos nuestro estado agrupado. El `keyExtractor` sigue una lógica similar para optimizar la lista."* | El cursor apunta a las líneas 25 a 27 de `SectionListScreen.js`. |
| *"Al igual que en FlatList, usamos `renderItem` para dibujar cada refresco o jugo individualmente. Sin embargo, la magia de este componente está en `renderSectionHeader`. Esta propiedad recibe cada sección y nos permite desestructurar el `tituloCategoria` para dibujar una cabecera, como un título rojo, que separa los grupos visualmente."* | Se selecciona primero `renderItem` (líneas 29-33) y luego se resalta `renderSectionHeader` (líneas 35-42). |
| *"Toda esta estructura cobra vida gracias a la hoja de estilos definida al final con `StyleSheet`, donde le damos color y espacio a las cabeceras y filas. ¡Y así es como implementamos listas simples y agrupadas en React Native! Muchas gracias por su atención."* | Se muestra rápidamente la `Zona 3` de estilos al final del archivo. Luego la app en el simulador haciendo scroll por ambas pantallas. Los integrantes se despiden. |
