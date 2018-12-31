import React from 'react';
import './Box.css';

const Box = ({ x, y }) =>
  <div
    className="box"
    style={{ top: y, left: x }}
  >
    Box
  </div>

export default Box;