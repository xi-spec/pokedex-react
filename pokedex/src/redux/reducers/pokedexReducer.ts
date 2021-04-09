import { AnyAction } from 'redux';
import actionsTypes from '../actions/actionsType';
import initialState from '../store/initialState';

export default function pokemon (state = initialState.pokedex, action:AnyAction) {
  switch (action.type) {
    case actionsTypes.LOAD_POKEMON:
      return { ...state, pokemon: action.data };

    case actionsTypes.LOAD_POKEMONS:
      return { ...state, pokemons: action.pokemons };

    default:return state;
  }
}
