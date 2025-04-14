import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  // here in reducer function we cannot chnage the store as itrt is immutable 
  if (action.type === "INC") {
    return { ...store, counter: store.counter + 1 }
  }
  else if (action.type === "DEC") {
    return { ...store, counter: store.counter - 1 }
  }
  else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) }
  }
  else if (action.type === "SUB") {
    return { ...store, counter: store.counter - Number(action.payload.num) }
  }
  else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy }
  }
  return  store;
}

const counterStore = createStore(counterReducer);

export default counterStore;