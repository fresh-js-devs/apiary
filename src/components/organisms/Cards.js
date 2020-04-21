import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import CardImg from '../atoms/CardImg';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({data}) => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = pokemonId => push(`/pokemon/${pokemonId}`);

  return (
    //pozn. 1) id převzate z card.id 2) alt = title obrazku
    <CardsWrapper>
      {data.map(card=>(      
        <CardImg   
          key={card.id}
          alt={card.id}
          src={card.imageUrl}       
          className='card'
          width='240'
          height='330'
          onClick={() => handleGoToPokemonDetail(card.id)}
        />
      ))};
    </CardsWrapper>
  );
};

export default Cards;
