import React, { Component } from "react";
import { Mailer } from '../src/components/Mailer/Mailer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
     <Mailer></Mailer>
    );
  }
}
export default App;