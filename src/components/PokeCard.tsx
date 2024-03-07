import { TypeColors, type Pokemon } from "@/utils/types";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Link from "next/link";

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

export default function PokeCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <Card className="p-5 hover:scale-95" shadow="sm">
        <CardHeader className="flex justify-center">
          <Avatar
            src={pokemon.sprites.front_default}
            className={`w-20 h-20 ${
              pokemonTypeColors[pokemon.types[0].type.name]
            }`}
          />
        </CardHeader>
        <CardBody className="flex flex-col items-center gap-3">
          <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
          <div className="flex gap-2">
            {pokemon.types.map((type, i) => (
              <Chip
                key={i}
                size="sm"
                avatar={
                  <Avatar
                    name={type.type.name}
                    src={`/${type.type.name}.svg`}
                  />
                }
                classNames={{
                  base: `capitalize ${pokemonTypeColors[type.type.name]}`,
                  avatar: `${pokemonTypeColors[type.type.name]} p-[2px]`,
                }}
                className={`text-white font-mono h-5`}
              >
                {type.type.name}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
