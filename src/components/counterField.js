import React, { Component } from "react";


class CounterAreaField extends Component  {
    render() {
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
                        {this.props.data.complex} phrase{this.props.data.complex > 1 ? "s" : ""} could be simplified.
                    </div>
                    <div className="alert alert-warning" role="alert">
                        {this.props.data.hardSentences} of {this.props.data.sentences} sentences {this.props.data.complex > 1 ? "s are" : "is"} hard to read
                    </div>
                    <div className="alert alert-danger" role="alert">
                        {this.props.data.veryHardSentences} of {this.props.data.sentences} sentences {this.props.data.complex > 1 ? "s are" : "is"} very hard to read
                    </div>
                </div>
            </div>



        );
    }
}

export default CounterAreaField;