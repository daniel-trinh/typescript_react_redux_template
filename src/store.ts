import { createStore, Reducer, combineReducers } from 'redux';
import * as Immutable from 'immutable';
import { List, Map, Set, Record } from 'immutable';
import { reducers } from './reducers';
import { NICE } from './components/app'

interface Debug {
    isLoading: boolean,
    error?: any
}


interface SubStores {
    counters: CounterStore
}

export interface Counter {
    count?: number,
    id: string ,
    intervalPeriod?: number,
    increment?: number
    color?: string
}

type Data = Debug & SubStores;

export type CounterStore = Map<string, CounterRecord>
export type CounterRecord = Record.IRecord<Counter>
export type RootStoreRecord = Record.IRecord<Data>

export const InitialStoreClass = Record<Data>({
    isLoading: false,
    error: null,
    counters: Map<string, CounterRecord>()
});


export const CounterRecordClass = Record<Counter>({
    count: 0,
    id: "0",
    intervalPeriod: 1000,
    increment: 1,
    color: NICE
})
export const InitialStore = InitialStoreClass();

export interface Todo {
    id?: number;
    text: string;
    completed: boolean;
};

export type TodoList = Immutable.List<Immutable.Record.IRecord<Todo>>;

export const store = createStore(reducers, InitialStore)