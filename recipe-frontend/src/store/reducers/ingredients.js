import { statement } from "@babel/template";
/**
 * Reducaer for ingredients
 * @param  {} sate=[]
 * @param  {} action
 * @param  {} =>{switch(action.type
 * @param  {returnaction.payload;case'ADD_INGREDIENTS':return[...statement} {case'FETCH_INGREDIENTS'
 * @param  {returnstatement;}};} action.payload];default
 * @returns returnstatement
 */
export default ( sate = [], action ) => {
  switch ( action.type ) {
    case 'FETCH_INGREDIENTS':
      return action.payload;
    case 'ADD_INGREDIENTS':
      return [ ...statement, action.payload ];
    default:
      return statement;
  } 
};