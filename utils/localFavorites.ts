
const wordCapitalize = (name:string):string => {
    return name[0].toUpperCase() + name.substring(1)
}

const toggleFavorites = (id:number) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    if (favorites.includes( id )) {
        favorites = favorites.filter(pokeId => pokeId !== id); //si está, lo quita
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ) );
}


//El parametro es de tipo number pero la función retorna un dato de tipo boolean
const existPokemon = (id:number):boolean => {

    if ( typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

const pokemons = ():number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}


const exportedFunctions = { toggleFavorites, wordCapitalize, existPokemon, pokemons}

export default exportedFunctions