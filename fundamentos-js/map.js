/**
 * El método map() crea un nuevo array con los resultados de la llamada a la funcion indicada, aplicados
 * a cada uno de sus elementos.
 * El map() va a tomar una funcion de flecha donde su parametro va a ser cada uno de los objetos que componen
 * al array de respuesta
 */

const obtenerPokemones = async () => {
    const resultados = document.getElementById("resultados");
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json();
        const arrayNombres = await data.results.map(pokemon => pokemon.name)
        let node = document.createTextNode (arrayNombres);
        resultados.appendChild(node);
    }
    catch(error){
        console.log(error);
    }
};

obtenerPokemones();