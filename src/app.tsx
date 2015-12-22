import * as React from 'react';
import { Component } from 'react';
import {Map, List, Set} from 'immutable'
import { CounterActionTypes, store } from './store';
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
        this.interval = (setInterval(() => this.tick(), 1000));
    }

    tick(): void {
        store.dispatch({
          type: CounterActionTypes.INCREMENT,
          increment: this.props.increment
        })
        // this.setState({
        //     counter: this.state.counter + this.props.increment
        // });
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }
    render(): JSX.Element {
        store.subscribe
        return (
            <h1 style={{ color: this.props.color }}>
                Counter ({this.props.increment}): {store.getState}
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
