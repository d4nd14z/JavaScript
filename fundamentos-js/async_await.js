/**
 * La declaración de función async define una función asíncrona, la cual devuelve un 
 * objeto AsyncFunction.
 * Reduce la cantidad de codigo utilizada en "fetch", pero cumple con la misma funcion
 */

const obtenerPokemones = async () => {

    const resultados = document.getElementById("resultados");
    
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        data.results.forEach((pokemon) => {
            let node = document.createTextNode (pokemon.name + "\n");
            resultados.appendChild(node);
        });
    }
    catch(error){
        console.log(error);
    }
}

obtenerPokemones();