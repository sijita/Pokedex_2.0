import { pokemonTypeColors } from "@/utils/constans";
import { type Pokemon } from "@/utils/types";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Link from "next/link";

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
