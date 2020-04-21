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
    const { push } = useHistory();

    const handleGoToDetail = id => push(`/detail/${id}`);

    return(
        <>
        <CardsWrapper>
        {data.map(({ name, index }) => (
            <CardContent
                name={name}
                index={index}
            />
            ))};
        </CardsWrapper>
        </>
    );
};

export default Cards;