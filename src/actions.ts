import * as Store from './store'

export enum CounterType {
    DECREMENT,
    INCREMENT,
    INSERT
}

export interface Counter {
    type: CounterType
    counterId?: string
    counter?: Store.Counter
}