//Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista con todos los amigos que el servidor nos devolvera,
//al hacer un GET a la ruta http://localhost:5000/amigos

//Usando jquery, traigo el boton:
const [boton] = $('#boton');
//Creo una funcion
const listaAmigos = (response) => {
    //Traigo el elemento
    const [lista] = $('#lista');
    //Response es un array, lo recorro y a cada amigo le creo una "li"
    response.forEach((amigo) => {
        const newLi = document.createElement('li');
        //Le agrego el texto asi se ve:
        newLi.innerText = amigo.name;
        //Le agrego a la lista un "hijo"
        lista.appendChild(newLi);
    });
}

//Creo una funcion
const showFriends = () => {
    //Aca dentro sucede el GET:
    $.get("http://localhost:5000/amigos", (listaAmigos))
}


//Al boton le agrego el addEvenListener: 
//1° Parametro: Accion 2° Parametro: Reaccion(Callback)
boton.addEventListener('click', (showFriends) => {})
