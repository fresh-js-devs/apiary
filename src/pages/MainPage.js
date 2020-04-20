import React, { useState } from "react";
import axios from "axios";

import Layout from "../components/organisms/Layout";
import SearchBar from "../components/molecules/SearchBar";
import Cards from "../components/organisms/Cards";

import "../pages/MainPage.css";

const MainPage = () => {
  const [mealsData, setMealsData] = useState({
    cards: [],

    isLoading: false,
    error: "",
  });
  const [mealName, setMealName] = useState("");

  const handleChange = (event) => setMealName(event.target.value);

  const handleSearchMeal = async () => {
    try {
      setMealsData({
        ...mealsData,
        isLoading: true,
      });
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      const { meals } = result.data;
      console.log(result.data);
      setMealsData({
        ...mealsData,
        meals,
        isLoading: false,
      });
    } catch ({ message }) {
      setMealsData({
        ...mealsData,
        isLoading: false,
        error: message,
      });
    }
  };

  const renderCards = () => {
    const { isLoading, meals, error } = mealsData;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!meals) {
      return <div class="sticky">Enter some meal:</div>;
    }

    console.log(meals);
    return <Cards data={mealsData.meals} error={mealsData.error} />;
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        mealName={mealName}
        handleSearchMeal={handleSearchMeal}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
