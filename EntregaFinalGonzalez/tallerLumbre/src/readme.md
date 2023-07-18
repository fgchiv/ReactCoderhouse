# Readme. Taller Lumbre

Taller Lumbre es un e-commerce dedicado a la venta de componentes y productos de ciclismo. En esta carpeta se encuentra el proyecto, el  .env que no debería estar subido acá por cuestiones de privacidad y seguridad y un video ('Video Demo') para mostrar la funcionalidad del proyecto.

## Funcionalidades:

* Exposición de productos: la información de cada producto (título, descripción, categoría, stock, precio e imagen) se almacena en la colección "items" en Firestore. La app recupera esa colección y renderiza todos los productos en la raíz del sitio. Además, puede accederse a un filtro por categorías mediante la url '/category/:id', siendo :id el nombre de la categoría. En el caso de las categorías compuestas por más de una palabra, se reemplazan los espacios por guiones bajos.
* Detalle de producto: Se accede a un producto mediante la url '/item/:id' siendo :id el id del doc en Firestore a partir del cual la app recupera la información del producto desde la base de datos. En esta vista se puede agregar el producto al carrito (también se puede ajustar la cantidad de producto a agregar en la orden).
* Checkout: en la url '/cart' se encuentra una tabla con un resumen de los productos en el carrito y el formulario para cerrar la compra.
    * Carrito de compras: utilizando context-api se almacena temporalmente un array que luego permite cerrar la compra. Esto gestiona el stock también, de modo que no se pueda superar, en ninguna instancia, la cantidad de ítems en stock. Por otro lado, la funcionalidad de actualizar el stock en Firebase después de cada orden no está implementada.
    * Registro de órdenes en Firestore: al cerrar una compra, se guarda un doc en Firestore (colección "orders") con los productos y cantidades comprados, los datos del usuario (nombre, apellido, teléfono y mail) y la fecha y hora de compra.
    * Chequeo de validez de datos de usuario: antes de cerrar la compra se chequea que no haya datos en blanco y que el email (medio preferente de contacto) coincida en los dos campos de ingreso.
    * Confirmación de compra: Se informa el éxito de la compra junto con el id del doc generado en Firestore mediante un Alert de Mui. En el caso de que haya ocurrido algún error también el error en un Alert.


## Librerías incorporadas:

* Material UI: para incorporar componentes con estilos y facilitar la construcción de la interfaz.
* React-router-dom: para facilitar la navegabilidad de la app.
* Firebase, Firestore: para simular la interacción con un backend, ante los límites del proyecto en tiempo y alcance.
