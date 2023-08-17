//Genero funcion handler(Funcion manejadora):
let friendsHandler = function(){
//Creo la lista
let lista = $("#lista")
//"Vacio" la lista:
lista.empty();
    //Hago la peticion de get
    $.get("http://localhost:5000/amigos", (response) => {
    //Tomo la lista de amigos, los recorro y por cada elemento hago:
    response.map(amigo => {
        //Creo el elemento:
        let elementoHTML = document.createElement("li")
        //Genero texto:
        elementoHTML.innerHTML = `${amigo.name}`;
        //Anido el elemento dentro de otro
        lista.append(elementoHTML);
    });
    });
}

//Mostrar lista
//Funcion principal:
$('#boton').on("click", friendsHandler);

//Genero un buscador:
//Funcion principal
$("#search").on("click", () => {
    //Tomo el id
    let id = $('#input').val();
    //Si recibo id ejecuto esto:
    if(id){
    //Hago GET, pero el valor va a ser cambiante
    $.get(`http://localhost:5000/amigos/${id}`, (response) =>
    {
        //Inserto string usando metodo jquery
        $("#amigo").html(`Nombre: ${response.name}`)
    });
    } else {
        $("#amigo").html("Inserta un ID")
    }
})

//Boton delete
$("#delete").on("click", () => {
    //Selecciono ID, usando metodos de DOM
    let id = document.querySelector("#inputDelete").value
    //Me pregunto si tengo id:
    if(id){
        //Delete necesita de ajax
        $.ajax({
            type: "DELETE",
            url:`http://localhost:5000/amigos/${id}`,
            //Una vez que tengo la respuesta
            success: () => {
                $('#success').html("Tu amigo fue borrado");
                //Invoco a la funcion manejadora
                friendsHandler()
                //El input se debe borrar, despues de click
                id = ""; //HACER FUNCION QUE LO BORRE
            },
        })
    } else {
        $('#success').html("Inserta un ID");
    }
})