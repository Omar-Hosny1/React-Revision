import React, { useState, useEffect, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.currentIngredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ele) => ele !== action.id);
    default:
      throw new Error("ERROR");
  }
};
const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { ...state, loading: true };
    case "RESPONSE":
      return { ...state, loading: false };
    case "ERROR":
      return { loading: false, error: action.error };
    default:
      throw new Error("sad");
  }
};
const Ingredients = (props) => {
  const [currentIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [httpState, dispatchHTTP] = useReducer(httpReducer, {
    isLoading: false,
    error: false,
  });
  useEffect(() => {
    fetch(
      "https://ingredients-project-97e06-default-rtdb.firebaseio.com/ingredients/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://ingredients-project-97e06-default-rtdb.firebaseio.com/ingredients/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });

    //USING USE REDUCER
    dispatch({ type: "ADD", ingredient });
  };
  const filteredIngredientsHandler = useCallback((data) => {
    setUserIngredients(data);
  }, []);
  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://ingredients-project-97e06-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELEtE",
      }
    )
      .then((res) => {
        setIsLoading(false);
        setUserIngredients((prevIngredients) =>
          prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
        );
      })
      .catch((err) => setError(err.message));
    dispatch({ type: "DELETE", id: ingredientId });
  };

  return (
    <div className="App">
      {error && <ErrorModal>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
