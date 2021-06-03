import { useReducer } from "react";

const step = 50;

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREASE_R':
      return { ...state, r: state.r + step };
    case 'DECREASE_R':
      return { ...state, r: state.r - step };
    case 'INCREASE_G':
      return { ...state, g: state.g + step };
    case 'DECREASE_G':
      return { ...state, g: state.g - step };
    case 'INCREASE_B':
      return { ...state, b: state.b + step };
    case 'DECREASE_B':
      return { ...state, b: state.b - step };
    default: return state;
  }
}

const UseReducer = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  const increaseR = () => dispatch({ type: 'INCREASE_R' });
  const decreaseR = () => dispatch({ type: 'DECREASE_R' });
  const increaseG = () => dispatch({ type: 'INCREASE_G' });
  const decreaseG = () => dispatch({ type: 'DECREASE_G' });
  const increaseB = () => dispatch({ type: 'INCREASE_B' });
  const decreaseB = () => dispatch({ type: 'DECREASE_B' })

  return (
    <div>
      <h2 style={{ color: `rgb(${r}, ${g}, ${b})` }}>My text</h2>
      <span>
        <p>r:</p> 
        <button onClick={increaseR}>+</button>
        <button onClick={decreaseR}>-</button>
      </span>
      <span>
        <p>g:</p>
        <button onClick={increaseG}>+</button>
        <button onClick={decreaseG}>-</button>
      </span>
      <span>
        <p>b:</p>
        <button onClick={increaseB}>+</button>
        <button onClick={decreaseB}>-</button>
      </span>
    </div>
  )
}

export default UseReducer;