import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Progress,
} from "@nextui-org/react";

export default function PokeTab({ pokemon }: { pokemon: any }) {
  return (
    <Card className="w-full" shadow="none">
      <CardHeader className="flex flex-col gap-6 sm:flex-row items-center sm:items-start justify-around">
        <div className="flex flex-col gap-2 items-center">
          <h5 className="text-lg font-medium">Height</h5>
          <span>{pokemon.height}m</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h5 className="text-lg font-medium">Weight</h5>
          <span>{pokemon.weight} lbs</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h5 className="text-lg font-medium">Abilities</h5>
          <ul className="text-center">
            {pokemon.abilities.map((ability: any, i: number) => (
              <li className="capitalize" key={i}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </CardHeader>
      <Divider className="my-5" />
      <CardBody>
        <div className="flex flex-col gap-8 w-full">
          {pokemon.stats.map((stat: any, i: number) => (
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full"
              key={i}
            >
              <div className="sm:w-[50%]">
                <h5 className="font-medium capitalize text-lg">
                  {stat.stat.name}
                </h5>
              </div>
              <div className="w-full flex gap-5 items-center">
                <span className="text-md font-medium text-gray-500">
                  {stat.base_stat}
                </span>
                <Progress
                  value={stat.base_stat}
                  size="sm"
                  className="w-full"
                  classNames={{
                    indicator: `${
                      stat.base_stat <= 50
                        ? "bg-red-500"
                        : stat.base_stat <= 59
                        ? "bg-orange-600"
                        : stat.base_stat <= 80
                        ? "bg-yellow-600"
                        : stat.base_stat <= 100
                        ? "bg-yellow-300"
                        : "bg-green-500"
                    }`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardBody>
      <Divider className="my-5" />
      <CardFooter className="flex flex-col gap-5">
        <h5 className="text-lg font-medium">Moves</h5>
        <div className="flex flex-col sm:flex-row gap-5 overflow-x-auto w-full">
          {pokemon.moves.map((move: any, i: number) => (
            <Chip
              key={i}
              variant="flat"
              className="capitalize"
              classNames={{
                base: "w-full max-w-full text-center",
              }}
            >
              {move.move.name}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
