
// LIFE CYCLE OF REDUX is completly covered




const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

// initial value is passed as reducder function
const store = redux.createStore(reducer);

// sunscriibe just creared not called yet
const subscriber = () => {
  // gets data from store
  const state = store.getState();
  console.log(state);
};
// to call subscribe
store.subscribe(subscriber);
// this means this subscriber function subxscribed and whnen ever the data of subsriber changes this fucnrtion repaints

// to create actions then we have to so it by dispacth

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "ADDITION",
  payload: {
    number: 7,
  },
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "INCREMENT",
});
