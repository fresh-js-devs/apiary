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

const SearchButtons = ({ handleSearch, handleChange }) => {
    return(
        <SearchButtonsContainer>
            <Button onClick={handleChange} value="classes">Classes</Button>
            <Button onClick={handleChange} value="races">Races</Button>
            <Button onClick={handleChange} value="equipment">Equipment</Button>
            <Button onClick={handleChange} value="spells">Spells</Button>
            <Button onClick={handleChange} value="monsters">Monsters</Button>
            <Button onClick={handleChange} value="proficiencies">Proficiencies</Button>
        </SearchButtonsContainer>
    );
};

export default SearchButtons;