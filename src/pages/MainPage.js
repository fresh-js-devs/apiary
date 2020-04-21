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

  
function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}


  const [cityName, setCityName] = useState('');              //hodnota na inputu, bude se předávat axiosu

  const handleChange = event => setCityName(event.target.value);

  //async = asynchronní volání
const handleSearchWeather = async () => {
    try {
        setWeatherData({
            ...weatherData,
            isLoading: true,
        });
        //default: b7ab5ba9b741e852fdfa609360891e1b
        //personal key:af2629b621d06922de199e6d764c182f
        const result = await axios(`api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b7ab5ba9b741e852fdfa609360891e1b`);
        
        console.log(result);
        const{cards} = result;   
    
        setWeatherData({
            ...weatherData,
            cards,
            isLoading: false,
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
