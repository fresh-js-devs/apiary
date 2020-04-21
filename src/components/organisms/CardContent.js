import React from 'react';

import Container from '../atoms/Container.js';
import HeadingThree from '../atoms/HeadingThree.js';



const CardContent = ({ name }) => {
    return(
    <Container >
        <HeadingThree>{name}</HeadingThree>
    </Container>
    );
};

export default CardContent;