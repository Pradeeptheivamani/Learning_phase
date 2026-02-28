import React from 'react';


import Arr from'./Counter.js';

function App() {
  const arr=[1,2,3,4,5]
  const obj=[{
    name:"pradeep",
    roll:65,
    dept:"cse"
  }]
  return (
    <div>
      <Arr test={arr} completed={obj}/>
    </div>
   
  );
}

export default App;