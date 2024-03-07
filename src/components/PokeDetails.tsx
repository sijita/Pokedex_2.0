import { TypeColors } from "@/utils/types";
import { Avatar, Chip } from "@nextui-org/react";

const pokemonTypeColors: TypeColors = {
  grass: "bg-green-500",
  water: "bg-blue-500",
  fire: "bg-red-500",
  bug: "bg-lime-500",
  normal: "bg-gray-500",
  poison: "bg-purple-500",
  electric: "bg-yellow-500",
  ground: "bg-amber-700",
  fairy: "bg-pink-500",
  fighting: "bg-orange-500",
  psychic: "bg-rose-500",
  rock: "bg-stone-500",
  ghost: "bg-indigo-500",
  ice: "bg-cyan-300",
  dragon: "bg-teal-500",
  steel: "bg-neutral-500",
  flying: "bg-sky-500",
  dark: "bg-zinc-950",
  shadow: "bg-slate-500",
  default: "bg-neutral-50",
};

export default function PokeDetails({ pokemon }: { pokemon: any }) {
  return (
    <div className="self-start relative sm:top-40 top-28 w-full">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl font-bold capitalize">{pokemon.name}</h1>
          <span className="text-xl font-medium"># {pokemon.order}</span>
        </div>
        <div className="flex gap-2">
          {pokemon.types.map(
            (
              type: {
                type: { name: string };
              },
              i: number
            ) => (
              <Chip
                key={i}
                avatar={
                  <Avatar
                    name={type.type.name}
                    src={`/${type.type.name}.svg`}
                  />
                }
                className="text-white font-mono"
                classNames={{
                  base: `${pokemonTypeColors[type.type.name]}`,
                  avatar: `${pokemonTypeColors[type.type.name]} p-1`,
                }}
              >
                {type.type.name}
              </Chip>
            )
          )}
        </div>
      </div>
    </div>
  );
}
