import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import LayoutButton from '../components/atoms/LayoutButton';

const MainPage = () => {
    const[productData, setProductData] = useState({product: []});
    
    useEffect(() => {
        const searchData = async () => {
            await axios(
              `http://localhost:5000/api/home`,
            ).then(result => {
                setProductData({
                      product: result.data
                });
            });
        };
        searchData();
    }, []);

  return(
      <Layout data={productData.product}/>
  );
};

export default MainPage;