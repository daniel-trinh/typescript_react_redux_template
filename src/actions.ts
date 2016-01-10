import { CounterRecord, CounterStore, store } from "./store"

export enum CounterType {
    DECREMENT,
    INCREMENT,
    INSERT
}

export interface Counter {
    type: CounterType
    counterId?: string
    counter?: CounterRecord
}

export type Actions = Counter