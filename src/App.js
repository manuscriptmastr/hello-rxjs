import React from 'react';
import './App.css';

import Draggable from './Draggable';
import Canvas from './Canvas';
import Box from './Box';

const App = () =>
  <div className="app">
    <Canvas height={300} width={300} >
      <Draggable item={Box} />
    </Canvas>
  </div>

export default App;
