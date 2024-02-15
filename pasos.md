0. Declarar endpoints para `/products`:
  - GET, POST PUT y DELETE
  - Van ligados a un usuario para poder hacer el seguimiento con campos de auditoria y borrado logico
1. Añadir acciones de:
  - Añadir producto*
    - Nombre
    - Descripción
    - Precio
  - Editar producto*
  - Eliminar producto
2. Medidas de seguridad
  - Prevenir:
    1. Inyección SQL
    2. Manipulación de formularios
3. Almacenar datos:
  - En DB MYSQL, considero manejar un pool de conexiones para esta
