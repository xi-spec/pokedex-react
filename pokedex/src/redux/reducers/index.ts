import { combineReducers } from 'redux';
import pokedex from './pokedexReducer';

const rootReducer = combineReducers({
  pokedex
});

export default rootReducer;
