import React, { Component } from 'react';
import './App.css';
import { fromEvent } from 'rxjs';
import { take, map } from 'rxjs/operators';

class App extends Component {
  constructor(props) {
    super(props);
    this.observable$ = fromEvent(window, 'click');
    this.firstValue$ = this.observable$.pipe(map(() => 4), take(1));
    this.state = {
      firstValue: 5,
      count: 0
    };
  }
  componentDidMount() {
    this.observable$.subscribe(() => this.setState({ count: this.state.count + 1 }));
    this.firstValue$.subscribe((v) => this.setState({ firstValue: v }));
  }

  render() {
    console.log('Rerendering!');
    return (
      <div className="App">
        <h1>Hello RxJS</h1>
        <p>The current count is {this.state.count}</p>
        <p>Take first value: {this.state.firstValue}</p>
      </div>
    );
  }
}

export default App;
