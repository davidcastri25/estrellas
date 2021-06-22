//Guardamos todos los inputs que tengan la propiedad name y el valor rate
var logos = document.querySelectorAll('input[name=rate]');

//Añadimos un evento click al documento
document.addEventListener("click", function (event) {
    //Guardamos en una variable el elemento padre del elemento que ha desencadenado el evento
    var targ = event.target.parentElement;

    //Si el elemento padre no existe y no contiene la clase star-widget
    if (!(targ && targ.classList.contains('star-widget'))) {
        //Recorremos todos los input que tengan de nombre rate.
        logos.forEach(e => {
            //Si el input de tipo check está checkeado, lo descheckeamos
            if (e.checked) {
                e.checked = false;
            }
            //checked property sets or returns the checked state of a checkbox.
        });
    }
});