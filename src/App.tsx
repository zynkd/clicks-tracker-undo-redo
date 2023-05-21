import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button>Undo</button>

        <button>Redo</button>
      </div>

      <div className='clickable-area'></div>
    </div>
  );
}

export default App;
