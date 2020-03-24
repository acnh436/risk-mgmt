import React from 'react';
import Axios from 'axios'

export default function Level2Risk() {

    function l2OnInputHandler (event) {
        let request = {
            riskType : event.target.value
        };

        console.log(request);
    };

    return (
        <div className="level-2-risk-container">
            <label htmlFor="risk-type-2">Level 2 Risk Type: </label>
            <input onInput={l2OnInputHandler} type="text" id="risk-type-2" size="50"/>
            <button>Create</button>
        </div>
    );
}