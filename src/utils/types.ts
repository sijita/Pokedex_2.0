interface PokemonSprites {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
  other: {
    dream_world: {
      front_default: string | undefined;
      front_female: string | undefined;
    };
    home: {
      front_default: string | undefined;
      front_female: string | undefined;
      front_shiny: string | undefined;
      front_shiny_female: string | undefined;
    };
    "official-artwork": {
      front_default: string | undefined;
      front_shiny: string | undefined;
    };
    showdown: {
      back_default: string | undefined;
      back_female: string | undefined;
      back_shiny: string | undefined;
      back_shiny_female: string | undefined;
      front_default: string | undefined;
      front_female: string | undefined;
      front_shiny: string | undefined;
      front_shiny_female: string | undefined;
    };
  };
  versions: {
    [key: string]: {
      [key: string]: {
        back_default: string | undefined;
        back_gray?: string | undefined;
        back_shiny?: string | undefined;
        back_shiny_transparent?: string | undefined;
        back_transparent?: string | undefined;
        front_default: string | undefined;
        front_gray?: string | undefined;
        front_shiny?: string | undefined;
        front_shiny_transparent?: string | undefined;
        front_transparent?: string | undefined;
      };
    };
  };
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface TypeColors {
  [key: string]: string;
}
