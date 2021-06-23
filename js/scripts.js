window.addEventListener('DOMContentLoaded', event => {

    const numero = document.body.querySelector('input#numero');
    const botonRespuesta = document.body.querySelector('button#boton-respuesta');
    const respuesta = document.body.querySelector('p#respuesta');
    const carta = document.body.querySelector('div#carta');

    botonRespuesta.addEventListener('click', event => {
        event.preventDefault();
        carta.style.display = 'block';
        respuesta.innerHTML = resolver(numero.value);
    })

})

function resolver(numero) {
    if (numero == 6) return "ROKU";
    if (numero == 16) return "E";
    if (numero == 966) return "TELE";
    else return "<i class='fas fa-skull'></i>";
};
