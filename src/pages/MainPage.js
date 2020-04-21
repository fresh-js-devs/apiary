import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import SearchBar from '../components/molecules/SearchBar';
import Cards from '../components/organisms/Cards';

const MainPage = () => {
  const [weatherData, setWeatherData] = useState({
    cards: [], 
    isLoading: false,
    error: '',
  });
  const [cityName, setCityName] = useState('');              //hodnota na inputu, bude se předávat axiosu

  const handleChange = event => setCityName(event.target.value);

  //async = asynchronní volání
const handleSearchWeather = async () => {
    try {
        setWeatherData({
            ...weatherData,
            isLoading: true,
        });
        const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${cityName}`);
        
        setWeatherData({
            cards:result.data.cards,
        })

    } catch (error) {
        
    }
  };

  const renderCards = () => {
   
  };

  return (
    <Layout>
        <h1>metaweather.com API</h1>
      <SearchBar
        handleChange={handleChange}
        cityName ={cityName}
        handleSearchWeather={handleSearchWeather}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
