import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../pages/MealDetail.css";

const MealDetail = () => {
  const [data, setData] = useState({ isLoading: false, error: "", card: {} });
  const { mealId } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({
          ...data,
          isLoading: true,
        });
        const result = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );

        setMeal(result.data.meals[0]);

        setData({
          isLoading: false,
          card: result.data.meals,
        });
      } catch ({ message }) {
        setData({
          ...data,
          isLoading: false,
          error: message,
        });
      }
    };
    fetchData();
  }, []);

  const renderCard = () => {
    const { isLoading, card, error } = data;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    console.log(card);

    return (
      <div>
        <div class="a"></div>
        <h2>{meal.strMeal}</h2>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          height="500"
          width="500"
        />
        <div>{meal.strInstructions} </div>
      </div>
    );
  };

  return <div>{meal !== null ? <div>{renderCard()}</div> : <div></div>}</div>;
};

export default MealDetail;
