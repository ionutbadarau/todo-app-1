import { useReducer } from "react";

function Movies() {
  const initialState = {count: 1};
  const counterReducer = (state, action) => {
    switch(action.type) {
      case 'increment':
        return {
          count: state.count + 1
        }
      case 'decrement':
        return {
          count: state.count - 1
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter page</h1>
      <span>{state.count}</span><br />
      <button onClick={() => dispatch({type:'increment'})}>add</button>
      <button onClick={() => dispatch({type:'decrement'})}>substract</button>
    </div>
  )
}

export default Movies;