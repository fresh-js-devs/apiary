import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import LayoutDetail from '../components/organisms/LayoutDetail';

const DetailPage = () => {
    const[productData, setProductData] = useState({product: {}});
    const{id} = useParams();

    useEffect(() => {
            const fetchData = async () => {
                await axios(
                  `http://localhost:5000/api/home/${id}`,
                ).then(result => {
                    setProductData({
                        product: result.data
                    });
                });
            };
            fetchData();
      }, []);

    return(
        <LayoutDetail data={productData.product}>

        </LayoutDetail>
    );
}

export default DetailPage;