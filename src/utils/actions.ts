"use server";
import { type Pokemon } from "./types";
import axios, { AxiosError } from "axios";

export const getPokemons = async (
  name?: string,
  limit?: number,
  offset?: number
) => {
  const pokemons: Pokemon[] = [];
  let url = "https://pokeapi.co/api/v2/pokemon/";

  if (name) {
    url += `${encodeURIComponent(name.trim().toLowerCase())}`;
  }

  if (limit && !name) {
    url += `?limit=${encodeURIComponent(limit)}`;
  }

  if (offset && !name) {
    url += `&offset=${encodeURIComponent(offset)}`;
  }

  try {
    const { data } = await axios.get(url);
    const { results } = data;

    if (!name && results) {
      for (const pokemon of results) {
        const { data } = await axios.get(pokemon.url);
        pokemons.push({
          id: data.id,
          name: data.name,
          sprites: data.sprites,
          types: data.types,
        });
      }
    } else {
      pokemons.push({
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        types: data.types,
      });
    }

    return pokemons;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return [];
    }

    throw new Error(`An error happened: ${error}`);
  }
};

export const getPokemon = async (name: string) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return data;
  } catch (error) {
    throw new Error(`An error happened: ${error}`);
  }
};
