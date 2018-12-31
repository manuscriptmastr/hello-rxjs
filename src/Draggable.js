import React, { Component } from 'react';
import './Draggable.css';

class Draggable extends Component {
  state = { x: 20, y: 20 };

  render() {
    const { item: Item } = this.props;
    const { x, y } = this.state;

    return (
      <div
        className="draggable"
        style={{ left: x, top: y }}
      >
        <Item />
      </div>
    );
  }
}

export default Draggable;