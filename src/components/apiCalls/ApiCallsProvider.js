class ApiCallsProvider {
  static randomCocktail() {
    return "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  }

  static getCocktail({ cocktailName, searchMethod }) {
    switch (searchMethod) {
      case "byName":
        return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
      case "byLetter":
        return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${cocktailName}`;
      case "byIngredient":
        return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailName}`;
    }
  }
}

export default ApiCallsProvider;
