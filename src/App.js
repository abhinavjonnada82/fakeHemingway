import React, { Component } from "react";
import TextAreaField from "./components/textField";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component  {
  render() {
    return (
        <div>
          <header className="App-header">
              <h1>
                Fake Hemingway
              </h1>
          </header>
            <div className="App-body">
                <TextAreaField />
            </div>
        </div>


    );
  }
}

export default App;
