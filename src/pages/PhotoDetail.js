import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Template from "../components/templates/PhotoDetailTemplate";

const PhotoDetail = () => {
  const [data, setData] = useState({ isLoading: false, error: "", hit: {} });

  const { photoId } = useParams();

  const fetchData = async () => {
    try {
      setData({
        ...data,
        isLoading: true,
      });
      const API_KEY = '16160272-fd8dbdd5a51412f279b834064';
      const result = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&id=${photoId}`
      );
        
      setData({
        isLoading: false,
        hit: result.data.hits[0],
      });
    } catch ({ message }) {
      setData({
        ...data,
        isLoading: false,
        error: message,
      });
    }
    
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, error, hit } = data;

  return <Template isLoading={isLoading} hit={hit} error={error} />;
};

export default PhotoDetail;
