import {createStore} from "redux";

const INITIAL_VALUE = {
  counter : 0,
  privacy : false,
}

const counterReducer = (store = INITIAL_VALUE,action)=>{
  // here in reducer function we cannot chnage the store as itrt is immutable 
  let newStore = store;
  if(action.type === "INC"){
    newStore = {counter : store.counter+1}
  }
  else if(action.type === "DEC"){
    newStore = {counter : store.counter-1}
  }
  else if(action.type === "ADD"){
    newStore = {counter : store.counter+ Number(action.payload.num)}
  }
  else if(action.type === "SUB"){
    newStore = {counter : store.counter-Number(action.payload.num)}
  }
  else if(action.type === "PRIVACY"){
    newStore = {counter: store.counter, privacy : !store.privacy}}
  return newStore;

}

const counterStore  =  createStore(counterReducer);

export default counterStore;