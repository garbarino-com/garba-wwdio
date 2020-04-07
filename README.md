# garba-wwdio
Compra automatizada
Simula la compra de una heladera con retiro en sucursal y pago con tarjeta de débito visa.

Esta prueba automatizada tiene el siguiente flujo: 

1. Visita la página de Garbarino.com
2. Realiza una búsqueda de "Heladeras"
3. Selecciona la primera heladera del listado
4. Procede a realizar la compra de la heladera seleccionada
5. Ingresa un barrio, localidad o ciudad
6. Selecciona retiro en sucursal y selecciona para primera sucursal del listado
7. Selecciona el medio de pago visa débito
8. Completa los datos del titular de medio de pago
9. Llega hasta el paso 4 de finalizar compra sin hacerla.

Para ejecutar este proyecto:

1. Tener instalado node. Si no lo tienen, ejecutar el comando "npm install node" para instalarlo.
2. Desde su terminal en Mac Os. Crear una carpeta llamada "projects" o como quieran llamarla.
3. Ubicarse dentro de la carpeta creada.
4. Hacer un git clone del proyecto. "git clone https://github.com/garbarino-com/garba-wwdio.git".
5. Para ejecutar la prueba se debe ejecutar "npm test" desde la terminal.

Notas: 
El proyecto fue realizado con el framework WebdriverIO V5, utilizando Page Object Model (POM)



