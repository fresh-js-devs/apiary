import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import Button from '../atoms/Button.js';
import Container from '../atoms/Container.js';
import HeadingTwo from '../atoms/HeadingTwo.js';
import HeadingThree from '../atoms/HeadingThree.js';

const CardContent = ({ name }) => {
    return(
    <Container>
        <HeadingThree>{name}</HeadingThree>
    </Container>
    );
};

export default CardContent;