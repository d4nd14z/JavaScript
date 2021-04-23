/**
 * El método filter() crea un nuevo array con todos los elementos que cumplan la condicion 
 * implementada por la funcion dada.
 * Filter permite que se genere un array de respuesta con los resultados que se obtienen luego de ejecutar 
 * un filtro sobre los resultados de la llamada a las API.
 */

const obtenerPokemones = async () => {
    const resultados = document.getElementById("resultados");
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json();
        const arrayNombres = await data.results.filter(pokemon => pokemon.name ==="charmander")
        console.log(arrayNombres);
        let node = document.createTextNode (arrayNombres[0].name + " => " + arrayNombres[0].url);
        resultados.appendChild(node);
    }
    catch(error){
        console.log(error);
    }
};

obtenerPokemones();