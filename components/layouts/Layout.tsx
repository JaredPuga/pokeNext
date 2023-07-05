import Head from "next/head"
import { NavBar } from "../ui";

interface layoutProps {
    children: JSX.Element | JSX.Element[];
    title: string; //Opcional
    pokemon?: string;
}

export const Layout = ({children, title, pokemon}:layoutProps) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Jared Puga"></meta>
            <meta name="description" content={`Información sobre el pokemon ${pokemon}`}></meta>
            <meta name="keywords" content="pokemon, pokedex"></meta>
        </Head>

        <NavBar />

        <main className="py-0 px-5">
            { children }
        </main>
    </>
  )
}
