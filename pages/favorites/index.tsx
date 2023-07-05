import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemons";

export default function FavoritePage() {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  
  return (
    <Layout title="Pokemon - Favorites">
      {
        favoritePokemons.length !== 0 ? 
          <FavoritePokemons pokemons={favoritePokemons}/>
        : 
          <NoFavorites />
      }
    </Layout>
  )
}
