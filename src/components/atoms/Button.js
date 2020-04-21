import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: #7d7d7d;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  transition: background-color 0.7s ease-out;
  border-radius: 15px;
  margin-top: 10px;

  &:hover,
  :active {
    background-color: #c4c2c2;
  }
`;

export default Button;
