import * as React from 'react'
import { Component } from 'react'
import * as Actions from '../actions'
import * as Store from '../store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterType } from '../actions'
import Counter from './counter'
import * as UI from 'material-ui'

export const NICE = 'pink';
export const SUPER_NICE = 'darkred';

export class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        var counter1: Store.Counter = {
            count: 0,
            id: "1",
            intervalPeriod: 1000,
            increment: 1,
            color: NICE
        };

        Store.store.dispatch({
            type: Actions.CounterType.INSERT,
            counter: counter1
        });

        var counter2: Store.Counter = {
            count: 0,
            id: "2",
            increment: 5,
            intervalPeriod: 1000,
            color: SUPER_NICE
        };
        Store.store.dispatch({
            type: Actions.CounterType.INSERT,
            counter: counter2,
        })
    }

    render(): JSX.Element {
        return (
            <UI.List subheader="Counters">
                <Counter counterId="1"/>
                <Counter counterId="2"/>
            </UI.List>
        );
    }
}