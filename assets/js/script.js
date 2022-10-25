var colorSeleccionado = 'blue';

document.addEventListener('keydown', function (event) {
    console.log(event);

    if (event.key === 'a') {
        colorSeleccionado = 'blue'
    } else if (event.key === 's') {
        colorSeleccionado = 'green';
    }
    else if (event.key === 'd') {
        colorSeleccionado = 'red';
    }
    else if (event.key === 'f') {
        colorSeleccionado = 'yellow';
    }
})

const cambiarColor = function(id) {

const colorChange = document.getElementById(id)     
colorChange.addEventListener('click', function(){ 
colorChange.style.backgroundColor = colorSeleccionado

})

}

cambiarColor('div1') 
cambiarColor('div2') 
cambiarColor('div3') 
cambiarColor('div4') 