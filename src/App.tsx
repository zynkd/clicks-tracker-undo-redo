import React, { MouseEvent, useState } from 'react';
import './App.css';

interface Point {
  x: number;
  y: number;
}

function App() {
  const [points, setPoints] = useState<Point[]>([]);

  const spawn = (event: MouseEvent): void => {
    const { clientX, clientY } = event;

    setPoints([...points, {
      x: clientX,
      y: clientY,
    }]);
  };

  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button>Undo</button>

        <button>Redo</button>
      </div>

      <div className='clickable-area' onClick={spawn}>
        {points.map((point: Point, i: number) => (
          <div key={`point-${i}`} style={{ top: point.y - 5, left: point.x - 5 }} className='point'></div>
        ))}
      </div>
    </div>
  );
}

export default App;
