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
            //default: b7ab5ba9b741e852fdfa609360891e1b
            //personal key:af2629b621d06922de199e6d764c182f
            const result = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b7ab5ba9b741e852fdfa609360891e1b`);
            console.log("content of response:")
            console.log(result)
            console.log("content of array: ")
            console.log(result.data.list);
            console.log("access to first item: ")
            console.log(result.data.list[1].td);
            console.log(result.data.list[1].weather[0].description);

            const { cards } = result.data.list;
            
            setWeatherData({
                ...weatherData,
                cards,
                isLoading: false,
            })
        } catch (error) {

        }
    };
    //console.log("saved in weatherData: ")
    //console.log({weatherData.cards})
    const renderCards = () => {
        if (weatherData.isLoading) {
            return <div>Loading...</div>;
        }

        if (weatherData.error) {
            return <div>{weatherData.error}</div>;
        }

        if (!weatherData.cards) {
            return <div>No weather found!</div>;
        }
        // return (
        //     {weatherData.cards.map(data=>(
        //         <Cards data={data} />
        //     ))}
        // )
        return <Cards data={weatherData.cards} />;
    };

    return (
        <Layout>
            <h1>metaweather.com API</h1>
            <SearchBar
                handleChange={handleChange}
                cityName={cityName}
                handleSearchWeather={handleSearchWeather}
            />
            
            {renderCards()}
        </Layout>
    );
};

export default MainPage;
