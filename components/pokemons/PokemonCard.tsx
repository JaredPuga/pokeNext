import Image from "next/image";
import { useRouter } from "next/router";
import { SmallPokemon } from "@/interfaces";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard = ({pokemon}:Props) => {

    const router = useRouter()

    const onClickCard = () => {
        router.push(`/name/${pokemon.name}`)
    }

  return (
    <div
      className="flex items-center justify-center bg-zinc-800 rounded-lg w-40 h-48 hover:bg-zinc-950 hover:cursor-pointer"
    >
      <div className="flex flex-col items-center" onClick={onClickCard}>
        <Image
          src={pokemon.img}
          alt={`Imagen del pokemon ${pokemon.name}`}
          width={0}
          height={0}
          style={{
            width: "145px",
            height: "140px",
          }}
        />
        <div className="flex justify-between w-full">
          <p className="capitalize">{pokemon.name}</p>
          <p>#{pokemon.id}</p>
        </div>
      </div>
    </div>
  );
};
