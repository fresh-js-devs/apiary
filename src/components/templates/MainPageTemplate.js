import React, { Component } from 'react';
import Layout from '../organisms/Layout';

import SearchBar from "../molecules/SearchBar";
import Cards from "../organisms/Cards";

const MainPageTemplate = ({
    handleChange,
    handleSearchPhoto,
    photoData,
    photoName,
}) => {
    const renderCards = () => {
        const { isLoading, hits, error } = photoData;
        if(isLoading) {
            return <div>Loading...</div>;
        }

        if(error) {
        return <div>{error}</div>
        }

        if(!hits ) {
            return <div>No photo found!</div>;
        }

        return <Cards data={hits} error={error} />
    }

    return (
        <Layout>
            <SearchBar
            handleChange={handleChange}
            handleSearchPhoto={handleSearchPhoto}
            photoName={photoName}
            />
            {renderCards()}
        </Layout>
    );
};

export default MainPageTemplate;