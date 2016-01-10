import * as Store from './store'
import { InitialStoreClass, InitialStore, RootStoreRecord } from './store'
import { CounterType, Actions } from './actions'
import * as Action from './actions'
import { combineReducers } from 'redux'
import { List, Map, Set, Record } from 'immutable'

function counter(
  state: Store.CounterStore = Map<string, Store.CounterRecord>(),
  action: Action.Counter
): Store.CounterStore {
  switch (action.type) {
    case CounterType.INCREMENT:
      var c = state.get(action.counterId)
      var count: number = c.count
      console.log(count)
      return state.set(c.id, c.set("count", count + c.increment))
    case CounterType.DECREMENT:
      var c = state.get(action.counterId)
      var count: number = c.count
      return state.set(c.id, c.set("count", count - c.increment))
    case CounterType.INSERT:
      var c = action.counter
      return state.set(c.id, c)
    default:
      return state
  }
};

export function reducers(state: RootStoreRecord, action: Actions) {
  return InitialStoreClass({
    counters: counter(
      state.counters,
      action
    ),
    isLoading: false,
    error: null
  });
}