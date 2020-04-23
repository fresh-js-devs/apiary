import React from 'react';

import OneCard from '../atoms/OneCard';

const LayoutDetail = ({data}) => {

    return(
        <OneCard>
                <div>
                    <h1>{data.productName}</h1>
                    <p>Kategoria: {data.category}</p>
                    <p>Popis: {data.description}</p>
                    <p>Cena: {data.piecePrice}</p>
                </div>
        </OneCard>
    );
};

export default LayoutDetail;