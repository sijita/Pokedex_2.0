import PokeCard from "@/components/PokeCard";
import PokeList from "@/components/PokeList";
import NotFound from "@/components/ui/NotFound";
import SearchInput from "@/components/ui/SearchInput";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { getPokemons } from "@/utils/actions";
import Image from "next/image";

const INITIAL_NUMBER_OF_POKEMONS = 12;

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchParam = searchParams.search?.toString();
  const pokemons = await getPokemons(
    searchParam,
    INITIAL_NUMBER_OF_POKEMONS,
    0
  );

  return (
    <main className="flex flex-col min-h-screen items-center gap-10 md:p-24 p-10">
      <div className="flex flex-col items-center gap-5 relative pb-5">
        <Image src="/pokemon.svg" alt="pikachu" width={200} height={200} />
        <p className="text-xl font-medium text-center text-gray-400 md:w-1/2 w-full">
          Welcome to the Pokédex! Here you can find all the information about
          your favorite Pokémon!
        </p>
      </div>
      <div className="w-full flex items-center gap-5">
        <SearchInput />
        <ThemeSwitcher />
      </div>
      {pokemons.length ? (
        searchParam ? (
          <PokeCard pokemon={pokemons[0]} />
        ) : (
          <PokeList initialPokemons={pokemons} />
        )
      ) : (
        <NotFound />
      )}
    </main>
  );
}
