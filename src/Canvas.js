import React from 'react';
import './Canvas.css';

const Canvas = ({ children, height, width }) =>
  <div className="canvas" style={{ height, width }}>
    {children}
  </div>

export default Canvas;