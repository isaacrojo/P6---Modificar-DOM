function changeColor(e) {
                // se debe de obtener el elemento primero? antes de mandarlo llamar
    var box = document.getElementsByClassName('box');
    var box = e.target; // que onda con target?
    
    //TODO: cambiar color aleatoriamente
    

    // Seleccionar "un color" (una clase) aleatoriamente, dentro de los colores disponibles
    var colorClasses = ["blue", "purple", "yellow"];
    // colorClasses[0] blue
    // colorClasses[1] purple
    // colorClasses[2] yellow

    // Generar un número aleatorio entre 0 y 2
    var i = Math.round(Math.random()*2);  //round redondea parriba, floor abajo
    var colorClass = colorClasses[i];

    // TODO: Agregar clase al elemento para cambiar su color
    var box = document.getElementById("element");
    box.className = box.className.replace("blue-box", "");
    
   // box.className = box.className + " colorClass";
    box.className = colorClass;

}

// Obtener un elemento de HTML
//var title = document.getElementById('title');

// TODO: Consultar desde HTML
var button = document.getElementById("button_change_color");

button.onclick = changeColor;