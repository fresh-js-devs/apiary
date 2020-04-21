
import React from 'react';
import styled from '@emotion/styled';

import HeadingOne from '../atoms/HeadingOne';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <HeadingOne>Magic The</HeadingOne>
                <HeadingOne>Gathering</HeadingOne>
            </HeaderWrapper>
        </>
    );
};

export default Header;