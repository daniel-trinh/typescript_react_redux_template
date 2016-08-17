import { createStore, Reducer, combineReducers } from 'redux';
import { reducers } from './reducers';
import { NICE } from './components/app'

interface Debug {
    isLoading: boolean,
    error?: any
}

interface SubStores {
    counters: CounterStore
    quizzes: ActiveQuizzes
}

export interface Counter {
    count?: number,
    id: string,
    intervalPeriod?: number,
    increment?: number
    color?: string
}

export type Data = Debug & SubStores;

export interface CounterStore {
    [counterId: string]: Counter
}

export interface ActiveQuizzes {
    multipleChoice?: MultipleChoiceQuiz
}

export interface MultipleChoiceQuiz {
    question: string
    choices: Array<{
        text: string,
        selected: boolean
    }>
}

export const InitialStoreMap: Data = {
    isLoading: false,
    error: null,
    counters: {},
    quizzes: {}
};

export const InitialStore = InitialStoreMap;

export interface Todo {
    id?: number;
    text: string;
    completed: boolean;
};

export const store = createStore(reducers,InitialStore);