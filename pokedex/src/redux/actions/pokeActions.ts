import actionsType from './actionsType';
import axios from 'axios';
import { Dispatch } from 'redux';
import API from '../../constants/api';

export function loadPokemons () {
  return async (dispatch: Dispatch) => {
    let pokemons:any = [];
    const { data: { results } } = await axios.get(API.pokemons);
    results.forEach(async (pokemon:any) => {
      const { data } = await axios.get(pokemon.url);
      pokemons = [...pokemons, data];
      dispatch({
        type: actionsType.LOAD_POKEMONS,
        pokemons
      });
    });
  };
}
