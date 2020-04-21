import React from "react";
import styled from "@emotion/styled";

import BookImg from "../atoms/BookImg";
import Book from "../atoms/Book";
import Title from "../atoms/Title";

const BookWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Books = ({ data }) => {
  return (
    <BookWrapper>
      {data.map(({ name, isbn, img }) => (
        <Book>
          <BookImg key={isbn} src={img} width="240" height="330"></BookImg>
          <Title>{name}</Title>
        </Book>
      ))}
    </BookWrapper>
  );
};

export default Books;
