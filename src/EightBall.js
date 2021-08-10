import React, { useState } from "react";
import "./EightBall.css";

/** EightBall: creates div that returns random answer on each click */
function EightBall(props) {
    const { answers } = props;

    // can use single piece of state with answer instead of 2
    const [ color, setColor ] = useState("black");
    const [ msg, setMsg ] = useState("Think of a Question"); 

    function shake() {
        let randomAnswerIndex = Math.floor(Math.random() * answers.length)
        let randomAnswer = answers[randomAnswerIndex];
        setColor(randomAnswer.color);
        setMsg(randomAnswer.msg);
    }

    function reset() {
        setColor("black");
        setMsg("Think of a Question");
    }

    const colors = {
        color: "white",
        backgroundColor: color
    };

    return (
        <div id="wrapper">   
            <div className="EightBall" style={colors} onClick={shake}>
                <b> {msg} </b>
            </div>

            <div className="reset-btn">
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}


EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
]
}

export default EightBall;