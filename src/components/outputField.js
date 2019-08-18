import React, { Component } from "react";

// const outputAreaField = props => (
//     <div className="card output-area">
//         <div className="card-body">
//             <p>{props.description}</p>
//         </div>
//     </div>
// )
let data = {
    paragraphs: 0,
    sentences: 0,
    words: 0,
    hardSentences: 0,
    veryHardSentences: 0,
    adverbs: 0,
    passiveVoice: 0,
    complex: 0
};

class outputAreaField extends Component  {
    getDifficultSentences(p) {
        console.log(p)
    }
    render() {
        data = {
            paragraphs: 0,
            sentences: 0,
            words: 0,
            hardSentences: 0,
            veryHardSentences: 0,
            adverbs: 0,
            passiveVoice: 0,
            complex: 0
        };
        let text = this.props.description
        let paragraphs = text.split("\n")
        let hardSentences = paragraphs.map(p => this.getDifficultSentences(p));
        // let inP = hardSentences.map(para => `<p>${para}</p>`);
        data.paragraphs = paragraphs.length;
        console.log(data.paragraphs);
        return (
            <div className="card output-area">
                <div className="card-body">
                    <p>{ paragraphs }</p>
                    {/*<p>{ inP.join(" ") }</p>*/}
                </div>
            </div>

        );
    }
}

export default outputAreaField;