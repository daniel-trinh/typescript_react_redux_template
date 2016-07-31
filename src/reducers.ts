import * as Store from './store'
import {InitialStoreMap, InitialStore} from './store'
import {CounterType} from './actions'
import * as Action from './actions'
import {combineReducers} from 'redux'
import {Data} from "./store";

function counter(state:Store.CounterStore = {},
                 action:Action.Counter): Store.CounterStore {
    switch (action.type) {
        case CounterType.INCREMENT:
            var c = state[action.counterId];
            var count:number = c.count;
            c["count"] = count + c.increment;
            state[c.id] = c;
            var newCounter = {};
            newCounter[c.id] = Object.assign({}, c, {"count": count + c.increment});
            return Object.assign({}, state, newCounter);
        case CounterType.DECREMENT:
            var c = state[action.counterId];
            var count:number = c.count;
            c["count"] = count - c.increment;
            state[c.id] = c;
            return state;
        case CounterType.INSERT:
            var c = action.counter;
            state[c.id] = c;
            return state;
        default:
            return state
    }
}

export function reducers(state:Data, action:Action.Counter): Data {
    return {
        counters: counter(
            state.counters,
            action
        ),
        isLoading: false,
        error: null
    };
}