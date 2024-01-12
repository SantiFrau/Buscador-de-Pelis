export function debounce(func, delay) {
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

// Ejemplo de uso:



//const miFuncionDebounced = debounce(miFuncion, 1000); // La función original se ejecutará como máximo cada 1000 milisegundos (1 segundo).

/*La función debounce es una técnica utilizada en programación para limitar la frecuencia de ejecución 
de una función. Es particularmente útil cuando tienes una función que se dispara con frecuencia 
(por ejemplo, en respuesta a eventos como el desplazamiento de la página, redimensionamiento de la ventana, 
entrada del usuario, etc.) y quieres evitar la sobrecarga de recursos al ejecutar la función con 
demasiada frecuencia.*/ 