import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import CardImg from '../atoms/CardImg';
import Container from '../atoms/Container';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}
const Cards = ({ data }) => {
    return (
        //pozn. 1) id převzate z card.id 2) alt = title obrazku
        <CardsWrapper>
            {/* <Container>
                {data.td}
                {data.weather[0].description}
            </Container> */}
            <Container>
                <img src="/03n.png" alt="image" />
                <span>there should be show weater: <strong>test</strong></span>
                
            </Container>

        </CardsWrapper>

    );
};

export default Cards;
