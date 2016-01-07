import * as React from 'react'
import { Component } from 'react'
import {Map, List, Set} from 'immutable'
import * as Actions from '../actions'
import * as Store from '../store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterType } from '../actions'
import Counter from './counter'

export const NICE = 'pink';
export const SUPER_NICE = 'darkred';

export class App extends Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
            <Counter counter={
                Store.CounterRecordClass({
                    count: 0,
                    id: "1",
                    intervalPeriod: 1000,
                    increment: 1,
                    color: NICE
                })
            } />
            <Counter counter={
                Store.CounterRecordClass({
                    count: 0,
                    id: "2",
                    increment: 5,
                    intervalPeriod: 1000,
                    color: SUPER_NICE
                })
            } />
                </div>
        );
    }
}