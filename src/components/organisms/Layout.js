import React from 'react';

import Container from '../atoms/Container';

const Layout = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    );
};

export default Layout;
