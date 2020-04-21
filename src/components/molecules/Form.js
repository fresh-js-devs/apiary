import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = ({ handleChange, magicName, handleSearchMagic }) => {
    return (

        <FormWrapper>
            <Input type='text' onChange={handleChange} value={magicName} />

            <Button onClick={handleSearchMagic}>Search Magic Card</Button>
        </FormWrapper>

    );
};

export default Form;