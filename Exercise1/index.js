/**
 * Estoy usando una funciona generadora ya que es
 * posible conservar su contexto de varibales esto
 * quiere decir que puedes entrar y salir y las variables 
 * no pierden su valor solo si se usa en la misma instancia
 * iniciada.
 */
function* counter() {
    // Declarar en 0 para nuevas instancias.
    let current = 0;
    // Realizar el contador +1 de N llamadas a la función. esto
    // es muy eficiente a nivel de memoria. 
    while(true) {
        // retornar el valor del contador actual y esperar la siguiente llamada.
        yield current;
        current = current + 1;
    }
}
// Crear la instancia de nuestro contador.
const countgen = counter();

// Usar una forma elegante para leer sólo el valor desado.
const count = () => countgen.next().value;

// Ta da!! contador infinito :D !!!!
console.log(count())
console.log(count())
console.log(count())
console.log(count())
