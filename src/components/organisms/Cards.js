import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import Button from '../atoms/Button.js';
import Container from '../atoms/Container.js';
import HeadingTwo from '../atoms/HeadingTwo.js';
import HeadingThree from '../atoms/HeadingThree.js';

const Cards = ({ data }) => {
    const { push } = useHistory();

    const handleGoToDetail = id => push(`/detail/${id}`);

    return(
        <>
        <Container>
        {data.map(({ id, name }) => (
        <HeadingTwo>name={name}</HeadingTwo>
      ))};
        </Container>
        </>
    );
};

export default Cards;