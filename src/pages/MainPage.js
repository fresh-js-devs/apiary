import React, { useState } from 'react';
import axios from 'axios';

import Form from '../components/molecules/Form.js';
import SearchButtons from '../components/molecules/SearchButtons';

const MainPage = () =>{

    const [Data, setData] = useState({
        cards: [],
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
          const { cards } = result.data;
          setData({
            ...Data,
            cards,
            isLoading: false,
          });
        } catch ({ message }) {
          setData({
            ...Data,
            isLoading: false,
            error: message,
          });
        }
      };

      const renderCards = () => {
        const { isLoading, cards, error } = Data;
        if (isLoading) {
          return <div>Loading...</div>;
        }
    
        if (error) {
          return <div>{error}</div>;
        }
    
        if (!cards) {
          return <div>Nothing found!</div>;
        }
    
        return <Cards data={Data.cards} error={Data.error} />;
      };

    return (
        <>
        <Form></Form>
        <SearchButtons></SearchButtons>
        {renderCards()}
        </>
    );
};

export default MainPage;