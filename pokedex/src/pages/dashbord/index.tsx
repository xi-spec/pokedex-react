import React, { useEffect, useState } from 'react';
import './styles.scss';
import Pagination from '@material-ui/lab/Pagination';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadPokemons } from '../../redux/actions/pokeActions';
import { Link } from 'react-router-dom';
function Dashboard ({ actions, pokemons }:{actions:any, pokemons:any}) {
  const [page, setPage] = useState(1);
  const handleChange = (event:any, value:any) => {
    setPage(value);
  };

  useEffect(() => {
    actions.loadPokemons();
  }, []);

  return (
    <main className='pokedex'>
      <h1 className='title'>POKEDEX</h1>
      <div
      className='pokemon__imgs-container'>
      {pokemons.length === 14 && (
        pokemons.map((pokemon:any) => (
          <Link
          key={pokemon.name}
          to='/'
          className = 'col-1'
          >
            <div
            className={`module ${pokemon.types[0].type.name}`}
          >
            <img
            className='pokemon-img'
             src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
             <h5>{pokemon.name.toUpperCase()}</h5>
            </div>
          </Link>

        ))
      )}
      </div>
<Pagination className={'pagination'}
             size="large"
             count={15}
             page={page}
             onChange={handleChange}/>
    </main>
  );
}

function mapStateToProps ({ pokemons }:{pokemons:any}) {
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
