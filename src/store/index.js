import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './middleware/thunk';
// you can import thunk from 'redux-thunk' because it if far more tested. Jacob Recomentdation.;
import ingredients from './reducers/ingredients';

const reducers = combineReducers({
  ingredients,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
