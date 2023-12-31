import { GetStaticProps} from 'next'
import { Layout } from "@/components/layouts";
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemons';

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({pokemons}:Props) {

  return (
    <Layout pokemon="Abb" title='Home'>
      <div className='flex gap-5 flex-row flex-wrap justify-center mt-3'>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((result, i) => ({
    ...result,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons,
    },
  }
}