let ingredVerduras = prompt("¿Tienes verduras? Si o No");
let ingredAgua = prompt("¿Tienes agua? (Si o No)");

let ingredCarne = prompt("¿Tienes carne? (Si o No)");
let ingredPollo = prompt("¿Tienes pollo? (Si o No)");

let ingredCondimentos = prompt("¿Tienes condimentos? (Si o No)");
let ingredCaldo =  prompt("¿Tienes un cubo de caldo? (Si o No)");


if (((ingredVerduras == "Si" && ingredAgua == "Si") && (ingredCarne == "Si" || ingredPollo == "Si")) && (ingredCondimentos == "Si" || ingredCaldo == "Si")){
    document.write("Perfecto! Puedes preparar una sopa");
}else{
    document.write("No cuentas con los ingredientes necesarios para la sopa");
}