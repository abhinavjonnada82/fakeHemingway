import React, { Component } from "react";

class TextAreaField extends Component  {
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
        console.log(`Description: ${this.state.description}`);
        alert("You are submitting " + this.state.description);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <textarea
                            className ="text-area form-control"
                            type="text"
                            onChange = {this.textChangeHandler}
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="form-group">
                        <input  type="submit" className="btn btn-primary btn" value="Submit"  />
                    </div>
                </form>
                <br />
            </div>
        );
    }
}

export default TextAreaField;