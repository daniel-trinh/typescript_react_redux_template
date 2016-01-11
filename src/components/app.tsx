import * as React from 'react'
import { Component } from 'react'
import * as I from 'immutable'
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

        Store.store.dispatch({
            type: Actions.CounterType.INSERT,
            counter: Store.CounterRecordClass({
                count: 0,
                id: "1",
                intervalPeriod: 1000,
                increment: 1,
                color: NICE
            })
        })

        Store.store.dispatch({
            type: Actions.CounterType.INSERT,
            counter: Store.CounterRecordClass({
                count: 0,
                id: "2",
                increment: 5,
                intervalPeriod: 1000,
                color: SUPER_NICE
            })
        })
    }

    render(): JSX.Element {
        // var wut = fetch("http://services.runescape.com/m=itemdb_rs/bestiary/bestiaryNames.json?letter=Y").then(x => console.log(x.status))
        return (
            <UI.List subheader="Counters">
                <Counter counterId="1"/>
                <Counter counterId="2"/>
            </UI.List>
        );
    }
}