import React, { useEffect } from 'react';
import './styles.scss';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadPokemons } from '../../redux/actions/pokeActions';
import { Link } from 'react-router-dom';
import { Pokemon, Pokedex } from '../../models/interface';
import Pagination from './pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

function Dashboard ({ actions, pokemons }:{actions:any, pokemons:Pokemon[]}) {
  useEffect(() => {
    actions.loadPokemons(0, 14);
  }, []);

  return (
    <main className='pokedex'>
      <h1 className='title'>POKEDEX</h1>
      <div
      className='pokemon__imgs-container'>
      {pokemons.length
        ? (
            pokemons.map((pokemon:Pokemon) => (
          <Link
          key={pokemon.name}
          to={`/detail/${pokemon.name}`}
          className = 'col-1'
          >
            <div
            className={`module ${pokemon.types[0].type.name}`}
          >
            <img
            className='pokemon-img'
             src={pokemon.sprites.other.dream_world.front_default
               ? pokemon.sprites.other.dream_world.front_default
               : pokemon.sprites.other['official-artwork'].front_default
                 ? pokemon.sprites.other['official-artwork'].front_default
                 : pokemon.sprites.front_shiny} alt={pokemon.name}/>
             <h5>{pokemon.name.toUpperCase()}</h5>
            </div>
          </Link>

            ))
          )
        : <CircularProgress color="inherit" /> }
      </div>
     <Pagination actions={actions} />
    </main>
  );
}

function mapStateToProps ({ pokedex: { pokemons } }:{pokedex:Pokedex}) {
  return { pokemons };
}

function mapDispatchToProps (dispatch:Dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemons
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
