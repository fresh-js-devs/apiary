import React, { useState } from 'react';
import axios from 'axios';

import Form from '../components/molecules/Form.js';
import SearchButtons from '../components/molecules/SearchButtons';
import Cards from '../components/organisms/Cards.js';

const MainPage = () =>{

    const [Data, setData] = useState({
        results: [],
        isLoading: false,
        error: '',
      });
      const [Name, setName] = useState('');
    
      const handleChange = event => setName(event.target.value);

      const handleSearch = async () => {
        try {
          setData({
            ...Data,
            isLoading: true,
          });
          const result = await axios(
            `http://www.dnd5eapi.co/api/${Name}`,
          );
          const { results } = result.data;
          setData({
            ...Data,
            results,
            isLoading: false,
          });
        } catch ({ message }) {
          setData({
            ...Data,
            isLoading: false,
            error: message,
          });
        }
        console.log(Data);
      };

      const renderCards = () => {
        const { isLoading, results, error } = Data;
        if (isLoading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>{error}</div>;
        }
    
        if (!results) {
          return <div>Nothing found!</div>;
        }
    
        return <Cards data={Data.results} error={Data.error} />;
      };

    return (
        <>
        <Form
            handleChange={handleChange}
            handleSearch={handleSearch} 
            Name={Name}
        />
        <SearchButtons
            handleChange={handleChange}
            handleSearch={handleSearch}
            setName={setName}
        />
        {renderCards()}
        </>
    );
};

export default MainPage;