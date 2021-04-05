import { AnyAction } from 'redux';
import actionsTypes from '../actions/actionsType';
import initialState from '../store/initialState';

export default function pokemons (state = initialState.pokemons, action:AnyAction) {
  switch (action.type) {
    case actionsTypes.LOAD_POKEMONS:
      return action.pokemons;

    default:return state;
  }
}
