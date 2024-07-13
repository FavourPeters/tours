import React from "react";
import Tours from "./Tours";
import "./index.css";

// const url = "https://course-api.com/react-tours-project";
// link for json not working so i used a json file

const App = () => {
  return (
    <div>
      <h3 className="title">Our Tours</h3>
      <div className="underline"></div>
      <div className="container">
        <Tours />
      </div>
    </div>
  );
};

export default App;
