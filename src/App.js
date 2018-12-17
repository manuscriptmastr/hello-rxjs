import React, { Component } from 'react';
import './App.css';
import { fromEvent } from 'rxjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.observable = null;
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.observable = fromEvent(window, 'click')
      .subscribe(() => this.setState({ count: this.state.count + 1 }))
  }

  componentWillUnmount() {
    this.observable.complete();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello RxJS</h1>
        <p>The current count is {this.state.count}</p>
      </div>
    );
  }
}

export default App;
