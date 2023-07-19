import { useEffect, useState } from 'react';
import { GetStaticPaths,GetStaticProps } from 'next';
import Image from 'next/image';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import confetti from 'canvas-confetti';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';

interface Props {
    pokemon:Pokemon
}

export default function PokemonPageName({pokemon}:Props) {
    
    const [isInFavorites, setIsInFavorites] = useState(false)

    useEffect(() => {
        setIsInFavorites(localFavorites.existPokemon(pokemon.id))
    }, [pokemon.id])
    

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsInFavorites(!isInFavorites)

        if (isInFavorites) return;

        confetti({
        zIndex: 9999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
            x: 1,
            y: 0,
        }
        })
    }

    return (
        <Layout title={`Pokemon - ${localFavorites.wordCapitalize(pokemon.name)}`} pokemon={pokemon.name}>
            <div className="flex items-stretch justify-center w-full gap-5 mt-5">
            <div className="bg-zinc-950 p-10 rounded-xl flex justify-center">
                <Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} width={0} height={0} style={{width: '90%', height: '250px'}} alt={`Imagen del pokemon ${pokemon.name}`} />
            </div>
            <div className="bg-zinc-950 grow px-5 rounded-xl flex flex-col justify-around">
                <div className="flex items-center justify-between">
                <h1 className="text-5xl capitalize">{pokemon.name}</h1>
                    <button onClick={onToggleFavorite} className="bg-zinc-600 hover:bg-zinc-800 transition-all ease-in delay-150 text-md p-3 rounded-xl">
                    {isInFavorites ? 'Eliminar de Favoritos' : 'Guardar en favoritos'}
                    </button>
                </div>
                <div>
                <h2 className="text-3xl">Sprites</h2>
                <div className="flex flex-row w-full items-center justify-around">
                <Image src={pokemon.sprites.front_default} width={100} height={100} alt={`Imagen del pokemon ${pokemon.name}`} />
                <Image src={pokemon.sprites.back_default} width={100} height={100}  alt={`Imagen del pokemon ${pokemon.name}`} />
                <Image src={pokemon.sprites.front_shiny} width={100} height={100}  alt={`Imagen del pokemon ${pokemon.name}`} />
                <Image src={pokemon.sprites.back_shiny} width={100} height={100}  alt={`Imagen del pokemon ${pokemon.name}`} />
                </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonNames: string[] = data.results.map( pokemon => pokemon.name );
    
    return {
        paths: pokemonNames.map( name => ({
            params: { name }
          })),
        fallback:false
    }
}
export const getStaticProps: GetStaticProps = async ({params}) =>{

    const { name } = params as {name: string}
    
    return {
        props:{
            pokemon: await getPokemonInfo(name)
        }
    }
}
