const API = process.env.REACT_APP_API;


// action creator for fetch
/**
 * get setup
 * @param  {} payload
 * @param  {'FETCH_Ingredients'} =>{return{type
 * @param  {} payload
 * @returns FETCH_Ingredients
 */
const get = (payload) => {
  return {
    type: 'FETCH_Ingredients',
    payload,
  };
};
/**
 * put setup
 * @param  {} payload
 * @param  {'ADD_Ingredients'} =>{return{type
 * @param  {} payload
 * @returns ADD_Ingredients
 */
const add = (payload) => {
  return {
    type: 'ADD_Ingredients',
    payload,
  };
};

// Thunk for handle asyc fetch
/**
 * Get method
 * @param  {} =>(dispatch
 * @param  {} =>{returnfetch(`${API}/api/v1/ingredients`
 * @param  {} .then((results
 * @param  {} =>results.json(
 * @param  {} .then((data
 * @param  {} =>dispatch(get(data
 */
const fetchIngredients = () => (dispatch) => {
  return fetch(`${API}/api/v1/ingredients`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};
/**
 * Post method
 * @param  {} ingredients
 * @param  {} =>(dispatch
 * @param  {'POST'} =>{constoptions={method
 * @param  {JSON.stringify(ingredients} body
 * @returns application
 */
const addIngredients = (ingredients) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(ingredients),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/ingredients`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};


export default {
  fetchIngredients,
  addIngredients,
};