import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='name_container'>
        <div className='J_container shape_container'>
          <div className='J_innershape_hidden'></div>
          <div className='J_innershape_visible'></div>
        </div>
        <h1 className='name_text'>ames</h1>
      </div>

      <div className='name_container'>
        <div className='D_container shape_container'>
          <div className='D_innershape_hidden'></div>
          <div className='D_innershape_visible'></div>
        </div>
        <h1 className='name_text'>eChavez</h1>
      </div>
      
      
    </div>
  );
}

export default App;
