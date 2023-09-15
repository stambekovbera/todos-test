import { createSelector } from '@reduxjs/toolkit';
import {
    getTodosState
} from '../getTodosState/getTodosState.ts';
import {
    ITodosSchema
} from '../../types/todos.ts';

export const getSortedTodos = createSelector(
    getTodosState,
    (state: ITodosSchema) => {
        const {
            todos,
            sort
        } = state;

        if (sort === 'all') {
            return todos;
        }

        if (sort === 'active') {
            return todos.filter( (todo) => Boolean( !todo.isDone ) );
        }

        if (sort === 'completed') {
            return todos.filter( (todo) => todo.isDone );
        }

        return todos;
    }
);
