import React, { useEffect } from 'react';
import './styles.scss';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loadPokemon } from '../../redux/actions/pokeActions';
import { Pokemon, Pokedex } from '../../models/interface';

function Detail ({ actions, pokemon, match }:{actions:any, pokemon:Pokemon, match:any}) {
  const { pokeName } = match.params;

  useEffect(() => {
    actions.loadPokemon(pokeName);
  }, []);

  return (
    pokemon && (

    <div className={pokemon.types[0].type.name}>
    <div className='container'>
    <section className='margin'>
    <h1>{pokemon.name.toUpperCase()}</h1>
    <div className ='types__container'>
 {pokemon.types.map(type => (
   <div key={type.type.name} className={`types-row__container type-${type.type.name}`}>
     <p>{type.type.name}</p>
   </div>
 ))}
    </div>

    <div className ='id__container'>
      <h3>{`ID:${pokemon.id}`}</h3>
    </div>

    <div className='pokemon__img-container'>
    <img
      className='pokemon-img'
      src={pokemon.sprites.other.dream_world.front_default}></img>
         <img
      src={pokemon.sprites.back_default}></img>
    </div>
</section>

<section className='detail'>
    <div className='pokemon-detail__container'>

      <div className='height-weight'>
        <div className='row-content'>
           <h4>Height:</h4>
           <p>{`${pokemon.height / 10} M`}</p>
        </div>
        <div className='row-content'>
           <h4>Weight:</h4>
           <p>{`${pokemon.weight / 10} kg`}</p>
        </div>
      </div>

      <div className='progress__container'>
        <h4>Stats:</h4>
      {pokemon.stats.map(stat => (
        <div key={stat.stat.name}>
        <p>{`${stat.stat.name}: ${stat.base_stat}`}</p>
        <div className={`progress-bar stripes ${stat.base_stat >= 50 ? 'green' : 'red'}`}>
          <span style={{ width: stat.base_stat * 2 }}></span>
        </div>
        </div>
      ))}
      </div>

    </div>
</section>
    </div>
    </div>
    )
  );
}

function mapStateToProps ({ pokedex: { pokemon } }:{pokedex:Pokedex}) {
  return { pokemon };
}

function mapDispatchToProps (dispatch:Dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemon
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
