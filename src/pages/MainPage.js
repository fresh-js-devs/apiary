import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import LayoutButton from '../components/atoms/LayoutButton';

const MainPage = () => {
    const[productData, setProductData] = useState({product: []});
    
    const searchData = async () => {
          await axios(
            `http://localhost:5000/api/home`,
          ).then(result => {
              setProductData({
                    product: result.data
              });
          });
      };

  return(
      <Layout data={productData.product}>
          <LayoutButton onClick={searchData}>Load Data</LayoutButton>
      </Layout>
  );
};

export default MainPage;