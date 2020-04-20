import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import CardImg from "../atoms/CardImg";

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToMealDetail = (mealId) => push(`/meal/${mealId}`);

  return (
    <CardsWrapper>
      {data.map(({ idMeal, strMealThumb }) => (
        <CardImg
          key={idMeal}
          alt={idMeal}
          src={strMealThumb}
          className="card"
          width="240"
          height="240"
          onClick={() => handleGoToMealDetail(idMeal)}
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
