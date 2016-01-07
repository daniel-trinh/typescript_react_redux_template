import * as Store from './store'
import { InitialStoreClass, InitialStore, RootStoreRecord } from './store'
import { Action, CounterType, AlterCounter } from './actions'
import { combineReducers } from 'redux'
import { List, Map, Set, Record } from 'immutable'

function counter(
  state: Store.CounterStore = Map<string, Store.CounterRecord>(),
  action: Action
): Store.CounterStore {
  switch (action.type) {
    case CounterType.INCREMENT:
      var c = state.get(action.counterId)
      var count: number = c.count
      return state.set(c.id, c.set("count", count + c.increment))
    case CounterType.DECREMENT:
      var c = state.get(action.counterId)
      var count: number = c.count
      return state.set(c.id, c.set("count", count - c.increment))
    default:
      return state
  }
};

export function reducers(state: RootStoreRecord, action: Action) {
  return InitialStoreClass({
    counters: counter(
      state.counters,
      action
    ),
    isLoading: false,
    error: null
  });
}