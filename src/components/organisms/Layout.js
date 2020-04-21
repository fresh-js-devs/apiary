import React, { Component, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../atoms/Container'
import Logo from '../molecules/Logo'
import Content from '../atoms/Content'



const Layout = ({children}) => {
    const { push } = useHistory();

    const handleGoToHomepage = () => push('/');

    return (
        <Container>
            <Logo onClick={handleGoToHomepage}/>
                {children}      
        </Container>

    );
};

export default Layout;