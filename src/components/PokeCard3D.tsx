"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Pokemon, TypeColors } from "@/utils/types";
import { Avatar, Chip } from "@nextui-org/react";
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

const pokemonTypeShadows: TypeColors = {
  grass: "hover:shadow-green-500/[0.2]",
  water: "hover:shadow-blue-500/[0.2]",
  fire: "hover:shadow-red-500/[0.2]",
  bug: "hover:shadow-lime-500/[0.2]",
  normal: "hover:shadow-gray-500/[0.2]",
  poison: "hover:shadow-purple-500/[0.2]",
  electric: "hover:shadow-yellow-500/[0.2]",
  ground: "hover:shadow-amber-700/[0.2]",
  fairy: "hover:shadow-pink-500/[0.2]",
  fighting: "hover:shadow-orange-500/[0.2]",
  psychic: "hover:shadow-rose-500/[0.2]",
  rock: "hover:shadow-stone-500/[0.2]",
  ghost: "hover:shadow-indigo-500/[0.2]",
  ice: "hover:shadow-cyan-300/[0.2]",
  dragon: "hover:shadow-teal-500/[0.2]",
  steel: "hover:shadow-neutral-500/[0.2]",
  flying: "hover:shadow-sky-500/[0.2]",
  dark: "hover:shadow-zinc-950/[0.2]",
  shadow: "hover:shadow-slate-500/[0.2]",
  default: "hover:shadow-neutral-50/[0.2]",
};

export function PokeCard3D({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <CardContainer className="inter-var w-full">
        <CardBody
          className={`bg-gray-50 relative group/card hover:shadow-2xl ${
            pokemonTypeShadows[pokemon.types[0].type.name]
          } dark:bg-black/90 dark:border-white/[0.1] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex flex-col gap-5`}
        >
          <CardItem translateZ="100" className="flex justify-center">
            <Avatar
              src={pokemon.sprites.front_default}
              className={`w-20 h-20 ${
                pokemonTypeColors[pokemon.types[0].type.name]
              }`}
            />
          </CardItem>
          <div className="flex flex-col items-center justify-center gap-3">
            <CardItem translateZ={80} as="div">
              <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
            </CardItem>
            <CardItem translateZ={70} as="div">
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
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
