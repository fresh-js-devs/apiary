import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button.js'
import MainPage from '../../pages/MainPage.js';

const SearchButtonsContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    padding: 0.5rem 1rem;
`;

const SearchButtons = ({ handleSearch, setName }) => {
    return(
        <SearchButtonsContainer>
            <Button onClick={handleSearch}>Classes</Button>
            <Button onClick={handleSearch} value="races">Races</Button>
            <Button onClick={handleSearch} value="equipment">Equipment</Button>
            <Button onClick={handleSearch} value="spells">Spells</Button>
            <Button onClick={handleSearch} value="monsters">Monsters</Button>
            <Button onClick={handleSearch} value="proficiencies">Proficiencies</Button>
        </SearchButtonsContainer>
    );
};

export default SearchButtons;