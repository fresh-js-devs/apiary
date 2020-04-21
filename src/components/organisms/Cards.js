import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import CardImg from "../atoms/CardImg";

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToPhotoDetail = (photoId) => push(`/photo/${photoId}`);

  return (
    <CardsWrapper>
      {data.map(({ id, previewURL, tags }) => (
        <CardImg
          alt={tags}
          className="card"
          height="150"
          key={id}
          onClick={() => handleGoToPhotoDetail(id)}
          src={previewURL}
          width="150"
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
