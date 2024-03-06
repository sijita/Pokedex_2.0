import PokeDetails from "@/components/PokeDetails";
import PokeTabs from "@/components/PokeTabs";
import { getPokemon } from "@/utils/actions";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemon(name);
  const limitedMoves = pokemon.moves.slice(0, 5);
  const limitedGameIndices = pokemon.game_indices.slice(0, 5);
  pokemon.moves = limitedMoves;
  pokemon.game_indices = limitedGameIndices;

  return (
    <main className="flex min-h-screen lg:w-[50%] w-full flex-col items-center justify-center mx-auto gap-16 p-10">
      <div className="flex flex-col justify-center items-center w-full mb-20">
        <Link className="flex items-center gap-5 text-lg" href="/">
          <IconArrowLeft size={30} />
          <span className="font-semibold text-lg">Back</span>
        </Link>
        <PokeDetails pokemon={pokemon} />
        <div className="relative top-5 z-10">
          <Image
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
            width={315}
            height={315}
          />
        </div>
        <div className="w-full z-0">
          <PokeTabs pokemon={pokemon} />
        </div>
      </div>
    </main>
  );
}
