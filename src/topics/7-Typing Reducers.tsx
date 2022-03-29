import { useReducer } from "react";

type CounterAction = {
  type: "INCREMENT" | "DECREMENT" | "SET";
  payload?: number;
};

type CounterState = {
  value: number;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "SET":
      return { value: action.payload };
    // default:
    //   return state;
  }
};

const initialState: CounterState = { value: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "SET", payload: 0 })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </section>
    </main>
  );
};

export default Counter;

// BETTER APPROACH:

// type BasicCounterAction = {
//   type: "INCREMENT" | "DECREMENT";
// };

// type SetCounterAction = {
//   type: "SET";
//   payload: number;
// };

// type BetterAction = BasicCounterAction | SetCounterAction;
