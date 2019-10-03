// I need to go back and watch the demo jacob did again. Dont quite get how this is going to be connecting into our app.
/**
 * I thunk i dont know what this is used for. need to review frontrow more about how this ties into the project
 * @param  {} store
 * @param  {} =>(next
 * @param  {} =>(action
 * @param  {} =>{if(typeofaction==='function'
 * @param  {} {returnaction(store.dispatch
 * @param  {} store.getState
 * @param  {} ;}returnnext(action
 */
export default (store) => (next) => (action) => {
  if ( typeof action === 'function' ) {
    return action( store.dispatch, store.getState);
  }
  return next(action);
}