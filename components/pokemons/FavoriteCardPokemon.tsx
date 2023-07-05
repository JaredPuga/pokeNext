import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    idPokemon: number
}

export const FavoriteCardPokemon = ({idPokemon}:Props) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${idPokemon}`)
    }

  return (
    <div
      key={idPokemon}
      className="flex items-center justify-center bg-zinc-800 rounded-lg w-40 h-48 hover:bg-zinc-950 hover:cursor-pointer"
      onClick={onFavoriteClicked}
    >
      <div className="flex flex-col items-center">
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
  );
};
