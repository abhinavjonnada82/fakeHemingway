import React, { Component } from "react";
import TextAreaField from "./components/textField";
import CounterAreaField from "./components/counterField";
import OutputAreaField from "./components/outputField";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const style = {
    position: 'absolute',
    top: '230px'
};

class App extends Component  {
    constructor(props){
        super(props)
        this.state = {
            description: " "
        }
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    textChangeHandler = (event) => {
        this.setState({ description: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
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
                            <div className="align-field">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <textarea
                                        className ="text-area form-control"
                                        type="text"
                                        onChange = {this.textChangeHandler}
                                    />
                                    </div>
                                    <br />
                                    <div className="form-group" style = {style}>
                                        <input  type="submit" className="btn btn-primary btn" value="Submit"  />
                                    </div>
                                </form>
                                <br />
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <CounterAreaField/>
                        </div>
                        <br />
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <OutputAreaField  description={this.state.description} />
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
