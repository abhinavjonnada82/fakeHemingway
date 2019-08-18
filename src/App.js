import React, { Component } from "react";
import TextAreaField from "./components/textField";
import CounterAreaField from "./components/counterField";
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <TextAreaField />
                    </div>
                    <div className="col-lg-4">
                        <CounterAreaField />
                    </div>
                </div>
            </div>
            {/*<div className="App-body">*/}
            {/*    <TextAreaField />*/}
            {/*</div>*/}
        </div>


    );
  }
}

export default App;
