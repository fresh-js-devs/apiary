import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import SearchBar from '../components/molecules/SearchBar';
import Cards from '../components/organisms/Cards';

const MainPage = () => {
  const [magicData, setMagicData] = useState({
    cards: [],
    isLoading: false,
    error: '',
  });
  const [magicName, setMagicName] = useState('');

  const handleChange = event => setMagicName(event.target.value);

  const handleSearchMagic = async () => {
    try {
      setMagicData({
        ...magicData,
        isLoading: true,
      });
      const result = await axios(
        `https://api.magicthegathering.io/v1/cards?name=${magicName}`,
      );
      const { cards } = result.data;
      setMagicData({
        ...magicData,
        cards,
        isLoading: false,
      });
    } catch ({ message }) {
      setMagicData({
        ...magicData,
        isLoading: false,
        error: message,
      });
    }
  };

  const renderCards = () => {
    const { isLoading, cards, error } = magicData;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!cards) {
      return <div>No magic card found!</div>;
    }

    return <Cards data={magicData.cards} error={magicData.error} />;
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        magicName={magicName}
        handleSearchMagic={handleSearchMagic}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
