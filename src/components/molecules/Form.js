import React from 'react';
import styled from '@emotion/styled';
 
import Button from '../atoms/Button.js';
import Input from '../atoms/Input.js';
import HeadingOne from '../atoms/HeadingOne.js';
import ImageDiv from '../atoms/ImageDiv.js';

const FormWrapper = styled.div`
    display: block;
    text-align: left;
    justify-content: left;
`;

const Form = ({ handleChange, handleSearch, Name }) => {
    return(
        <>
        <ImageDiv>
            <FormWrapper>
                <HeadingOne>The D&D database</HeadingOne>
                <HeadingOne>you've been always</HeadingOne>
                <HeadingOne>looking for!</HeadingOne>
                    <Input type="text" placeholder="Search monsters, spells..." onChange={handleChange} value={Name}/>
                    <Button onClick={handleSearch}>Search</Button>
            </FormWrapper>
        </ImageDiv>
        </>
    );
};

export default Form;