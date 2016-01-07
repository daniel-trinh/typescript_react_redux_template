import * as React from 'react'
import { Component, PureRenderMixin } from 'react'
// import { Pure}react - addons - pure - render - mixin
import { Map, List, Set, Record } from 'immutable'
import * as Actions from '../actions'
import * as Store from '../store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterType } from '../actions'
const NICE = 'pink';
const SUPER_NICE = 'darkred';

// interface Props {
//     increment: number,
//     color: string,
//     counter: number,
//     dispatch: Dispatch
// }

export class Counter extends Component<any, any> implements PureRenderMixin {
    counter: Record.IRecord<Store.Counter>
    dispatch: any
    interval: number

    constructor(props: any) {
        super(props);
        const { dispatch, counterStore } = this.props;
        this.dispatch = dispatch
        console.log(counterStore)
        this.counter = counterStore
        this.interval = (setInterval(() => this.tick(), this.counter.intervalPeriod));
    }

    tick(): void {
        const { dispatch, counter } = this.props;
        dispatch({
            type: CounterType.INCREMENT,
            increment: this.props.increment
        })
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    componentDidMount(): void {
        const { dispatch, userId } = this.props;
        console.log(userId)
        // dispatch(loadUser(userId));
    }
    render(): JSX.Element {
        const { dispatch, counter } = this.props;
        return (
            <h1 style={{ color: this.props.color }}>
                Counter ({this.props.increment}): {counter}
                </h1>
        );
    }
}

interface StateProps {
    counter: Store.CounterStore
}

function mapStateToProps(state: Store.RootStoreRecord, componentProps: any): StateProps {
    return {
        counter: state.counters
    }
}

export default connect((state: Store.RootStoreRecord, componentProps: any) => {
    var counter = state.counters.get(componentProps.counter.id, componentProps.counter)
    if (state.counters.has(componentProps.counter.id)) {
        return {counter: counter}
    } else {
        Store.store.dispatch() // this would be moved to where the http call to a real DB would happen
        return {counter: counter}
    }
    console.log(state.counters.get(componentProps.counter.id, componentProps.counter))
    return {
        counter: state.counters.get(componentProps.counter.id, componentProps.counter)
    }
})(Counter)
