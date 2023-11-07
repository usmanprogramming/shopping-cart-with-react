import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <Header />
      <div id="heading-div">
        <h1 id="heading">Shopping Cart:</h1>
      </div>
      <Main />
    </>
  );
};

export default App;
