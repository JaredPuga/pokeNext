import Link from "next/link";
import Image from "next/image";
import { Spacer } from "@nextui-org/react";

export const NavBar = () => {

  return (
    <div className="flex w-full flex-row items-center justify-start px-5 " style={{backgroundColor: '#111111'}}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={60}
            height={60}
            priority
        />

        <Link href={'/'} className="flex flex-row hover:cursor-pointer hover:text-gray-300">
          <p className="text-3xl">P</p>
          <p className="text-2xl">ókemon</p>
        </Link>
        
        <Spacer css={{flex: 1}} />

        <Link href={'/favorites'}><p className="text-white text-2xl">Favoritos</p></Link>
    </div>
  )
}
