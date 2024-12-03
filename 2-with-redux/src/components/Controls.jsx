import React, { useRef } from "react";
import { useDispatch } from "react-redux";


const Controls = () => {
  const dispatch = useDispatch()
  // hooks should be insid ethe class
  const inputElement = useRef();

const handleInc = ()=>{
  dispatch({
    type : "INC"
  })
}
const handleDec = ()=>{
  dispatch({
    type : "DEC"
  })
}
const handleAdd = ()=>{
  dispatch({
    type : "ADD",
    payload : {
      num : inputElement.current.value,
    }
  })
  
  inputElement.current.value = ""
}
const handleSub = ()=>{
  dispatch({
    type : "SUB",
    payload : {
      num : inputElement.current.value,
    }
  })
  inputElement.current.value = ""
}

const handlePrivacy = ()=>{
  dispatch({
    type : "PRIVACY"
  })
}

  return (
    <>
    <div className="d-grid gap-1 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleInc}>
        +1
      </button>
      <button type="button" className="btn btn-success " onClick={handleDec}>
      -1
      </button>
      <button type="button" className="btn btn-warning " onClick={handlePrivacy}>
      Privacy Toggle
      </button>
    </div>




<div className=" mt-2 d-grid gap-2 d-sm-flex justify-content-sm-center">
      <input type="text"  required placeholder="Enter number"  ref={inputElement}/>

      <button type="button" className="btn btn-info " onClick={handleAdd}>
      Add
      </button>

      <button type="button" className="btn btn-danger " onClick={handleSub}>
      Subtract
      </button>
    </div>
    </>
  );
};

export default Controls;
