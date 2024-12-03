import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyElement from "./components/PrivacyElement";

function App() {
  const privacy = useSelector(store => store.privacy)
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyElement /> : <Display/>}
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
