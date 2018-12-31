import React from 'react';
import './Canvas.css';

import Box from './Box';

const Canvas = ({ height, width }) =>
  <div className="canvas" style={{ height, width }}>
    <Box x={0} y={0} />
  </div>

export default Canvas;