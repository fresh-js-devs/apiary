import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: #2468b1;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: background-color 0.7s ease-out;

  &:hover,
  :active {
    background-color: #0670e2;
  }
`;

export default Button;
