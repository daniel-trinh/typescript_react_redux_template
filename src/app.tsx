import * as React from 'react';
import { Component } from 'react';

const NICE = 'pink';
const SUPER_NICE = 'darkred';

interface Props {
  increment: number,
  color: string
}

class Counter extends Component<Props, any> {
  interval: number;

  constructor(props: Props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = (setInterval(() => this.tick(), 1000));
  }

  tick(): void {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }
  render(): JSX.Element {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
            <Counter increment={1} color={NICE} />
            <Counter increment={5} color={SUPER_NICE} />
                </div>
        );
    }
}
