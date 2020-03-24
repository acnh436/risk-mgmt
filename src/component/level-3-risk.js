import React, { useState} from 'react';

export default function Level3Risk() {
    const [ riskType, setRiskType ] = useState("");
    const [ l2ID, setL2ID ] = useState("");

    function l3OnInputHandler(event){
        setRiskType(event.target.value);
    }

    function l2OnChangeHandler(event){
        setL2ID(event.target.value);
    }

    function l3OnClickHandler(){
        console.log(riskType, l2ID);
        let request = {
            riskL2Id: l2ID,
            riskType: riskType
        };
        console.log(request);
    }

    return (
        <div className="level-3-risk-containter">
            <div>
                <label htmlFor="l2-select">Select Level 2 Risk Type</label>
                <select onChange={l2OnChangeHandler} id="l2-select">
                    <option value="">Please select</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </select>
            </div>

            <div>
                <label htmlFor="risk-type-3">Level 3 Risk Type: </label>
                <input onInput={l3OnInputHandler} type="text" id="risk-type-3" size="50"/>
                <button onClick={l3OnClickHandler}>Add Level 3 Risk</button>
            </div>
        </div>
    );
};