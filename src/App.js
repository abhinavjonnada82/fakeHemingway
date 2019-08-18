import React, { Component } from "react";
import TextAreaField from "./components/textField";
import CounterAreaField from "./components/counterField";
import OutputAreaField from "./components/outputField";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component  {
  render() {
    return (
        <div>
          <div className="App-header">
              <h1>
                Fake Hemingway
              </h1>
          </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 ">
                        <TextAreaField />
                    </div>
                    <div className="col-xl-4">
                        <CounterAreaField />
                    </div>
                    <br />
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <OutputAreaField />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>


    );
  }
}

export default App;
