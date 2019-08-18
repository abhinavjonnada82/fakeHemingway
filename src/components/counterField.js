import React, { Component } from "react";


class CounterAreaField extends Component  {
    render() {
        console.log(this.props.data.adverbs)
        return (

            <div className="card counter-area">
                <div className="card-body">
                    <div className="alert alert-primary" role="alert">
                        You have used {this.props.data.adverbs} adverb{this.props.data.adverbs > 1 ? "s" : ""}.
                        Try to use {Math.round(this.props.data.paragraphs / 3 )} or less
                    </div>
                    <div className="alert alert-success" role="alert">
                        You have used passive voice {this.props.data.passiveVoice} time{this.props.data.passiveVoice > 1 ? "s" : ""}.
                        Aim for {Math.round(this.props.data.paragraphs / 3 )} or less
                    </div>
                    <div className="alert alert-info" role="alert">
                        {this.props.data.complex} phrase could be simplified
                    </div>
                    <div className="alert alert-warning" role="alert">
                        {this.props.data.hardSentences} of 10 sentences are hard to read
                    </div>
                    <div className="alert alert-danger" role="alert">
                        {this.props.data.veryHardSentences} of 10 sentences are very hard to read
                    </div>
                </div>
            </div>



        );
    }
}

export default CounterAreaField;