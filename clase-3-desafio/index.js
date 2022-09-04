// Programa para chequear si el año ingresado es bisiesto. El programa finalizará cuando el usuario ingrese un año bisiesto.

// Variables
let anno;
let continuar = true;


do {
    // Pido al usuario que ingrese un valor.
    anno = parseInt(prompt("Ingrese el año"));
    // Compruebo que el valor ingresado sea un numero.
    if (isNaN(anno)) {
        alert("Por favor, ingrese un año vaildo.");
    }else{
        // Formula para comprobar si el año es bisiesto o no.
        if ( (0 == anno % 4) && (0 != anno % 100) || (0 == anno % 400) ){
            alert(`${anno} es bisiesto.`);
            // Rompo el loop.
             continuar = false;
         }else{
             alert(`${anno} no es bisiesto.`);
         } 
    }
}while(continuar)
