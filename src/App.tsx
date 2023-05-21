import React, { MouseEvent, useState } from 'react';
import './App.css';

interface Point {
  x: number;
  y: number;
}

function App() {
  const [points, setPoints] = useState<Point[]>([]);

  // Storage of `undone` points, used to re-spawn the points
  const [cache, setCache] = useState<Point[]>([]);

  const spawn = (event: MouseEvent): void => {
    const { clientX, clientY } = event;

    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  const undo = (): void => {
    if (points.length > 0) {
      const newPoints = [...points];
      const lastPoint = newPoints.pop() as Point;

      setCache([...cache, lastPoint]);
      setPoints(newPoints);
    }
  };

  const redo = (): void => {
    if (cache.length > 0) {
      const newCache = [...cache];
      const lastCacheItem = newCache.pop() as Point;

      setCache(newCache);
      setPoints([...points, lastCacheItem]);
    }
  };

  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button onClick={undo}>Undo</button>

        <button onClick={redo}>Redo</button>
      </div>

      <div className='clickable-area' onClick={spawn}>
        {points.map((point: Point, i: number) => (
          <div
            key={`point-${i}`}
            style={{ top: point.y - 5, left: point.x - 5 }}
            className='point'
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
