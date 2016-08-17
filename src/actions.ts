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

export enum QuizType {
    MULTIPLECHOICE,
    TEXTBOX,
    MULTIPLESELECT
}

export interface Quiz {
    type: QuizType
}