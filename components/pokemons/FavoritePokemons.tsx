import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface FavoritePokemonsProps {
  pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }: FavoritePokemonsProps) => {
  return (
    <div className="flex flex-row justify-start gap-5 flex-wrap mt-5">
      {pokemons.map((idPokemon) => (
        <FavoriteCardPokemon key={idPokemon} idPokemon={idPokemon} />
      ))}
    </div>
  );
};
