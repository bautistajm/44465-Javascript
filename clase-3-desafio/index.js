// Programa para chequear si el año ingresado es bisiesto. El programa finalizará cuando el usuario ingrese un año bisiesto.

let anno;
let continuar = true;

do {
    anno = parseInt(prompt("Ingrese el año"));
    if (isNaN(anno)) {
        alert("Por favor, ingrese un año vaildo.");
    }else{
        if ( (0 == anno % 4) && (0 != anno % 100) || (0 == anno % 400) ){
            alert(`${anno} es bisiesto.`);
             continuar = false
         }else{
             alert(`${anno} no es bisiesto.`);
         } 
    }
}while(continuar)
