import actionsType from './actionsType';
import axios from 'axios';
import { Dispatch } from 'redux';
import { API, OFFSET } from '../../constants/api';

export function loadPokemons (page:number, rowsPerPage:number) {
  return async (dispatch: Dispatch) => {
    let pokemons:any = [];
    const { data: { results } } = await axios.get(`${API.pokemons}${rowsPerPage}${OFFSET}${page}`);

    results.forEach(async (pokemon:any) => {
      const { data } = await axios.get(pokemon.url);
      pokemons = [...pokemons, data];
      pokemons.sort((a:any, b:any) => {
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
