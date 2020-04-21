import styled from '@emotion/styled';

const Button = styled.button`
    cursor: pointer;
    border-radius: 10px;
    background-color: #c0392b;
    color: white;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: sans-serif;
    border-style: none;
    margin: 0.2rem;

    &:hover{
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.23);
    }
    &:active{
        margin: 0rem;
        padding: 0.7rem 1.2rem;
    }
`;

export default Button;