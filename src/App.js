import React from 'react';
import RiskForm from './component/risk-form';
import Level2Risk from './component/level-2-risk';
import Level3Risk from './component/level-3-risk';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Level3Risk/>
        {/* <Level2Risk/> */}
        {/* <RiskForm/> */}
      </header>
    </div>
  );
}

export default App;
