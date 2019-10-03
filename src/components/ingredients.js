import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ingredientsActions from '../store/actions/ingredients';

const Ingredients = (props) => {
  const [ingredientsTitle, setIngredientsTitle] = useState('');
  const [ingredientsContent, setIngredientsContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addIngredients({ title: ingredientsTitle, content: ingredientsContent });
  }

  useEffect(() => {
    props.fetchIngredients();
  }, []);

  return (
    <>
      <ul>
        {props.ingredients.map((ingredients, idx) => (
          <li key={idx}>
            <p>{ingredients.title}</p>
            <p>{ingredients.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredientsTitle}
          onChange={(e) => setIngredientsTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredientsContent}
          onChange={(e) => setIngredientsContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIngredients: () => dispatch(ingredientsActions.fetchIngredients()),
  addIngredients: (data) => dispatch(ingredientsActions.addIngredients(data)),
});

Ingredients.propTypes = {
  fetchIngredients: PropTypes.func,
  addIngredients: PropTypes.func,
  ingredients: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ingredients);
