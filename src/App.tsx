import React, { MouseEvent } from 'react';
import './App.css';

function App() {
  const spawn = (event: MouseEvent): void => {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
  };

  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button>Undo</button>

        <button>Redo</button>
      </div>

      <div className='clickable-area' onClick={spawn}></div>
    </div>
  );
}

export default App;
