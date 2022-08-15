import React, { useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: "", amount: "" });
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient(inputState);
  };
  const titleChangeHandler = (e) => {
    setInputState((prev) => {
      return {
        title: e.target.value,
        amount: prev.amount,
      };
    });
  };

  const amountChangeHandler = (e) => {
    setInputState((prev) => {
      return {
        title: prev.title,
        amount: e.target.value,
      };
    });
  };
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
        {props.loading && <LoadingIndicator />}
      </Card>
    </section>
  );
});

export default IngredientForm;
