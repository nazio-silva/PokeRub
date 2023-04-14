export interface Pokemon {
  name: string;
  avatar_url: string;
  url: string,
  types: Array<Tipos>,
  height: number,
  peso: string,
  categoria: string,
  abilities: Array<Habilidades> 
  sprites: Image
}

export interface Image {
  front_default: string
}

export interface Habilidades {
  ability: Habilidade
}

export interface Habilidade {
  name: string,
  url: string
  is_hidden: boolean,
  slot: number
}

export interface Tipos {
  slot: number,
  type: Tipo
}

export interface Tipo {
  name: string,
  url: string
}