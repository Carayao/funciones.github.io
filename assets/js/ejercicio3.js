
//Ejercicio 3.1
function pintar(ele) {
    ele.style.backgroundColor = 'yellow'           
}
//Obtenemos el elemento
ele = document.getElementById("ele1")
//Le pasamos el elemento a la funcion del evento
ele.addEventListener("click", function() {
    pintar(ele)
});


//Ejercicio 3.2

function pintarPorDefecto(elemento, color ='green') {
    elemento.style.backgroundColor = color           
}

//Obtenemos el elemento
elemento = document.getElementById("ele2")
//Le pasamos el elemento a la funcion del evento
elemento.addEventListener("click", function() {
    pintarPorDefecto(elemento,)
});

