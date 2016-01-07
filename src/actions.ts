import { CounterRecord, CounterStore, store } from "./store"

export enum CounterType {
    DECREMENT,
    INCREMENT,
    INSERT
}

export interface AlterCounter {
    type: CounterType,
    counterId: string
}

export interface InsertCounter {
  type: CounterType,

}

export type Action = AlterCounter