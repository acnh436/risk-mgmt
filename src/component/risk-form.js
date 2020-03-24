import React from 'react';

export default function RiskForm () {
    
    function renderRating(label, category) {
        const radios = [];
        radios.push((
            <div>
                <p>{label}</p>
            </div>
        ));
        for (let i = 0; i < 5; i++){
            radios.push((
                <div>
                    <input type="radio" name={category} value={i+1} />
                    <label>{i+1}</label>
                </div>
            )); 
        }
        return radios;
    }
    
    return ( 
        <div className="risk-form-component">
            <div>
                <div>
                <label>Risk Description</label>
                </div>
                <div>
                <textarea name="risk-description" rows="5" cols="40"></textarea>
                </div>
            </div>
            <div>
                {renderRating("Likelihood","likelihood")}
            </div>
            <div>
                {renderRating("Impact","impact")}
            </div>
            <div>
                <button>Submit</button>
            </div>
           
        </div>
    );
}