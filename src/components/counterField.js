import React, { Component } from "react";


class CounterAreaField extends Component  {
    render() {
        return (

            <div className="card counter-area">
                <div className="card-body">
                    <div className="alert alert-primary" role="alert">
                        You have used 2 adverbs. Try to use 2 or less
                    </div>
                    <div className="alert alert-success" role="alert">
                        You have used passive voice 1 time. Aim for 2 or less
                    </div>
                    <div className="alert alert-info" role="alert">
                        1 phrase could be simplified
                    </div>
                    <div className="alert alert-warning" role="alert">
                        1 of 10 sentences are hard to read
                    </div>
                    <div className="alert alert-danger" role="alert">
                        1 of 10 sentences are very hard to read
                    </div>
                </div>
            </div>



        );
    }
}

export default CounterAreaField;