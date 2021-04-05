import { combineReducers } from 'redux';
import pokemons from './pokemonsReducer';

const rootReducer = combineReducers({
  pokemons

});

export default rootReducer;
