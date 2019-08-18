import React, { Component } from "react";

const style = {
    position: 'absolute',
    top: '20px'
};

class CounterAreaField extends Component  {
    render() {
        return (
            <div className="card" style={style}>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default CounterAreaField;