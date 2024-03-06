import { pokemonTypeColors } from "@/utils/constans";
import { TypeColors } from "@/utils/types";
import { Avatar, Chip } from "@nextui-org/react";

export default function PokeDetails({ pokemon }: { pokemon: any }) {
  return (
    <div className="self-start relative top-40 w-full">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between w-full">
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
