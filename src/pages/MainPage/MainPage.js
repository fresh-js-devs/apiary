import React, { useState } from "react";
import axios from "axios";

import HeaderBar from "../../components/organisms/HeaderBar";
import FilterBar from "../../components/organisms/FilterBar";
import Layout from "../../components/organisms/Layout";
import MainCard from "../../components/organisms/MainCard";
import ProgressBar from "../../components/atoms/ProgressBar";
import AlertBarError from "../../components/molecules/AlertBarError";

import ApiCallsProvider from "../../components/apiCalls/ApiCallsProvider";

const MainPage = () => {
  const [cocktailData, setCocktailData] = useState({
    cocktails: [],
    isLoading: false,
    error: "",
  });

  const handleSearchCocktail = async (data, isRandomSearch) => {
    let apiCallString = "";
    if (isRandomSearch) apiCallString = ApiCallsProvider.randomCocktail();
    else apiCallString = ApiCallsProvider.getCocktail(data);

    try {
      setCocktailData({
        ...cocktailData,
        isLoading: true,
      });

      const result = await axios(apiCallString);
      const { drinks } = result.data;
      const adjustedDrinks = filterByOptionalParams(drinks, data);
      setCocktailData({
        ...cocktailData,
        cocktails: adjustedDrinks,
        isLoading: false,
      });
    } catch ({ message }) {
      setCocktailData({
        ...cocktailData,
        isLoading: false,
        error: message,
      });
    }
  };

  const filterByOptionalParams = (cocktails, data) => {
    if (data.optionalSearchMethod == "nonAlcoholic") {
      return cocktails.filter(
        (cocktail) => cocktail.strAlcoholic == "Non alcoholic"
      );
    }
    return cocktails;
  };

  /*const ingredientsKeysContainer = [[]];

  const getAllIngredience = (cocktails) => {
    const ingredients = cocktails.map((cocktail) => {
      const keys = Object.keys(cocktail);
      console.log(keys);
    });
  };*/

  const renderCocktails = () => {
    const { isLoading, cocktails, error } = cocktailData;
    if (isLoading) {
      return <ProgressBar />;
    }

    if (error) {
      return <AlertBarError errorCall={error} />;
    }

    if (!cocktails) {
      return <AlertBarError errorCall="No cocktail was found!" />;
    }
    return cocktails.map(
      ({ idDrink, strDrink, strDrinkThumb, strInstructions }) => (
        <MainCard
          key={idDrink}
          strDrink={strDrink}
          strDrinkThumb={strDrinkThumb}
          strInstructions={strInstructions}
        />
      )
    );
  };

  return (
    <div>
      <HeaderBar />
      <FilterBar handleSearchData={handleSearchCocktail} />
      <Layout>{renderCocktails()}</Layout>
    </div>
  );
};

export default MainPage;
