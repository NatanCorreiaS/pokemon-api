import { types } from "util";

interface Sprites {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}

interface Stats {
  "0": {
    base_stat: number;
    stat: {
      name: string;
    };
  };
  "1": {
    base_stat: number;
    stat: {
      name: string;
    };
  };
  "2": {
    base_stat: number;
    stat: {
      name: string;
    };
  };
  "3": {
    base_stat: number;
    stat: {
      name: string;
    };
  };
  "5": {
    base_stat: number;
    stat: {
      name: string;
    };
  };
}

interface Types {
  "0": {
    type: {
      name: string;
    };
  };
  "1": {
    type: {
      name: string;
    };
  };
}

interface Pokemon {
  name: string;
  sprites: Sprites;
  stats: Stats;
  types: Types;
}

export default Pokemon;
