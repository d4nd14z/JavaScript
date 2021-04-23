/**
 * Fetch: La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal
 * HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que 
 * proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
 */

fetch("http://pokeapi.co/api/v2/pokemon/")
.then((res) => {
    return res.json(); //Recibe "promise" y prepara la respuesta en json para utilizarla
})
.then((data) => {
    //en el objeto json se recibe //results: [{},{},{}...]
    const resultados = document.getElementById("resultados");
    data.results.forEach((pokemon) => {   // utiliza la respuesta del json ya procesada
        console.log(pokemon.name);
        let node = document.createTextNode (pokemon.name + "\n");
        resultados.appendChild(node);
    });
})
.error((err) => {  //Si algo falla durante el proceso, se reporta el error
    console.log(err);
});