import styled from '@emotion/styled';

const Input = styled.input`
    width: 30%;
    padding: 0.3rem 0.5rem;
    margin-top: 2rem;
    border: none;
    background-color: lightgray;
    height: 2rem;
    font-size: 1.5rem;
    border-bottom: 3px #c0392b;

    &:focus{
        border-bottom: 3px #c0392b;
    };
`;

export default Input;