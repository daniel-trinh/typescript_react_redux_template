import * as React from 'react'
import { Component, PureRenderMixin } from 'react'
// import { Pure}react - addons - pure - render - mixin
import { Map, List, Set, Record } from 'immutable'
import * as UI from 'material-ui'
import * as Action from '../actions'
import * as Store from '../store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterType } from '../actions'

const NICE = 'pink';
const SUPER_NICE = 'darkred';

export class Counter extends Component<any, any> implements PureRenderMixin {
    counterId: string
    counter: Record.IRecord<Store.Counter>
    dispatch: any
    interval: number

    constructor(props: any) {
        super(props);
        const { dispatch, counter } = this.props;
        this.dispatch = dispatch
        this.counter = counter
        this.interval = (setInterval(() => this.tick(), this.counter.intervalPeriod));
    }

    tick(): void {
        const { dispatch, counter } = this.props;
        dispatch({
            type: CounterType.INCREMENT,
            counterId: counter.id
        })
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render(): JSX.Element {
        const { dispatch, counter } = this.props;
        return (
            <UI.ListItem  
                primaryText={`Counter (${ counter.count })`}
                style={{ color: counter.color }}>
            </UI.ListItem>
        );
    }
}

interface StateProps {
    counter: Store.CounterStore
}

function mapStateToProps(state: Store.RootStoreRecord, props: any): StateProps {
    return {
        counter: state.counters
    }
}

export default connect((state: Store.RootStoreRecord, props: any) => {
    var counter = state.counters.get(props.counterId)
    if (state.counters.has(props.counterId)) {
        return { counter: counter }
    } else {
        console.log(`CounterID ${props.counterId} not found in store`)
        return {counter: null}
    }
})(Counter)
