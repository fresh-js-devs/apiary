import React, { useState } from 'react';
import axios from 'axios';

import Template from "../components/templates/MainPageTemplate";

const MainPage = () => {

    const[photoData, setPhotoData] = useState({
       hits: [],
       isLoading: false,
       error: "", 
    });
    const [photoName, setPhotoName] = useState("");

    const handleChange = (event) => setPhotoName(event.target.value);

    const handleSearchPhoto = async () => {
        try {
            setPhotoData({
                ...photoData,
                isLoading: true,
            });
            const result = await axios(
                `https://pixabay.com/api/?key=16160272-fd8dbdd5a51412f279b834064&q=${photoName}`
            );
            const { hits } = result.data;
            console.log(hits);
            setPhotoData({
                ...photoData,
                hits,
                isLoading: false,
            });    
        } catch ( message ) {
            setPhotoData({
                ...setPhotoData,
                isLoading: false,
                error: message,
            });
        }
    };

    return (
        <Template 
            handleChange={handleChange}
            handleSearchPhoto={handleSearchPhoto}
            photoData={photoData}
            photoName={photoName}
        />
    );
};

export default MainPage;