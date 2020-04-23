import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../atoms/Container';
import Title from '../atoms/Title';
import OneCard from '../atoms/OneCard';
import ProductLayout from '../atoms/ProductName';

const Layout = ({children, data}) => {
    const { push } = useHistory();
    const clickHandler = id => push(`/product/${id}`);

    return(
        <Container>
            <Title>E-shop</Title>
            
            {data.map(({productName, id}) => (
                <OneCard onClick={() => clickHandler(id)}>
                    <ProductLayout>{productName}</ProductLayout>
                </OneCard>
            ))}

            {children}
        </Container>
    );
};

export default Layout;