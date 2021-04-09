export interface Pokemon {
name:string,
id:number,
height:number,
weight:number,
stats:Stat[],
types:Type[],
sprites:{
    ['front_shiny']:string,
    ['back_default']:string,
    other:{
        ['dream_world']:{
            ['front_default']:string},
            ['official-artwork']:{
                ['front_default']:string},
        }}
}

interface Type {
    type:{
        name:string
    }
}

interface Stat {
    ['base_stat']:number,
    effort:number,
    stat:{
        name:string,
        url:string,
    }
}

export interface Pokedex {
    pokemons: Pokemon[],
    pokemon: Pokemon
}
