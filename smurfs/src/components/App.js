import React from "react";
import { connect } from "react-redux";

import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import {
  getSmurfData,
  addSmurfData,
  deleteSmurfData,
  editSmurfData
} from "./../actions";

function App(props) {
  console.log("<App/> props: ", props);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm addSmurfData={props.addSmurfData} />
      <button onClick={props.getSmurfData}>Get Smurf Data!</button>
      <SmurfList
        smurfArray={props.smurfArray}
        deleteSmurfData={props.deleteSmurfData}
        editSmurfData={props.editSmurfData}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    getSmurfData,
    addSmurfData,
    deleteSmurfData,
    editSmurfData
  }
)(App);
