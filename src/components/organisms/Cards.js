import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import Button from '../atoms/Button.js';
import Container from '../atoms/Container.js';
import HeadingTwo from '../atoms/HeadingTwo.js';
import CardContent from './CardContent.js';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Cards = ({ data }) => {

    return(
        <>
        <CardsWrapper >
        {data.map(({ name, index, url }) => (
            <CardContent
                name={name}
                index={index}
                url={url}
                
            />
            ))};
        </CardsWrapper>
        </>
    );
};

export default Cards;