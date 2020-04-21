import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import SearchBar from '../components/molecules/SearchBar';
import Cards from '../components/organisms/Cards';

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState({
    cards: [], //kartičky, které vrátí
    isLoading: false,
    error: '',
  });
  const [pokemonName, setPokemonName] = useState('');              //hodnota na inputu, bude se předávat axiosu

  const handleChange = event => setPokemonName(event.target.value);

  //async....znamená asynchronní volání
const handleSearchPokemon = async () => {
    
  };

  const renderCards = () => {
   
  };

  return (
    <Layout>
        <h1>metaweather.com API</h1>
      <SearchBar
        handleChange={handleChange}
        pokemonName ={pokemonName}
        handleSearchPokemon={handleSearchPokemon}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
