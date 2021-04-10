import actionsType from './actionsType';
import axios from 'axios';
import { Dispatch } from 'redux';
import { API, OFFSET } from '../../constants/api';
import { Pokemon } from '../../models/interface';

export function loadPokemons (page:number, rowsPerPage:number) {
  return async (dispatch: Dispatch) => {
    let pokemons:Pokemon[] = [];
    const { data: { results } } = await axios.get(`${API.pokemons}${rowsPerPage}${OFFSET}${page}`);

    results.forEach(async (pokemon:{name:string, url:string}) => {
      const { data } = await axios.get(pokemon.url);
      pokemons = [...pokemons, data];
      pokemons.sort((a:Pokemon, b:Pokemon) => {
        return a.id - b.id;
      });

      if (pokemons.length === rowsPerPage) {
        dispatch({
          type: actionsType.LOAD_POKEMONS,
          pokemons
        });
      } else {
        dispatch({
          type: actionsType.LOAD_POKEMONS,
          pokemons: []
        });
      }
    });
  };
}

export function loadPokemon (pokeName:string) {
  return async (dispatch:Dispatch) => {
    const { data } = await axios.get(`${API.pokemon}${pokeName}`);

    dispatch({
      type: actionsType.LOAD_POKEMON,
      data
    });
  };
}
