import Image from "next/image";

interface FavoritePokemonsProps {
  pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }: FavoritePokemonsProps) => {
  return (
    <div className="flex flex-row justify-start gap-5 flex-wrap mt-5">
      {pokemons.map((idPokemon) => (
        <div key={idPokemon} className="flex items-center justify-center bg-zinc-800 rounded-lg w-40 h-48 hover:bg-zinc-950 hover:cursor-pointer">
          <div className="flex flex-col items-center" >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
              alt={`Imagen del pokemon ${idPokemon}`}
              width={0}
              height={0}
              style={{
                width: "145px",
                height: "140px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
