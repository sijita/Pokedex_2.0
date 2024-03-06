"use client";
import { Pokemon } from "@/utils/types";
import PokeCard from "./PokeCard";
import { useEffect, useState } from "react";
import { getPokemons } from "@/utils/actions";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@nextui-org/react";

const NUMBER_OF_POKEMONS_TO_FETCH = 10;

export default function PokeList({
  initialPokemons,
}: {
  initialPokemons: Pokemon[];
}) {
  const [offset, setOffset] = useState(NUMBER_OF_POKEMONS_TO_FETCH);
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const { ref, inView } = useInView();

  const loadMorePokemons = async () => {
    const fetchPokemons = await getPokemons(
      undefined,
      NUMBER_OF_POKEMONS_TO_FETCH,
      offset
    );

    const newPokemons = fetchPokemons.filter(
      (apiPokemon) => !pokemons.some((pokemon) => pokemon.id === apiPokemon.id)
    );

    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setOffset(offset + NUMBER_OF_POKEMONS_TO_FETCH);
  };

  useEffect(() => {
    if (inView) {
      loadMorePokemons();
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pokemons.map((pokemon, i) => (
          <PokeCard key={i} pokemon={pokemon} />
        ))}
      </div>
      <div ref={ref}>
        {pokemons.length > 0 && inView && (
          <div className="flex justify-center pt-5">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
