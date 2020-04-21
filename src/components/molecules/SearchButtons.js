import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button.js'

const SearchButtonsContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    padding: 0.5rem 1rem;
`;

const SearchButtons = () => {
    return(
        <SearchButtonsContainer>
            <Button>Classes</Button>
            <Button>Races</Button>
            <Button>Equipment</Button>
            <Button>Spells</Button>
            <Button>Monsters</Button>
            <Button>Proficiencies</Button>
        </SearchButtonsContainer>
    );
};

export default SearchButtons;